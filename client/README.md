## Instructions

- Install all dependencies in client folder with "npm install" or "yarn install"
- Start the application by going to root client folder and run "yarn start" or "npm run start"
- Make sure you start the server or go to root folder that has server.js file and run "yarn start" or "npm run start", I have added a concurrent to run both server and client at the same time.
- If you encounter error while running the client it is probably the es2015 file error

To fix this issue:

Go to directory "client\node_modules\react-fontawesome\.babelrc"

Change this line of code:
```
{
  "presets": [ "es2015", "stage-2", "react" ],
  "plugins": [ "add-module-exports" ]
}
```

To this and it should solved the react-fontawesome rendering:
```
{
  "presets": [ "react" ]
}
```

## Features

Below are the basic features for the application:

- user can see the existing images from folder `images` to the images list ✔️
- user can *upload image* to folder `images` and directly added to images list ✔️
- user can *add and remove image / text* from the menu to the canvas ✔️
- user can *move the image / text* around the canvas ✔️

Bonus points if you can provide this feature:

- the created objects on canvas can be saved and repopulated on refresh browser ✖️

## Getting Started
- user can see existing image by clicking the [selectfile](http://prntscr.com/g73dm5) below Images label and *add* to screen
- user can *upload image* to folder `images` by [selectfile and upload](http://prntscr.com/g73f0i) below upload files label
- user can *remove image / text* simply double clicking it.
- user can *move the image / text* around the canvas like normal drag and drop.

## Unit Testing

This is really easy, but you need to read this first

- Before you the the above, please uncomment the commented line in webpack.config.js because it will interrupt with actual website.
- To run automated testing with mocha simply go to client directory where webpack.config.js is located and type "NPM run test" or "yarn test"
- You should see automated testing being generated
- to run and see actual website editor simply comment those lines back again a bit troublesome but will worth taking note of it :)

Check out my [GitHub](https://github.com/JaenalLeeGenMao/picto-editor) all the files are uploaded there 😊.
