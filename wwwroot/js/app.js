function upperCaseF(options) {
    setTimeout(function () {
        options.value = options.value.toUpperCase();
    }, 1);
}
function getBaseUrl() {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    return baseUrl;
}