# Lab: First Node.js & Git project

## Objectives

1. Start a project
2. Create a simple Node.js script 
3. Create a simple HTTP server
4. Integrate Nodemon
5. Create a basic application with multiple routes

## Create a basic application with multiple routes (hard level)

Create an application with 3 routes:

1. `/` explains how `/hello` works (containing the links)
2. `/hello` takes a `name` query parameter and:
  - random names reply `hello [name]`
  - your own name replies with a short intro of yourself
3. Any other path replies a 404 code with a not found message

## 💢 Before starting

### 🛠️ Technologies

- `Node.js`
- `JavaScript`

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm init` to generate package.json
3. Run `npm install` in the project directory to install the required dependencies.
4. Add the script `start` to the `package.json` file like this:

```json
{
  ...
  "scripts": {
    "start": "node index.js"
  },
  ...
}
```
5. Run `npm run start` to get the project started.
6. Open [http://localhost:8090/hello?name=YourName](http://localhost:8090/hello?name=YourName) to see the hello page with your name displayed.
