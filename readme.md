# Posterr
[![NodeJs](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png)](https://nodejs.org/en/)

## Tech
- [node.js] - evented I/O for the backend
- [Postgres] - PostgreSQL is a powerful, open source object-relational database system with over 35 years of active 
- [Express] - fast node.js network app framework 
- [Sequelize] - Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more
- [Luxon] - Luxon is a library for working with dates and times in JavaScript.  
- [Chai] - great UI boilerplate for modern web apps.
- [ESLint] - ESLint is an open source project that helps you find and fix problems in JavaScript code.
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
## Setup
- to run the project, in the root of project run the command 
    ```sh
    docker-compose up --build -d
    ```
- To seed database, in the project'root run the command
    ```sh
    command npx sequelize db:seed:all
    ```
- the backend will start on 
    ```sh
    http://localhost:3001
    ```
- Verify the deployment by navigating to your server address in
    your preferred browser. 

- to stop application, in the root of project run the 
    ```sh
    command docker-compose down
    ```
- to run lint run
```sh
    command npm run lint
    ```
- to run test run
```sh
    command npm run test
    ```
## Critique
- Database may be a problem because it has a max number of connections.
- How this project was made with docker containers it was made to fit scaling. A simple way to verify it is running a docker-compose and a debug instance with commands:
```sh
    command docker-compose down
    ```
and
```sh
    command npm run start:dev
    ```
Will run one instance on http://localhost:3000 and another one on http://localhost:3001 connected on the same database.