import React from 'react'

const dummy = [
    {
        "id": 1,
        "name": "React",
        "description": "A declarative component-based JavaScript library for building user interfaces.",
        "category": "Frontend",
        "level": "Intermediate",
        "rating": 4.9,
        "badge": "Popular",
        "icon": "⚛️"
    },
    {
        "id": 2,
        "name": "Vue.js",
        "description": "A progressive JavaScript framework for building user interfaces.",
        "category": "Frontend",
        "level": "Intermediate",
        "rating": 4.8,
        "badge": "Versatile",
        "icon": "🟢"
    },
]

const MyStack = ({ stack, onRemove, onRemoveAll }) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5 h-fit">

            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-lg"> Your Stack</h2>
                    <p className="text-xs text-gray-400">{stack.length} Technologies Selected</p>
                </div>
            </div>


            {
                stack.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center mt-5">
                        No technology added yet.
                    </p>
                ) : (

                    stack.map(data => {
                        return <div className="mt-5 ">
                            <div className="flex justify-between items-center border border-gray-300 rounded-lg p-2 min-w-[250px]">
                                <div className="flex items-center justify-between gap-2">
                                    <span>{data.icon} </span>
                                    <div className='flex flex-col'>
                                        <span className="text-sm font-medium">{data.name}</span>
                                        <span className='text-[10px] text-gray-400'>{data.category}</span>
                                    </div>
                                </div>
                                {/* Remove */}
                                <button className="text-gray-400 hover:text-red-500"
                                    onClick={() => onRemove(data.id)}> ✕ </button>
                            </div>


                        </div>
                    })

                )
            }

            {stack.length > 0 && (
                <div>
                    <button
                        onClick={onRemoveAll}
                        className='mt-3 bg-red-500 hover:bg-red-600 text-white py-1 w-full rounded-md cursor-pointer'
                    >
                        Remove All
                    </button>
                </div>
            )}


        </div>
    )
}

export default MyStack