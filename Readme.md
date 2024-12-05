# Curso de Testing Front-End

## Instalación

- [Git](https://git-scm.com/)
- Node.js
  - [Node Version Manager (NVM for Windows)](https://github.com/coreybutler/nvm-windows/releases)
    - nvm install lts
  - [Node.js LTS](https://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com/download#)

### Extensiones Visual Studio Code

- [Spanish Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-es)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) + [Spanish - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-spanish)
- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [IntelliSense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- *Linters*
  - [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
  - [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- *Pruebas*
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
  - [Jasmine](https://marketplace.visualstudio.com/items?itemName=xabikos.JasmineSnippets)
  - [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- *API REST*
  - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
  - [Postman](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Microsoft Edge Tools for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools)

### Pruebas E2E

- [Selenium IDE](https://chromewebstore.google.com/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd?hl=es&utm_source=ext_sidebar)
- [Postman](https://www.postman.com/downloads/)
- [SoapUI](https://www.soapui.org/downloads/soapui/)

### Pruebas de rendimiento

- [JMeter](https://jmeter.apache.org/download_jmeter.cgi)

## Integración continua

### Instalación Docker

- [WSL 2 feature on Windows](https://learn.microsoft.com/es-es/windows/wsl/install)
- [Docker Desktop](https://www.docker.com/get-started/)

### Contenedores

#### NodeJS

    docker run --rm -v .:/proyecto node:lts-alpine sh -c "cd /proyecto && npm test"

#### SonarQube

    docker run -d --name sonarqube --publish 9000:9000 sonarqube:latest

#### SonarQube Scanner

    docker run --rm -v .:/usr/src -e SONAR_HOST_URL="http://host.docker.internal:9000"  sonarsource/sonar-scanner-cli

#### Selenium Grid

    cd docker\selenium && docker compose up -d

## Repositorios

- <https://github.com/jmagit/Web4Testing>
- <https://github.com/jmagit/MOCKWebServer>

## Kata

- [GildedRose](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/GildedRoseRequirements_es.md)

## Ampliaciones

- [Clean Code](https://www.amazon.es/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [TMAP Next](https://www.tmap.net/)
- [Markdown](https://www.markdownguide.org/)
