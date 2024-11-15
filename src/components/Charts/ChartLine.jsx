"use client"
import React, { useEffect, useState } from "react"
import * as echarts from "echarts"
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react"

const ChartLine = () => {
  const [selectedMonth, setSelectedMonth] = useState("Enero")
  const [selectedYear, setSelectedYear] = useState(2024)
  const chartRef = React.useRef(null)

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const data = {
    Enero: {
      Positivos: [120, 132, 101, 134, 90, 230, 710],
      Negativos: [220, 182, 191, 234, 290, 330, 410],
    },
    Febrero: {
      Positivos: [150, 142, 111, 154, 100, 200, 810],
      Negativos: [210, 162, 201, 224, 300, 320, 410],
    },
    Marzo: {
      Positivos: [200, 142, 111, 154, 100, 200, 510],
      Negativos: [210, 162, 201, 224, 300, 320, 410],
    },
    Abril: {
      Positivos: [150, 50, 111, 154, 100, 100, 910],
      Negativos: [310, 50, 208, 224, 304, 320, 410],
    },
    Mayo: {
      Positivos: [150, 142, 111, 154, 100, 200, 81],
      Negativos: [240, 162, 201, 224, 300, 320, 480],
    },
    Junio: {
      Positivos: [180, 132, 141, 174, 120, 250, 620],
      Negativos: [230, 172, 211, 244, 310, 340, 460],
    },
    Julio: {
      Positivos: [170, 122, 131, 144, 110, 210, 570],
      Negativos: [220, 162, 191, 224, 290, 310, 440],
    },
  }
  const handleNextYear = () => {
    setSelectedYear((prev) => prev + 1)
    setSelectedMonth("Enero")
  }
  const handlePreviousYear = () => {
    setSelectedYear((prev) => (prev > 2024 ? prev - 1 : 2024))
    setSelectedMonth("Enero")
  }

  const handleMonthChange = (month) => {
    setSelectedMonth(month)

    if (selectedYear !== 2024) {
      setSelectedYear(2025) // Asegurar que el año es 2025
    }
  }

  const getChartData = () => {
    if (selectedYear === 2024) {
      return data[selectedMonth] || { Positivos: [], Negativos: [] } // Solo datos de 2024
    } else {
      return { Positivos: [], Negativos: [] } // Datos vacíos si no es 2024
    }
  }

  const renderChart = () => {
    const myChart = echarts.init(chartRef.current, "")
    const chartData = getChartData()
    const option = {
      title: {
        text: `${selectedMonth} ${selectedYear}`,
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
        data: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
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
          name: "Positivos",
          type: "line",
          stack: "Total",
          data: chartData.Positivos || [],
        },
        {
          name: "Negativos",
          type: "line",
          stack: "Total",
          data: chartData.Negativos || [],
          color: "#FFA432",
        },
      ],
    }
    myChart.setOption(option)
    myChart.resize()
  }

  useEffect(() => {
    renderChart()

    window.addEventListener("resize", renderChart) // Actualiza el gráfico cuando cambia el tamaño de la ventana

    return () => {
      window.removeEventListener("resize", renderChart) // Limpia el evento cuando el componente se desmonta
    }
  }, [selectedMonth, selectedYear])

  return (
    <div className="py-8 px-20 bg-white rounded-3xl shadow-customBoxShadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button onClick={handlePreviousYear}>
            {" "}
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span>{selectedYear}</span>
          <button onClick={handleNextYear}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <select
          value={selectedMonth}
          onChange={(e) => handleMonthChange(e.target.value)}
          className="flex items-center "
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div ref={chartRef} style={{ width: "100%", height: "300px" }} />
    </div>
  )
}

export default ChartLine
