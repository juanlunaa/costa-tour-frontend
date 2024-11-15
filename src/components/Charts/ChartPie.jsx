"use client"
import React, { useEffect, useRef } from "react"
import * as echarts from "echarts"

export default function ChartPie() {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)

    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        center: "center",
        top: "5%",
      },
      series: [
        {
          name: "Datos para",
          type: "pie",
          radius: "50%",
          startAngle: 330,
          data: [
            {
              value: 400,
              name: "Publicado",
              itemStyle: { color: "#694BDB" },
              label: {
                formatter: "{d}%",
                color: "auto",
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            {
              value: 1300,
              name: "Visualizacion",
              itemStyle: { color: "#44BCD7" },
              label: {
                formatter: "{d}%",
                color: "auto",
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            {
              value: 1000,
              name: "Sin comentar",
              itemStyle: { color: "#E075C9" },
              label: {
                formatter: "{d}%",
                color: "auto",
                fontSize: 16,
                fontWeight: "bold",
              },
            },
          ],

          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    }

    myChart.setOption(option)

    // Cleanup chart on component unmount
    return () => {
      myChart.dispose()
    }
  }, [])

  return (
    <div className="bg-white rounded-3xl shadow-customBoxShadow">
      <div ref={chartRef} style={{ width: "100%", height: "350px" }} />
    </div>
  )
}
