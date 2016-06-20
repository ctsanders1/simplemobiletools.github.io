function checkRedirect(url) {
    if(navigator.userAgent.toLowerCase().indexOf("android") > -1) {
        if (url) {
            var pkgName = url.substring(url.lastIndexOf('=') + 1);
            window.location.href = "market://details?id=" + pkgName;
        } else {
            window.location.href = "market://search?q=pub:Simple+Mobile+Tools";
        }
        return false;
    }
    return true;
}

