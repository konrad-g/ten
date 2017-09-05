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
On OS X / Linux  
`npm run start`  
  
On Windows  
`npm run start-win`

## Start application in production mode
On OS X / Linux  
`npm run start-prod`  
  
On Windows  
`npm run start-prod-win`

## Run tests
Run all tests: `npm run test-all`  
Run client tests: `npm run test-client`  
Run server tests: `npm run test-server` 
  
Client tests configuration is in `karma.conf.js`  


## Create development dependencies
`gulp dev`

## Create minimised production dependencies
`gulp prod`

## Watch TypeScript and SCSS changes
`gulp watch-ts-scss`

## Transpile client TypeScript and all SCSS  
`gulp transpile-client-ts`  
`gulp transpile-all-scss`  

## Style and scripts imports
Put all imports you want to use in `gulpfile.js`. Then simply run `gulp dev` or `gulp prod`.  
In development mode you will get all your imports as separate entries so they will be easy to debug.  
In production mode all your imports will be put together and minified to single .js and .css file so that they are as small as possible and fast to load.

## Architecture
Both client and server consist of modular structure. 
That means certain folder structure:

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
`common` - Usually custom helpers and libraries commonly used by elements.  
`elements` - Independent elements. It means that they don't depend on any other elements or application source code or asset. They can only depend on libraries used by project or on helper files in `common` folder. It makes them independent from this project, which means they can be reused in other applications by other people easily.   
