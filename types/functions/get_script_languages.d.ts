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
import * as Core_GetScriptLanguages from '../components/_core.get_script_languages'

export type GetScriptLanguages_Request = Global.Params & Record<string, any>

export interface GetScriptLanguages_ResponseBody {
  language_contexts: Core_GetScriptLanguages.LanguageContext[];
  types_allowed: string[];
}

export interface GetScriptLanguages_Response extends ApiResponse {
  body: GetScriptLanguages_ResponseBody
}
