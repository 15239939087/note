<template>
  <div>
    <div>{{ defaultColor }}</div>
    <album-table :table-list="tableList"></album-table>
  </div>
</template>

<script>
import AlbumTable from "@/modules/album/components/albumTable";
import api from "@/modules/album/services";
import apiDao from "@/modules/album/dao";
import { reactive } from "@vue/composition-api";
export default {
  name: "album",
  components: {
    AlbumTable
  },
  data() {
    return {
      tableList: []
    };
  },
  setup() {
    const state = reactive({
      defaultColor: "red"
    });
    return {
      ...state
    };
  },
  created() {
    this.getList();
    this.getAlbumList();
  },
  methods: {
    async getAlbumList() {
      console.log(await apiDao.getDataList());
    },
    async getList() {
      const result = await api.getAlbumList();
      this.tableList = result.data;
    }
  }
};
</script>

<style scoped></style>
