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

import { ApiResponse } from '../../lib/Transport'
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'

export type Cluster_GetSettings_Request = Global.Params & {
  cluster_manager_timeout?: Common.Duration;
  flat_settings?: boolean;
  include_defaults?: boolean;
  master_timeout?: Common.Duration;
  timeout?: Common.Duration;
}

export type Cluster_GetSettings_Response = ApiResponse & {
  body: Cluster_GetSettings_ResponseBody;
}

export type Cluster_GetSettings_ResponseBody = {
  defaults?: Record<string, any>;
  persistent: Record<string, any>;
  transient: Record<string, any>;
}
