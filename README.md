This is my blog!

It uses [Wyam](https://wyam.io/) to generate a static website from markdown files.
There is a build script that wraps the standard Wyam commands:
- `.\build` to build the site
- `.\build server` to run a hot re-loading local web server

I wrote the theme basically from scratch, it's in the `theme` folder.

It is hosted in [Google Firebase](https://firebase.google.com).

Use the firebase CLI: `npm install -g firebase-tools`

To deploy run: `firebase deploy`