<template>
  <div>video</div>
</template>

<script>
import _ from "lodash";
export default {
  name: "video-list",
  data() {
    return {
      list: [
        { id: 0, name: "chenwei" },
        { id: 1, name: "tunan" },
        { id: 1, name: "tunan" },
        { id: 1, name: "tunan" }
      ]
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let res = _.groupBy(this.list, "id");
      console.log(res);
    }
  }
};
</script>

<style></style>
