#!/usr/bin/env node
import { Server } from "../elements/server/Server"

const isProduction = true
const mainApp = new Server(isProduction)
mainApp.start()
