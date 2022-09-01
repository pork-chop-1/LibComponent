# table

``` typescript
  console.log('hello')
```

<div>{{some}}</div>
<BTable :columns="columns" :dataSource="data" />

<script setup lang="ts">
import {ref} from 'vue'
import BTable from './source/BTable/index.vue'
import { ColumnsType, DataSourceType } from './source/BTable';

const some = ref<string>('some')

const columns: ColumnsType[] = [
  {
    key: 'key1',
    title: 'key1'
  },
  {
    key: 'key2',
    title: 'key2'
  },
  {
    key: 'key3',
    title: 'key3'
  },
]

const data: DataSourceType[] = [
  {
    key: '1',
    key1: '2',
    key2: '2',
    key3: '2',
  },
  {
    key: '1',
    key1: '2',
    key2: '2',
    key3: '2',
  },
  {
    key: '1',
    key1: '2',
    key2: '2',
    key3: '2',
  },
]
</script>

用法:

``` vue
<template>
  <BTable :columns="columns" :dataSource="data" />
</template>
<script setup lang="ts">
import {ref} from 'vue'
import BTable from './source/BTable/index.vue'
import { ColumnsType, DataSourceType } from './source/BTable';

const some = ref<string>('some')

const columns: ColumnsType[] = [
  {
    key: 'key1',
    title: 'key1'
  },
  {
    key: 'key2',
    title: 'key2'
  },
  {
    key: 'key3',
    title: 'key3'
  },
]

const data: DataSourceType[] = [
  {
    key: '1',
    key1: '2',
    key2: '2',
    key3: '2',
  },
  {
    key: '1',
    key1: '2',
    key2: '2',
    key3: '2',
  },
  {
    key: '1',
    key1: '2',
    key2: '2',
    key3: '2',
  },
]
</script>
```