// metatrailer for plex
// copyright dev@conceptualspace.net
// absolutely no warranty is expressed or implied

'use strict';

// simple polyfill for ff/chrome
window.browser = (function () {
    return window.browser || window.chrome;
})();

function handleInstalled(details) {
    if (details.reason === "install") {
        // set uninstall URL
        browser.runtime.setUninstallURL("https://forms.gle/6vJPx6eaMV5xuxQk9");
    }
}

browser.runtime.onInstalled.addListener(handleInstalled);
