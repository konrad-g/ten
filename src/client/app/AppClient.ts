/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../elements/toast/Toast.ts" />

class AppClient {

  initiated = false;
  toastLogger: Toast;

  constructor() { 
  }

  start() {

    if (this.initiated) return;
    this.initiated = true;

    var self = this;

    var toastParent = $("body");
    self.toastLogger = new Toast(toastParent);

    $("#showToast").click(function () {

      var results = 5;
      var executeToast = results * Math.random();

      if (executeToast < 1) {
        self.toastLogger.showInfo("This is info. It is really long and it doesn't really fit into this small toast", "This is info message");
      } else if (executeToast < 2) {
        self.toastLogger.showWarning("This is warning", "This is warning message.");
      } else if (executeToast < 3) {
        self.toastLogger.showSuccess("Success", "You made it. Congratulations!");
      } else if (executeToast < 4) {
        self.toastLogger.showError("This is error", "This is error message.");
      } else if (executeToast <= 5) {
        self.showMultipleToasts();
      }
    });
  }

  showMultipleToasts() {
    this.toastLogger.showInfo("This is info", "This is info message");
    this.toastLogger.showSuccess("Success", "You made it. Congratulations!");
    this.toastLogger.showWarning("This is warning", "This is warning message");
    this.toastLogger.showError("This is error", "This is error message");
  }
}

// Boot
$(function () {
  var app = new AppClient();
  app.start();
});
