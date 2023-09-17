---
title: Lists
description: Overview for lists
published: true
date: 2023-09-17T23:22:39.264Z
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

| Name   | Type     | Required | Description |
|------------|----------|----------|-------------|
| name       | string   | Yes      | The name of the list |
| game       | integer  | Yes      | The ID of the game the list is for |
| description | string   | Yes      | A brief description of the list   |
| files[]    | array    | Yes      | The files of the list. At least one file is required |
| version    | string   | No       | The version of the list            |
| website    | string   | No       | The URL of the list's website     |
| discord    | string   | No       | The URL of the list's Discord server |
| readme     | string   | No       | The URL of the list's readme file |
| private    | boolean  | No       | Whether the list is private. Defaults to false |
| expires    | string   | No       | The expiration time of the list. Valid values are `3h`, `24h`, `3d`, `1w`, or `perm`. If this property is not provided, the default value will be determined based on whether the user is logged in or not. Default for anonymous lists is `24h`, for logged in is `perm` |

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