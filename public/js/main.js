(function() {
    'use strict';

    /* UTILITY FUNCTIONS */
    let $ = function(what) {
        return document.querySelector(what);
    }

    /* GLOBAL VALUES */

    // List of directories for use in file loading operations
    const dirNames  = ['../css/', '../config/', '../web/', '../docs/'];

    /* MAIN CODE BEGINS HERE */

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
    }

    init();
})();
