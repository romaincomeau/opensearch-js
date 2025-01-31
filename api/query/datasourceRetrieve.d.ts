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
import * as Query_Common from '../_types/query._common'

export type Query_DatasourceRetrieve_Request = Global.Params & {
  datasource_name: string;
}

export type Query_DatasourceRetrieve_Response = ApiResponse & {
  body: Query_DatasourceRetrieve_ResponseBody;
}

export type Query_DatasourceRetrieve_ResponseBody = Query_Common.DataSourceRetrieve

