<template>
  <table class="list-wrapper">
    <thead class="header">
      <tr>
        <td 
          v-for="item in columns" 
          :key="item.key" 
          :style="{ width: item.width }" 
          class="header-item">
          <slot name="headerCell" :column="item">
            {{ item.title }}
          </slot>
        </td>
      </tr>
    </thead>
    <tbody class="body" ref="container">
      <tr v-for="dataItem in dataSource" 
        :key="dataItem.key" 
        :class="{ 'body-item-group': true }" 
      >
        <td v-for="key in columns" 
          :key="key.key" 
          :style="{ width: key.width }" 
          class="body-item">
          <slot name="bodyCell" :column="key" :record="dataItem">
            {{ dataItem[key.key as keyof typeof dataItem] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import { PropType, reactive, toRef } from 'vue'
import { ColumnsType, DataSourceType } from '.';

const props = defineProps({
  columns: {
    type: Array as PropType<ColumnsType[]>,
    require: true,
  },
  dataSource: {
    type: Array as PropType<DataSourceType[]>,
    require: true,
  },
})
// const columns = reactive(props.columns as ColumnsType[])
const columns = toRef(props, 'columns')
// const dataSource = reactive(props.dataSource as DataSourceType[])
const dataSource = toRef(props, 'dataSource')


let checkList = reactive<{[key: string | number]: boolean}>({})
dataSource.value?.forEach(v => {
  checkList[v.key] = false
})

</script>
<style lang="scss">
.list-wrapper {
  position: relative;
  width: 100%;

  .header {
    width: 100%;
    height: 56px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      display: block;
      left: 0;
      right: 0;
      height: 1px;
      background: #f1f2f4;
      bottom: 0;
    }

    .header-item {
      padding: 16px
    }
  }

  .body {
    width: 100%;
    position: relative;

    .body-item-group {
      position: relative;
      width: 100%;
      height: 56px;
      transition: background-color .2s;

      &::after {
        position: absolute;
        content: "";
        display: block;
        left: 0;
        right: 0;
        height: 1px;
        background: #f1f2f4;
        bottom: 0;
      }

      &:hover {
        background-color: var(--hover-bg);
      }

      .body-item {
        padding: 16px
      }
    }
  }
}
</style>