import {create }from 'apisauce';


    const api = create({ baseURL: 'https://rickandmortyapi.com/api' })



const ObtenerProyectos = async (state)=>{
         const response = await api.get('https://rickandmortyapi.com/api/character')
        state(response)
        console.log(response.data)
    }

    export  { ObtenerProyectos }