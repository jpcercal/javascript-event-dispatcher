/**
 * EventDispatcher
 *
 * @param Element|null element
 */
var EventDispatcher = function (element) {
    var el = element;

    return {

        /**
         * Dispatch an event.
         *
         * @param  string eventName the event name that will be dispatched.
         * @param  string eventType the event type the default value is "UIEvents".
         *
         * @return EventDispatcher
         */
        'dispatch': function (eventName, eventType) {
            if (document.createEvent) {
                var evt = document.createEvent(typeof eventType === 'undefined' ? 'UIEvents' : eventType);
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
