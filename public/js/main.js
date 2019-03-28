(function() {
    'use strict';

    /* UTILITY FUNCTIONS */
    /* ================= */

    // Get an element based on its selector
    function $(what) {
        return document.querySelector(what);
    }

    /* GLOBAL VALUES */
    /* ============= */

    // List of directories for use in file loading operations
    const dirNames  = ['../css/', '../config/', '../web/', '../docs/'];

    // Version of the app
    const VERSION = "1.0.1";

    /* MAIN CODE BEGINS HERE */
    /* ===================== */

    // Wait for dom to be finished loading
    document.addEventListener('DOMContentLoaded', function() {
        // Linking the initial master file
        let linkStyle = function(style) {
            let styleSheet = dirNames[0] + style + '.css';
            let styleSheetLink = document.createElement('link');

            // Set all the link paremeters
            styleSheetLink.href = styleSheet;
            styleSheetLink.rel = 'stylesheet';
            styleSheetLink.type = 'text/css';

            document.head.appendChild(styleSheetLink);
        }

        /* MAIN INITIALIZATION */
        let init = function() {
            linkStyle('master');
            linkStyle('anims/main');

            // Loader spinner
            setTimeout(function() {
                $('body').classList.add('loaded');
                $('body').classList.add('changed');
            }, 3000);

            // Set the Version
            $('#version').innerHTML = VERSION;
        }

        // Initialize with default CSS
        init();
    }, false);

})();
