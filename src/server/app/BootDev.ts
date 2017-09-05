#!/usr/bin/env node
import {AppServer} from "./main/AppServer";

var isProduction = false;
var mainApp = new AppServer(isProduction);
mainApp.start();
