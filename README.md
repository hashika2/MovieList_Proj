# MovieList_Proj
movie application

Create React App Build Status PRs Welcome
Logo

Create React apps with no build configuration.

Creating an App – How to create a new app.
User Guide – How to develop apps bootstrapped with Create React App.
Create React App works on macOS, Windows, and Linux.
If something doesn’t work, please file an issue.
If you have questions or need help, please ask in GitHub Discussions.

Quick Overview
npx create-react-app movie-font
cd movie-font
npm start
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.

(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

Then open http://localhost:3000/ to see your app.
When you’re ready to deploy to production, create a minified bundle with npm run build.


## Backend

Setup
Setting up a new project is quite simple with the Nest CLI. With npm installed, you can create a new Nest project with the following commands in your OS terminal:

$ npm i -g @nestjs/cli
$ nest new project-name
info Hint To create a new project with TypeScript's strict mode enabled, pass the --strict flag to the nest new command.

The project-name directory will be created, node modules and a few other boilerplate files will be installed, and a src/ directory will be created and populated with several core files.

src
app.controller.spec.ts
app.controller.ts
app.module.ts
app.service.ts
main.ts
