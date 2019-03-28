(function() {
    'use strict';

    /* UTILITY FUNCTIONS */
    function $(what) {
        return document.querySelector(what);
    }

    /* GLOBAL VALUES */

    // List of directories for use in file loading operations
    const dirNames  = ['../css/', '../config/', '../web/', '../docs/'];

    /* MAIN CODE BEGINS HERE */

    // Wait for dom to be finished loading
    document.addEventListener('DOMContentLoaded', function() {
        // Linking the initial master file
        let linkStyle = function(style) {
            let styleSheet = dirNames[0] + style + '.css';
            let styleSheetLink = document.createElement('link');

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
                console.log('Loaded');
                $('body').classList.add('loaded');
            }, 3000);
        }

        init();
    }, false);

})();
