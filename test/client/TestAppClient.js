describe("AppClient", () => {
  let app
  let toastBtn

  beforeEach(function () {
    // Set view
    toastBtn = document.createElement("button");
    toastBtn.id = "showToast"
    toastBtn.innerHTML = "Show toast"
    document.body.append(toastBtn)

    // Init client
    app = new AppClient()
    app.start()
  })

  afterEach(function () {
    app = null
    bodyView = null
    toastBtn = null
  })

  it("toast button works", function () {
    // Given toast button
    // When we press it
    toastBtn.eq(0).trigger("click")

    // Then toast appears
    var toasts = document.body.querySelector(".dj-toast")
    expect(toasts.length).not.toBe(0)
  })
})
