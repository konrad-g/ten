#!/usr/bin/env node
import {AppServer} from "./main/AppServer";

var isProduction = true;
var mainApp = new AppServer(isProduction);
mainApp.start();
