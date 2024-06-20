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
import * as Security_Common from '../components/security._common'
import * as Global from '../components/_global'

export type Security_PatchRoleMapping_RequestBody = Security_Common.PatchOperation[]

export interface Security_PatchRoleMapping_Request extends Global.Params {
  body: Security_PatchRoleMapping_RequestBody;
  role: string;
}

export type Security_PatchRoleMapping_ResponseBody = Security_Common.Ok

export interface Security_PatchRoleMapping_Response extends ApiResponse {
  body: Security_PatchRoleMapping_ResponseBody
}
