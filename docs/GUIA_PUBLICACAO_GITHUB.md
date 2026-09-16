# Guia de publicação no GitHub Pages

## Opção recomendada: GitHub Pages com GitHub Actions

O projeto já contém `.github/workflows/pages.yml`.

## 1. Criar o repositório

No GitHub:

1. Clique em **New repository**.
2. Sugestão de nome: `vetores-mecanicos-jornada-cientifica`.
3. Não marque a opção para criar README, porque o projeto já possui um.
4. Crie o repositório.

## 2. Enviar o projeto pelo VS Code

Abra o terminal na pasta do projeto e execute:

```bash
git init
git add .
git commit -m "Versão inicial da página Vetores Mecânicos"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/vetores-mecanicos-jornada-cientifica.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo usuário ou organização correta.

Também é possível usar o painel **Source Control** do VS Code para os commits.

## 3. Ativar o GitHub Pages

No repositório:

1. Abra **Settings**.
2. Clique em **Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como Source.
4. Volte para a aba **Actions**.
5. Abra o workflow **Publicar no GitHub Pages**.
6. Aguarde o job ficar verde.

Ao final, a URL pública aparecerá no próprio job e em **Settings > Pages**.

A URL normalmente terá formato parecido com:

```text
https://SEU-USUARIO.github.io/vetores-mecanicos-jornada-cientifica/
```

## 4. Como publicar uma atualização

Depois de editar e testar:

```bash
git add .
git commit -m "Atualiza conteúdo da página"
git push
```

O GitHub Actions fará nova publicação automaticamente.

## 5. Como verificar uma publicação

1. Abra a aba **Actions**.
2. Confirme que o último workflow está verde.
3. Abra a URL pública em uma janela anônima.
4. Force atualização com `Ctrl + F5` se o navegador mostrar versão antiga.

## 6. Se a publicação falhar

### O workflow fica vermelho

Abra o job e procure a etapa que falhou. Se for **Validar projeto**, rode localmente:

```bash
python scripts/validate_project.py
```

Corrija o erro informado e faça novo push.

### Página abre sem estilo

Confira se `style.css` está na raiz e se o HTML contém:

```html
<link rel="stylesheet" href="style.css">
```

### Imagem não aparece

Confira exatamente o nome do arquivo, inclusive maiúsculas e minúsculas. GitHub/Linux diferencia `Mosca.svg` de `mosca.svg`.

### Página dá 404

Confira:

- se GitHub Pages está ativado;
- se o workflow terminou com sucesso;
- se está usando a URL do Pages, não a URL normal do repositório.

## 7. QR Code para a feira

Depois que a URL pública estiver definitiva, gere um QR Code apontando para **essa URL exata** e teste em pelo menos dois celulares diferentes antes de imprimir.

Não gere o QR Code antes da URL final estar definida, para evitar reimpressão.

## 8. Plano B para a feira

Mesmo com GitHub Pages publicado:

- mantenha uma cópia completa da pasta no notebook;
- mantenha também o HTML único de contingência, se desejarem;
- teste o site localmente antes de sair para a escola;
- não dependa exclusivamente do Wi‑Fi da feira.
