const platform = {};

if (typeof window !== 'undefined') {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('edge') !== -1) {
        platform.edge = true;
    } else if (ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1) {
        platform.msie = true;
    } else if (ua.indexOf('opera') !== -1) {
        platform.opera = true;
    } else if (ua.indexOf('webkit') !== -1) {
        platform.webkit = true;
        if (ua.indexOf('opr') !== -1) {
            platform.opera = true;
            platform.blink = true;
        } else if (ua.indexOf('chromium') !== -1) {
            platform.blink = true;
        } else if (ua.indexOf('chrome') !== -1) {
            platform.chrome = true;
            platform.blink = true;
        } else if (ua.indexOf('safari') !== -1) {
            platform.safari = true;
        }
    } else if (ua.indexOf('firefox') !== -1) {
        platform.firefox = true;
    } else if ('ActiveXObject' in window) {
        platform.msie = true;
    } else if ('-ms-user-select' in document.documentElement.style) {
        platform.edge = true;
    } else if ('-moz-user-select' in document.documentElement.style) {
        platform.firefox = true;
    } else if (window.opera) {
        platform.opera = true;
    } else if (window.chrome) {
        platform.chrome = true;
        platform.webkit = true;
        platform.blink = true;
    }

    if (ua.indexOf('ipad') !== -1) {
        platform.ios = true;
        platform.tablet = true;
    } else if (ua.indexOf('iphone') !== -1) {
        platform.ios = true;
        platform.mobile = true;
    } else if (ua.indexOf('macintosh') !== -1) {
        platform.macos = true;
    } else if (ua.indexOf('windows') !== -1) {
        platform.windows = true;
        if (ua.indexOf('phone') !== -1) {
            platform.mobile = true;
        }
    } else if (ua.indexOf('android') !== -1) {
        platform.android = true;
        if (ua.indexOf('tablet') !== -1) {
            platform.tablet = true;
        } else {
            platform.mobile = true;
        }
    }
    
    const targets = [];
    for (const key in platform) {
        if (typeof platform[key] === 'boolean') {
            targets.push(key);
        }
    }
    document.documentElement.className += targets.join(' ');
}

export default platform;