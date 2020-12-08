<template>
  <div class="home"></div>
</template>

<script>
import APIConfig from "@/common/config/api";
export default {
  name: "Home",
  created() {
    console.log(APIConfig);
  }
};
</script>
