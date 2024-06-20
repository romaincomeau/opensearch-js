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
import * as Common from '../_types/_common'
import * as Cat_Fielddata from '../_types/cat.fielddata'

export interface Cat_Fielddata_Request extends Global.Params {
  bytes?: Common.Bytes;
  fields?: Common.Fields;
  format?: string;
  h?: string[];
  help?: boolean;
  s?: string[];
  v?: boolean;
}

export interface Cat_Fielddata_Response extends ApiResponse {
  body: Cat_Fielddata_ResponseBody;
}

export type Cat_Fielddata_ResponseBody = Cat_Fielddata.FielddataRecord[]

