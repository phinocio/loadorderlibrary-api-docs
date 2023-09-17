---
title: Users
description: Overview of Users resource
published: true
date: 2023-09-17T22:25:51.266Z
tags: 
editor: markdown
dateCreated: 2023-03-18T22:23:25.613Z
---

A user is a... user. They can own lists, edit them, delete them, etc. While a user allows those actions, it is not required to register to make use of the site, creaing a list (private or public) is fully available to anonymous users.

# List of Actions

- [View *View a user's info*](/users/view)
- [Delete *Delete a user*](/users/delete)
{.links-list}


# Attributes

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | string | The name of the user |
| email | string | The email of the user. Can be null |
| verified | bool | Whether the author is verified or not. This simply adds a check mark by their name on the site. Useful for quickly indicating what list is a Wabbajack Author's official list. |
| admin | bool | Whether the user is an admin or not |
| created | datetime | When the user was created |
| updated | datetime | When the user was last updated |