# Learning-Links

## To-Do
google analytics
regex for https link validation
site content
* ~~Landing Jumbotron~~

*  Images / Links for App section

<hr>

<strong>This project was built using [Turbo360](https://www.turbo360.co). I wouldn't have completed this project as quickly without Dan's guidance. You should definite check out his efforts over at [Turbo360](https://www.turbo360.co).
<strong>

## Instructions
After cloning into repo, cd to project root directory and create a .env file. This file requires a TURBO_APP_ID and SESSION_SECRET keys:

```
TURBO_ENV=dev
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=123abc
```

Then run npm install from the root directory:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```

