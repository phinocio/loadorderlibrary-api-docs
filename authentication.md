---
title: Authentication
description: Authentication options for the API
published: true
date: 2023-03-25T01:30:10.759Z
tags: 
editor: markdown
dateCreated: 2023-03-18T03:53:52.717Z
---

User authentication is only necessary for users that wish to interact via the API. Anonymous users have many of the same abilities as those using accounts. The largest exceptions are the ability to edit and delete lists.

More info on getting an authentication token will be available as I work on the API and implement it myself.

>	Please send all requests with an `Accept: application/json` header. Otherwise you will sometimes get HTML returned back due to the nature of the underlying framework.
{.is-info}

# X-XSRF-Token

Most requests require an `X-XSRF-Token` header to be present. To get a token, send a `GET` request to `/sanctum/csrf-cookie`, then get the value. Better examples soon once I get on to doing it myself for the frontend...