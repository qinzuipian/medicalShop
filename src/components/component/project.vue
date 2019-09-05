<template>
    <div class="project">
        <ul>
          <li v-for="(item,index) in projectData" :key="index" @click="proDetail(item)">
            <p>{{item.taskName}}</p>
            <p>{{item.description}}</p>
            <p>
              <span>{{item.startDate}}</span>
              <span>{{item.endDate}}</span>
            </p>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  props:["projectData"],
  data() {
    return {};
  },
  methods:{
    proDetail(it) {
       this.$emit("serchList", it);
       this.$emit("projectCancel");
    }
  }
};
</script>


<style scoped>
.project ul {
  list-style: none;
}
.project ul li {
  /* height: 100px; */
  background-color: #86DAB7;
  border-radius: 4px;
  cursor: pointer;
}
.project ul li p {
  padding: 0;
  margin: 10px;
}
.project ul li p:nth-child(1) {
  font-size: 18px;
  font-weight: 700;
}
.project ul li p:nth-child(3) span {
  margin-right: 20px;
}

</style>

