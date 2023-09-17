---
title: Authentication
description: Authentication options for the API
published: true
date: 2023-09-17T21:50:49.537Z
tags: 
editor: markdown
dateCreated: 2023-03-18T03:53:52.717Z
---

User authentication is only necessary for existing users that wish to interact with their account via the API. Anonymous users have many of the same abilities as those using accounts. The largest exceptions are the ability to edit and delete lists.

More info on getting an authentication token will be available as I work on the API and implement it myself.

>	Please send all requests with an `Accept: application/json` header. Otherwise you will sometimes get HTML returned back due to the nature of the underlying framework.
{.is-info}

To use your existing account with the API, generate an API Token. 

# Getting an API Token

To get an API Token, log in to the website then navigate to `/profile/api-tokens` ("API Tokens" in the dropdown on the top right).

![Create an API Token](/authentication/api_tokens.png)

From there, enter a name you will remember and choose the permissions, at the moment the abilities map as such:

> Permissions will become more granular in the future, allowing you to scope it to allow things like deleting a list but *not* the entire account. I'm also considering not allowing account deletion via API Tokens, if you have some feedback, let me know!
{.is-info}


| Ability | What you can do |
| --- | --- |
| Create | Allows you to create a list |
| Read | Currently unused |
| Update | Allows you to update your lists and account info |
| Delete | Allows you to delete your lists and entire user account |


---

Once you click on "Create Token", a message will above above showing you the token. Make sure to copy it to a secure location.

![api_token_created.png](/authentication/api_token_created.png)

> Make sure you copy this token somewhere safe! It will not be shown again and you will need to generate a new token.
{.is-warning}
