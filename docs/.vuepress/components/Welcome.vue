<template>
  <div>
    <h1>欢迎{{name}}访问！</h1>
  </div>
</template>

<script>
 export default {
  data() {
    return {
      name: "韩梅梅"
    };
  },

  mounted() {
    console.log(666);
  }
};
</script>
<style scope>
h1 {
  color: #666;
}
</style>