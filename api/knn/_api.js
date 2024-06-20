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

/** @namespace API-Knn */

function KnnApi(bindObj) {
  const cache = {};
  this.deleteModel = require('./deleteModel').bind(bindObj);
  this.getModel = require('./getModel').bind(bindObj);
  this.searchModels = require('./searchModels').bind(bindObj);
  this.stats = require('./stats').bind(bindObj);
  this.trainModel = require('./trainModel').bind(bindObj);
  this.warmup = require('./warmup').bind(bindObj);
}

module.exports = KnnApi;
