<p align="center">
    <img src=".github/logo.svg" alt="Next Level Week">
</p>

<p align="center">
    <img src=".github/capa.svg" alt="Ecoleta">
</p>

<h4 align="center">
    Este projeto permite a conexão entre empresas ou entidades que coletam resíduos (orgânicos ou inorgânicos) às pessoas que precisam descartar esses resíduos.
</h4>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/zehguilherme/next-level-week">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/zehguilherme/next-level-week">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/zehguilherme/next-level-week">
    <a href="https://www.codacy.com/manual/zehguilherme/next-level-week?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=zehguilherme/next-level-week&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/0f203f0e21d84588a400a6349f399f99"/></a>
    <img alt="GitHub" src="https://img.shields.io/github/license/zehguilherme/next-level-week">
</p>

<p align="center">
    <a href="#-anotações">Anotações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-licensa">Licensa</a>
</p>

## 🗒 Anotações

- [Notion](https://www.notion.so/zehguilherme/Next-Level-Week-c537391f2b274fa28022a0c685f083ef)

## 🚀 Tecnologias

### Back-end

- [NodeJS](https://nodejs.org/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Insomnia](https://insomnia.rest/) - Auxiliar na realização de requisições Rest em vários tipos de rotas
- [Express](https://expressjs.com/pt-br/) - Framework que lida com as rotas da aplicação
- [ts-node](https://www.npmjs.com/package/ts-node) - Converte TypeScrypt em JavaScript no Node
- [npx](https://www.npmjs.com/package/npx) - Executa pacotes binários (scripts executáveis) npm
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - Autocarregamento após cada alteração no código do servidor
- [SQLite](https://www.sqlite.org/index.html) - Banco SQL
- [sqlite3](https://www.npmjs.com/package/sqlite3) - Pacote usado no Knex para que possa ser usado o banco SQLite
- [Knex](http://knexjs.org/) - SQL query builder
- [Seed files](http://knexjs.org/#Seeds-CLI) - Alguns dados já estarão presentes por padrão no banco de dados (tabela items)
- [Transactions](http://knexjs.org/#Transactions) - Transações
- [Path](https://nodejs.org/api/path.html) - Biblioteca para lidar com caminhos de arquivo
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) - Define quais endereços web externos terão acesso a API
- [API de estados do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
- [API de munícipios por estado](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)
- [Multer](https://www.npmjs.com/package/multer) - Lidar com upload de imagens
- [Crypto](https://nodejs.org/api/crypto.html#crypto_crypto) - Gerar hash aleatório de dados
- [Celebrate](https://github.com/arb/celebrate) - Validação de dados de entrada
  - Baseado no [Joi](https://github.com/hapijs/joi)

### Front-end

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [create-react-app](https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app) - Criação do ambiente
- [react-icons](https://react-icons.github.io/react-icons/) - Pacote de ícones
- [Feather Icons](https://feathericons.com/) - Pacote de ícones
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Rotas
- [Leaflet](https://leafletjs.com/) - Mapa open source
- [react-leaflet](https://react-leaflet.js.org/) - Biblioteca para integrar o Leaflet com o React
- [Axios](https://github.com/axios/axios) - Biblioteca que permite a realização de requisições para a API Node
- [React Dropzone](https://github.com/react-dropzone/react-dropzone) - Cria uma "box"  em que é possível arrastar arquivos para dentro dela
- [Yup](https://github.com/jquense/yup) - Validação de dados de entrada

### Mobile

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo CLI](https://docs.expo.io/workflow/expo-cli/) - Possibilidade de executar comandos do Expo pelo terminal
- [Axios](https://github.com/axios/axios) - Biblioteca que permite a realização de requisições para a API Node
- [Expo Google Fonts](https://github.com/expo/google-fonts) - Usar fontes do Google Fonts no Expo
- [React Navigation](https://reactnavigation.org/docs/getting-started) - Biblioteca de navegação
- [React Navigation Stack](https://reactnavigation.org/docs/stack-navigator/) - Navegação em formato de Pilha
- [React Navigation Maps](https://github.com/react-native-community/react-native-maps) - Usar mapas
- [Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/) - Fornece informações do sistema que permanecem constantes durante toda a vida útil da instalação da aplicação.
- [React Native SVG](https://github.com/react-native-community/react-native-svg) - Usar imagens SVG
- [Expo Location](https://docs.expo.io/versions/latest/sdk/location/) - Localização geográfica
- [MailComposer](https://docs.expo.io/versions/latest/sdk/mail-composer/) - Email no expo
- [React native picker select](https://www.npmjs.com/package/react-native-picker-select) - Uso de select no mobile

## ⌛ Começando

Você precisa ter instalado na sua máquina o `node` e o `npm`.

Depois você pode clonar o repositório.

`git clone https://github.com/zehguilherme/next-level-week.git`

Primeiro inicie a aplicação backend.

1. `cd backend`
2. `npm install`
3. `npm run dev`

Depois inicie a aplicação frontend.

1. `cd frontend`
2. `npm install`
3. `npm run start`

Inicie a aplicação mobile (Expo).

1. `cd mobile`
2. `npm install`
3. `npm run start`
4. Pressione em `Run on Android device/emulator` ou `Run on iOS simulator`
5. Outra opção é instalar o Expo no seu celular e escanear o QRCode.

    [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

    [App Store](https://apps.apple.com/br/app/expo-client/id982107779)

*Para que a API funcione no celular, altere os campos que têm um IP fixo para o seu próprio IP.*


## 🤔 Como contribuir

1. Faça um fork desse repositório;
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`;
3. Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
4. Faça push para a sua branch: `git push origin minha-feature`;
5. Crie um pull request;
6. Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licensa

Este projeto está sob a licensa MIT. Veja a [licensa](LICENSE) para mais informações.

---

Feito com 💟 por José Guilherme Paro Monteiro Tomaine 👋 [Fale comigo!](https://www.linkedin.com/in/jos%C3%A9-guilherme-paro-monteiro-tomaine/)