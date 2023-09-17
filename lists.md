---
title: Lists
description: Overview for lists
published: true
date: 2023-09-17T23:20:31.166Z
tags: 
editor: markdown
dateCreated: 2023-03-25T00:50:27.211Z
---

A list is a collection of mods created by one or more authors. For Bethesda games they include a `modlist.txt`, `plugins.txt` among other files.

> A list only requires one file to be uploaded.
{.is-info}

# List of Actions

- [Create *Create a list*](/lists/create)
- [View *View lists*](/lists/view)
- [Update *Update a list*](/lists/update)
- [Delete *Delete a list*](/lists/delete)
{.links-list}


# Attributes

Note that `User Controllable` is referring to attributes that can be used in a `POST` request for creating a list - hence why `slug` is listed as not user controllable, when it *kind of* is.

## Name

| Name | Type   | User Controllable |
| ---- | ------ | ----------------- |
| name | string | Yes               |

The name of the list is, well, what the list is called. List names are not unique in the database - there can be any number of `My Awesome List!` lists.

## Slug

| Name | Type   | User Controllable |
| ---- | ------ | ----------------- |
| slug | string | No                |

Slugs are generated on a "first come, first serve" basis based on the `name` of the list. The first person to create a list titled `My Awesome List!` will get the slug `my-awesome-list`. The next person will have a `-1` appended to the end, creating a `my-awesome-list-1` slug, and onwards. 

# Valid Files

Below is a listing of the valid file names a list can have. If there's some missing or there that shouldn't be, please let me know.

> This list is incomplete. There's files from other games that aren't present. If you know of any please comment on [this issue](https://github.com/phinocio/loadorderlibrary/issues/39).
{.is-info}


- enblocal.ini
- enbseries.ini
- fallout.ini
- falloutprefs.ini
- fallout4.ini
- fallout4custom.ini
- fallout4prefs.ini
- geckcustom.ini
- geckprefs.ini
- loadorder.txt
- mge.ini
- modlist.txt
- morrowind.ini
- mwse-version.ini
- oblivion.ini
- oblivionprefs.ini
- plugins.txt
- settings.txt
- skyrim.ini
- skyrimcustom.ini
- skyrimprefs.ini
- starfield.ini
- starfieldcustom.ini
- starfieldprefs.ini