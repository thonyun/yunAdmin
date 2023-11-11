import * as echarts from "echarts/core"
// 引入常用的柱状图 折线图 饼状图,如有其它需要可按需引入
import { BarChart, LineChart, PieChart } from "echarts/charts"

// 引入提示框.标题,坐标,直角坐标系,内置数据转换器组件,后缀都为Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    ToolboxComponent,
    LegendComponent
} from 'echarts/components'

// 标签自动布局 全局过度动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'

// 引入Canvas渲染器, 注意引入CanvasRender 或者 SVGRender 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    ToolboxComponent,
    LegendComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    BarChart,
    LineChart,
    PieChart
])

export default echarts