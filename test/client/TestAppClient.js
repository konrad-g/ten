describe("AppClient", function () {
  var app
  var bodyView
  var toastBtn

  beforeEach(function () {
    // Set view
    bodyView = $(document.body)
    toastBtn = $("<button id='showToast'>Show toast</button>")
    bodyView.append(toastBtn)

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
    var toasts = $(bodyView).find(".dj-toast")
    expect(toasts.length).not.toBe(0)
  })
})
