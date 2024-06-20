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
import * as Core_GetScriptContext from '../_types/_core.get_script_context'

export type GetScriptContext_Request = Global.Params & Record<string, any>

export interface GetScriptContext_Response extends ApiResponse {
  body: GetScriptContext_ResponseBody;
}

export interface GetScriptContext_ResponseBody {
  contexts: Core_GetScriptContext.Context[];
}

