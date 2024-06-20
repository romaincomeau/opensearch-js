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
import * as Tasks_Common from '../components/tasks._common'
import * as Common from '../components/_common'

export interface Tasks_List_Request extends Global.Params {
  actions?: string | string[];
  detailed?: boolean;
  group_by?: Tasks_Common.GroupBy;
  nodes?: string[];
  parent_task_id?: Common.Id;
  timeout?: Common.Duration;
  wait_for_completion?: boolean;
}

export type Tasks_List_ResponseBody = Tasks_Common.TaskListResponseBase

export interface Tasks_List_Response extends ApiResponse {
  body: Tasks_List_ResponseBody
}
