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
import * as Sql_Common from '../_types/sql._common'

export type Sql_PostStats_Request = Global.Params & {
  body?: Sql_Common.Stats;
  format?: string;
  sanitize?: boolean;
}

export type Sql_PostStats_Response = ApiResponse & {
  body: Sql_PostStats_ResponseBody;
}

export type Sql_PostStats_ResponseBody = Record<string, any>

