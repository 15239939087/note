<template>
  <div>
    <button v-on:click="getInfo()">点击获取数据</button>
    <p>{{ infoList }}</p>
  </div>
</template>

<script>
import { getTableInfo } from "@/common/service";
export default {
  name: "Home",
  data() {
    return {
      infoList: ""
    };
  },
  methods: {
    getInfo() {
      this.getData();
    },
    async getData() {
      let res = await getTableInfo();
      this.infolist = res.data.data.list;
      console.log(res);
    }
  }
};
</script>
