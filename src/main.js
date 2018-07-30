const platform = {};

if (typeof window !== 'undefined') {
    const ua = navigator.userAgent.toLowerCase();

    platform.browser = true;
    if ("ActiveXObject" in window) {
        platform.msie = true;
        platform.windows = true;
    } else if ("-ms-user-select" in document.documentElement.style) {
        platform.edge = true;
        platform.windows = true;
    } else if ("-moz-user-select" in document.documentElement.style) {
        platform.firefox = true;
        if (ua.indexOf('tablet') !== -1) {
            platform.tablet = true;
        } else if (ua.indexOf('mobile') !== -1) {
            platform.mobile = true;
        } else {
            platform.desktop = true;
        }
    } else if (window.opera) {
        platform.opera = true;
        if (ua.indexOf('opera mini') !== -1 || ua.indexOf('opera mobi') !== -1) {
            platform.mobile = true;
        } else {
            platform.desktop = true;
        }
    } else if (ua.indexOf('webkit') !== -1) {
        if (ua.indexOf('chromium') !== -1) {
            platform.chrome = true;
        } else if (ua.indexOf('chrome') !== -1) {
            platform.chrome = true;
        } else if (ua.indexOf('safari') !== -1) {
            platform.safari = true;
        }

        if (ua.indexOf('ipad') !== -1) {
            platform.ios = true;
            platform.tablet = true;
        } else if (ua.indexOf('iphone') !== -1) {
            platform.ios = true;
            platform.mobile = true;
        } else if (ua.indexOf('android') !== -1) {
            platform.android = true;
            if (ua.indexOf('tablet') !== -1) {
                platform.tablet = true;
            } else {
                platform.mobile = true;
            }
        } else if (ua.indexOf('macintosh') !== -1) {
            platform.mac = true;
            platform.desktop = true;
        } else if (ua.indexOf('windows') !== -1) {
            platform.windows = true;
            platform.desktop = true;
        } else if (ua.indexOf('linux') !== -1) {
            platform.linux = true;
        }

        platform.webkit = true;
    }
    
    platform.enableClasses = () => {
        const targets = [];
        for (const key in platform) {
            if (typeof platform[key] === 'boolean') {
                targets.push(key);
            }
        }

        const root = document.documentElement;
        root.className += targets.join(" ");
    }
} else if (typeof Java !== "undefined" && String(Java) === "[object Java]") {
    platform.nashorn = true;
} else if (typeof java !== "undefined" && String(java) === "[JavaPackage java]") {
    platform.rhino = true;
} else if (typeof process !== "undefined") {
    platform.nodejs = true;
}

export default platform;