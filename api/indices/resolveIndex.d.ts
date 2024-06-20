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
import * as Indices_ResolveIndex from '../_types/indices.resolve_index'

export interface Indices_ResolveIndex_Request extends Global.Params {
  expand_wildcards?: Common.ExpandWildcards;
  name: Common.Names;
}

export interface Indices_ResolveIndex_Response extends ApiResponse {
  body: Indices_ResolveIndex_ResponseBody;
}

export interface Indices_ResolveIndex_ResponseBody {
  aliases: Indices_ResolveIndex.ResolveIndexAliasItem[];
  data_streams: Indices_ResolveIndex.ResolveIndexDataStreamsItem[];
  indices: Indices_ResolveIndex.ResolveIndexItem[];
}

