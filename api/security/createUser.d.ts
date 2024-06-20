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
import * as Security_Common from '../_types/security._common'

export interface Security_CreateUser_Request extends Global.Params {
  body: Security_Common.User;
  username: string;
}

export interface Security_CreateUser_Response extends ApiResponse {
  body: Security_CreateUser_ResponseBody;
}

export type Security_CreateUser_ResponseBody = Security_Common.Ok

