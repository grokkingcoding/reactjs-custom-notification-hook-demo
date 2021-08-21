### About

- This is a short tutorial on how to create a custom notification hook in react

### Getting Started

1. git clone the repo

2. run: npm install

3. run: npm start

4. after that you will be automatically taken to your browser at localhost:3344

If you want to change the port the app runs on edit the PORT=value in package.json:
"start": "PORT=3344 react-scripts start",

### How to use the hook?

- so you would import the hook into your component file

- in this app structure, you would import it like this into App.js from the hook folder:

import { useNotifyHook } from '../../hooks/useNotifyHook';

const YourComponent = () => {

const { notifyUser } = useNotifyHook();

// write your brilliant code here

}

### key points about the custom notify hook

- first, we must think about what we want this hook to do. For this notification hook, we want to display a a popup to notify the user of a successful or rejected API request. But we can use this hook in many areas of our app. Basically whenever we want to display something to the user based on their actions.

- How long do we want to show the notification for? Permanently, until the user clicks a button? Or for a short period of time, like 10 seconds? If it is the latter, can you think a way to make the notification disappear after 10 seconds?

- How would we manage the state for the notification hook?

- how would we dispatch actions to change the state of the hook to show and hide the notification respectively?

- If we chose to go with hiding the notification popup after 10 seconds, can we manage the hiding function within the hook or do we need to expose it?

- How will the notification popup UI differ between a successful and an unsuccessful API request?
