// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const assert = require('assert');
require('dotenv').config();

describe('MSAL config', function () {
  it('should have a valid client ID', function () {
    assert(
      process.env.OAUTH_CLIENT_ID &&
        process.env.OAUTH_CLIENT_ID.length > 0 &&
        process.env.OAUTH_CLIENT_ID !== 'YOUR_CLIENT_ID_HERE',
      '\nOAUTH_CLIENT_ID is not set in .env.\n' +
        'See README.md for instructions on registering an application in the Azure portal',
    );
  });

  it('should have a valid client secret', function () {
    assert(
      process.env.OAUTH_CLIENT_SECRET &&
        process.env.OAUTH_CLIENT_SECRET.length > 0 &&
        process.env.OAUTH_CLIENT_SECRET !== 'YOUR_CLIENT_SECRET_HERE',
      '\nOAUTH_CLIENT_SECRET is not set in .env.\n' +
        'See README.md for instructions on registering an application in the Azure portal',
    );
  });

  it('should have a valid tenant ID', function () {
    assert(
      process.env.OAUTH_TENANT_ID &&
        process.env.OAUTH_TENANT_ID.length > 0 &&
        process.env.OAUTH_TENANT_ID.indexOf('YOUR_TENANT_ID_HERE') < 0,
      'OAUTH_TENANT_ID is not set in .env.\n' +
        'See README.md for instructions on registering an application in the Azure portal',
    );
  });
});

describe('Notification URL', function () {
  it('should have a valid value in development environment', function () {
    assert(
      process.env.NODE_ENV === 'production' ||
        (process.env.NGROK_PROXY &&
          process.env.NGROK_PROXY.length > 0 &&
          process.env.NGROK_PROXY.indexOf('ngrok') > 0),
    );
  });
});

describe('Certificate config', function () {
  it('should have a certificate path', function () {
    (assert(
      process.env.CERTIFICATE_PATH && process.env.CERTIFICATE_PATH.length > 0,
    ),
      'CERTIFICATE_PATH is not set in .env\n' +
        'Please provide a relative path and file name');
  });

  it('should have a certificate ID', function () {
    (assert(
      process.env.CERTIFICATE_ID && process.env.CERTIFICATE_ID.length > 0,
    ),
      'CERTIFICATE_ID is not set in .env\n' +
        'Please provide an identifier for the certificate');
  });

  it('should have a private key path', function () {
    (assert(
      process.env.PRIVATE_KEY_PATH && process.env.PRIVATE_KEY_PATH.length > 0,
    ),
      'PRIVATE_KEY_PATH is not set in .env\n' +
        'Please provide a relative path and file name');
  });

  it('should have a private key password', function () {
    (assert(
      process.env.PRIVATE_KEY_PASSWORD &&
        process.env.PRIVATE_KEY_PASSWORD.length > 0,
    ),
      'PRIVATE_KEY_PASSWORD is not set in .env\n' +
        'Please provide a password for the private key');
  });
});
