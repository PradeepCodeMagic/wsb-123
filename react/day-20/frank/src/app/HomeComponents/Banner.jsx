import React from 'react'

export default function Banner() {
    return (
        <>
            <section className='bg-[#F6F6F3] py-[40px] ' >
                <div className='w-full  px-[40px] '>
                    <div className='grid grid-cols-2 items-center'>
                        <div className=' pt-[50px] '>
                            <h1 className='text-[105px] font-bold leading-[110px]  ' >
                                BLACK
                                FRIDAY
                            </h1>
                            <h1 className=' text-[35px] py-[20px] ' >40% off everything*</h1>

                            <button className='w-[140px] bg-[black] p-[10px_0px] text-white ' >Men</button>
                            <button className='w-[140px] ml-[40px] bg-[black] p-[10px_0px] text-white '>Women</button>
                        </div>
                        <div className=''>
                            <img className='w-[40vw] ml-[80px] h-[70vh] ' src='https://www.frankandoak.com/cdn/shop/files/Black-Friday-HP-anim_1_4665964b-1c42-47b1-bf0b-1a7f7e4b7ae0.gif?v=1731429015' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
