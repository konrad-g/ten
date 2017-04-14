/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />

enum TypeToast {
  INFO,
  WARNING,
  ERROR
}

class Toast {

  private static instance: Toast;

  private static FADE_MS = 400;
  private REMOVE_TIME_MS = 10000;

  private parent: any;
  private duration;

  constructor(parent: any) {
    this.parent = parent;
    this.duration = this.REMOVE_TIME_MS;
  }

  public showSuccess(title: string, message: string) {
    var text: string = this.getCustomToast(title, message, "success");
    var toast: any = this.addToast(text);
  }

  public showInfo(title: string, message: string) {
    var text: string = this.getCustomToast(title, message, "info");
    var toast: any = this.addToast(text);
  }

  public showWarning(title: string, message: string) {
    var text: string = this.getCustomToast(title, message, "warning");
    var toast: any = this.addToast(text);
  }

  public showError(title: string, message: string) {
    var text: string = this.getCustomToast(title, message, "error");
    var toast: any = this.addToast(text);
  }

  private getCustomToast(title: string, message: string, type: string): string {
    var text: string =
      '<div class="dj-toast"><div class="dj-toast-icon-' + type + '"></div>' +
      '<div class="dj-toast-text"><div class="dj-toast-title">' +
      title + '</div><div class="dj-toast-message">' +
      message + '</div></div></div>';
    return text;
  }

  private addToast(toastHtml: string): any {

    var _this = this;

    var container: any = this.getContainer();
    var toast: any = $(toastHtml);
    toast.hide();
    toast.appendTo(container);

    // Add close button
    var closeBtn: any = $('<div class="dj-toast-icon-close"></div>');
    closeBtn.appendTo(toast);

    closeBtn.on("pointerdown", function () {
      _this.removeToast(toast)
    });
    setTimeout(function () {
      _this.removeToast(toast)
    }, _this.duration);

    toast.fadeIn(Toast.FADE_MS);

    return toast;
  }

  private getContainer(): any {

    if ($(".dj-toast-container").length == 0) {
      // Container doesn't exist
      this.parent.append("<div class=\"dj-toast-container\"></div>");
    }

    return $(".dj-toast-container");
  }

  private removeToast(toast: any) {

    toast.fadeOut(Toast.FADE_MS, function () {
        toast.remove();
      }
    );
  }
}
