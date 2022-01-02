import { expect } from "chai";
import { AppClient } from "../../src/client/app/AppClient";

describe("AppClient", () => {
  let appClient
  let toastBtn

  beforeEach(function () {
    // Set view
    toastBtn = document.createElement("button");
    toastBtn.id = "showToast"
    toastBtn.innerHTML = "Show toast"
    document.body.append(toastBtn)

    // Init client
    appClient = new AppClient()
    appClient.start()
  })

  afterEach(function () {
    appClient = null
    toastBtn = null
  })

  it("toast button works", function () {
    // Given toast button
    // When we press it
    toastBtn.eq(0).trigger("click")

    // Then toast appears
    var toasts = document.body.querySelectorAll(".dj-toast")
    expect(toasts.length).not.eq(0)
  })
})
