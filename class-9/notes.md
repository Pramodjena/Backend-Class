# What is Express.js

=====================

- Express.js is a node.js framework. It's the most popular frameworkas of now.
- It's used for building web applications and APIs.
- It's a fast, unopinionated, minimalist web framework that provides a robust set of
  features for building web applications and APIs.
- It's built on top of Node.js and uses the same event-driven, non-blocking I/O
  model.

- It's highly extensible and customizable, making it a popular choice among developers.

## Installation

- `npm i express`

## Methods

### Routing

- `app.get()`: Handles HTTP GET requests.
- `app.post()`: Handles HTTP POST requests.
- `app.put()`: Handles HTTP PUT requests.
- `app.delete()`: Handles HTTP DELETE requests.

### Middleware

- `app.use()`: Adds middleware to the application.
- `app.use(express.json())`: Parses JSON data from the request body.

## Support

- Can be integrated database like MongoDB, MySql, and others.
- Can be integrated with other frameworks like React, Angular, and Vue.js.
- Can be used for building RESTful APIs.

- used by big tech companies like: Netflix, Paypal, Uber and many more.

## Query

- Route parameters(query) - Appended to the URL after `?` providing additional details.
- e:g /search?name=pramod&age=25

## Params

- Route parameters - Appended to the URL after `/` providing additional details.
- e:g /search/:name/:age
- e:g /search/pramod/25
