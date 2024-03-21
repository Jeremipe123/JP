import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const DynamicApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })

const ColumnChart = () => {
  const [chartOptions, setChartOptions] = useState({})
  const [chartSeries, setChartSeries] = useState([])

  useEffect(() => {
    const options = {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          endingShape: 'rounded',
          columnWidth: '55%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['Primera', 'Segunda', 'Tercera'],
        labels: {
          style: {
            fontSize: '13px'
          }
        }
      },
      colors: ['#67b7dc', '#6794dc', '#6771dc']
    }

    const series = [{
      data: [21, 22, 10]
    }]

    setChartOptions(options)
    setChartSeries(series)
  }, [])

  return (
    <div className="flex items-center h-full mt-2 rounded-md">
      <DynamicApexCharts options={chartOptions} series={chartSeries} type="bar" height={300} width={410} />
    </div>
  )
}

export default ColumnChart
