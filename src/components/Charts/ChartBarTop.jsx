"use client"
import React, { useEffect, useRef, useState } from "react"
import * as echarts from "echarts"
import axios from "axios"
import { BACKEND_SERVER } from "@/env"

const colors = [
  "#694BDB",
  "#FF7777",
  "#37B1E2",
  "#89F233",
  "#DB4BA4",
  "#FFA432",
  "#3E56EE",
  "#FBE166",
  "#798477",
  "#3AF2F2",
]

export default function ChartBarTop() {
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState(null)

  const renderChart = () => {
    const myChart = echarts.init(chartRef.current)

    const option = {
      backgroundColor: {
        type: "linear",
        x: 1,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
          { offset: 0, color: "rgba(0, 120, 255, 0.11)" },
          { offset: 1, color: "rgba(87, 0, 255, 0.2)" },
        ],
        global: false,
      },
      legend: {
        top: "center",
        right: "right",
        width: 170,
        textStyle: {
          fontSize: 10,
        },
      },

      grid: {
        top: "20%",
        left: "5%",
        right: "28%",
        bottom: "10%",
        with: 190,
        containLabel: true,
      },

      xAxis: {
        type: "category",

        data: ["Top 10  de alojamientos más visitados"],
        axisLabel: {
          color: "#363636",
          fontSize: 14,
          margin: 20,
          fontWeight: "bold",
        },
      },

      yAxis: {
        type: "value",
        name: "Cantidad de visitas",
        nameLocation: "middle",
        nameGap: 40,
        nameTextStyle: {
          color: "#363636",
          fontWeight: "bold",
          fontSize: 14,
        },
      },

      series: chartData.map((item, index) => ({
        name: item.planName?.trim(),
        data: [item.visits],
        type: "bar",
        color: colors[index],
      })),
    }

    myChart.setOption(option)
    myChart.resize()
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${BACKEND_SERVER}/statistics/top-most-visited-hotels`
      )

      setChartData(data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (chartData) {
      renderChart()
    }

    window.addEventListener("resize", renderChart)

    return () => {
      window.removeEventListener("resize", renderChart)
    }
  }, [chartData])

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
