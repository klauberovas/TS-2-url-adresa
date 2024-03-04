console.log('Hello world!');
var googleUrl = {
    protocol: 'https',
    subdomain: 'www',
    domainName: 'google',
    topLevelDomain: 'com',
    path: '',
};
var seznamUrl = {
    protocol: 'https',
    subdomain: 'www',
    domainName: 'seznam',
    topLevelDomain: 'cz',
    path: '',
};
var url = {
    protocol: 'https',
    subdomain: 'www',
    domainName: 'google',
    topLevelDomain: 'com',
    path: 'search',
    query: '?',
    parameters: 'q=pes&sca_esv=231e97aa2d205226&sxsrf=ACQVn09tEQrv8LN4HZVhN8YgOWHDD9B86Q%3A1709543350825&source=hp&ei=to_lZenLL7-B9u8P4L-D2AY&iflsig=ANes7DEAAAAAZeWdxpmUBlb2aKDwtYBqdIdVX4bftRMv&udm=&ved=0ahUKEwjp_pqhodqEAxW_gP0HHeDfAGsQ4dUDCBU&uact=5&oq=pes&gs_lp=Egdnd3Mtd2l6IgNwZXMyCBAuGLEDGIAEMgUQABiABDIFEAAYgAQyCBAuGIAEGNQCMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESM8MUIwJWMYLcAF4AJABAJgBS6AB3gGqAQEzuAEDyAEA-AEBmAIEoALxAagCCsICBxAjGOoCGCfCAgcQLhjqAhgnwgIKECMYgAQYigUYJ8ICBBAjGCfCAgsQLhiABBjHARjRA8ICBBAAGAPCAggQABiABBixA8ICDhAuGMcBGLEDGNEDGIAEwgIIEC4YgAQYsQOYAwWSBwE0&sclient=gws-wiz',
};
console.log('příklad url adresy: ', googleUrl);
var formatUrl = function (url) {
    var protocol = url.protocol, subdomain = url.subdomain, domainName = url.domainName, topLevelDomain = url.topLevelDomain, port = url.port, path = url.path, query = url.query, parameters = url.parameters, fragment = url.fragment;
    var urlAddress = "".concat(protocol, "://");
    if (subdomain)
        urlAddress += "".concat(subdomain, ".");
    urlAddress += "".concat(domainName, ".").concat(topLevelDomain);
    if (port)
        urlAddress += ":".concat(port, ".");
    if (path)
        urlAddress += "/".concat(path);
    if (query)
        urlAddress += "".concat(query);
    if (parameters)
        urlAddress += "".concat(parameters);
    if (fragment)
        urlAddress += "#".concat(fragment);
    return urlAddress;
};
console.log('Url adresa: ', formatUrl(googleUrl));
console.log('Url adresa: ', formatUrl(seznamUrl));
console.log('Url adresa: ', formatUrl(url));
