<template>
  <div class="about">
    <h1>具名插槽</h1>
    <children>
      <template v-slot="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </children>
    <div v-copy="copyText">复制</div>
    <div v-draggable class="draggable">拖动</div>
  </div>
</template>

<script>
import Children from "@/views/Children";
export default {
  name: "about",
  components: {
    Children
  },
  data() {
    return {
      copyText: "a copy directives"
    };
  }
};
</script>
<style lang="scss" scoped>
.about {
  width: 100vw;
  height: 100vh;
}
.draggable {
  width: 100px;
  height: 100px;
  background-color: seashell;
  position: absolute;
}
</style>
