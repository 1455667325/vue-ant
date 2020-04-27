<template>
  <div>
    <a-card title="title">
      <a href="#" slot="extra">{{right}}</a>
      <slot></slot>
    </a-card>
  </div>
</template>
<script>
export default {
  props: ["title", "right"],
  data() {
    return {};
  }
};
</script>
<style  scoped>
</style>