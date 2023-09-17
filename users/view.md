---
title: View Info
description: View a users info.
published: true
date: 2023-09-17T22:22:47.629Z
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
| Accept | `application/json` |
| Authorization | `Bearer <your-api-token>` |

> See [Authentication](/authentication) for info on how to get an API Token.
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


```js
async function getUser() {
  const resp = await fetch('http://localhost:8000/v1/user', {
    headers: {
      Accept: 'application/json',
      "Authorization": "Bearer <your-api-token>"
    },
  })

  console.log(await resp.json())
}

getUser()
```

This will get the current authenticated user's info and return it.