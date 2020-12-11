<template>
  <el-card>
    <el-button
      type="text"
      icon="el-icon-setting"
      @click="openColSetting"
    ></el-button>
    <el-table
      v-bind="tableProperty"
      :data="data"
      v-on="tableEvent"
      highlight-current-row
      :header-cell-style="defaultHeaderStyle"
      border
      stripe
    >
      <template v-for="(columnGroupItem, groupIndex) in columnGroup">
        <template v-if="columnGroupItem.slot">
          <el-table-column
            v-for="(columnProperty, index) in columnGroupItem.list"
            :key="`${groupIndex}_${index}}`"
            v-bind="columnProperty"
          >
            <template slot-scope="scope">
              <slot :name="columnProperty.slotName" v-bind="scope"></slot>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            v-for="(columnProperty, index) in columnGroupItem.list"
            :key="`${groupIndex}_${index}}`"
            v-bind="columnProperty"
          ></el-table-column>
        </template>
      </template>
    </el-table>
    <!--列表配置-->
    <el-dialog
      :title="colSettingConfig.title"
      :visible="colSettingShow"
      :width="colSettingConfig.width"
      :before-close="closeColSetting"
    >
      <common-table-transfer
        :value="columnPropertyValues"
        :transfer-config="transferConfig"
        :show="colSettingShow"
        @close="closeColSetting"
      ></common-table-transfer>
    </el-dialog>
  </el-card>
</template>

<script>
import { cloneDeep } from "lodash";
import CommonTableTransfer from "./CommonTableTransfer";
let count = 1;
export default {
  name: "common-table",
  components: {
    CommonTableTransfer
  },
  props: {
    // table的属性配置对象，对应el-table可接受的table属性
    tableProperty: {
      type: Object,
      default: () => {}
    },
    // table的事件配置对象，对应el-table可接受的事件配置
    tableEvent: {
      type: Object,
      default: () => {}
    },
    // table展示的data数组
    data: {
      type: Array,
      default: () => []
    },
    // 列配置数组
    columnPropertyList: {
      type: Array,
      default: () => []
    },
    // 列表配置选项参数
    colSettingConfig: {
      type: Object,
      default: () => {
        return {
          title: "表格列配置",
          width: "680px"
        };
      }
    },
    // table列设置切换配置
    transferConfig: {
      type: Object,
      default: () => {
        return {
          title: ["隐藏列", "显示列"],
          buttonTexts: ["隐藏", "显示"]
        };
      }
    }
  },
  data() {
    return {
      // 所有列属性的复制值，因为props里的columnPropertyList不可以修改
      columnPropertyValues: this.getColumnList(this.columnPropertyList),
      // 列表选项配置弹框
      colSettingShow: false,
      // 表格头默认样式
      defaultHeaderStyle: {
        background: "#f5f5f5",
        color: "#606266",
        fontSize: "13px"
      }
    };
  },
  computed: {
    // 将所有列属性分组，依顺序，连续无需插槽的列为一组，连续需要插槽的列为一组
    columnGroup() {
      const list = [];
      const validProperty = cloneDeep(
        this.columnPropertyValues.filter(property => property.hidden !== true)
      );
      if (validProperty.length) {
        let group = [];
        let slotState;
        validProperty.forEach(property => {
          if (group.length === 0) {
            group.push(property);
            slotState = !!property.slotName;
          } else {
            if (slotState === !!property.slotName) {
              group.push(property);
            } else {
              list.push({ list: group, slot: slotState });
              group = [];
              group.push(property);
              slotState = !!property.slotName;
            }
          }
        });
        if (group.length) {
          list.push({ list: group, slot: slotState });
        }
      }
      return list;
    }
  },
  methods: {
    // 获取唯一 key
    genUniqueKey() {
      return count++;
    },
    // 处理列表选项数据
    getColumnList(list) {
      return cloneDeep(list).map(item => {
        item.hidden = item.hidden || false;
        item.name = item.prop || item.property || item.slotName || item.type;
        return item;
      });
    },
    // 打开列表选项配置弹框
    openColSetting() {
      this.colSettingShow = true;
    },
    // 关闭列设置弹框
    closeColSetting(done) {
      done && done();
      this.colSettingShow = false;
    }
  }
};
</script>

<style scoped></style>
