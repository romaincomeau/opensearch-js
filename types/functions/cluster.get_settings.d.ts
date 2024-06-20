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

import * as Global from '../components/_global'
import * as Common from '../components/_common'

export interface Request extends Global.Params {
  cluster_manager_timeout?: Common.Duration;
  flat_settings?: boolean;
  include_defaults?: boolean;
  master_timeout?: Common.Duration;
  timeout?: Common.Duration;
}

export interface Response {
  defaults?: Record<string, Record<string, any>>;
  persistent: Record<string, Record<string, any>>;
  transient: Record<string, Record<string, any>>;
}

