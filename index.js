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
//BONUS
var parseUrl = function (urlAddress) {
    var _a = urlAddress.split('://'), protocol = _a[0], urlWithoutProtocol = _a[1];
    if (protocol !== 'http' && protocol !== 'https') {
        return null;
    }
    var parts = urlWithoutProtocol.split('/');
    if (urlWithoutProtocol.split('.').length < 2) {
        return null;
    }
    var domainParts = parts[0].split('.');
    var subdomain = domainParts[0];
    var domainName = domainParts[1];
    var url = {
        protocol: protocol,
        subdomain: subdomain,
        domainName: domainName,
        topLevelDomain: '',
        path: '',
    };
    //výskyt portu
    if (urlWithoutProtocol.indexOf(':') !== -1) {
        var portElm = urlWithoutProtocol.split(':')[1];
        url.port = Number(portElm.split('/')[0]);
        if (domainParts.length > 2) {
        }
    }
    //TLD
    if (domainParts.length === 4) {
        url.topLevelDomain = domainParts[3].split(':')[0];
    }
    else
        url.topLevelDomain = domainParts[2];
    //výskyt cesty
    var pathParts = parts[1];
    if (parts.length >= 2) {
        //v případě výskytu query
        var queryIndex = pathParts.indexOf('?');
        if (queryIndex !== -1) {
            url.path = pathParts.slice(0, queryIndex);
            url.query = '?';
            url.parameters = pathParts.split('?')[1].slice(0);
            //v případě výskytu fragmentu
            var fragmentIndex = pathParts.indexOf('#');
            if (fragmentIndex !== -1) {
                url.fragment = pathParts.split('#')[1].slice(0);
            }
        }
        else
            url.path = pathParts;
    }
    return url;
};
console.log('objekt www.google.com', parseUrl('https://www.google.com'));
console.log('Objekt : https://www.google.com/search ', parseUrl('https://www.google.com/search'));
console.log('Objekt url adresy: ', parseUrl('https://www.google.com/search?q=pes&sca_esv=231e97aa2d205226&sxsrf=ACQVn09tEQrv8LN4HZVhN8YgOWHDD9B86Q%3A1709543350825&source=hp&ei=to_lZenLL7-B9u8P4L-D2AY&iflsig=ANes7DEAAAAAZeWdxpmUBlb2aKDwtYBqdIdVX4bftRMv&udm=&ved=0ahUKEwjp_pqhodqEAxW_gP0HHeDfAGsQ4dUDCBU&uact=5&oq=pes&gs_lp=Egdnd3Mtd2l6IgNwZXMyCBAuGLEDGIAEMgUQABiABDIFEAAYgAQyCBAuGIAEGNQCMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESM8MUIwJWMYLcAF4AJABAJgBS6AB3gGqAQEzuAEDyAEA-AEBmAIEoALxAagCCsICBxAjGOoCGCfCAgcQLhjqAhgnwgIKECMYgAQYigUYJ8ICBBAjGCfCAgsQLhiABBjHARjRA8ICBBAAGAPCAggQABiABBixA8ICDhAuGMcBGLEDGNEDGIAEwgIIEC4YgAQYsQOYAwWSBwE0&sclient=gws-wiz'));
console.log('Objekt pro https://video.google.co.uk:80/videoplay?docid=-7234293487129834&hl=en#00h02m30s ', parseUrl('https://video.google.co.uk:80/videoplay?docid=-7234293487129834&hl=en#00h02m30s'));
