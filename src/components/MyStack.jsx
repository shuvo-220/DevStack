import React from 'react'
import { FaReact, FaVuejs, FaNodeJs, FaJs, FaJava, FaDocker } from "react-icons/fa";
import { SiSvelte, SiNextdotjs, SiPostgresql, SiRedis, SiTypescript, SiTailwindcss }
    from "react-icons/si";


const MyStack = ({ stack, onRemove, onRemoveAll }) => {

 const icons = { FaReact, FaVuejs, SiSvelte, SiNextdotjs, FaNodeJs, SiPostgresql, SiRedis, FaJs, SiTypescript, FaJava, SiTailwindcss, FaDocker };
    

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
                        const Icon = icons[data.icon];
                        return <div className="mt-5 ">
                            <div className="flex justify-between items-center border border-gray-300 rounded-lg p-2 min-w-[250px]">
                                <div className="flex items-center justify-between gap-2">
                                    <span className='w-10 h-10 flex items-center justify-center text-4xl'>{<Icon />} </span>
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
                        className='mt-3 border border-red-500 hover:bg-red-600 text-red-500 hover:text-white py-1 w-full rounded-md cursor-pointer'
                    >
                        Remove All
                    </button>
                </div>
            )}


        </div>
    )
}

export default MyStack