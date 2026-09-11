import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='py-5 border-t border-gray-300'>
            <div className='mx-10 py-5 flex justify-between'>
                <div>
                    <img src={logo} alt='footer logo' />
                    <div className='py-5 max-w-md'>
                        <p className='text-gray-400'>Curated tools, technologies, and resources for developers
                            building modern softwares.
                        </p>
                    </div>
                    <div className='flex items-center gap-4 text-gray-600'>
                        <span>Github</span>
                        <span>Twitter</span>
                        <span>Linkdin</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-slate-700'>PRODUCT</h2>
                    <div className='flex flex-col gap-3 pt-3 text-gray-500'>
                        <span>Home</span>
                        <span>Technologies</span>
                        <span>Projects</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-slate-700'>COMPANY</h2>
                    <div className='flex flex-col gap-3 pt-3 text-gray-500'>
                        <span>About</span>
                        <span>Contact</span>
                        <span>Careers</span>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-slate-700'>LEGAL</h2>
                    <div className='flex flex-col gap-3 pt-3 text-gray-500'>
                        <span>Privacy Policy</span>
                        <span>Terms of services</span>
                    </div>
                </div>

            </div>

            <div className='border-t border-gray-300 py-5 mx-10'>
                <div className='flex items-center justify-between text-gray-400'>
                    <div>
                        <div>&copy;2026 DevStack All right reserved</div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span>Privacy</span>
                        <span>Terms</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer