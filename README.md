## Requisitos

- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Docker**](https://www.docker.com/) rodando um container PostgreSQL.

## Iniciando back-end
```bash
  # Entrar no diretório:
  # Instalar as dependências:
  $ yarn

  # Configurações do postgres:
  ./ormconfig.json

  # Rodar as migrations:
  $ yarn typeorm migration:run

  # Rodar a aplicação:
  $ yarn dev:server
```

