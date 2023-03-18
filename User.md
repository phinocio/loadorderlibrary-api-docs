---
title: User
description: User resource. Register/Login/View/Delete
published: true
date: 2023-03-18T22:05:54.148Z
tags: model, user, resource
editor: markdown
dateCreated: 2023-03-18T21:57:12.902Z
---

The User resource handles registration, login, viewing info, updating, and deleting.

# Register a User

Send a `POST` to `/v1/user` with data.


## Body Data

|Parameter | Required? | Description            |
|--------- | --------- | ---------------------- |
| name     | required  | The username for the user. Used to log in. |
| password | required  | 
game_id | required | The id of the game the list is for.
is_private | optional | Whether the list is private or not. Defaults to `false` when not provided.
files[] | required | The files for the list.
expires_at | optional | When the list will expire. Accepted options are strings of `3h`, `24h`, `3d`, `1w`, and `perm`. Defaults to `24h` when `null` or an invalid option is provided.

# Login

# View a User's Info

When logged in, sending a `GET` request to `/v1/user` will return info of the logged in user.

## Example

Logged in as `Test`

`GET /v1/user`

Response:

```json
{
    "data": {
        "name": "Test",
        "email": null,
        "verified": false,
        "admin": false,
        "created": "2023-03-18T22:01:15.000000Z",
        "updated": "2023-03-18T22:01:15.000000Z"
    }
}
```

# Update a User's Info

At the moment, updating a user's info is not possible via the API. Do so by the website.

# Delete a User

> Deleting a user is **permanent** and can not be undone. The user and all associated lists are deleted from the database.
{.is-danger}

To delete a user, first log in then send a `DELETE` request to `/v1/user/{username}`

Ex: `DELETE /v1/user/phinocio`
