(function() {

    var EventDispatcher = function (element) {
        var el = element;

        return {
            'dispatch': function (eventName) {
                if (document.createEvent) {
                    var evt = document.createEvent('UIEvents');
                    evt.initEvent(eventName, true, true);
                    el.dispatchEvent(evt);
                } else if (document.createEventObject) {
                    el.fireEvent('on' + eventName);
                } else if (typeof el['on' + eventName] == 'function') {
                    el['on' + eventName]();
                }

                return this;
            }
        };
    };

})();
