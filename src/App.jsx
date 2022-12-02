import { useState,useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const columnas=[
  {
    name:'ID',
    selector:'id',
    sortable:true
  },
  {
    name:'Nombre',
    selector:'fullName',
    sortable:true,
    grow:3
  },
  {
    name:'Alias',
    selector:'title',
    sortable:true,
    grow:3
  },
  {
    name:'Casa',
    selector:'family',
    sortable:true,
    grow:3
  },
  {
    name:'Image',
    selector:'imageUrl',
    sortable:true,
    grow:3
  }
]

const paginacionOpciones={
  rowsPerPageText:'Filas por Página',
  rangeSeparatorText:'de',
  selectAllRowsItem:true,
  selectAllRowsItemText:'Todos',
  
}

function App() {
  
  const [personajes,setListadoPersonajes]=useState([]);

  useEffect(()=>{

    const obtenerPersonajes=async()=>{
      const url="https://thronesapi.com/api/v2/characters";
      const result= await axios.get(url)

      setListadoPersonajes(result.data)
      console.log(result.data)
    }
   
    obtenerPersonajes()
   

  },[])

  return (
    <div>
      <DataTable
      columns={columnas}
      title="Personajes de Game Of Thrones"
      data={personajes}
      pagination
      paginationComponentOptions={paginacionOpciones}
      fixedHeader
      fixedHeaderScrollHeight='600px'/>
    </div>   
  )
}

export default App
