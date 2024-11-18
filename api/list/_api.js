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

/** @namespace API-List */

function ListApi(bindObj) {
  this.help = require('./help').bind(bindObj);
  this.indices = require('./indices').bind(bindObj);
  this.shards = require('./shards').bind(bindObj);

}

module.exports = ListApi;