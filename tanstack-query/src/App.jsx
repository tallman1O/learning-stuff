import { useQuery } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'

const App = () => {
  const [id, setId] = useState(1)
  const {data, isPending, refetch, error} = useQuery({
    queryKey: ['todos', id],
    queryFn: () => getTodos(id)
  })

  if (error){
    return (
      <>
      
      <div>Error: {error.message}</div>
      <button style={{margin: '10px'}} onClick={() => refetch()}>Refetch</button>
      </>
    )
  }
  return (
    <>
      <div>{isPending ? <Loader /> : JSON.stringify(data)}</div>
      <button style={{margin: '10px'}} onClick={() => refetch()}>Refetch</button>
      <button style={{margin: '10px'}} onClick={() => setId(id + 1)}>Increment</button>
    </>
  )
}

const getTodos = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return await response.json()
}

export default App