# HNGx-10-REST-API

This REST API provides basic CRUD operations for managing person records in a database.

## Tech Stack Used

- Node.js
- Express.js
- MongoDB
- Express Validator

## Table of Contents

- [Testing the API](#testing-the-api)
  - [Installation](#installation)
- [Endpoints](#endpoints)
  - [Create a New Person](#create-person)
  - [Get Person Profile](#get-person)
  - [Update Person Profile](#update-person)
  - [Delete Person Profile](#delete-person)
- [Error Handling](#error-handling)
- [UML Diagrams](#uml-diagrams)

## Testing the API

The API is available for testing locally. You can also deploy it to your own server and test it live.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GabrielGatimu/HNGx-10-REST-API.git
   ```

2. Install dependencies
   ```
   cd HNGx-10-REST-API
   npm install
   ```
3. Fill up the .env file with:

   **NOTE: you can also check the '.env.example' file to see the variables required, but these are the essential environment variables required**

- a connection PORT
- your mongoDB-URI
- running environment (NODE_ENV).

  For LOCAL instances, use 'development' and 'production' for LIVE instances.
  The LOCAL instance provides error stack whenever errors occur.

4. Start the Server

   ```
   npm start
   ```

   For local instances, you can run :

   ```
   npm run dev
   ```

   and the server will restart automatically whenever you make changes

### Endpoints

#### Create Person

- **Description**: Add a new person record to the database.
- **HTTP Method**: POST
- **Route**: `/api`

- **_example_**

  ```
  http://localhost:8000/api
  ```

- **Request Body**:

  ```json
  {
    "name": "Mark Essien",
    "track": "all"
  }
  ```

- **Response**:
  ```json
  {
    "message": "New person created successfully",
    "details": {
      "name": "Mark Essien",
      "track": "all",
      "_id": "6502bf56fd7ee0569b5e152e",
      "createdAt": "2023-09-14T08:07:50.934Z",
      "updatedAt": "2023-09-14T08:07:50.934Z",
      "__v": 0
    }
  }
  ```

#### Get Person

- **Description**: Fetch the details of a person by name.
- **HTTP Method**: GET
- **Route**: `/api/user_id`
- **Request Body**:No request body required.

  **_example:_**

- Request
  ```
  http://localhost:8000/api/Mark Essien
  ```
- **Response**:

```json
{
  "_id": "6502bf56fd7ee0569b5e152e",
  "name": "Mark Essien",
  "track": "all",
  "createdAt": "2023-09-14T08:07:50.934Z",
  "updatedAt": "2023-09-14T08:07:50.934Z",
  "__v": 0
}
```

#### Update Person Details

- **Description**: Update Person Profile.
- **HTTP Method**: PUT
- **Route**: `/api/user_id`

**_example:_**

- Request
  ```
  http://localhost:8000/api/Mark Essien
  ```
- **Request Body**:

```json
{
  "name": "Mark Update",
  "track": "Mentor"
}
```

- **Response**:

```json
{
  "message": "Person details updated",
  "updated_person_details": {
    "_id": "6502bf56fd7ee0569b5e152e",
    "name": "Mark Update",
    "track": "Mentor",
    "createdAt": "2023-09-14T08:07:50.934Z",
    "updatedAt": "2023-09-14T08:17:01.453Z",
    "__v": 0
  }
}
```

#### Delete Person

- **Description**: Delete Person Profile.
- **HTTP Method**: DELETE
- **Route**: `/api/user_id`
- **Request Body**:No request body required.

**_example:_**

- Request
  ```
  http://localhost:8000/api/Mark Essien
  ```
- **Response**:
  ```json
  {
    "message": "Person deleted successfully"
  }
  ```

## Error Handling

Find all the errors that might occur when interacting with the API in the
more detailed [Documentation.md](./Documentation.md) file. Each error has its type, status code and explanation.

## UML Diagrams

Find the diagram here [UML Diagram](./diagrams/UML-diagram.png)
