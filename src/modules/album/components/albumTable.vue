<template>
  <common-table
    :column-property-list="columnList"
    :col-setting-config="settingConfig"
    :transfer-config="transferConfig"
    :table-property="tableProperty"
    :data="tableList"
  >
    <template slot="avatar" slot-scope="{ row }">
      <el-popover placement="right" trigger="click" transition="fade-in-linear">
        <img
          :src="row.avatarUrl"
          alt=""
          v-if="row.avatarUrl"
          class="bigAvatar"
        />
        <span v-else>暂无编目位置信息</span>
        <div v-if="row.avatarUrl" slot="reference" class="avatar">
          <img :src="row.avatarUrl" />
        </div>
        <span v-else slot="reference">-</span>
      </el-popover>
    </template>
  </common-table>
</template>

<script>
import CommonTable from "@/common/components/table/CommonTable";
import { Constants } from "@/modules/album/config";

export default {
  name: "album-table",
  components: {
    CommonTable
  },
  props: {
    tableList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      columnList: Constants.AlbumColumnList,
      settingConfig: {
        title: "表格列配置",
        width: "680px"
      },
      // 列表设置中列切换设置
      transferConfig: {
        title: ["列表显示项", "列表隐藏项"],
        tip: "通过「拖拽」可以设置列的显示与隐藏，并可以对「显示的列」进行排序",
        buttonTexts: ["隐藏", "显示"]
      },
      // 列表属性
      tableProperty: {
        // 树形列表专用属性
        "tree-props": { children: "children" },
        "row-key": "qipuId"
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.avatar {
  position: relative;
  left: 25%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  overflow: hidden;
}
.avatar img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bigAvatar {
  max-width: 500px;
}
</style>
