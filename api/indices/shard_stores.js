/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

'use strict'

const { normalizeArguments, parsePathParam } = require('../utils');

/**
 * Provides store information for shard copies of indices.
 * <br/> See Also: {@link https://opensearch.org/docs/latest - indices.shard_stores}
 *
 * @memberOf API-Indices
 *
 * @param {object} [params]
 * @param {boolean} [params.allow_no_indices] - If false, the request returns an error if any wildcard expression, index alias, or _all value targets only missing or closed indices. This behavior applies even if the request targets other open indices.
 * @param {string} [params.expand_wildcards] - Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.
 * @param {boolean} [params.ignore_unavailable] - If true, missing or closed indices are not included in the response.
 * @param {string} [params.status] - List of shard health statuses used to limit the request.
 * @param {string} [params.index] - List of data streams, indices, and aliases used to limit the request.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function shardStoresFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = ['/', index, '/_shard_stores'].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = shardStoresFunc;
