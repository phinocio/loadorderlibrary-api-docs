---
title: View Info
description: View a users info.
published: true
date: 2023-03-25T00:42:25.448Z
tags: 
editor: markdown
dateCreated: 2023-03-25T00:42:25.448Z
---

This route only allows on to view their own user info. There's no real need to be able to get info on another user as getting lists by a specific user is handled by the LoadOrder resource.

___


**URL:** `/v1/user`
**HTTP Method:** `GET`
**Headers:**

| Key | Value |
|-----|-------|
| Content-Type | application/json |
| Accept | application/json |
| X-XSRF-Token | `<token value>` |

> See [Authentication](/authentication) for info on how to get the `X-XSRF-Token` value.
{.is-info}

## Body Data

none

## Example HTTP Responses

### Success Response

**Code:** `HTTP 200 OK`
**Content:**

```json
{
    "data": {
        "name": "Test",
        "email": null,
        "verified": false,
        "admin": false,
        "created": "2023-03-24T02:05:27.000000Z",
        "updated": "2023-03-24T02:05:27.000000Z"
    }
}
```

### Error Responses

**Code:** `HTTP 401 UNAUTHENTICATED`
**Content:**
```json
{
    "message": "Unauthenticated."
}
```

## Example Usage

`GET /v1/user`

This will get the current authenticated user's info and return it.