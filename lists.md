---
title: Lists
description: Overview for lists
published: true
date: 2023-03-25T01:15:30.768Z
tags: 
editor: markdown
dateCreated: 2023-03-25T00:50:27.211Z
---

# Header
Your content hereA user is a... user. They can own lists, edit them, delete them, etc. While a user allows those actions, it is not required to register to make use of the site, creaing a list (private or public) is fully available to anonymous users.

# List of Actions

- [Create *Create a list*](/lists/create)
- [View *View lists*](/lists/view)
- [Delete *Delete a list*](/lists/delete)
{.links-list}


# Attributes

## Name

**Name:** `name`
**Type:** `string`
**Description:** The name of the list

The name of the lists is, well, what the list is called. List names are not unique in the database - there can be any number of `My Awesome List!` lists.

## Slug

**Name:** `slug`
**Type:** `string`
**Description:** The slug of the list, generated from the name. A unique identifier to a list, used in the url to get a specific list.

Slugs are generated on a "first come, first server" basis. The first person to create a list titled `My Awesome List!` will get the slug `my-awesome-list`. The next person will have a `-1` appended to the end, creating a `my-awesome-list-1` slug, and onwards. 