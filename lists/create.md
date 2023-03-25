---
title: Create
description: Create a list
published: true
date: 2023-03-25T01:01:16.404Z
tags: 
editor: markdown
dateCreated: 2023-03-25T00:50:02.897Z
---

Create a list. Creating a list does not require an account, however having an account allows updating and deleting lists.

___


**URL:** `/v1/lists`
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


| Property   | Type     | Required | Description |
|------------|----------|----------|-------------|
| name       | string   | Yes      | The name of the list |
| game       | integer  | Yes      | The ID of the game the list is for |
| description | string   | Yes      | A brief description of the list   |
| version    | string   | No       | The version of the list            |
| website    | string   | No       | The URL of the list's website     |
| discord    | string   | No       | The URL of the list's Discord server |
| readme     | string   | No       | The URL of the list's readme file |
| private    | boolean  | No       | Whether the list is private. Defaults to false |
| expires    | string   | No       | The expiration time of the list. Valid values are "3h", "3d", "1w", or "perm". If this property is not provided, the default value will be determined based on whether the user is logged in or not. Default for anonymous lists is 24h, for logged in is permanent |


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