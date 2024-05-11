# User Management API

## Overview
This User Management API allows for handling user-related operations within an application. It supports various functionalities such as user registration, retrieval, updating, deletion, and now includes a reports feature currently in development.

## Features
- **User Registration**: Allows new users to sign up by providing an email and password.
- **User Retrieval**: Supports fetching user details by user ID or email.
- **User Update**: Enables updating user details, specifically the password for now.
- **User Deletion**: Allows for the deletion of a user by their ID.
- **Reports**: This feature is under development and will provide reporting capabilities for user activities.

## API Endpoints

### 1. Sign Up
- **URL**: `POST /auth/signup`
- **Content-Type**: `application/json`
- **Body**:
  ```json
  {
    "email": "example@gmail.com",
    "password": "yourpassword"
  }
  ```

### 2. Find User by ID
- **URL**: `GET /auth/{userID}`

### 3. Find Users by Email
- **URL**: `GET /auth?email=user@example.com`

### 4. Delete User
- **URL**: `DELETE /auth/{userID}`

### 5. Update User
- **URL**: `PATCH /auth/{userID}`
- **Content-Type**: `application/json`
- **Body**:
  ```json
  {
    "password": "newpassword"
  }
  ```

## Usage
To use the API, send HTTP requests to the respective endpoints with the required headers and body data as outlined above.

## Development
This API is currently in development and running on `http://localhost:3000`. Ensure the server is running locally to interact with these endpoints. The API uses SQLite for testing purposes but plans to switch to PostgreSQL in the future to enhance feature robustness.

## Future Enhancements
- Expand user update functionality to include more fields.
- Implement authentication and authorization for secure access to the API.
- Add rate limiting and logging for better API management and security.

