# Book Search Engine

## Description

Utilized exsisting Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server. 

## Process

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
2. Modified the existing authentication middleware so that it works in the context of a GraphQL API.
3. Created an Apollo Provider so that requests can communicate with an Apollo Server.
4. Deployed the application to Heroku.

## Build With

* MERN Stack 
    * MongoDB
    * Express.js
    * React.js
    * Node.js
* Mongoose
* Apollo Server
* GraphQL
* Heroku