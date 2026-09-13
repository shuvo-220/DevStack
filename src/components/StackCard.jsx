import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaReact, FaVuejs, FaNodeJs, FaJs, FaJava, FaDocker } from "react-icons/fa";
import { SiSvelte, SiNextdotjs, SiPostgresql, SiRedis, SiTypescript, SiTailwindcss }
    from "react-icons/si";

const StackCard = ({ techStack, stack, onAddStack }) => {

    const icons = { FaReact, FaVuejs, SiSvelte, SiNextdotjs, FaNodeJs, SiPostgresql, SiRedis, FaJs, SiTypescript, FaJava, SiTailwindcss, FaDocker };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl">
                {techStack.map(tech => {
                    const isAdded = stack.some(item => item.id === tech.id);
                    return <div className='border border-gray-300 p-3 rounded-sm' >
                        <div className="flex items-center justify-between">
                            
                            <div className="w-14 h-14 flex items-center justify-center text-4xl">
                                {(() => {
                                    const Icon = icons[tech.icon];
                                    return <Icon />;
                                })()}
                            </div>

                            
                            <span className="text-gray-500 bg-gray-100 py-0.5 px-2 rounded-full">
                                {tech.badge}
                            </span>
                        </div>
                        <div className='font-bold text-xl mb-2'>{tech.name}</div>
                        <div className='text-gray-500 mt-2 min-h-16'>{tech.description}</div>
                        <hr className='text-gray-300 mt-5' />
                        <div className='flex items-center justify-between mt-2'>
                            <span className='bg-gray-100 p-1 text-gray-400 rounded-lg'>{tech.category}</span>
                            <span className='text-gray-600'>{tech.level}</span>
                            <span className='flex items-center gap-1'>
                                <FaStar className='text-yellow-400' />{tech.rating}</span>
                        </div>
                        <button
                            onClick={() => onAddStack(tech)}
                            disabled={isAdded}
                            className={`w-full text-white py-2 text-center mt-4 rounded-md
                                    ${isAdded
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-slate-900 hover:bg-slate-700 cursor-pointer'
                                }
                                `}
                        >
                            {isAdded ? 'Added to Stack' : 'Add To Stack'}
                        </button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default StackCard