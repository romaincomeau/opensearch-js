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
import * as Transforms_Common from '../components/transforms._common'

export type Transforms_Preview_Request = Global.Params & Record<string, any>

export type Transforms_Preview_ResponseBody = Transforms_Common.Preview

export interface Transforms_Preview_Response extends ApiResponse {
  body: Transforms_Preview_ResponseBody
}
