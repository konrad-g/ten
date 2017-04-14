#!/usr/bin/env node
import {AppServer} from "./src/server/app/AppServer";

var isProduction = false;
var mainApp = new AppServer(isProduction);
mainApp.start();
