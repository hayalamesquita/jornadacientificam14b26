#!/usr/bin/env python3
"""Validação leve do projeto antes da publicação.
Usa apenas a biblioteca padrão do Python.
"""
from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
CSS = ROOT / "style.css"
JS = ROOT / "script.js"

errors = []
warnings = []

for required in [INDEX, CSS, JS]:
    if not required.exists():
        errors.append(f"Arquivo obrigatório ausente: {required.name}")

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.refs = []
        self.imgs_without_alt = []
    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if "id" in data:
            if data["id"] in self.ids:
                errors.append(f"ID duplicado no HTML: {data['id']}")
            self.ids.add(data["id"])
        if tag in {"img", "script", "link"}:
            key = "src" if tag in {"img", "script"} else "href"
            ref = data.get(key)
            if ref:
                self.refs.append((tag, ref))
        if tag == "img" and not data.get("alt"):
            self.imgs_without_alt.append(data.get("src", "<sem src>"))

if INDEX.exists():
    html = INDEX.read_text(encoding="utf-8")
    p = Parser(); p.feed(html)
    for tag, ref in p.refs:
        if ref.startswith(("http://", "https://", "//", "data:", "#")):
            continue
        clean = ref.split("?")[0].split("#")[0]
        target = ROOT / clean
        if clean and not target.exists():
            errors.append(f"Referência quebrada em {tag}: {ref}")
    for src in p.imgs_without_alt:
        warnings.append(f"Imagem sem texto alternativo: {src}")

    required_ids = {
        "inicio", "conteudo", "conceito", "animais", "doencas",
        "rato", "prevencao", "quiz", "animalGrid", "diseaseFilters",
        "quizForm", "fullscreenBtn"
    }
    missing = sorted(required_ids - p.ids)
    if missing:
        errors.append("IDs obrigatórios ausentes no HTML: " + ", ".join(missing))

if JS.exists():
    js = JS.read_text(encoding="utf-8")
    images = re.findall(r"image:'([^']+)'", js)
    for rel in images:
        if not (ROOT / rel).exists():
            errors.append(f"Imagem referenciada no JavaScript não existe: {rel}")
    animal_ids = re.findall(r"id:'([^']+)'\s*,\s*name:", js)
    if len(animal_ids) != 7:
        warnings.append(f"Esperados 7 animais; encontrados {len(animal_ids)}.")

print("Validação do projeto — Vetores Mecânicos")
print("=" * 42)
if warnings:
    print("AVISOS:")
    for w in warnings:
        print(f"  - {w}")
if errors:
    print("ERROS:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
print("OK: estrutura, referências locais e arquivos principais validados.")
