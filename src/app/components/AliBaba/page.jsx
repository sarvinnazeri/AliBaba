import React from 'react'
import Link from 'next/link'

export default function AliBaba() {
    return (
        <div className='flex border rounded-lg my-10 w-full *:w-full flex-wrap justify-center'>
            <div className='md:w-[50%]'>
                <figure className='w-full justify-center flex'>
                    <img
                        src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/app-mobile@4x-e3e3b7dc.webp"
                        alt="application screenshot"
                        data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/app-mobile@4x-e3e3b7dc.webp"
                        data-expand="0"
                        width="334"
                        height="294"
                    />
                </figure>
            </div>
            <div className='md:w-[50%] w-full flex flex-wrap justify-center md:my-0 my-5 '>
                <div className='w-[50%] flex-wrap flex *:w-full justify-center items-center content-center'>
                    <h2 className='text-[25px] font-bold'>اپلیکیشن علی‌بابا</h2>
                    <span className='text-[20px] mt-1'>سریع‌تر و مطمئن‌تر به سفر بروید ‌</span>
                    <div className='flex *:mx-2  flex-wrap justify-end content-center items-end'>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="mr-2  text-[rgb(1,119,219)]"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <Link href={'/sa'} className=' flex items-center mt-5 text-[rgb(1,119,219)]'> مشاهده لینک های دانلود</Link>
                    </div>
                    <div className='flex *:mx-2 flex-wrap justify-end content-center items-end mt-10'>
                        <span className='text-[rgb(189,198,203)] text-[14px]'>قابلیت نصب روی Android و iOS</span>
                    </div>
                </div>

                <div className='w-full md:w-[50%] justify-center items-center flex my-5 md:my-0'>
                    <figure>
                        <img
                            src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/qrcode-56155e39.png"
                            alt="بارکد دانلود اپلیکیشن علی بابا"
                            width="148"
                            height="183"
                            style={{ marginLeft: 0 }}
                        />

                    </figure>
                </div>
            </div>
        </div>
    )
}