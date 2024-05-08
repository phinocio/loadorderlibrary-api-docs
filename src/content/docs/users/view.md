---
title: View User
description: How to view your user info
---

:::note
The only user actions available via the API are to get your own info, and get a list of your own lists.
:::

**URL:** `/user` and `/user/lists`

**METHOD:** `GET`

**HEADERS:**
| Key | Value | Optional |
|-----|-------|----------|
| Accept | `application/json` | No |
| Authorization | `Bearer <your-api-token>` | No |

---

## Body Data

None.

## Example Responses

### Success Response

Example response for the route `/user`

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": {
        "name": "New Acc!",
        "email": null,
        "verified": false,
        "admin": false,
        "created": "2024-05-07T17:04:19.000000Z",
        "updated": "2024-05-07T17:04:19.000000Z"
    }
}
```

Example response for the route `/user/lists`

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": {
        "name": "New Acc!",
        "email": null,
        "verified": false,
        "admin": false,
        "created": "2024-05-07T17:04:19.000000Z",
        "updated": "2024-05-07T17:04:19.000000Z"
    }
}
```

### Error Responses

**Code:** `HTTP 401 UNAUTHORIZED`

**Content:**

```json
{
    "message": "Unauthenticated."
}
```
