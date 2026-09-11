import logo from '../assets/logo-text.png'
import ham from '../assets/hamburger.png'

const Navbar = () => {
    return (
        <div className=' border-b border-gray-300 fixed top-0 left-0 w-full z-50'>
            <div className='flex items-center justify-between mx-10 py-6'>

                <div className='flex items-center'>
                    <img className='sm:block md:hidden' src={ham}  alt='mobile menu' />
                    <img className='hidden md:block' src={logo} alt='logo' />
                </div>

                <div>
                    <nav>
                        <ul className='hidden md:flex items-center gap-5'>
                            <li className='text-pink-600'>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center gap-5'>
                    <button>Sign In</button>
                    <button className='bg-pink-600 py-2 px-5 text-white cursor-pointer rounded-full'>Sign Up</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar