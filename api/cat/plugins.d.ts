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
import * as Cat_Plugins from '../_types/cat.plugins'
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'

export type Cat_Plugins_Request = Global.Params & {
  cluster_manager_timeout?: Common.Duration;
  format?: string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  master_timeout?: Common.Duration;
  s?: string[];
  v?: boolean;
}

export type Cat_Plugins_Response = ApiResponse & {
  body: Cat_Plugins_ResponseBody;
}

export type Cat_Plugins_ResponseBody = Cat_Plugins.PluginsRecord[]

