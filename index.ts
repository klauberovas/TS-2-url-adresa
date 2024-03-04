console.log('Hello world!');

interface Url {
  protocol: string;
  subdomain?: string;
  domainName: string;
  topLevelDomain: string;
  port?: number;
  path: string;
  query?: string;
  parameters?: string;
  fragment?: string;
}

const googleUrl: Url = {
  protocol: 'https',
  subdomain: 'www',
  domainName: 'google',
  topLevelDomain: 'com',
  path: '',
};

const seznamUrl: Url = {
  protocol: 'https',
  subdomain: 'www',
  domainName: 'seznam',
  topLevelDomain: 'cz',
  path: '',
};

const url: Url = {
  protocol: 'https',
  subdomain: 'www',
  domainName: 'google',
  topLevelDomain: 'com',
  path: 'search',
  query: '?',
  parameters:
    'q=pes&sca_esv=231e97aa2d205226&sxsrf=ACQVn09tEQrv8LN4HZVhN8YgOWHDD9B86Q%3A1709543350825&source=hp&ei=to_lZenLL7-B9u8P4L-D2AY&iflsig=ANes7DEAAAAAZeWdxpmUBlb2aKDwtYBqdIdVX4bftRMv&udm=&ved=0ahUKEwjp_pqhodqEAxW_gP0HHeDfAGsQ4dUDCBU&uact=5&oq=pes&gs_lp=Egdnd3Mtd2l6IgNwZXMyCBAuGLEDGIAEMgUQABiABDIFEAAYgAQyCBAuGIAEGNQCMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESM8MUIwJWMYLcAF4AJABAJgBS6AB3gGqAQEzuAEDyAEA-AEBmAIEoALxAagCCsICBxAjGOoCGCfCAgcQLhjqAhgnwgIKECMYgAQYigUYJ8ICBBAjGCfCAgsQLhiABBjHARjRA8ICBBAAGAPCAggQABiABBixA8ICDhAuGMcBGLEDGNEDGIAEwgIIEC4YgAQYsQOYAwWSBwE0&sclient=gws-wiz',
};

console.log('příklad url adresy: ', googleUrl);

const formatUrl = (url: Url): string => {
  const {
    protocol,
    subdomain,
    domainName,
    topLevelDomain,
    port,
    path,
    query,
    parameters,
    fragment,
  } = url;

  let urlAddress: string = `${protocol}://`;

  if (subdomain) urlAddress += `${subdomain}.`;
  urlAddress += `${domainName}.${topLevelDomain}`;
  if (port) urlAddress += `:${port}.`;
  if (path) urlAddress += `/${path}`;
  if (query) urlAddress += `${query}`;
  if (parameters) urlAddress += `${parameters}`;
  if (fragment) urlAddress += `#${fragment}`;
  return urlAddress;
};

console.log('Url adresa: ', formatUrl(googleUrl));
console.log('Url adresa: ', formatUrl(seznamUrl));
console.log('Url adresa: ', formatUrl(url));

//BONUS

const parseUrl = (urlAddress: string): Url | null => {
  const [protocol, urlWithoutProtocol] = urlAddress.split('://');
  if (protocol !== 'http' && protocol !== 'https') {
    return null;
  }

  const parts: string[] = urlWithoutProtocol.split('/');
  if (urlWithoutProtocol.split('.').length < 2) {
    return null;
  }

  const domainParts: string[] = parts[0].split('.');
  const subdomain: string = domainParts[0];
  const domainName: string = domainParts[1];

  const url: Url = {
    protocol: protocol,
    subdomain: subdomain,
    domainName: domainName,
    topLevelDomain: '',
    path: '',
  };

  //výskyt portu
  if (urlWithoutProtocol.indexOf(':') !== -1) {
    const portElm: string = urlWithoutProtocol.split(':')[1];
    url.port = Number(portElm.split('/')[0]);
    if (domainParts.length > 2) {
    }
  }

  //TLD
  if (domainParts.length === 4) {
    url.topLevelDomain = domainParts[3].split(':')[0];
  } else url.topLevelDomain = domainParts[2];

  //výskyt cesty
  const pathParts: string = parts[1];
  if (parts.length >= 2) {
    //v případě výskytu query
    const queryIndex: number = pathParts.indexOf('?');
    if (queryIndex !== -1) {
      url.path = pathParts.slice(0, queryIndex);
      url.query = '?';
      url.parameters = pathParts.split('?')[1].slice(0);

      //v případě výskytu fragmentu
      const fragmentIndex: number = pathParts.indexOf('#');
      if (fragmentIndex !== -1) {
        url.fragment = pathParts.split('#')[1].slice(0);
      }
    } else url.path = pathParts;
  }

  return url;
};

console.log('objekt www.google.com', parseUrl('https://www.google.com'));
console.log(
  'Objekt : https://www.google.com/search ',
  parseUrl('https://www.google.com/search'),
);
console.log(
  'Objekt url adresy: ',
  parseUrl(
    'https://www.google.com/search?q=pes&sca_esv=231e97aa2d205226&sxsrf=ACQVn09tEQrv8LN4HZVhN8YgOWHDD9B86Q%3A1709543350825&source=hp&ei=to_lZenLL7-B9u8P4L-D2AY&iflsig=ANes7DEAAAAAZeWdxpmUBlb2aKDwtYBqdIdVX4bftRMv&udm=&ved=0ahUKEwjp_pqhodqEAxW_gP0HHeDfAGsQ4dUDCBU&uact=5&oq=pes&gs_lp=Egdnd3Mtd2l6IgNwZXMyCBAuGLEDGIAEMgUQABiABDIFEAAYgAQyCBAuGIAEGNQCMgUQLhiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESM8MUIwJWMYLcAF4AJABAJgBS6AB3gGqAQEzuAEDyAEA-AEBmAIEoALxAagCCsICBxAjGOoCGCfCAgcQLhjqAhgnwgIKECMYgAQYigUYJ8ICBBAjGCfCAgsQLhiABBjHARjRA8ICBBAAGAPCAggQABiABBixA8ICDhAuGMcBGLEDGNEDGIAEwgIIEC4YgAQYsQOYAwWSBwE0&sclient=gws-wiz',
  ),
);
console.log(
  'Objekt pro https://video.google.co.uk:80/videoplay?docid=-7234293487129834&hl=en#00h02m30s ',
  parseUrl(
    'https://video.google.co.uk:80/videoplay?docid=-7234293487129834&hl=en#00h02m30s',
  ),
);
