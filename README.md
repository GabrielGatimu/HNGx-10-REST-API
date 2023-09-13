# HNGx-10-REST-API

This REST API provides basic CRUD operations for managing person records.

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

## Testing the API

The API is available for testing locally.

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
3. Start the APi

   ```
   npm start
   ```

### Endpoints

#### Create Person

- **Description**: Add a new person record to the database.
- **HTTP Method**: POST
- **Route**: `/api`

- **Request Body**:

  ```json
  {
    "name": "John Doe",
    "slack_name": "johndoe",
    "track": "Developer"
  }
  ```

- **Response**:
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

#### Get Person

- **Description**: Fetch the details of a person by name.
- **HTTP Method**: GET
- **Route**: `/api/user_id`
- **Request Body**:No request body required.

- **Response**:

  ```json
  {
    "_id": "12345",
    "name": "John Doe",
    "slack_name": "johndoe",
    "track": "Backend"
  }
  ```

  ```json
  {
    "message": "New person created successfully",
    "details": {
      "_id": "12345",
      "name": "John Doe",
      "slack_name": "johndoe",
      "track": "Backend"
    }
  }
  ```

#### Update Person

- **Description**: Update Person Profile.
- **HTTP Method**: PUT
- **Route**: `/api/user_id`

- **Request Body**:

  ```json
  {
    "name": "Updated Name",
    "slack_name": "updatedSlackName",
    "track": "Updated track"
  }
  ```

- **Response**:
  ```json
  {
    "message": "Person details updated",
    "New_Person_Details": {
      "_id": "12345",
      "name": "Updated Name",
      "slack_name": "updatedSlackName",
      "track": "Updated track"
    }
  }
  ```

#### Delete Person

- **Description**: Delete Person Profile.
- **HTTP Method**: DELETE
- **Route**: `/api/user_id`
- **Request Body**:No request body required.

- **Response**:
  ```json
  {
    "Person deleted successfully"
  }
  ```

## Error Handling

```
404 Not Found: When a resource or URL is not found
422 Unprocessable Entity: For validation errors, e.g., missing or invalid fields.
```
