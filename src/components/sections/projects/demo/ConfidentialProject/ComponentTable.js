import React from 'react'

const MyComponent = () => {
  const data = [
    { Estado: 'Distrito Federal', Municipio: 'Libertador', Nombre: 'Juan', Apellido: 'Pérez', Cédula: '1234567890', Ocupación: 'Ingeniero' },
    { Estado: 'Mérida', Municipio: 'Campo Elías', Nombre: 'María', Apellido: 'González', Cédula: '1234567890', Ocupación: 'Doctora' },
    { Estado: 'Aragua', Municipio: 'Bolivar', Nombre: 'Pedro', Apellido: 'Rodríguez', Cédula: '1234567890', Ocupación: 'Estudiante' },
    { Estado: 'Sucre', Municipio: 'Arismendi', Nombre: 'Ana', Apellido: 'Martínez', Cédula: '1234567890', Ocupación: 'Abogada' },
    { Estado: 'Lara', Municipio: 'Crespo', Nombre: 'Luis', Apellido: 'Sánchez', Cédula: '1234567890', Ocupación: 'Contador' }
  ]

  return (
    <div className='mt-5'>
      <div className="relative overflow-x-auto rounded-t-md">
        <table className="w-full text-sm text-left rtl:text-right text-white overflow-x-auto">
          <thead className="text-xs uppercase bg-[#803494] text-white">
            <tr>
              {Object.keys(data[0]).map((key, index) => (
                <th key={index} scope="col" className="px-4 py-5">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className='text-black bg-white border-b border-gray-700'>
                {Object.values(item).map((value, index) => (
                  <td key={index} className="px-4 py-4">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyComponent
