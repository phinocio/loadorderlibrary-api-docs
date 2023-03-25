---
title: Authentication
description: Authentication options for the API
published: true
date: 2023-03-25T00:34:22.919Z
tags: 
editor: markdown
dateCreated: 2023-03-18T03:53:52.717Z
---

At the moment there is no need to authenticate as no user-tied data is present in the API. In the future one will be able to generate an API key from their user account for usage with 3rd party programs.

>	Please send all requests with an `Accept: application/json` header. Otherwise you will sometimes get HTML returned back due to the nature of the underlying framework.
{.is-info}

# X-XSRF-Token

Most requests require an `X-XSRF-Token` header to be present. To get a token, send a `GET` request to `/sanctum/csrf-cookie`, then get the value. Better examples soon once I get on to doing it myself for the frontend...