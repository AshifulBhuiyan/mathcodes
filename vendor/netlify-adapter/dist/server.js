import { App, deserializeManifest } from 'astro/app';

const clientAddressSymbol = Symbol.for('astro.clientAddress');

function createRequestFromEvent(event) {
  const { headers = {}, rawUrl, path, httpMethod = 'GET', body, isBase64Encoded } = event;
  const url = rawUrl || new URL(path || '/', `https://${headers.host || 'localhost'}`).toString();
  const init = { method: httpMethod, headers: new Headers(headers) };

  if (body && httpMethod !== 'GET' && httpMethod !== 'HEAD') {
    init.body = isBase64Encoded ? Buffer.from(body, 'base64') : body;
  }

  const request = new Request(url, init);
  Reflect.set(request, clientAddressSymbol, headers['x-nf-client-connection-ip'] || headers['x-forwarded-for']);
  return request;
}

function mapResponseToNetlify(response) {
  const headers = {};
  for (const [key, value] of response.headers.entries()) {
    headers[key] = value;
  }

  return response.arrayBuffer().then((buffer) => ({
    statusCode: response.status,
    headers,
    body: Buffer.from(buffer).toString('base64'),
    isBase64Encoded: true
  }));
}

export function createExports(manifest) {
  const app = new App(deserializeManifest(manifest));

  const handler = async (event) => {
    const request = createRequestFromEvent(event);
    const response = await app.render(request);
    return mapResponseToNetlify(response);
  };

  return { default: handler };
}
