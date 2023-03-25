---
title: Register a User
description: API Request for registering a user
published: true
date: 2023-03-25T00:07:18.320Z
tags: 
editor: markdown
dateCreated: 2023-03-18T22:22:11.710Z
---

> Usernames must be unique. If someone else is already using the name, choose another.
{.is-warning}

Register a user. Registering is not required to use the site, and only allows a few extra features like deleting lists.


## Body Data

| Field |	Type | Required | Description |
|-------|------|----------|-------------|
| name  |string| Yes | The name of the user |
| email	|string| No |The email address of the user |
password	string	Yes	The password for the user account
password_confirmation	string	Yes	The confirmation of the password for the user account

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