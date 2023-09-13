# HNGx-10-REST-API Documentation

## Standard Formats for Requests and Responses

1. ### Create a New Person
   Insert a new person to database

#### **Request Format**

- **HTTP Method:** POST
- **Route:** `/api`
- **Request Body:** (Required)

  ```json
  {
    "name": "John Doe",
    "slack_name": "johndoe",
    "track": "Developer"
  }
  ```

#### **Response Formats:**

###### Success (201) Created

```json
{
  "message": "New person created successfully",
  "details": {
    "_id": "12345",
    "name": "John Doe",
    "slack_name": "johndoe",
    "track": "Developer"
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
    "slack_name": "",
    "track": "Developer"
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
      "msg": "slack_name is required",
      "path": "slack_name",
      "location": "body"
    }
  ]
}
```

###### Failed (400) Bad request

Occurs when you try to register a new person with a slack_name that is already in use.

- **example:**
- Request Body:

  ```json
  {
    "name": "Mark Essien",
    "slack_name": "mark",
    "track": "all"
  }
  ```

- Response:
  You get an error message and the stack

```json
{
  "errorMessage": "Slack_name already taken. Try another one",
  "stack": "Error: Slack_name already taken. Try another one\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:12:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

2. ### Get Person Details
   Fetch person details from the database using their name

#### **Request Format**

- **HTTP Method:** GET
- **Route:** `/api/user_name`

#### **Response Formats:**

- **example**
- Request
  http://localhost:8000/api/gabu

- Response:

###### Success (200)

#### **Request Format**

- **HTTP Method:** GET
- **Route:** `/api/user_name`

#### **Response Formats:**

- **example**
- Request
  http://localhost:8000/api/gabu

- Response:

###### Success (200)

```json
{
  "_id": "6501614401a5311363b14101",
  "name": "Gabriel Gatimu",
  "slack_name": "gabu",
  "track": "backend",
  "createdAt": "2023-09-13T07:14:12.661Z",
  "updatedAt": "2023-09-13T07:14:12.661Z",
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
- **Request Body:** (Required)

  ```json
  {
    "name": "John update",
    "slack_name": "johnupdate",
    "track": "Developer"
  }
  ```

#### **Response Formats:**

###### Success (200) updated

```json
{
  "message": "Person details updated",
  "updated_person_details": {
    "_id": "6501614401a5311363b14101",
    "name": "John update",
    "slack_name": "johnupdate",
    "track": "Developer",
    "createdAt": "2023-09-13T07:14:12.661Z",
    "updatedAt": "2023-09-13T11:32:34.235Z",
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
    "slack_name": "",
    "track": "Developer"
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
      "msg": "slack_name is required",
      "path": "slack_name",
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
    "name": "John update",
    "slack_name": "mark",
    "track": "Developer"
  }
  ```

- Response:
  You get an errorMessage and the stack

```json
{
  "errorMessage": "Slack_name already taken. Try another one",
  "stack": "Error: Slack_name already taken. Try another one\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:12:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
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
  http://localhost:8000/api/gabu

- Response:

###### Success (200) Deleted

```json
{
  "message": "Person deleted successfully"
}
```

###### (404) resource not found

    Occurs when the passed name is not found in the database or has already been deleted

```json
{
  "errorMessage": "No such person found!",
  "stack": "Error: No such person found!\n    at file:///home/gg/gProjects/HNGx/stage-two/controllers/user.controller.js:42:11\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```
