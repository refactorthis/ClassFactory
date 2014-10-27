var ClassFactory = (function () {

    'use strict';

    function extendPrototype(Constructor, properties) {
        for (var prop in properties) {
            if (properties.hasOwnProperty(prop) && prop !== 'init' && typeof (properties[prop]) === 'function') {
                Constructor.prototype[prop] = properties[prop];
            }
        }
    }

    function createConstructor(properties) {
        return function Constructor(args) {
            if (typeof properties.init !== 'undefined') {
                properties.init.call(this);
            }

            // extend instance
            for (var prop in args) {
                if (args.hasOwnProperty(prop)) {
                    this[prop] = args[prop];
                }
            }
        };
    }

    return {
        create: function create(properties) {
            var ctr = createConstructor(properties);
            extendPrototype(ctr, properties);
            return ctr;
        },
        extend: function extend(SuperClass, properties) {
            var ctr = createConstructor(properties);
            ctr.prototype = new SuperClass(properties);
            ctr.prototype.constructor = SuperClass;
            return ctr;
        }
    };
})();
