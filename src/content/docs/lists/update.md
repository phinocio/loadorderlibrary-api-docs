---
title: Update Lists
description: How to update a list with the API
todo: Proper JS code examples and redo JSON examples. Double check method and if PUT works without needing _method body/header
---

:::note
Updating a list effectively replaces it. Ensure that all fields are filled out even if it's not changing any data.
:::

:::danger[Authentication Required]
Updating a list requires authentication. Figure out how to get an API Token [here](/basics/authentication).
:::

**URL:** `/v1/lists/{slug}`

**HTTP Method:** `POST`

**Headers:**

| Key           | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `<your-api-token>` |

---

## Body Data

| Property    | Type    | Required | Description                                                                                                                                                                                                                                                               |
| ----------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_method    | string  | Yes      | Indicates to the server that this is an update to a list. The value must be `PUT`.                                                                                                                                                                                        |
| name        | string  | Yes      | The name of the list                                                                                                                                                                                                                                                      |
| game        | integer | Yes      | The ID of the game the list is for                                                                                                                                                                                                                                        |
| description | string  | Yes      | A brief description of the list                                                                                                                                                                                                                                           |
| files[]     | array   | Yes      | The files of the list. At least one file is required                                                                                                                                                                                                                      |
| version     | string  | No       | The version of the list                                                                                                                                                                                                                                                   |
| website     | string  | No       | The URL of the list's website                                                                                                                                                                                                                                             |
| discord     | string  | No       | The URL of the list's Discord server                                                                                                                                                                                                                                      |
| readme      | string  | No       | The URL of the list's readme file                                                                                                                                                                                                                                         |
| private     | boolean | No       | Whether the list is private. Defaults to false                                                                                                                                                                                                                            |
| expires     | string  | No       | The expiration time of the list. Valid values are `3h`, `24h`, `3d`, `1w`, or `perm`. If this property is not provided, the default value will be determined based on whether the user is logged in or not. Default for anonymous lists is `24h`, for logged in is `perm` |

## Example HTTP Responses

### Success Response

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": {
        "name": "A Test List!",
        "version": null,
        "slug": "a-test-list-3",
        "url": "/v1/lists/a-test-list-3",
        "description": "A Description about the test list!",
        "website": "example.com",
        "discord": "example.com",
        "readme": null,
        "private": true,
        "expires": null,
        "created": "2023-03-25T01:19:17.000000Z",
        "updated": "2023-03-25T01:19:17.000000Z",
        "author": {
            "name": "Test22",
            "verified": false
        },
        "game": {
            "name": "TESIII Morrowind"
        },
        "links": {
            "url": "http://localhost:3000/lists/a-test-list-3",
            "self": "http://localhost/v1/lists/a-test-list-3"
        }
    }
}
```

### Error Responses

**Code:** `HTTP 422 UNPROCESSABLE ENTITY`

**Content:**

```json
{
    "message": "The game field is required.",
    "errors": {
        "game": ["The game field is required."]
    }
}
```

**Code:** `HTTP 401 UNAUTHENTICATED`

**Content:**

```json
{
    "message": "Unauthenticated."
}
```

**Code:** `HTTP 403 FORBIDDEN`

**Content:**

```json
{
    "message": "Invalid ability provided."
}
```

## Example Usage

Better examples soon.

`POST /v1/lists/{slug}`

```json
{
  	"_method": "PUT",
    "name": "My Load Order",
    "game": 1,
    "description": "This is my amazing load order.",
    "files[]": [file, file], // Files must be, well, files.
    "version": "1.0.0",
    "website": "https://example.com/loadorder",
    "discord": "https://discord.gg/K3KnEgrQE4", // Invite is to the Load Order Library server
    "readme": "https://example.com/loadorder/readme.txt",
    "private": true,
    "expires": "1w"
}

```
