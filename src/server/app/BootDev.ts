#!/usr/bin/env node
import { Server } from "../elements/server/Server"

const isProduction = false
const mainApp = new Server(isProduction)
mainApp.start()
