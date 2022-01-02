# Starter app for TEN stack: TypeScript + Express + Node.js

## Used technologies:
- Node.JS + Cluster
- TypeScript
- Express
- SCSS

## How to install
`npm install -g gulp`  
`npm install`  
`bower install`

## Start application in development mode  

`npm run start`  

## Start application in production mode  

`npm run start-prod`  
  
## Run tests
Run all tests: `npm run test-all`  
Run client Storybook tests: `npm run storybook`  
Run server tests: `npm run test-server` 
  
Client tests configuration is in `karma.conf.js`  

## Create development dependencies
`npm run build-client-dev`  

## Create minimised production dependencies
`npm run build-client`  

## Watch client files changes
`npm run dev-client`

## To automatically format code  
`npm run format-code`  

## Style and scripts imports
Put all imports you want to use in `gulpfile.js`. Then simply run `gulp dev` or `gulp prod`.  
In development mode you will get all your imports as separate entries so they will be easy to debug.  
In production mode all your imports will be put together and minified to single .js and .css file so that they are as small as possible and fast to load.

## Architecture
Both client and server consist of modular structure.  
That means certain folder order:

```
src/  
├── client/  
│   ├── app/  
│   └── elements/  
│   
└── server/  
    ├── app/  
    └── elements/  
```    

Folders functions:  
`app` - Consist of main application, server or client. It basically wires all elements together.   
`elements` - Independent elements. It means that they don't depend on any other elements or application source code or assets. They can only depend on libraries used by project. It makes them independent from this project, which means they can be reused in other applications easily.   
