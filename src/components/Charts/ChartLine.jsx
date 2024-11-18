"use client"
import React, { useEffect, useState } from "react"
import * as echarts from "echarts"
import { ChevronRight, ChevronLeft } from "lucide-react"
import axios from "axios"
import { BACKEND_SERVER } from "@/env"

const months = [
  { value: 1, label: "Enero" },
  { value: 2, label: "Febrero" },
  { value: 3, label: "Marzo" },
  { value: 4, label: "Abril" },
  { value: 5, label: "Mayo" },
  { value: 6, label: "Junio" },
  { value: 7, label: "Julio" },
  { value: 8, label: "Agosto" },
  { value: 9, label: "Septiembre" },
  { value: 10, label: "Octubre" },
  { value: 11, label: "Noviembre" },
  { value: 12, label: "Diciembre" },
]

const ChartLine = () => {
  const [selectedDate, setSelectedDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  })

  const [chartData, setChartData] = useState(null)

  const chartRef = React.useRef(null)

  const handleNextYear = () => {
    setSelectedDate((prev) => {
      const newYear = prev.year + 1
      return {
        month:
          newYear === new Date().getFullYear() ? new Date().getMonth() + 1 : 1,
        year: newYear,
      }
    })
  }
  const handlePreviousYear = () => {
    setSelectedDate((prev) => {
      const newYear = prev.year - 1
      return {
        month:
          newYear === new Date().getFullYear() ? new Date().getMonth() + 1 : 1,
        year: newYear,
      }
    })
  }

  const handleMonthChange = (month) => {
    setSelectedDate((prev) => ({ ...prev, month }))
  }

  const renderChart = () => {
    const myChart = echarts.init(chartRef.current, "")
    const option = {
      title: {
        text: `${months.find((m) => m.value === selectedDate.month).label} ${selectedDate.year}`,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Positivos", "Negativos"],
      },
      grid: {
        left: "8%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      },
      yAxis: {
        type: "value",
        name: "Cantidad de Comentarios",
        nameLocation: "middle",
        nameGap: 40,
        nameTextStyle: {
          fontSize: 18,
        },
      },
      series: [
        {
          name: "Negativos",
          type: "line",
          data: chartData.negativos || [],
          color: "#37B1E2",
        },
        {
          name: "Positivos",
          type: "line",
          data: chartData.positivos || [],
          color: "#FFA432",
        },
      ],
    }
    myChart.setOption(option)
    myChart.resize()
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${BACKEND_SERVER}/statistics/positive-negative-feedbacks?month=${selectedDate.month}&year=${selectedDate.year}`
      )

      setChartData({
        positivos: Object.values(data.positiveFeedbacks),
        negativos: Object.values(data.negativeFeedbacks),
      })
    }

    fetchData()
  }, [selectedDate])

  useEffect(() => {
    if (chartData) {
      renderChart()
    }

    window.addEventListener("resize", renderChart) // Actualiza el gráfico cuando cambia el tamaño de la ventana

    return () => {
      window.removeEventListener("resize", renderChart) // Limpia el evento cuando el componente se desmonta
    }
  }, [chartData])

  return (
    <div className="py-8 px-20 bg-white rounded-3xl shadow-customBoxShadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button onClick={handlePreviousYear}>
            {" "}
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span>{selectedDate.year}</span>
          <button onClick={handleNextYear}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <select
          value={selectedDate.month}
          onChange={(e) => handleMonthChange(Number(e.target.value))}
          className="flex items-center "
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>

      <div ref={chartRef} style={{ width: "100%", height: "300px" }} />
    </div>
  )
}

export default ChartLine
