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
import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Rollups_Common from '../components/rollups._common'

export interface Rollups_Explain_Request extends Global.Params {
  id: Common.Id;
}

export type Rollups_Explain_ResponseBody = Rollups_Common.ExplainEntities

export interface Rollups_Explain_Response extends ApiResponse {
  body: Rollups_Explain_ResponseBody
}
