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
