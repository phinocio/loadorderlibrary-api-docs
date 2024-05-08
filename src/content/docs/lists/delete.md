---
title: Delete Lists
description: How to delete a list with the API
---

:::danger[Authentication Required]
Deleting a list requires authentication. Figure out how to get an API Token [here](/basics/authentication).
:::

**URL:** `/v1/lists/{slug}`

**HTTP Method:** `DELETE`

**Headers:**

| Key           | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `<your-api-token>` |

---

## Body Data

None.

## Example HTTP Responses

### Success Response

**Code:** `HTTP 204 NO CONTENT`

**Content:**

### Error Responses

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

**Code:** `HTTP 404 NOT FOUND`

**Content:**

```json
{
    "message": "Resource not found."
}
```

## Example Usage

`POST /lists/my-awesome-list`

```

```
