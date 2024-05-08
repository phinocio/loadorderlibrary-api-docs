---
title: View Lists
description: Viewing lists with the API
todo: Add info about filters possible (game, author, pagination number, etc) and example usage with actual code
---

Lists can be viewed either as a whole, or individually, viewing lists does not require auth. In the future when list visibility is more granular, it will.

**URL:** `/lists` or `/lists/{slug}`

**HTTP Method:** `GET`

**Headers:**

| Key    | Value              |
| ------ | ------------------ |
| Accept | `application/json` |

---

## Body Data

None

## Example HTTP Responses

### All Lists Success Response

**Route:** `/lists`

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": [
        {
            "name": "meow",
            "version": null,
            "slug": "meow-2",
            "url": "/v1/lists/meow-2",
            "description": null,
            "website": null,
            "discord": null,
            "readme": null,
            "private": false,
            "expires": null,
            "created": "2024-05-07T18:16:37.000000Z",
            "updated": "2024-05-07T18:16:37.000000Z",
            "author": {
                "name": "New Acc!",
                "verified": false
            },
            "game": {
                "id": 11,
                "name": "Cyberpunk 2077",
                "lists_count": null
            },
            "links": {
                "url": "/lists/meow-2",
                "self": "http://api.testing.lol.wonderland/v1/lists/meow-2"
            }
        },
        {
            "name": "New List",
            "version": null,
            "slug": "new-list",
            "url": "/v1/lists/new-list",
            "description": null,
            "website": null,
            "discord": null,
            "readme": null,
            "private": false,
            "expires": null,
            "created": "2024-05-06T22:00:02.000000Z",
            "updated": "2024-05-06T22:00:02.000000Z",
            "author": {
                "name": "Phinocio",
                "verified": true
            },
            "game": {
                "id": 19,
                "name": "Kingdom Come: Deliverance",
                "lists_count": null
            },
            "links": {
                "url": "/lists/new-list",
                "self": "http://api.testing.lol.wonderland/v1/lists/new-list"
            }
        },
        {
            "name": "New List",
            "version": null,
            "slug": "new-list-2",
            "url": "/v1/lists/new-list-2",
            "description": null,
            "website": null,
            "discord": null,
            "readme": null,
            "private": false,
            "expires": null,
            "created": "2024-05-06T21:59:47.000000Z",
            "updated": "2024-05-06T21:59:47.000000Z",
            "author": {
                "name": "Phinocio",
                "verified": true
            },
            "game": {
                "id": 9,
                "name": "Fallout 4 VR",
                "lists_count": null
            },
            "links": {
                "url": "/lists/new-list-2",
                "self": "http://api.testing.lol.wonderland/v1/lists/new-list-2"
            }
        }
    ],
    "links": {
        "first": "http://api.testing.lol.wonderland/v1/lists?page%5Bnumber%5D=1",
        "last": "http://api.testing.lol.wonderland/v1/lists?page%5Bnumber%5D=1",
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
                "url": "http://api.testing.lol.wonderland/v1/lists?page%5Bnumber%5D=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "http://api.testing.lol.wonderland/v1/lists",
        "per_page": 30,
        "to": 3,
        "total": 3
    }
}
```

### Single List Success Response

**Route:** `/lists/meow-2`

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": {
        "name": "meow",
        "version": null,
        "slug": "meow-2",
        "url": "/v1/lists/meow-2",
        "description": null,
        "website": null,
        "discord": null,
        "readme": null,
        "private": false,
        "expires": null,
        "created": "2024-05-07T18:16:37.000000Z",
        "updated": "2024-05-07T18:16:37.000000Z",
        "author": {
            "name": "New Acc!",
            "verified": false
        },
        "game": {
            "id": 11,
            "name": "Cyberpunk 2077",
            "lists_count": null
        },
        "files": [
            {
                "name": "9b76f507722d4a7d2bed09d2e42c3b6c-modlist.txt",
                "clean_name": "modlist.txt",
                "bytes": 1336,
                "content": ["pruned for docs"],
                "created": "2024-05-06T21:59:33.000000Z",
                "updated": "2024-05-06T21:59:33.000000Z"
            },
            {
                "name": "34ba75b3cc3f754a945b71f7e77e72a9-plugins.txt",
                "clean_name": "plugins.txt",
                "bytes": 9496,
                "content": ["pruned for docs"],
                "created": "2024-05-06T21:59:33.000000Z",
                "updated": "2024-05-06T21:59:33.000000Z"
            },
            {
                "name": "682aeca2cdfc38d288a8b5ede0f33404-starfield.ini",
                "clean_name": "starfield.ini",
                "bytes": 34,
                "content": ["pruned for docs"],
                "created": "2024-05-06T21:59:33.000000Z",
                "updated": "2024-05-06T21:59:33.000000Z"
            },
            {
                "name": "c144f62b2cce9e439f769800a0875057-starfieldcustom.ini",
                "clean_name": "starfieldcustom.ini",
                "bytes": 2031,
                "content": ["pruned for docs"],
                "created": "2024-05-06T21:59:33.000000Z",
                "updated": "2024-05-06T21:59:33.000000Z"
            },
            {
                "name": "469e978c1e1fdb071c1a9463d3490fb4-starfieldprefs.ini",
                "clean_name": "starfieldprefs.ini",
                "bytes": 1936,
                "content": ["pruned for docs"],
                "created": "2024-05-06T21:59:33.000000Z",
                "updated": "2024-05-06T21:59:33.000000Z"
            }
        ],
        "links": {
            "url": "/lists/meow-2",
            "self": "http://api.testing.lol.wonderland/v1/lists/meow-2"
        }
    }
}
```

### Error Responses

There _shouldn't_ be any in normal operation. Maybe some 503 when deploying new code, or if there's a network issue.

Also a 404 is expected if the list doesn't exist.

## Example Usage

`GET /v1/lists`

`GET /v1/lists/my-awesome-list`
