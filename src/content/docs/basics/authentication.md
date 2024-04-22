---
title: Authentication
description: Authentication options for the API
---

> You only need an API Token if you want to use your existing account. If you want to upload **Anonymously**, you can skip this section.
{.is-info}


More info on getting an authentication token will be available as I work on the API and implement it myself.

>	Please send all requests with an `Accept: application/json` header. Otherwise you will sometimes get HTML returned back due to the nature of the underlying framework.
{.is-warning}

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


# Using the API Token

To use the API token, simply send requests with the `Authorization` HTTP header.

```
Authorization: Bearer <your-token-here>
```

Replace `<your-token-here>` with the token, example:

```
Authorization: Bearer 8|tWavHkRdVUlmJJNr6kKcjXhUurWTGfnVjTeEuo7L357075906
```

# Deleting an API Token

Go to the same place you generated it, and hit "delete".

# Examples

For examples in specific languages, see the relevant section on the left for the resource you want to interact with.
