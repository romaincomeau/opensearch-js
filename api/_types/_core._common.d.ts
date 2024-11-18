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


export type DeletedPit = {
  pit_id?: string;
  successful?: boolean;
}

export type PitDetail = {
  creation_time?: number;
  keep_alive?: number;
  pit_id?: string;
}

export type PitsDetailsDeleteAll = {
  pit_id?: string;
  successful?: boolean;
}

export type ShardStatistics = {
  failed?: number;
  skipped?: number;
  successful?: number;
  total?: number;
}
