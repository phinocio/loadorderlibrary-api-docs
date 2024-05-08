---
title: Compare Lists
description: How to compare lists with the API
todo: This page needs to be much better
---

Comparing lists is a useful feature to determine if a user has added/removed mods, or to just see what's different between lists.
This makes use of the PHP package https://github.com/sebastianbergmann/diff and uses the Unified Diff Format.
:::note
The route `/compare` itself just returns all lists without pagination, and if using an API token it will include your own private lists.
This is mostly used for the frontend on the main website itself.
:::

The diffs are returned in a `diffs` key on the response. If there is no differences the result will be `"diffs": []`

**URL:** `/compare` and `/compare/{slug1}/{slug2}`

**METHOD:** `GET`

**HEADERS:**
| Key | Value | Optional |
|-----|-------|----------|
| Accept | `application/json` | No |
| Authorization | `Bearer <your-api-token>` | Yes |

---

## Body Data

None.

## Example HTTP Responses

### Success Responses

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": {
        "list1": {
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
            "files": [
                {
                    "name": "9b76f507722d4a7d2bed09d2e42c3b6c-modlist.txt",
                    "clean_name": "modlist.txt",
                    "bytes": 1336,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                },
                {
                    "name": "34ba75b3cc3f754a945b71f7e77e72a9-plugins.txt",
                    "clean_name": "plugins.txt",
                    "bytes": 9496,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                },
                {
                    "name": "682aeca2cdfc38d288a8b5ede0f33404-starfield.ini",
                    "clean_name": "starfield.ini",
                    "bytes": 34,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                },
                {
                    "name": "c144f62b2cce9e439f769800a0875057-starfieldcustom.ini",
                    "clean_name": "starfieldcustom.ini",
                    "bytes": 2031,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                }
            ],
            "links": {
                "url": "/lists/new-list",
                "self": "http://api.testing.lol.wonderland/v1/lists/new-list"
            }
        },
        "list2": {
            "name": "new list",
            "version": null,
            "slug": "new-list-3",
            "url": "/v1/lists/new-list-3",
            "description": null,
            "website": null,
            "discord": null,
            "readme": null,
            "private": false,
            "expires": null,
            "created": "2024-05-08T17:45:33.000000Z",
            "updated": "2024-05-08T17:45:33.000000Z",
            "author": null,
            "game": {
                "id": 30,
                "name": "Starfield",
                "lists_count": null
            },
            "files": [
                {
                    "name": "34ba75b3cc3f754a945b71f7e77e72a9-plugins.txt",
                    "clean_name": "plugins.txt",
                    "bytes": 9496,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                },
                {
                    "name": "682aeca2cdfc38d288a8b5ede0f33404-starfield.ini",
                    "clean_name": "starfield.ini",
                    "bytes": 34,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                },
                {
                    "name": "c144f62b2cce9e439f769800a0875057-starfieldcustom.ini",
                    "clean_name": "starfieldcustom.ini",
                    "bytes": 2031,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                },
                {
                    "name": "469e978c1e1fdb071c1a9463d3490fb4-starfieldprefs.ini",
                    "clean_name": "starfieldprefs.ini",
                    "bytes": 1936,
                    "created": "2024-05-06T21:59:33.000000Z",
                    "updated": "2024-05-06T21:59:33.000000Z"
                },
                {
                    "name": "84bc502949d7e164ad05f4e94f57836c-modlist.txt",
                    "clean_name": "modlist.txt",
                    "bytes": 1347,
                    "created": "2024-05-08T17:45:33.000000Z",
                    "updated": "2024-05-08T17:45:33.000000Z"
                }
            ],
            "links": {
                "url": "/lists/new-list-3",
                "self": "http://api.testing.lol.wonderland/v1/lists/new-list-3"
            }
        },
        "diffs": [
            "--- modlist.txt\n+++ modlist.txt\n@@ -1,10 +1,11 @@\n # This file was automatically generated by Mod Organizer.\n -Dummy separator until I fix the display issue_separator\n +Game Photos\n++added mod\n +Game Generated Files_separator\n +New Atlantis - Billboard Map\n++Vasco Constellation Skin\n +Real Flashlight\n-+Vasco Constellation Skin\n -Textures_separator\n -WIPMod - Indicate if Quest is on Current Planet\n +Scanner Encumbrance Display With Time\n"
        ]
    }
}
```

### Error Responses

**Code:** `HTTP 404 NOT FOUND`

**Content:**

```json
{
    "message": "Resource not found."
}
```

## Example Usage

`GET /compare`
`GET /compare/my-list/my-list-2`
