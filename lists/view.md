---
title: View
description: View a list
published: true
date: 2023-09-17T23:33:10.472Z
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

## All Lists Success Response

**Code:** `HTTP 200 OK`
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

## Single List Success Response

**Code:** `HTTP 200 OK`
**Content:**

```json
{
    "data": {
        "name": "New name!2fdsf",
        "version": null,
        "slug": "a-3",
        "url": "/v1/lists/a-3",
        "description": "asdsadas",
        "website": "example.org",
        "discord": "example.com",
        "readme": null,
        "private": false,
        "expires": null,
        "created": "2023-09-17T19:49:13.000000Z",
        "updated": "2023-09-17T22:49:29.000000Z",
        "author": {
            "name": "Phinocio",
            "verified": true
        },
        "game": {
            "id": 30,
            "name": "Starfield"
        },
        "files": [
            {
                "name": "a7e2ec953166e7661b0c00d308a73c9d-modlist.txt",
                "clean_name": "modlist.txt",
                "bytes": 19253,
                "created": "2023-09-17T19:10:03.000000Z",
                "updated": "2023-09-17T19:10:03.000000Z"
            }
        ],
        "links": {
            "url": "/lists/a-3",
            "self": "http://localhost:8000/v1/lists/a-3"
        }
    }
}
```

## Error Responses

There *shouldn't* be any in normal operation. Maybe some 503 when deploying new code, or if there's a network issue.


# Example Usage

`GET /v1/lists`

`GET /v1/lists/my-awesome-list`