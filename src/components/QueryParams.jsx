import React from 'react'
import { useSearchParams } from 'react-router-dom'

const QueryParams = () => {
    const [, setParams] = useSearchParams();
    return (
        <div className='min-h-screen flex items-center justify-center bg-black gap-6'>
            <button onClick={() => setParams ({name:'one', id:'1'})} className='py-6 px-16 rounded-xl shadow-xl text-2xl font-bold bg-white text-black'>One</button>
            <button onClick={() => setParams({ name: 'two', id: '2' })} className='py-6 px-16 rounded-xl shadow-xl text-2xl font-bold bg-white text-black'>Two</button>
            <button onClick={() => setParams({ name: 'three', id: '3' })} className='py-6 px-16 rounded-xl shadow-xl text-2xl font-bold bg-white text-black'>Three</button>
        </div>
    )
}

export default QueryParams