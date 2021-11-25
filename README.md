# hearthstone-ts

[![CI](https://github.com/wozniaklukasz/hearthstone-ts/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/wozniaklukasz/hearthstone-ts/actions/workflows/ci.yml)

[comment]: <> ([![]&#40;https://img.shields.io/codeclimate/tech-debt/wozniaklukasz/hearthstone-fullstack-typescript&#41;]&#40;https://codeclimate.com/github/wozniaklukasz/hearthstone-fullstack-typescript&#41;)

[comment]: <> ([![]&#40;https://img.shields.io/codeclimate/issues/wozniaklukasz/hearthstone-fullstack-typescript&#41;]&#40;https://codeclimate.com/github/wozniaklukasz/hearthstone-fullstack-typescript&#41;)

[comment]: <> ([![]&#40;https://img.shields.io/codeclimate/maintainability/wozniaklukasz/hearthstone-fullstack-typescript&#41;]&#40;https://codeclimate.com/github/wozniaklukasz/hearthstone-fullstack-typescript&#41;)

![TypeScript](https://img.shields.io/badge/-TypeScript-333333?style=flat&logo=typescript)
![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)
![Next](https://img.shields.io/badge/-Next-333333?style=flat&logo=next.js)
![Node](https://img.shields.io/badge/-Node-333333?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/-Express-333333?style=flat&logo=express)
![Jest](https://img.shields.io/badge/-Jest-333333?style=flat&logo=jest)
![MongoDB](https://img.shields.io/badge/-MongoDB-333333?style=flat&logo=mongodb)
![Docker](https://img.shields.io/badge/-Docker-333333?style=flat&logo=docker)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-333333?style=flat&logo=github)
![Nginx](https://img.shields.io/badge/-Nginx-333333?style=flat&logo=nginx)

MERN TypeScript full stack project.
Cards data comes from [HearthstoneJSON](https://hearthstonejson.com/).

## Client

- [x] React
- [x] NextJS (SSG & SSR)
- [x] React Query & Axios
- [ ] chakra-ui

## Server

- [x] NodeJS
- [x] Express
- [x] Unit testing with Jest
- [x] Mongoose
- [ ] Schema validation with Yup
- [ ] Passport auth (Google & Facebook)

## Database

To initialize run from `server` directory (configured `.env` file reqired):
```
 npm run migration
```

## CI/CD

- [ ] Docker Compose
- [x] GitHub Actions
  - [x] Eslint & Prettier
  - [x] Unit tests
  - [x] [CodeQL](https://codeql.github.com/) (JS & TS).
  - [x] [Code Climate](https://codeclimate.com/github/wozniaklukasz/hearthstone-fullstack-typescript).

## Lerna

Examples:

Run `npm run dev` from `client` and `server` package:
`npx lerna run dev --parallel --scope='{client,server}'`
