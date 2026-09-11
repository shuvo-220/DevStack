import image from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className="mx-10 py-10 flex items-center justify-between">
        {/* text part */}
        <div>
            <h1 className='text-6xl font-bold'>Build Your Ideal</h1>
            <span className='text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span>
            <p className='py-5 text-slate-600 leading-relaxed max-w-xl pt-5'>Explore Frontend.Backend.Database,and Tooling Options,
            Compare then side by side, and put togther the stack 
            that fits your next projects. </p>

            <div className='flex items-center gap-4 pt-10'>
                <button className='py-2 px-6 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer text-white rounded-md'>Explore Technologies</button>
                <button className='py-2 px-12 rounded-md border-1 border-gray-300 cursor-pointer text-gray-500'>Learn More</button>
            </div>
        </div>

        {/* image part */}
        <div>
            <img src={image} alt='hero image' />
        </div>
    </div>
  )
}

export default Hero