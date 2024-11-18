"use client"
import React, { useEffect, useRef, useState } from "react"
import * as echarts from "echarts"
import axios from "axios"
import { BACKEND_SERVER } from "@/env"

export default function ChartBar() {
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState(null)

  const renderChart = () => {
    const myChart = echarts.init(chartRef.current)

    const option = {
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
        name: "Cantidad",
        nameLocation: "middle",
        nameGap: 30,
        nameTextStyle: {
          color: "#363636",
          fontWeight: "bold",
          fontSize: 14,
        },
      },

      series: [
        {
          name: "Totales",
          data: [chartData.total],
          type: "bar",
          color: "#FFA432",
        },
        {
          name: "Asisten",
          data: [chartData.asisten],
          type: "bar",
          color: "#37B1E2",
        },
        {
          name: "No Asisten",
          data: [chartData.noAsisten],
          type: "bar",
          color: "#E075C9",
        },
      ],
    }

    myChart.setOption(option)
    myChart.resize()
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${BACKEND_SERVER}/statistics/attendance`
      )

      setChartData({
        total: data.totalUsersWithFeedback,
        asisten: data.usersWithFeedbackAndAttendance,
        noAsisten: data.usersWithFeedbackButNoAttendance,
      })
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
