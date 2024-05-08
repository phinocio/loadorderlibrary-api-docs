---
title: View Games
description: View the games that Load Order Library supports and get their corresponding ID.
---

**URL:** `/games` and `/games/{game}`

**HTTP Method:** `GET`

**Headers:**

| Key    | Value              |
| ------ | ------------------ |
| Accept | `application/json` |

---

## Body Data

None.

## Viewing All Games

### Success Response

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": [
        {
            "id": 11,
            "name": "Cyberpunk 2077",
            "lists_count": 0
        },
        {
            "id": 13,
            "name": "Dark Messiah of Might & Magic",
            "lists_count": 0
        },
        {
            "id": 14,
            "name": "Dark Souls",
            "lists_count": 0
        },
        {
            "id": 12,
            "name": "Darkest Dungeon",
            "lists_count": 0
        },
        {
            "id": 15,
            "name": "Dragon Age II",
            "lists_count": 0
        },
        {
            "id": 16,
            "name": "Dragon Age: Origins",
            "lists_count": 1
        },
        {
            "id": 17,
            "name": "Dungeon Siege II",
            "lists_count": 1
        },
        {
            "id": 28,
            "name": "Enderal",
            "lists_count": 1
        },
        {
            "id": 29,
            "name": "Enderal SE",
            "lists_count": 0
        },
        {
            "id": 6,
            "name": "Fallout 3",
            "lists_count": 0
        },
        {
            "id": 8,
            "name": "Fallout 4",
            "lists_count": 0
        },
        {
            "id": 9,
            "name": "Fallout 4 VR",
            "lists_count": 1
        },
        {
            "id": 7,
            "name": "Fallout New Vegas",
            "lists_count": 0
        },
        {
            "id": 18,
            "name": "Kerbal Space Program",
            "lists_count": 0
        },
        {
            "id": 19,
            "name": "Kingdom Come: Deliverance",
            "lists_count": 1
        },
        {
            "id": 20,
            "name": "Mirror's Edge",
            "lists_count": 0
        },
        {
            "id": 21,
            "name": "Mount & Blade II: Bannerlord",
            "lists_count": 0
        },
        {
            "id": 22,
            "name": "No Man's Sky",
            "lists_count": 0
        },
        {
            "id": 23,
            "name": "STALKER Anomaly",
            "lists_count": 0
        },
        {
            "id": 24,
            "name": "Stardew Valley",
            "lists_count": 0
        },
        {
            "id": 30,
            "name": "Starfield",
            "lists_count": 2
        },
        {
            "id": 10,
            "name": "Tale of Two Wastelands",
            "lists_count": 0
        },
        {
            "id": 1,
            "name": "TESIII Morrowind",
            "lists_count": 0
        },
        {
            "id": 2,
            "name": "TESIV Oblivion",
            "lists_count": 0
        },
        {
            "id": 3,
            "name": "TESV Skyrim LE",
            "lists_count": 0
        },
        {
            "id": 4,
            "name": "TESV Skyrim SE",
            "lists_count": 0
        },
        {
            "id": 5,
            "name": "TESV Skyrim VR",
            "lists_count": 0
        },
        {
            "id": 25,
            "name": "The Binding of Isaac: Rebirth",
            "lists_count": 0
        },
        {
            "id": 26,
            "name": "The Witcher 3: Wild Hunt",
            "lists_count": 0
        },
        {
            "id": 31,
            "name": "The Witcher: Enhanced Edition",
            "lists_count": 0
        },
        {
            "id": 27,
            "name": "Zeus and Poseidon",
            "lists_count": 0
        }
    ]
}
```

### Error Responses

In normal operation, there are no expected errors.

## Getting a Specific Game

The games route also supports getting a specific game, which returns all lists of that game. A bit simpler of an option than using filters on the `/list` route.

### Success Response

This is an example response for `GET /games/Starfield`

**Code:** `HTTP 200 OK`

**Content:**

```json
{
    "data": {
        "id": 30,
        "name": "Starfield",
        "lists": [
            {
                "name": "new list",
                "version": null,
                "slug": "new-list-3",
                "url": "/v1/lists/new-list-3",
                "description": null,
                "website": null,
                "discord": null,
                "readme": null,
                "private": false,
                "expires": null,
                "created": "2024-05-08T17:45:33.000000Z",
                "updated": "2024-05-08T17:45:33.000000Z",
                "author": null,
                "game": {
                    "id": 30,
                    "name": "Starfield"
                },
                "links": {
                    "url": "/lists/new-list-3",
                    "self": "http://api.testing.lol.wonderland/v1/lists/new-list-3"
                }
            },
            {
                "name": "Best Starfield List",
                "version": null,
                "slug": "best-starfield-list",
                "url": "/v1/lists/best-starfield-list",
                "description": null,
                "website": null,
                "discord": null,
                "readme": null,
                "private": true,
                "expires": null,
                "created": "2024-05-08T17:47:06.000000Z",
                "updated": "2024-05-08T17:47:09.000000Z",
                "author": {
                    "name": "Phinocio",
                    "verified": true
                },
                "game": {
                    "id": 30,
                    "name": "Starfield"
                },
                "links": {
                    "url": "/lists/best-starfield-list",
                    "self": "http://api.testing.lol.wonderland/v1/lists/best-starfield-list"
                }
            }
        ]
    }
}
```

## Games Reference

:::note
The listed ID is what is expected for `game` when creating or updating a list.
In an eventual version 2 of the API, it will expect the actual game name.
:::

:::note
People often refer to Skyrim `SE` and `AE`. For the purposes of Load Order Library, `TESV Skyrim SE` (id 4) is the correct game.
:::

| Game                          | ID  |
| ----------------------------- | --- |
| Cyberpunk 2077                | 11  |
| Dark Messiah of Might & Magic | 13  |
| Dark Souls                    | 14  |
| Darkest Dungeon               | 12  |
| Dragon Age II                 | 15  |
| Dragon Age: Origins           | 16  |
| Dungeon Siege II              | 17  |
| Enderal                       | 28  |
| Enderal SE                    | 29  |
| Fallout 3                     | 6   |
| Fallout 4                     | 8   |
| Fallout 4 VR                  | 9   |
| Fallout New Vegas             | 7   |
| Kerbal Space Program          | 18  |
| Kingdom Come: Deliverance     | 19  |
| Mirror's Edge                 | 20  |
| Mount & Blade II: Bannerlord  | 21  |
| No Man's Sky                  | 22  |
| STALKER Anomaly               | 23  |
| Stardew Valley                | 24  |
| Starfield                     | 30  |
| Tale of Two Wastelands        | 10  |
| TESIII Morrowind              | 1   |
| TESIV Oblivion                | 2   |
| TESV Skyrim LE                | 3   |
| TESV Skyrim SE                | 4   |
| TESV Skyrim VR                | 5   |
| The Binding of Isaac: Rebirth | 25  |
| The Witcher 3: Wild Hunt      | 26  |
| The Witcher: Enhanced Edition | 31  |
| Zeus and Poseidon             | 27  |
