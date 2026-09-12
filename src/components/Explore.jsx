import { useState } from 'react'
import StackCard from './StackCard'
import data from './data.json'
import MyStack from './MyStack'


const Explore = () => {

  const[techStack, setTackStack] = useState(data)
  const[stack, setStack] = useState([])

  const handleAddToStack=(tech)=>{
    setStack(prev=>[...prev, tech])
  }

  const handleRemove=(id)=>{
    setStack(prev=>prev.filter(tech=>tech.id !== id))
  }

  const removeAll=()=>{
    setStack([])
  }

  return (
    <div className='py-10 mx-10'>
        <div>
            <h1 className='text-4xl font-bold' >Explore the <span className='bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent'>technologies</span></h1>
            <p className='py-3 text-gray-500'>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className='flex justify-between gap-4'>
          <StackCard 
          techStack={techStack} 
          stack={stack} 
          onAddStack={handleAddToStack}
          />

          <MyStack 
          stack={stack} 
          onRemove={handleRemove} 
          onRemoveAll={removeAll} />
        </div>

    </div>
  )
}

export default Explore