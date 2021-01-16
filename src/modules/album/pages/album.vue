<template>
  <div>
    <common-table
      :column-property-list="columnList"
      :col-setting-config="settingConfig"
      :transfer-config="transferConfig"
      :table-property="tableProperty"
      :data="tableList"
    ></common-table>
  </div>
</template>

<script>
import CommonTable from "@/common/components/table/CommonTable";
import { Constants } from "../config";
import api from "../services";
export default {
  name: "album",
  components: {
    CommonTable
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
      },
      // 列表数据
      tableList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const result = await api.getAlbumList();
      this.tableList = result.data;
    }
  }
};
</script>

<style scoped></style>
