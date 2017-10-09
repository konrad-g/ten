var AppClient = (function () {
    function AppClient() {
        this.initiated = false;
    }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9BcHBDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFLRTtRQUhBLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJbEIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFFRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXBCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLFlBQVksR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTNDLEVBQUUsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxpRkFBaUYsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3ZJLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLDBCQUEwQixDQUFDLENBQUM7WUFDOUUsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLCtCQUErQixDQUFDLENBQUM7WUFDM0UsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLHdCQUF3QixDQUFDLENBQUM7WUFDeEUsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQUdELENBQUMsQ0FBQztJQUNBLElBQUksR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDMUIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2QsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL0FwcENsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9lbGVtZW50cy90b2FzdC9Ub2FzdC50c1wiIC8+XG5cbmNsYXNzIEFwcENsaWVudCB7XG5cbiAgaW5pdGlhdGVkID0gZmFsc2U7XG4gIHRvYXN0TG9nZ2VyOiBUb2FzdDtcblxuICBjb25zdHJ1Y3RvcigpIHsgXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIGlmICh0aGlzLmluaXRpYXRlZCkgcmV0dXJuO1xuICAgIHRoaXMuaW5pdGlhdGVkID0gdHJ1ZTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciB0b2FzdFBhcmVudCA9ICQoXCJib2R5XCIpO1xuICAgIHNlbGYudG9hc3RMb2dnZXIgPSBuZXcgVG9hc3QodG9hc3RQYXJlbnQpO1xuXG4gICAgJChcIiNzaG93VG9hc3RcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgcmVzdWx0cyA9IDU7XG4gICAgICB2YXIgZXhlY3V0ZVRvYXN0ID0gcmVzdWx0cyAqIE1hdGgucmFuZG9tKCk7XG5cbiAgICAgIGlmIChleGVjdXRlVG9hc3QgPCAxKSB7XG4gICAgICAgIHNlbGYudG9hc3RMb2dnZXIuc2hvd0luZm8oXCJUaGlzIGlzIGluZm8uIEl0IGlzIHJlYWxseSBsb25nIGFuZCBpdCBkb2Vzbid0IHJlYWxseSBmaXQgaW50byB0aGlzIHNtYWxsIHRvYXN0XCIsIFwiVGhpcyBpcyBpbmZvIG1lc3NhZ2VcIik7XG4gICAgICB9IGVsc2UgaWYgKGV4ZWN1dGVUb2FzdCA8IDIpIHtcbiAgICAgICAgc2VsZi50b2FzdExvZ2dlci5zaG93V2FybmluZyhcIlRoaXMgaXMgd2FybmluZ1wiLCBcIlRoaXMgaXMgd2FybmluZyBtZXNzYWdlLlwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXhlY3V0ZVRvYXN0IDwgMykge1xuICAgICAgICBzZWxmLnRvYXN0TG9nZ2VyLnNob3dTdWNjZXNzKFwiU3VjY2Vzc1wiLCBcIllvdSBtYWRlIGl0LiBDb25ncmF0dWxhdGlvbnMhXCIpO1xuICAgICAgfSBlbHNlIGlmIChleGVjdXRlVG9hc3QgPCA0KSB7XG4gICAgICAgIHNlbGYudG9hc3RMb2dnZXIuc2hvd0Vycm9yKFwiVGhpcyBpcyBlcnJvclwiLCBcIlRoaXMgaXMgZXJyb3IgbWVzc2FnZS5cIik7XG4gICAgICB9IGVsc2UgaWYgKGV4ZWN1dGVUb2FzdCA8PSA1KSB7XG4gICAgICAgIHNlbGYuc2hvd011bHRpcGxlVG9hc3RzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93TXVsdGlwbGVUb2FzdHMoKSB7XG4gICAgdGhpcy50b2FzdExvZ2dlci5zaG93SW5mbyhcIlRoaXMgaXMgaW5mb1wiLCBcIlRoaXMgaXMgaW5mbyBtZXNzYWdlXCIpO1xuICAgIHRoaXMudG9hc3RMb2dnZXIuc2hvd1N1Y2Nlc3MoXCJTdWNjZXNzXCIsIFwiWW91IG1hZGUgaXQuIENvbmdyYXR1bGF0aW9ucyFcIik7XG4gICAgdGhpcy50b2FzdExvZ2dlci5zaG93V2FybmluZyhcIlRoaXMgaXMgd2FybmluZ1wiLCBcIlRoaXMgaXMgd2FybmluZyBtZXNzYWdlXCIpO1xuICAgIHRoaXMudG9hc3RMb2dnZXIuc2hvd0Vycm9yKFwiVGhpcyBpcyBlcnJvclwiLCBcIlRoaXMgaXMgZXJyb3IgbWVzc2FnZVwiKTtcbiAgfVxufVxuXG4vLyBCb290XG4kKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFwcCA9IG5ldyBBcHBDbGllbnQoKTtcbiAgYXBwLnN0YXJ0KCk7XG59KTtcbiJdfQ==
