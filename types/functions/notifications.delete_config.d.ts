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
import * as Notifications_Common from '../components/notifications._common'

export interface Notifications_DeleteConfig_Request extends Global.Params {
  config_id: string;
}

export type Notifications_DeleteConfig_ResponseBody = Notifications_Common.DeleteConfigsResponse

export interface Notifications_DeleteConfig_Response extends ApiResponse {
  body: Notifications_DeleteConfig_ResponseBody
}
