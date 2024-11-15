"use client"
import React, { useEffect, useRef } from "react"
import * as echarts from "echarts"

export default function ChartBar() {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)

    const option = {
      backgroundColor: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
          { offset: 0, color: "rgba(255, 0, 0, 0.17)" },
          { offset: 1, color: "rgba(0, 190, 255, 0.17)" },
        ],
        global: false,
      },
      legend: {
        top: "5%",
      },

      grid: {
        top: "20%",
        left: "20%",
        right: "20%",
        bottom: "10%",
        with: 90,
        containLabel: true,
      },

      xAxis: {
        type: "category",
        data: ["Comentarios"],
        axisLabel: {
          color: "#363636",
          fontSize: 14,
          margin: 20,
          fontWeight: "bold",
        },
      },

      yAxis: {
        type: "value",
        name: "Cantidad de Comentarios",
        nameLocation: "middle",
        nameGap: 40,
        nameTextStyle: {
          color: "#363636",
          fontWeight: "bold",
          fontSize: 14,
        },
      },

      series: [
        {
          name: "Publicados",
          data: [200],
          type: "bar",
          color: "#694BDB",
        },
        {
          name: "Visualizacion",
          data: [120],
          type: "bar",
          color: "#44BCD7",
        },
        {
          name: "Sin comentar",
          data: [130],
          type: "bar",
          color: "#E075C9",
        },
      ],
    }

    myChart.setOption(option)

    return () => {
      myChart.dispose()
    }
  }, [])

  return (
    <div
      ref={chartRef}
      className="shadow-customBoxShadow"
      style={{
        width: "100%",
        height: "350px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    />
  )
}
