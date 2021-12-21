#!/usr/bin/env node
import {Server} from "../elements/server/Server";

var isProduction = false;
var mainApp = new Server(isProduction);
mainApp.start();
