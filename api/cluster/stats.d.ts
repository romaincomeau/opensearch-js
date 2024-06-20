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
import * as Cluster_Stats from '../_types/cluster.stats'

export interface Cluster_Stats_Request extends Global.Params {
  flat_settings?: boolean;
  node_id?: Common.NodeIds;
  timeout?: Common.Duration;
}

export interface Cluster_Stats_Response extends ApiResponse {
  body: Cluster_Stats_ResponseBody;
}

export type Cluster_Stats_ResponseBody = Cluster_Stats.StatsResponseBase

