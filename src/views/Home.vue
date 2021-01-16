<template>
  <div>
    <button v-on:click="getInfo()">点击获取数据</button>
    <Button></Button>
    <p>{{ infoList }}</p>
  </div>
</template>

<script>
// import { getTableInfo } from "@/common/service";
// import qs from "qs";
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
      //   let res = await getTableInfo();
      //   this.infolist = res.data.data.list;
      //   console.log(res);
      //   let data = {
      //     user: "chenwei",
      //     age: 22,
      //     language: [
      //       {
      //         name: "one",
      //         language: "zh"
      //       },
      //       {
      //         name: "two",
      //         language: "zh_tw"
      //       }
      //     ]
      //   };
      //   console.log(data);
      //   const result = {
      //     ...data,
      //     language: JSON.stringify(data.language)
      //   };
      //   console.log(qs.stringify(result));
    }
  }
};
</script>
