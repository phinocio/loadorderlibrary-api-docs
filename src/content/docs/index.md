---
title: Introduction
description: Load Order Library API Documentation
---

Welcome to the Load Order Library API docs. Here you can learn how to use the API to manage lists, get your user info, get game info, etc.

The main route for API requests is `https://api.loadorderlibrary.com/v1`

The API just uses a simple token based auth, but some routes can also be used without a token.

:::caution
Please send all requests with an `Accept: application/json` header. Otherwise you will sometimes get HTML returned back due to the nature of the underlying framework.
:::

:::note[Work In Progress]
The API Docs are currently a work in progress, some things may be missing or incorrect, please bare with me as I work on updating. Also feel free to
[create an issue on GitHub](https://github.com/phinocio/loadorderlibrary-api-docs/issues/new) with any suggestions/issues.
:::
