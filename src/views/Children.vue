<template>
  <div>
    <slot v-bind:user="user"></slot>
    <div>{{ user.lastName }}</div>
  </div>
</template>

<script>
export default {
  name: "Children",
  data() {
    return {
      user: {
        firstName: "依古比古",
        lastName: "唔西蒂西"
      }
    };
  }
};
</script>

<style scoped></style>
