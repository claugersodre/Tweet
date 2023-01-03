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
- To seed database, in the root of the project run the command
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
## Creating a Post
- To Create a post using the Postman Collection on Project's folder "PostmanCollection", send a request Create a Post on Posts folder.

## Creating a Quote
- To Create a Quote using the Postman Collection on Project's folder "PostmanCollection", send a request Create a Quote on Quote folder.

## Creating a RePost
- To Create a Repost using the Postman Collection on Project's folder "PostmanCollection", send a request Create a rePosts on rePosts folder.

## Getting User profile page
- To Create a Repost using the Postman Collection on Project's folder "PostmanCollection", send a request "Get User ById and Posts, Reposts and quotes" on Users folder.


## Getting HomePage
- To Create a Repost using the Postman Collection on Project's folder "PostmanCollection", send a request "Get all Posts" on Posts folder.
- The request must specify in the body of the page, which days must subtract from the actual day to create the filter days in the startDate field and which days must add to the actual day to create the filter in the endDate field as:
    ```sh
    {
    "page": 0,
    "startDate": 0,
    "endDate": 0
    }
    ```


## Critique
- Database may be a problem because it has a max number of connections.
- How this project was made with docker containers it was made to fit scaling. A simple way to verify it is running a docker-compose and a debug instance with commands:
    ```sh
    command docker-compose down
    command npm run start:dev
    ```
Will run one instance on http://localhost:3000 and another one on http://localhost:3001 connected on the same database.