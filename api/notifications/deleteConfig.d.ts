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
import * as Global from '../_types/_global'
import * as Notifications_Common from '../_types/notifications._common'

export type Notifications_DeleteConfig_Request = Global.Params & {
  config_id: string;
}

export type Notifications_DeleteConfig_Response = ApiResponse & {
  body: Notifications_DeleteConfig_ResponseBody;
}

export type Notifications_DeleteConfig_ResponseBody = Notifications_Common.DeleteConfigsResponse

