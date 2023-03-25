---
title: Login
description: Login a user
published: true
date: 2023-03-25T00:27:36.549Z
tags: 
editor: markdown
dateCreated: 2023-03-18T22:32:46.930Z
---

Login a user.

___


**URL:** `/login`
**HTTP Method:** `POST`
**Headers:**

| Key | Value |
|-----|-------|
| Content-Type | application/json |
| Accept | application/json |


## Body Data

| Field |	Type | Required | Description |
|-------|------|----------|-------------|
| name  |string| Yes | The user's name |
| password | string | Yes | The user's password |

## Example HTTP Responses

### Success Response

**Code:** `HTTP 200 OK`
**Content:**

```json
{
    "two_factor": false
}
```

> Two factor authentication is currently disabled. 
{.is-info}

### Error Responses

**Code:** `HTTP 422 UNPROCESSABLE ENTITY`
**Content:**
```json
{
    "message": "The password field is required.",
    "errors": {
        "password": [
            "The password field is required."
        ]
    }
}
```

## Example Usage

`POST /register`

```json
{
  "name": "Test",
  "password": "password",
  "password_confirmation": "password",
  "email": "optional@example.com"
}
```

Will create a user named `Test` with the password `password` as long as the user does not already exist. Upon success, the response will be empty (`""`) with `HTTP 201` status code. On success, the user will also be logged in.