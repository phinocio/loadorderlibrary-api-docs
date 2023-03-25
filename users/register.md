---
title: Register a User
description: API Request for registering a user
published: true
date: 2023-03-25T00:35:02.728Z
tags: 
editor: markdown
dateCreated: 2023-03-18T22:22:11.710Z
---

> Usernames must be unique. If someone else is already using the name, choose another.
{.is-warning}

Register a user. Registering is not required to use the site, and only allows a few extra features like deleting lists.

___


**URL:** `/register`
**HTTP Method:** `POST`
**Headers:**

| Key | Value |
|-----|-------|
| Content-Type | application/json |
| Accept | application/json |
| X-XSRF-Token | <token value> |

## Body Data

| Field |	Type | Required | Description |
|-------|------|----------|-------------|
| name  |string| Yes | The name of the user |
| email	|string| No |The email address of the user |
| password | string | Yes | The password for the user account |
| password_confirmation | string| Yes | The confirmation of the password for the user account |

## Example HTTP Responses

### Success Response

**Code:** `HTTP 201 CREATED`
**Content:**

```json
""
```

### Error Responses

**Code:** `HTTP 422 UNPROCESSABLE ENTITY`
**Content:**
```json
{
    "message": "The name has already been taken. (and 1 more error)",
    "errors": {
        "name": [
            "The name has already been taken."
        ],
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