<template>
  <div class="hello">
    <!-- canvas在低版本浏览器中不兼容 -->
    <canvas id="canvas" width="1000" height="1000">你的浏览器暂不支持canvas</canvas>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';

export default defineComponent({
  name: 'CanvasPage',
  props: {
    msg: String,
  },
  setup() {
    onMounted(() => {
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
     

      interface LineLocations {
        sX: number,
        sY: number,
        eX: number,
        eY: number,
        lW: number,
        strokeStyle: string
      }

      function drawLine(lineLocations: LineLocations) {
        // 开启路径
        ctx.beginPath()
        // 确定起始点
        ctx.moveTo(lineLocations.sX, lineLocations.sY)
        //  确定结束点
        ctx.lineTo(lineLocations.eX, lineLocations.eY)
        ctx.strokeStyle = lineLocations.strokeStyle
        ctx.lineWidth = lineLocations.lW
        // 上色
        ctx.stroke()
        // 关闭路径
        ctx.closePath()
      }

      let color:string = `#${parseInt(String(Math.random() * 0xffffff)).toString(16)}`
      let color1:string = `#${parseInt(String(Math.random() * 0xffffff)).toString(16)}`

      /**
       * 画杯子
       * 杯子宽高: 200px 150px
       */
      ctx.beginPath()
      ctx.moveTo(400,425)
      ctx.lineTo(600,425)
      ctx.lineTo(600,575)
      ctx.lineTo(400,575)
      ctx.lineTo(400,422)
      ctx.lineWidth = 5
      ctx.fillStyle = color
      ctx.fill()
      ctx.closePath()
      // 把手
      ctx.beginPath()
      ctx.arc(600, 500, 50, Math.PI * 0.5, Math.PI * 1.5, true)
      ctx.lineWidth = 10
      ctx.strokeStyle = color1
      ctx.stroke()

      // 热气
      for (var i = 0; i < 3; i++) {
        let color2 = `#${parseInt(String(Math.random() * 0xffffff)).toString(16)}`
        ctx.beginPath()
        ctx.arc(430 + 70* i, 350, 30, Math.PI *0.5, Math.PI*1.5, true)
        ctx.strokeStyle = color2
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(430 + 70* i, 290, 30, Math.PI *1.5, Math.PI*0.5, true)
        ctx.strokeStyle = color2
        ctx.stroke()
      }

      // 画坐标系

      // drawLine({
      //   sX: 100,
      //   sY: 100,
      //   eX: 100,
      //   eY: 400,
      //   lW: 1,
      //   strokeStyle: 'black'
      // })
      // drawLine({
      //   sX: 100,
      //   sY: 400,
      //   eX: 400,
      //   eY: 400,
      //   lW: 1,
      //   strokeStyle: 'black'
      // })
      // // 绘制统计矩形
      // for (var i = 0; i < 6;i ++) {
      //   // 随机高度
      //   let height:number = Math.random() * 290 + 10
      //   // 随机颜色
      //   // let color:string = `rgb(${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, ${(Math.random() * 255).toFixed(0)})`
      //   let color:string = `#${parseInt(String(Math.random() * 0xffffff)).toString(16)}`
      //   console.log(color)
      //   ctx.fillStyle = color
      //   ctx.fillRect(120 + 40 * i, 399 - height, 20, height)
      // }

      // ctx.clearRect(200,200, 200, 200)

    })

    return {

    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#canvas {
  border: 1px solid #aaa;
}
</style>
