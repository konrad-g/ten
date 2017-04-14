import {AppServer} from "../../src/server/app/AppServer";
import {expect} from 'chai';

describe("AppServer", function () {

  var app;

  beforeEach(function () {
    app = new AppServer(false);
  });

  afterEach(function () {
    app = null;
  });

  it("express exists", function () {
    expect(app.getExpress()).to.not.equal(null);
    expect(app.getExpress()).to.not.equal(undefined);
  });

  it("listener exists", function () {
    expect(app.appListener).to.not.equal(null);
    expect(app.appListener).to.not.equal(undefined);
  });
});
