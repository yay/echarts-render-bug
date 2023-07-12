import * as echarts from 'echarts';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const chart = echarts.init(container, undefined, {
    renderer: 'svg',
    width: 400,
    height: 300,
  });

  const data = [
    [20, 23, 25, 28, 32],
    [23, 25, 27, 29, 31],
    [19, 21, 24, 25, 29],
    [18, 24, 25, 26, 29],
  ];

  chart.setOption({
    title: {
      text: 'Chart Title',
    },
    series: [
      {
        type: 'boxplot',
        id: 1,
        boxWidth: [9, 9],
        colorBy: 'data',
        data: data.map((value) => ({
          itemStyle: {
            color: 'red',
            borderColor: 'black',
          },
          value,
        })),
      },
    ],
    xAxis: {
      type: 'value',
      id: 1,
      name: 'xAxis name',
      nameGap: 30,
      axisLabel: {
        showMaxLabel: false,
        showMinLabel: false,
      },
      min: 'dataMin',
      max: 'dataMax',
      nameLocation: 'middle',
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      id: 2,
      inverse: true,
      show: false,
    },
  });

  const svgString = chart.renderToSVGString();
  console.log(svgString);
});
