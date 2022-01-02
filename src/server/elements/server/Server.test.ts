import { expect } from "chai"
import { Server } from "../../../../src/server/elements/server/Server"

describe("AppServer", function () {
  var app

  beforeEach(function () {
    app = new Server(false)
  })

  afterEach(function () {
    app = null
  })

  it("express exists", function () {
    expect(app.getExpress()).to.not.equal(null)
    expect(app.getExpress()).to.not.equal(undefined)
  })

  it("listener exists", function () {
    expect(app.appListener).to.not.equal(null)
    expect(app.appListener).to.not.equal(undefined)
  })
})
