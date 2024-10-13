import React from 'react'

export default function page() {
    return (
        <section className='bg-gray-100 justify-center w-full flex shadow-inner'>
            <section className='w-full md:w-[85%] justify-center items-center flex flex-wrap'>
                <div className='flex *:w-[50%] p-10 my-20 rounded-lg bg-white border'>
                    <div className='flex flex-wrap justify-center content-center'>
                        <figure>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/login-8b648bbd.svg" alt="" />
                            <h2 className='text-[20px] font-bold md:text-[30px]  justify-center flex text-center'>علی‌بابا رتبه یک سفر</h2>
                            <p className='text-center'>برای خرید آسان و امن و مشاهده تخفیف‌های ویژه علی‌بابا، عضو شوید.</p>
                        </figure>
                    </div>
                    <div className='flex flex-wrap justify-end content-center *:my-2 border-s'>
                        <h2 className='text-[20px] font-bold w-full'>ورود یا ثبت‌نام</h2>
                        <h3 className='text-[16px] font-bold w-full'>برای ادامه شماره موبایل خود را وارد کنید.</h3>
                        <div class="a-input mb-5 md:mb-6 text-right is-invalid has-append is-lg  w-full justify-end items-center flex flex-wrap">
                            <div class="flex flex-col space-y-2 w-[70%]">
                                <fieldset class="border border-gray-300 rounded p-2 w-[120px] md:w-[40%] lg:w-full">
                                    <legend class="text-gray-500 px-2 w-full">شماره موبایل</legend>
                                    <div class="flex items-center border border-gray-300 rounded w-[120px] md:w-[40%] lg:w-full">
                                        <span dir="ltr" class="text-gray-300 mr-1 px-2 border-r">+۹۸</span>
                                        <input id="al1180194" dir="ltr" type="tel" maxlength="10" name="mobile" autocomplete="off" class="flex-grow p-2 text-right" inputmode="numeric" />
                                    </div>
                                </fieldset>
                                <span class="text-red-500 text-sm">شماره موبایل را وارد کنید.</span>
                            </div>

                        </div>

                        <div className='w-full flex flex-wrap '>
                            <i></i>
                            <span className='justify-end  w-full'>استفاده از علی‌بابا به معنی پذیرش قوانین و مقررات این سرویس است.</span>
                        </div>
                        <button className='border px-5 py-4 rounded-lg bg-[rgb(138,184,236)] text-[white] w-[80%]'> تایید و دریافت کد</button>
                        <span className='cursor-pointer w-full justify-end md:justify-center md:ps-0 md:ps-32 flex text-[rgb(14,122,220)]'>ورود با کلمه عبور</span>
                    </div>
                </div>
            </section>
        </section>
    )
}
