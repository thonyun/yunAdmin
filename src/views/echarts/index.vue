<template>
  <div class="container" ref="container">
    <!-- 折线图 -->
    <div class="line" ref="line"></div>
    <!-- bing -->
  </div>
</template>
<script setup>
import { onMounted, ref, inject, onBeforeMount } from 'vue'

// 通过inject接收echarts
const Echarts = inject('$echarts')
  const line = ref()

// 定时器对象
const timer = ref()

// 定时器存在则清除定时器
if (timer.value) {
  clearTimeout(timer.value)
}

onMounted(() => {
  // 定时器绑定
  timer.value = setTimeout(() => onInitLineEcharts(), 1000)
})
// 页面销毁前清除定时器
onBeforeMount(() => {
  if (timer.value) clearTimeout(timer.value)
})



/**
 * @description 初始化echarts图表
 */
const onInitLineEcharts = () => {
  // 初始化echarts
  const myChart = Echarts.init(line.value)

  const options = {
    title: {
      text: '每周统计'
    },
    // 自定义echarts图表相关配置
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {},
    series: [
      {
        data: [30, 7, 1, 30, 3, 20, 30],
        type: 'line',
        lineStyle: {
          normal: {
            color: 'green',
            width: 4,
            type: 'solid'
          }
        }
      }
    ]
  }

  myChart.setOption(options)

  // 根据页面大小变化自动响应图表大小
  window.addEventListener('resize', () => {
    console.log('resize')
    myChart.resize()
  })
}

/**
 * @description 绘制折线图
 */
function drawLineChart() {
 
}
drawLineChart()
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url('../../assets/echarts-bg.jpeg') no-repeat center;
  background-size: 100% 100%;
  background-color: #e1e6e9;
  position: relative;

  .line {
    width: 26%;
    height: 78%;
    position: absolute;
    top: 15%;
    left: 5%;
  }
}
</style>
