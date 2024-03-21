import React from 'react'
import Table from './Table'

const MyComponent = () => {
  const headers = ['Nombre', 'Edad', 'Ciudad']
  const data = [
    ['Juan', 25, 'Madrid'],
    ['María', 30, 'Barcelona'],
    ['Carlos', 22, 'Sevilla'],
    ['Ana', 28, 'Valencia']
  ]

  return (
    <div>
      <h1>Mi tabla personalizada</h1>
      <Table
        headers={headers}
        data={data}
        headerColor="blue"
        rowColor="gray"
      />
    </div>
  )
}

export default MyComponent
