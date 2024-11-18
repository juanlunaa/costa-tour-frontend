"use client"
import React, { useEffect, useRef, useState } from "react"
import * as echarts from "echarts"
import { BACKEND_SERVER } from "@/env"
import axios from "axios"

export default function ChartPie() {
  const chartRef = useRef(null)
  const [chartData, setChartData] = useState(null)

  const renderChart = () => {
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
          name: "Numero de turistas que",
          type: "pie",
          radius: "50%",
          startAngle: 330,
          data: [
            {
              value: chartData.asisten,
              name: "Comentan y asisten",
              itemStyle: { color: "#37B1E2" },
              label: {
                formatter: "{d}%",
                color: "auto",
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            {
              value: chartData.noAsisten,
              name: "Comentan y no asisten",
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
    <div className="bg-white rounded-3xl shadow-customBoxShadow">
      <div ref={chartRef} style={{ width: "100%", height: "350px" }} />
    </div>
  )
}
