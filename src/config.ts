const config = {
  edysanApi: process.env.NIVATA_API,
  edysanWebsockets: process.env.NIVATA_API,

  keyName: 'loggedEdySan',
  merchantId: process.env.MERCHANTID || '508029',
  accountId: process.env.ACCOUNTID || '512321',
  responseUrl: process.env.RESPONSE_URL || 'http://localhost:3000/checkout/response',
  confirmationUrl: process.env.COMFIRMATION_URL || 'http://localhost:3000/checkout/response',
  apiKeyPayu: process.env.API_KEY_PAYU || '4Vj8eK4rloUd272L48hsrarnUA',
  urlPayu: process.env.URL_PAYU || 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/',

  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
  publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
};

export default config;
