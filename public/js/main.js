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
    const dirNames  = ['css/', 'config/', 'web/', 'docs/'];
    const dirUp = '../';

    // Version of the app
    const VERSION = "1.0.2";

    /* MAIN CODE BEGINS HERE */
    /* ===================== */

    // Wait for dom to be finished loading
    document.addEventListener('DOMContentLoaded', function() {
        // Linking the initial master file
        let linkStyle = function(style) {
            let styleSheet = style + '.css';
            let styleSheetLink = document.createElement('link');

            // Set all the link paremeters
            styleSheetLink.href = styleSheet;
            styleSheetLink.rel = 'stylesheet';
            styleSheetLink.type = 'text/css';

            document.head.appendChild(styleSheetLink);
        }

        /* MAIN INITIALIZATION */
        let init = function() {
            // Check the resolution for the mobile version
            let width = window.screen.width * window.devicePixelRatio;

            // Check if we're running in an iframe or is it the main page
            if(window.self !== window.top) {
                linkStyle(dirUp + dirUp + dirUp + 'css/master');
                linkStyle(dirUp + dirUp + dirUp + 'css/anims/main');

                if(width < 640) {
                    linkStyle(dirUp + dirUp + dirUp + 'css/mobile/master');
                }
            } else {
                linkStyle(dirUp + 'css/master');
                linkStyle(dirUp + 'css/anims/main');

                if(width < 640) {
                    linkStyle(dirUp + 'css/mobile/master');
                }
            }

            // Check the location of the document to load any additional css
            let loc = window.location.pathname;
            let dir = loc.substring(0, loc.lastIndexOf('/'));
            console.log(dir);

            // Regular Webpages
            if(dir == "/web/main") {
                linkStyle(dirUp + dirUp + dirUp + 'css/ui/web/primary');
            }

            // Loader spinner
            setTimeout(function() {
                $('body').classList.add('loaded');
                $('body').classList.add('changed');
            }, 3000);

            // Set the Version
            if($('#version')) {
                $('#version').innerHTML = VERSION;
            }
        }

        // Initialize with default CSS
        init();
    }, false);

})();
