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
import * as Security_Common from '../_types/security._common'

export type Security_PatchActionGroup_Request = Global.Params & {
  action_group: string;
  body: Security_PatchActionGroup_RequestBody;
}

export type Security_PatchActionGroup_RequestBody = Security_Common.PatchOperation[]

export type Security_PatchActionGroup_Response = ApiResponse & {
  body: Security_PatchActionGroup_ResponseBody;
}

export type Security_PatchActionGroup_ResponseBody = Security_Common.Ok

