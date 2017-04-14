var AppClient = (function () {
    function AppClient() {
        this.initiated = false;
    }
    AppClient.prototype.constructior = function () {
    };
    AppClient.prototype.start = function () {
        if (this.initiated)
            return;
        this.initiated = true;
        var self = this;
        var toastParent = $("body");
        self.toastLogger = new Toast(toastParent);
        $("#showToast").click(function () {
            var results = 5;
            var executeToast = results * Math.random();
            if (executeToast < 1) {
                self.toastLogger.showInfo("This is info. It is really long and it doesn't really fit into this small toast", "This is info message");
            }
            else if (executeToast < 2) {
                self.toastLogger.showWarning("This is warning", "This is warning message.");
            }
            else if (executeToast < 3) {
                self.toastLogger.showSuccess("Success", "You made it. Congratulations!");
            }
            else if (executeToast < 4) {
                self.toastLogger.showError("This is error", "This is error message.");
            }
            else if (executeToast <= 5) {
                self.showMultipleToasts();
            }
        });
    };
    AppClient.prototype.showMultipleToasts = function () {
        this.toastLogger.showInfo("This is info", "This is info message");
        this.toastLogger.showSuccess("Success", "You made it. Congratulations!");
        this.toastLogger.showWarning("This is warning", "This is warning message");
        this.toastLogger.showError("This is error", "This is error message");
    };
    return AppClient;
}());
$(function () {
    var app = new AppClient();
    app.start();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9BcHBDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFBQTtRQUVFLGNBQVMsR0FBRyxLQUFLLENBQUM7SUF5Q3BCLENBQUM7SUF0Q0MsZ0NBQVksR0FBWjtJQUNBLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBRUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUVwQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUUzQyxFQUFFLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsaUZBQWlGLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUN2SSxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQzlFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1lBQzNFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDSCxnQkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUFHRCxDQUFDLENBQUM7SUFDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9BcHBDbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZWxlbWVudHMvdG9hc3QvVG9hc3QudHNcIiAvPlxuXG5jbGFzcyBBcHBDbGllbnQge1xuXG4gIGluaXRpYXRlZCA9IGZhbHNlO1xuICB0b2FzdExvZ2dlcjogVG9hc3Q7XG5cbiAgY29uc3RydWN0aW9yKCkge1xuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICBpZiAodGhpcy5pbml0aWF0ZWQpIHJldHVybjtcbiAgICB0aGlzLmluaXRpYXRlZCA9IHRydWU7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgdG9hc3RQYXJlbnQgPSAkKFwiYm9keVwiKTtcbiAgICBzZWxmLnRvYXN0TG9nZ2VyID0gbmV3IFRvYXN0KHRvYXN0UGFyZW50KTtcblxuICAgICQoXCIjc2hvd1RvYXN0XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHJlc3VsdHMgPSA1O1xuICAgICAgdmFyIGV4ZWN1dGVUb2FzdCA9IHJlc3VsdHMgKiBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICBpZiAoZXhlY3V0ZVRvYXN0IDwgMSkge1xuICAgICAgICBzZWxmLnRvYXN0TG9nZ2VyLnNob3dJbmZvKFwiVGhpcyBpcyBpbmZvLiBJdCBpcyByZWFsbHkgbG9uZyBhbmQgaXQgZG9lc24ndCByZWFsbHkgZml0IGludG8gdGhpcyBzbWFsbCB0b2FzdFwiLCBcIlRoaXMgaXMgaW5mbyBtZXNzYWdlXCIpO1xuICAgICAgfSBlbHNlIGlmIChleGVjdXRlVG9hc3QgPCAyKSB7XG4gICAgICAgIHNlbGYudG9hc3RMb2dnZXIuc2hvd1dhcm5pbmcoXCJUaGlzIGlzIHdhcm5pbmdcIiwgXCJUaGlzIGlzIHdhcm5pbmcgbWVzc2FnZS5cIik7XG4gICAgICB9IGVsc2UgaWYgKGV4ZWN1dGVUb2FzdCA8IDMpIHtcbiAgICAgICAgc2VsZi50b2FzdExvZ2dlci5zaG93U3VjY2VzcyhcIlN1Y2Nlc3NcIiwgXCJZb3UgbWFkZSBpdC4gQ29uZ3JhdHVsYXRpb25zIVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXhlY3V0ZVRvYXN0IDwgNCkge1xuICAgICAgICBzZWxmLnRvYXN0TG9nZ2VyLnNob3dFcnJvcihcIlRoaXMgaXMgZXJyb3JcIiwgXCJUaGlzIGlzIGVycm9yIG1lc3NhZ2UuXCIpO1xuICAgICAgfSBlbHNlIGlmIChleGVjdXRlVG9hc3QgPD0gNSkge1xuICAgICAgICBzZWxmLnNob3dNdWx0aXBsZVRvYXN0cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd011bHRpcGxlVG9hc3RzKCkge1xuICAgIHRoaXMudG9hc3RMb2dnZXIuc2hvd0luZm8oXCJUaGlzIGlzIGluZm9cIiwgXCJUaGlzIGlzIGluZm8gbWVzc2FnZVwiKTtcbiAgICB0aGlzLnRvYXN0TG9nZ2VyLnNob3dTdWNjZXNzKFwiU3VjY2Vzc1wiLCBcIllvdSBtYWRlIGl0LiBDb25ncmF0dWxhdGlvbnMhXCIpO1xuICAgIHRoaXMudG9hc3RMb2dnZXIuc2hvd1dhcm5pbmcoXCJUaGlzIGlzIHdhcm5pbmdcIiwgXCJUaGlzIGlzIHdhcm5pbmcgbWVzc2FnZVwiKTtcbiAgICB0aGlzLnRvYXN0TG9nZ2VyLnNob3dFcnJvcihcIlRoaXMgaXMgZXJyb3JcIiwgXCJUaGlzIGlzIGVycm9yIG1lc3NhZ2VcIik7XG4gIH1cbn1cblxuLy8gQm9vdFxuJChmdW5jdGlvbiAoKSB7XG4gIHZhciBhcHAgPSBuZXcgQXBwQ2xpZW50KCk7XG4gIGFwcC5zdGFydCgpO1xufSk7XG4iXX0=
