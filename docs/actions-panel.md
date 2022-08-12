---
title: Actions Panel
description: Adding custom properties to a component
slug: concepts-visual-editor/actions-panel
---
When a user interacts with a component on an app, the interaction generates events. For example, when a user clicks a button, the event generated is 'click'. 

We can react to an event by performing any of the following actions: 

#### 1. Send event data

This action sends the event data to backend where we may decide how to make use of it. All the state changes are then automatically sent to the frontend. 

:::note
State is a snapshot of the application at a given time. This is always sent to the backend. 
:::

For example, if a button is clicked, the event data includes the X, Y coordinates of the cursor. 

Below is an example of how we may use event data in the backend and make changes to the application. 

```
# Display Success in textbox if button was clicked
if at.Button1.onClick:
    at.TextBox1.custom.text = "Success"
```

#### 2. Send own file

Now, let us imagine that the component generating events is actually a file upload button. In that case, we are interested in sending the files uploaded by the user to the backend instead of the coordinates of the cursor. Using this action, we can achieve this objective. 

```
# Extract uploaded files
uploaded_files = at.Upload1.io.files
```

#### 3. Send other's file

Let us consider the case when we have a form in our app. It consists of two file upload buttons and one `Submit` button. The desired behavior is that once the user clicks on the `Submit` button, the uploaded files are sent to the backend. Hence, this is an example where the expected action is to send files associated with other components. 

###### Image here

#### 4. Internal navigation

This action is used when we intend to navigate to another page in the app when an event occurs (e.g. a button click). The required page can be chosen from the dropdown. 

#### 5. External navigation

This action is very similar to the above except we provide an external web address to navigate to when an event occurs. The required address can be provided in the accompanying textbox.

:::info
1. Multiple actions are allowed. 
:::
:::caution
1. `Send event data` and `Send file` should not be used together. 
2. Order of actions is also important to consider. `Send event data` or `Send file` should always precede `Navigation` actions. 
:::