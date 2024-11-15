"use client"
import React, { useEffect, useRef } from "react"
import * as echarts from "echarts"

export default function ChartBarTop() {
  const chartRef = useRef(null)

  useEffect(() => {
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

      series: [
        {
          name: "Hoteles",
          data: [1500],
          type: "bar",
          color: "#694BDB",
          barWidth: 40,
        },
        {
          name: "hotel sofitel barú calablanca",
          data: [1300],
          type: "bar",
          color: "#FF7777",
          barWidth: 40,
        },
        {
          name: "Hotel caribe",
          data: [1200],
          type: "bar",
          color: "#37B1E2",
          barWidth: 40,
        },
        {
          name: "Hotel OSH",
          data: [1100],
          type: "bar",
          color: "#89F233",
          barWidth: 40,
        },
        {
          name: "Hotel sofitel legend santa clara",
          data: [1000],
          type: "bar",
          color: "#DB4BA4",
          barWidth: 40,
        },
        {
          name: "otel charleston santa teresa",
          data: [900],
          type: "bar",
          color: "#FFA432",
          barWidth: 40,
        },
        {
          name: "hotel movich",
          data: [800],
          type: "bar",
          color: "#3E56EE",
          barWidth: 40,
        },
        {
          name: "hotel capilla del mar",
          data: [700],
          type: "bar",
          color: "#FBE166",
          barWidth: 40,
        },
        {
          name: "hotel almirante",
          data: [600],
          type: "bar",
          color: "#798477",
          barWidth: 40,
        },
        {
          name: "hotel karmairí",
          data: [500],
          type: "bar",
          color: "#3AF2F2",
          barWidth: 40,
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
