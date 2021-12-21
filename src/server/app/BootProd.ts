#!/usr/bin/env node
import {Server} from "../elements/server/Server";

var isProduction = true;
var mainApp = new Server(isProduction);
mainApp.start();
