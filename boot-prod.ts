#!/usr/bin/env node
import {AppServer} from "./src/server/app/AppServer";

var isProduction = true;
var mainApp = new AppServer(isProduction);
mainApp.start();
