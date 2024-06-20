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

import * as Common from './_common'

export interface Context {
  methods: ContextMethod[];
  name: Common.Name;
}

export interface ContextMethod {
  name: Common.Name;
  params: ContextMethodParam[];
  return_type: string;
}

export interface ContextMethodParam {
  name: Common.Name;
  type: string;
}

