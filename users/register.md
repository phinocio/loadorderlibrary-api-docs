---
title: Register a User
description: API Request for registering a user
published: true
date: 2023-03-18T22:22:11.710Z
tags: 
editor: markdown
dateCreated: 2023-03-18T22:22:11.710Z
---

> Usernames must be unique. If someone else is already using the name, choose another.
{.is-warning}

Register a user. Registering is not required to use the site, and only allows a few extra features like deleting lists.


## Body Data

|Parameter | Required? | Description            |
|--------- | --------- | ---------------------- |
| name     | required  | The username for the user. Used to log in |
| password | required  | Password for the user |
| password_confirmation | required | Password confirmation. Must match `password` |
| email    | optional  | EMail for the user. Optional |

## HTTP Responses

| HTTP Code | Scenario |
| :-------: | -------- |
| 201       | The user was created successfully |
| 422       | The request was unable to be completed. Check the response message for details |

## Example

`POST /register`

with the following body data:

```json
{
  "name": "Test",
  "password": "password",
  "password_confirmation": "password",
  "email": ""
}
```

Will create a user named `Test` with the password `password` as long as the user does not already exist. Upon success, the response will be empty with `HTTP 201` status code.