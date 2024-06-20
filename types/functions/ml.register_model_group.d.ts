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
import * as Ml_Common from '../components/ml._common'

export interface Ml_RegisterModelGroup_RequestBody {
  access_mode?: 'private' | 'public' | 'restricted';
  add_all_backend_roles?: boolean;
  backend_roles?: string[];
  description?: string;
  name: string;
}

export interface Ml_RegisterModelGroup_Request extends Global.Params {
  body?: Ml_RegisterModelGroup_RequestBody;
}

export type Ml_RegisterModelGroup_ResponseBody = Ml_Common.ModelGroupRegistration

export interface Ml_RegisterModelGroup_Response extends ApiResponse {
  body: Ml_RegisterModelGroup_ResponseBody
}
