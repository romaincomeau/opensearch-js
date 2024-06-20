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

import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Tasks_Common from '../components/tasks._common'

export interface Request extends Global.Params {
  actions?: string | string[];
  nodes?: string[];
  parent_task_id?: string;
  task_id?: Common.TaskId;
  wait_for_completion?: boolean;
}

export type Response = Tasks_Common.TaskListResponseBase

