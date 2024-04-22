---
title: Authentication
description: Authentication options for the API
---

:::note
You only need an API Token if you want make use of your existing account. If you want to upload **Anonymously**, you can skip this section.
:::

:::caution
Please send all requests with an `Accept: application/json` header. Otherwise you will sometimes get HTML returned back due to the nature of the underlying framework.
:::

## Getting an API Token

To create an API Token, log in to the website then navigate to [https://loadorderlibrary.com/profile/api](https://loadorderlibrary.com/profile/api) or click the "API Tokens" entry in the user dropdown.

From there, enter a name you will remember and choose the permissions, at the moment the abilities map as such:

Permissions will become more granular in the future, allowing you to scope it to allow things like deleting a list but *not* the entire account. I'm also considering not allowing account deletion via API Tokens, if you have some feedback, let me know!


| Ability | What you can do |
| --- | --- |
| Create | Allows you to create a list |
| Read | Currently unused |
| Update | Allows you to update your lists and account info |
| Delete | Allows you to delete your lists and entire user account |
