<template>
  <div id="app" >
    <a-row :span="24" style="height:300px">
      <a-col :span="12"   style="height:300px">
        <v-echart :options="option"></v-echart>
      </a-col>
      <a-col :span="12"   style="height:300px">
        <v-echart :options="option"></v-echart>
      </a-col>

    </a-row>
	<a-row>
		<some/>
	</a-row>
  </div>
</template>

<script>
import some from "./components/some"
export default {
  name: "App",
  components:{
		  some
	  },
  data: function() {
	  
    return {
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
p {
  color: red;
}
#app {
	padding: 15px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.echarts {
  height: 100%;
  width: 100%;
}
</style>
