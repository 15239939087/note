<template>
  <div class="home"></div>
</template>

<script>
import axios from "axios";
// import APIConfig from "@/common/config/api";
export default {
  name: "Home",
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const params = {
        name: "杨幂"
      };
      axios.get("api/table/list", { params }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
