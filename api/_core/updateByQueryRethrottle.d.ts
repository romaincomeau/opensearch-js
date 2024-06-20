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

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../_types/_global'
import * as Common from '../_types/_common'
import * as Core_UpdateByQueryRethrottle from '../_types/_core.update_by_query_rethrottle'

export interface UpdateByQueryRethrottle_Request extends Global.Params {
  requests_per_second?: number;
  task_id: Common.Id;
}

export interface UpdateByQueryRethrottle_Response extends ApiResponse {
  body: UpdateByQueryRethrottle_ResponseBody;
}

export interface UpdateByQueryRethrottle_ResponseBody {
  nodes: Record<string, Core_UpdateByQueryRethrottle.UpdateByQueryRethrottleNode>;
}

