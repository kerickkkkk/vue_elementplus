<script setup>
import * as echarts from "echarts";

const echartDom = shallowRef(null);
const currentPage = ref(1);

const data = [
  { month: "一月", value: 5 },
  { month: "二月", value: 20 },
  { month: "三月", value: 36 },
  { month: "四月", value: 10 },
  { month: "五月", value: 10 },
  { month: "六月", value: 20 },
  { month: "七月", value: 15 },
  { month: "八月", value: 25 },
  { month: "九月", value: 30 },
  { month: "十月", value: 5 },
  { month: "十一月", value: 40 },
  { month: "十二月", value: 10 },
];

const getPageData = (page) => {
  const pageSize = 6;
  const start = (page - 1) * pageSize;
  return data.slice(start, start + pageSize);
};

const updateChart = () => {
  const myChart = echarts.init(echartDom.value);
  const pageData = getPageData(currentPage.value);
  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "#333", // 背景颜色
      borderColor: "#777", // 邊框颜色
      borderWidth: 1, // 編框寬度
      textStyle: {
        color: "#fff", // 文字颜色
        fontSize: 14, // 文字大小
      },
      formatter: function (params) {
        let result = `${params[0].name}<br/>`;
        params.forEach((item) => {
          result += `${item.marker} ${item.seriesName}: ${item.value}<br/>`;
        });
        return result;
      },
    },
    xAxis: {
      name: "月份",
      data: pageData.map((item) => item.month),
    },
    yAxis: {
      name: "销量",
      position: "left", // 位置
      nameLocation: "middle", // 名称位置
      nameTextStyle: {
        color: "#333",
        fontSize: 16,
      },
      axisLine: {
        lineStyle: {
          color: "#777",
          width: 2,
        },
      },
      axisLabel: {
        color: "#333",
        fontSize: 12,
      },
      splitLine: {
        lineStyle: {
          color: "#ddd",
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "销量",
        type: "bar",
        data: pageData.map((item) => item.value),
        itemStyle: {
          borderRadius: [50, 50, 50, 50],
          color: "#ff6347",
        },
        barWidth: "20px", // 修改 bar 的宽度
        markPoint: {
          data: pageData.map((item, index) => ({
            coord: [index, item.value],
            value: item.value,
            symbolSize: 50,
            symbolOffset: [0, 0], // 调整位置
            itemStyle: {
              color: "#ff6347",
            },
            label: {
              show: true,
              color: "#fff",
              fontSize: 12,
              formatter: "{c}",
              position: "top", // 标签位置
              offset: [0, 25], // 向上移动
            },
          })),
        },
      },
    ],
  });

  window.addEventListener("resize", myChart.resize);
};

onMounted(() => {
  updateChart();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateChart);
});
const nextPage = () => {
  if (currentPage.value < 2) {
    currentPage.value++;
    updateChart();
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    updateChart();
  }
};
</script>

<template>
  <div class="chart-container">
    <div ref="echartDom" class="chart"></div>
    <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
    <button @click="nextPage" :disabled="currentPage === 2">下一页</button>
  </div>
</template>

<style lang="scss" scoped>
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.chart {
  width: 100%;
  height: 400px; /* 可以根据需要调整高度 */
}
</style>
