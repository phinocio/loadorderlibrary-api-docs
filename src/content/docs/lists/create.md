---
title: Create Lists
description: How to create a list using the API
---

:::note
For a list to be tied to your account, an [API token](/basics/authentication) is required, this also allows updating and deleting of your lists. Anonymously uploading a list does not require auth.
:::

**URL:** `/lists`

**METHOD:** `POST`

**HEADERS:**
| Key | Value | Optional |
|-----|-------|----------|
| Accept | `application/json` | No |
| Authorization | `Bearer <your-api-token>` | Yes |

---

## Body Data

| Name        | Type    | Required | Description                                                                                                                                                                                                                                                               |
| ----------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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

**Code:** `HTTP 201 CREATED`

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

**Code:** `HTTP 401 UNAUTHORIZED`

**Content:**

```json
{
    "message": "Unauthenticated. (Make sure the token is correct.)"
}
```

**Code:** `HTTP 403 FORBIDDEN`

**Content:**

```json
{
    "message": "This action is forbidden. (Token doesn't have permission for this action.)"
}
```

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

# Example Usage

`POST /v1/lists`

```json
{
    "name": "My Load Order",
    "game": 1,
    "description": "This is my amazing load order.",
    "files[]": [file, file], // Files must be, well, files.
    "version": "1.0.0",
    "website": "https://example.com/loadorder",
    "discord": "https://example.com/discord",
    "readme": "https://example.com/loadorder/readme.txt",
    "private": true,
    "expires": "1w"
}

```

This will create a list titled `My Load Order` that is private and expires in one week.
