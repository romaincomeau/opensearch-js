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

export interface Snapshot_DeleteRepository_Request extends Global.Params {
  cluster_manager_timeout?: Common.Duration;
  master_timeout?: Common.Duration;
  repository: Common.Names;
  timeout?: Common.Duration;
}

export interface Snapshot_DeleteRepository_Response extends ApiResponse {
  body: Snapshot_DeleteRepository_ResponseBody;
}

export type Snapshot_DeleteRepository_ResponseBody = Common.AcknowledgedResponseBase

