# Iron Yard Front End Boilerplate


## Installation

- `cd ~/dev`
- `git clone git@github.com:theironyard-frontend-nashville/frontend-boilerplate.git <projectname>` replacing <projectname> with your own project name.
- `cd <projectname>`
- `rm -rf .git`
- `git init`
-  Create a new repo on Github.com and [add the remote](https://help.github.com/articles/adding-a-remote/).

- `npm install`
  - This will install the node dependencies for you, and will also install any bower components.
  - This will also run the gulp build process to create the dist folder.


## Listening for file changes:

If you have any scss or js files that you want to automatically transpile, then run the command:
`gulp watch`


## Build and watch

If you would like to build the `dist/` folder and then watch for file changes, then run the command:
`gulp`

This will run:
- watch
- lint
- babel
- sass

## Lint (JSCS) our Javascript

If you want to validate your Javascript code and it's style against the AirBnb style guide, then run the command:
`gulp lint`

## Compile SASS

If you want to compile your SASS (.scss files), then run the command:
`gulp sass`

## Transpile ES6 code to ES5

If you want to compile your ES6/ES7 (ES2015/17) Javascript code to ES5 to use new Javascript features now before the browser supports them, then run this command:
`gulp babel`

## Deploy your project to GitHub Pages

If you want to deploy your project (dist folder) to GitHub pages, then run this command:
`gulp deploy`
