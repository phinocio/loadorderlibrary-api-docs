---
title: Login
description: Login a user
published: true
date: 2023-03-25T00:36:28.166Z
tags: 
editor: markdown
dateCreated: 2023-03-18T22:32:46.930Z
---

**URL:** `/login`
**HTTP Method:** `POST`
**Headers:**

| Key | Value |
|-----|-------|
| Content-Type | application/json |
| Accept | application/json |
| X-XSRF-Token | `<token value>` |

> See [Authentication](/authentication) for info on how to get the `X-XSRF-Token` value.
{.is-info}

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