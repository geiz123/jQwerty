/**
 * 
 */

// Anonymous function
(function() {
    // Q returns new Library object that hold our selector. Ex: Q('.wrapper')
    var Q = function(params) {
        return new Library(params);
    };

    // In our Library we get our selector with querySelectorAll (we do not support < ie8)
    // We also add selector length, version and twitter/github or whatever you like as information about your library.
    var Library = function(params) {
        // Get params
        var selector = document.querySelectorAll(params),
                i = 0;
        // Get selector length
        this.length = selector.length;
        this.version = '0.1.0';

        // Add selector to object for method chaining
        for (; i < this.length; i++) {
            this[i] = selector[i];
        }

        // Return as object
        return this;
    };

    // Extend the Library object.
    Q.fn = Library.prototype =
            {
                /**
                 * Hide element(s) from DOM
                 * @returns {*}
                 */
                hide: function() {
                    var len = this.length;
                    // Here we simply loop through our object (this) and set the css to display none. 
                    //If you got more that 1 node from DOM selected with querySelectorAll, you would hide them all.
                    while (len--) {
                        this[len].style.display = 'none';
                    }

                    // It's important to return this if you want to chain methods!
                    return this;
                },
                /**
                 * Show element(s) from DOM
                 * @returns {*}
                 */
                show: function() {
                    var len = this.length;
                    while (len--) {
                        this[len].style.display = 'block';
                    }

                    return this;
                },
                sayhello: function() {
                    alert('Hello');
                }
            };

    // Assign our Q object to global window object.
    if (!window.Q) {
        window.Q = Q;
    }
})();
