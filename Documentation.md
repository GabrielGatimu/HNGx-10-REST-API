# HNGx-10-REST-API Documentation

## Installation and setup

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

## Standard Formats And Usage for each endpoint

1. ### Create a New Person
   Insert a new person to database

#### **Request Format:**

- **HTTP Method:** POST
- **Route:** `/api`

- **_example_**

  ```
  http://localhost:8000/api
  ```

- **Request Body:** (Required)

  ```json
  {
    "name": "Mark Essien",
    "track": "all"
  }
  ```

#### **Response Formats:**

###### Success (201) Created

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

###### Failed (422) unprocessable entities(invalid inputs)

If you try to input any other data-types apart from String, or insert blank in the 'value', you get an errors array explaining every invalid input you make

- **example of wrong inputs:**
- Request Body:

  ```json
  {
    "name": 12345,
    "track": ""
  }
  ```

- Response:

```json
{
  "errors": [
    {
      "type": "field",
      "value": 12345,
      "msg": "name should be string!",
      "path": "name",
      "location": "body"
    },
    {
      "type": "field",
      "value": "",
      "msg": "Person's track is required",
      "path": "track",
      "location": "body"
    }
  ]
}
```

###### Failed (400) Bad request

Occurs when you try to register a new person with a name that is already in use.

- **example:**
- Request Body:

  ```json
  {
    "name": "Mark Essien",
    "track": "all"
  }
  ```

- Response:
  You get an error message and the stack

```json
{
  "errorMessage": "Name already taken. Try another one",
  "stack": "Error: Name already taken. Try another one\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:12:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

2. ### Get Person Details
   Fetch person details from the database using their name

#### **Request Format**

- **HTTP Method:** GET
- **Route:** `/api/user_id`

**_example:_**

- Request
  ```
  http://localhost:8000/api/Mark Essien
  ```

#### **Response Formats:**

- Responses:

###### Success (200)

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

###### Resource not found (404)

Occurs when the passed name is not found in the database

```json
{
  "errorMessage": "No such person found!",
  "stack": "Error: No such person found!\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:42:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

3. ### Update Person Details
   Update existing person's details in the database using their name
   This endpoint is similar to the create person endpoint, only that there must be an existing user in the database

#### **Request Format**

- **HTTP Method:** PUT
- **Route:** `/api/user_id`

- **example**
- Request

  ```
  http://localhost:8000/api/Mark Essien
  ```

- **Request Body:**

  ```json
  {
    "name": "Mark Update",
    "track": "Mentor"
  }
  ```

#### **Response Formats:**

###### Success (200) updated

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

###### Failed (404) resource not found

Occurs when you try to update a person that does not exist in the database or has already been deleted

- response

```json
{
  "errorMessage": "No such person found!",
  "stack": "Error: No such person found!\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:42:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

###### Failed (422) unprocessable entities(invalid inputs)

If you try to input any other data-types apart from String, or insert blank in the 'value', you get an errors array explaining every invalid input you make

- **example of wrong inputs:**
- Request Body:

  ```json
  {
    "name": 12345,
    "track": ""
  }
  ```

- Response:

```json
{
  "errors": [
    {
      "type": "field",
      "value": 1234,
      "msg": "name should be string!",
      "path": "name",
      "location": "body"
    },
    {
      "type": "field",
      "value": "",
      "msg": "track is required",
      "path": "track",
      "location": "body"
    }
  ]
}
```

###### Failed (400) Bad request

Occurs when you try to update the person with a slack_name that is already in use.

- **example:**
- Request Body:

  ```json
  {
    "name": "John Doe",
    "track": "Developer"
  }
  ```

- Response:
  You get an errorMessage and the stack

```json
{
  "errorMessage": "name already taken. Try another one",
  "stack": "Error: name already taken. Try another one\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:12:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

4. ### Delete a Person
   Delete a person from the database using their name

#### **Request Format**

- **HTTP Method:** DELETE
- **Route:** `/api/user_id`

#### **Request & Response Formats:**

- **example**

- Request

```
  http://localhost:8000/api/Mark Essien
```

- Response:

###### Success (200) Deleted

```json
{
  "message": "Person deleted successfully"
}
```

###### Failed (404) resource not found

    Occurs when the passed name is not found in the database or has already been deleted

```json
{
  "errorMessage": "No such person found!",
  "stack": "Error: No such person found!\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:42:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

## Limitations and Assumptions

### Limitations

- The API does not provide authentication and authorization mechanisms when performing actions to persons in the database

### Assumptions

- This API assumes a MongoDB database is available and configured.

- the 'user_id' param in the requests is the person's name in the database
