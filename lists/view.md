---
title: View
description: View a list
published: true
date: 2023-09-17T23:29:00.405Z
tags: lists
editor: markdown
dateCreated: 2023-09-17T23:23:48.451Z
---

View a list. This is a simple GET request.

___

**URL:** `/v1/lists` or `/v1/lists/{slug}`
**HTTP Method:** `GET`
**Headers:**

| Key | Value |
|-----|-------|
| Accept | `application/json` |
| Authorization | `<your-api-token>` |

> See [Authentication](/authentication) for info on how to get an API Token.
{.is-info}

# Body Data

None

# Example HTTP Responses

## Success Response

**Code:** `HTTP 201 CREATED`
**Content:**

```json
{
    "data": [
        {
            "name": "a",
            "version": null,
            "slug": "a-5",
            "url": "/v1/lists/a-5",
            "description": null,
            "website": "example.org",
            "discord": "example.com",
            "readme": null,
            "private": false,
            "expires": null,
            "created": "2023-09-17T22:51:31.000000Z",
            "updated": "2023-09-17T22:51:31.000000Z",
            "author": {
                "name": "Phinocio",
                "verified": true
            },
            "game": {
                "id": 1,
                "name": "TESIII Morrowind"
            },
            "links": {
                "url": "/lists/a-5",
                "self": "http://localhost:8000/v1/lists/a-5"
            }
        },
        {
            "name": "a",
            "version": null,
            "slug": "a-4",
            "url": "/v1/lists/a-4",
            "description": null,
            "website": "example.org",
            "discord": "example.com",
            "readme": null,
            "private": false,
            "expires": null,
            "created": "2023-09-17T19:51:59.000000Z",
            "updated": "2023-09-17T19:51:59.000000Z",
            "author": null,
            "game": {
                "id": 1,
                "name": "TESIII Morrowind"
            },
            "links": {
                "url": "/lists/a-4",
                "self": "http://localhost:8000/v1/lists/a-4"
            }
        }
    ],
   "links": {
        "first": "http://localhost:8000/v1/lists?page=1",
        "last": "http://localhost:8000/v1/lists?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://localhost:8000/v1/lists?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "http://localhost:8000/v1/lists",
        "per_page": 120,
        "to": 7,
        "total": 7
    }
}
```

## Error Responses

**Code:** `HTTP 422 UNPROCESSABLE ENTITY`
**Content:**
```json
{
    "message": "The game field is required.",
    "errors": {
        "game": [
            "The game field is required."
        ]
    }
}
```

**Code:** `HTTP 403 FORBIDDEN`
**Content:**
```json
{
    "message": "Invalid ability provided."
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
    "discord": "https://discord.gg/example",
    "readme": "https://example.com/loadorder/readme.txt",
    "private": true,
    "expires": "1w"
}

```

This will create a list title `My Load Order` that is private and expires in one week.