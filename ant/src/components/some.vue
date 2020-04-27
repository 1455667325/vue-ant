<template>
  <div>
    <a-row>
      <a-col :span="12">
        <card-item title="aa" right="aa1">123</card-item>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import cardItem from "./common/card-item";
export default {
  components: {
    cardItem
  },
  data() {
    return {};
  }
};
</script>
<style scoped="">
.ant-card-bordered{
    border-color: red;
}
</style>