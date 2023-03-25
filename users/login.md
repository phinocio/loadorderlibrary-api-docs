---
title: Login
description: Login a user
published: true
date: 2023-03-25T00:28:59.812Z
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

> Since emails are optional, the username is what is used to login.
{.is-info}

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

`POST /login`

```json
{
  "name": "Test",
  "password": "password"
}
```

If the credentials match the database records, the user will be logged in. 