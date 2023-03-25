---
title: Lists
description: Overview for lists
published: true
date: 2023-03-25T01:24:57.545Z
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
- [Delete *Delete a list*](/lists/delete)
{.links-list}


# Attributes

Note that `User Controllable` is referring to attributes that can be used in a `POST` request for creating a list - hence why `slug` is listed as not user controllable, when it *kind of* is.

## Name

**Name:** `name`
**Type:** `string`
**User Controllable:** `Yes`
**Description:** The name of the list

The name of the lists is, well, what the list is called. List names are not unique in the database - there can be any number of `My Awesome List!` lists.

## Slug

**Name:** `slug`
**Type:** `string`
**User Controllable:** `No`
**Description:** The slug of the list, generated from the name. A unique identifier to a list, used in the url to get a specific list.

Slugs are generated on a "first come, first server" basis. The first person to create a list titled `My Awesome List!` will get the slug `my-awesome-list`. The next person will have a `-1` appended to the end, creating a `my-awesome-list-1` slug, and onwards. 

# Valid Files

Below is a listing of the valid file names a list can have. If there's some missing or there that shouldn't be, please let me know.

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