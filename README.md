# Starter app for TEN stack: TypeScript + Express + Node.js

## Used technologies:
- Node.JS + Cluster
- TypeScript
- Express
- SCSS

## How to install
`npm install -g gulp`  
`npm install`  
`cd client-libs`
`npm install`

## Start application in development mode  

`npm run start`  

## Start application in production mode  

`npm run start-prod`  
  
## Run tests
Run client Storybook tests: `npm run storybook`  
Run server tests: `npm run test-server` 

## Create development dependencies
`npm run build-client-dev`  

## Create minimised production dependencies
`npm run build-client`  

## Watch client files, and rebuild them on change  
`npm run dev-client`

## To automatically format code  
`npm run format-code`  

## The best way to develop
Open two terminal windows, in one, start development server with:  
`npm run start`  
  
In another, start rebuilding client files on change:  
`npm run dev-client`  
  
Now open your app in a browser and start developing. The app will automatically refresh on any changes.  

## To deploy to production
1. Build production client files with: `npm run build-client`  
2. Start the app in production mode with: `npm run start-prod`. You can for example use [PM2](https://github.com/Unitech/pm2), in order to run it continuously.  

## Architecture
All client libraries are located in `client-libs`.  
Both client and server consist of modular structure. That means certain folder order:  

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
`elements` - Independent elements. It means that they don't depend on any other elements or application source code or assets. They can only depend on libraries used by project. It makes them independent from this project, which means that they can be reused in other applications easily.   
