# Expensify

App for basic expenditure management

https://expensifyappreact.herokuapp.com/

## Technologies

-  HTML
-  SCSS
-  React
-  React-Router
-  Firebase
-  Webpack

## Setup

To run this project, install it locally using npm or Yarn:

1. Run `npm install` or `yarn`
2. Add a new project in the [Firebase console](https://firebase.google.com/). Then find the firebase configuration object in the settings of the newly created project. It should look similar to:

```javascript
var firebaseConfig = {
   apiKey: 'api-key',
   authDomain: 'project-id.firebaseapp.com',
   databaseURL: 'https://project-id.firebaseio.com',
   projectId: 'project-id',
   storageBucket: 'project-id.appspot.com',
   messagingSenderId: 'sender-id'
};
```

3. Create `.env.dev` file in the root project directory and add key-value pairs. The values come from the firebase configuration object.

```env
   FIREBASE_API_KEY=api-key
   FIREBASE_AUTH_DOMAIN=project-id.firebaseapp.com
   FIREBASE_DATABASE_URL=https://project-id.firebaseio.com
   FIREBASE_PROJECT_ID=project-id
   FIREBASE_STORAGE_BUCKET=project-id.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=sender-id
```

4. For testing, add another project (test database) in firebase, find its configuration data and create the `.env.test` file in the root project directory in the same way as `.env.dev` file.

5. Run `yarn run dev-server` to start app in dev mode or `yarn test` to run the tests
