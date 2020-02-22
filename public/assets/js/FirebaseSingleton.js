var FirebaseSingleton = (function () {
    var instance;
 
    function createInstance() {

    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();