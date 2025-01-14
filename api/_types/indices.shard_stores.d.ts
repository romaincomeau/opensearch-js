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

import * as Common from './_common'

export type IndicesShardStores = {
  shards: Record<string, ShardStoreWrapper>;
}

export type ShardStore = {
  allocation: ShardStoreAllocation;
  allocation_id?: Common.Id;
  store_exception?: ShardStoreException;
}

export type ShardStoreAllocation = 'primary' | 'replica' | 'unused'

export type ShardStoreException = {
  reason: string;
  type: string;
}

export type ShardStoreWrapper = {
  stores: ShardStore[];
}

export type Status = 'all' | 'green' | 'red' | 'yellow'

