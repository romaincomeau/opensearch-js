/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

'use strict';

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
 * Adds or updates the existing configuration using the REST API. Only accessible by admins and users with rest api access and only when put or patch is enabled.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#update-configuration - security.update_configuration}
 *
 * @memberOf API-Security
 *
 * @param {object} params
 * @param {object} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function updateConfigurationFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/_security/api/securityconfig/config';
  const method = 'PUT';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = updateConfigurationFunc;