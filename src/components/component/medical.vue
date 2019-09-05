<template>
    <div class="medical">
      <div v-for="(it,index) in medicalContent" :key="index">
        <p style="width: 100%;background: white;color: gray; font-size: 14px; text-align:left;">{{index}}:{{it}}</p>
      </div>
    </div>
</template>


<script>
export default {
    props:["medicalContent"],
  data() {
    return {};
  }
};
</script>


<style scoped>

</style>


