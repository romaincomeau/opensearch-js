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

'use strict';

/** @namespace API-Transforms */

function TransformsApi(bindObj) {
  const cache = {};
  this.delete = require('./delete').bind(bindObj);
  this.explain = require('./explain').bind(bindObj);
  this.get = require('./get').bind(bindObj);
  this.preview = require('./preview').bind(bindObj);
  this.put = require('./put').bind(bindObj);
  this.search = require('./search').bind(bindObj);
  this.start = require('./start').bind(bindObj);
  this.stop = require('./stop').bind(bindObj);
}

module.exports = TransformsApi;
