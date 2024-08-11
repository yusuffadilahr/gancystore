import React from 'react'
import { Link } from 'react-router-dom'

const FooterComp = () => {
    return (
        <footer>
            <div className='flex bg-slate-50 border-t w-full h-fit mt-10'>
                <div className='grid grid-cols-2 lg:grid-cols-4 w-full h-fit pb-2'>
                    <div className='w-full h-full p-5'>
                        <h1 className='font-bold text-gray-500 mb-2 lg:text-lg'>Costumer Service</h1>
                        <ul className='pl-2'>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-3 text-gray-300'>FAQ</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Returns & Refunds</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Terms & Conditions</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='w-full h-full p-5'>
                        <h1 className='font-bold text-gray-500 mb-2 lg:text-lg'>Gancy Shop House</h1>
                        <ul className='pl-2'>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Gancy Store Support</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Location Store</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Store Hours</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Store Event</li>
                        </ul>
                    </div>
                    <div className='w-full h-full p-5'>
                        <h1 className='font-bold text-gray-500 mb-2 lg:text-lg'>About Us</h1>
                        <ul className='pl-2'>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Our Story</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>Careers with Gancy Shop House</li>
                            <li className='text-xs pb-1 lg:text-[13px] lg:pb-2 text-gray-300'>News</li>
                        </ul>
                    </div>
                    <div className='w-full h-full p-5'>
                        <h1 className='font-bold text-gray-500 mb-2 lg:text-lg'>Social Media</h1>
                        <div className='p-2 lg:flex'>
                            <Link to='https://linkedin.com/in/yusuffadilahr'>
                                <div className='flex pb-2 lg:pb-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"
                                        className='w-4 lg:w-10 mr-2'>
                                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                    </svg>
                                    <p className='lg:hidden text-xs pb-1 text-gray-300'>
                                        Linkedin
                                    </p>
                                </div>
                            </Link>
                            <Link to='https://wa.me/089513297524'>
                                <div className='flex pb-2 lg:pb-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"
                                        className='w-4 lg:w-10 mr-2'>
                                        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                                    </svg>
                                    <p className='lg:hidden text-xs pb-1 text-gray-300'>
                                        Whatsapp
                                    </p>
                                </div>
                            </Link>
                            <Link to='yusuffadilah58@gmail.com'>
                                <div className='flex pb-2 lg:pb-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"
                                        className='w-4 lg:w-10 mr-2'>
                                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                    </svg>
                                    <p className='lg:hidden text-xs pb-1 text-gray-300'>
                                        Gmail
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComp
