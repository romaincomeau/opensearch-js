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
import * as Cat_Allocation from '../_types/cat.allocation'

export interface Cat_Allocation_Request extends Global.Params {
  bytes?: Common.Bytes;
  cluster_manager_timeout?: Common.Duration;
  format?: string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  master_timeout?: Common.Duration;
  node_id?: Common.NodeIds;
  s?: string[];
  v?: boolean;
}

export interface Cat_Allocation_Response extends ApiResponse {
  body: Cat_Allocation_ResponseBody;
}

export type Cat_Allocation_ResponseBody = Cat_Allocation.AllocationRecord[]

