// import React from 'react'
// import ReactApexCharts from 'react-apexcharts'

// const ColumnChart = () => {
//   const options = {
//     chart: {
//       type: 'bar',
//       height: 350
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         endingShape: 'rounded',
//         columnWidth: '55%'
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     // colors: ['#007bff'],
//     // colors: ['#67b7dc', '#6794dc', '#6771dc'],
//     xaxis: {
//       categories: ['Primera', 'Segunda', 'Tercera']
//     }
//   }

//   const series = [
//     {
//       name: 'Cargos',
//       data: [14110, 4238, 7680]
//     }
//   ]

//   return (
//     <div className="flex items-center h-full mt-2 rounded-md">
//       <ReactApexCharts options={options} series={series} type="bar" height={300} width={410} />
//     </div>
//   )
// }

// export default ColumnChart

import React from 'react'
import ReactApexCharts from 'react-apexcharts'

const ColumnChart = () => {
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
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

  return (
    <div className="flex items-center h-full mt-2 rounded-md">
      <ReactApexCharts options={options} series={series} type="bar" height={300} width={410} />
    </div>
  )
}

export default ColumnChart
