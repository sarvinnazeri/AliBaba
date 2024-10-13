"use client"
import React from 'react'
import Part3 from '../parvazDakheli/part3'
import Slider from '../parvazDakheli/slider'
import AliBaba from '../AliBaba/page'
import Dropdown from '../parvazDakheli/dropDown'
import Link from 'next/link'
import Menu from '../menu/page'
import SwiperVilla from './swiperVilla'


export default function page() {



    const options = [
        { label: 'رزرو اینترنتی اقامتگاه در علی‌بابا چگونه است؟', items: ['برای رزرو اقامتگاه کافیست وارد وب‌سایت یا اپلیکیشن علی‌بابا شوید. روی گزینه «ویلا و اقامتگاه» بزنید. بعد از اینکه اطلاعاتی مانند مقصد یا نوع اقامتگاهتان را تکمیل کردید، گزینه جستجو را بزنید و به لیست کامل اقامتگاه‌ها دسترسی پیدا کنید. در نهایت اقامتگاه مدنظرتان را انتخاب کنید و با انتخاب گزینه «مشاهده و رزرو» فرایند رزرو اقامتگاه را تکمیل کنید.'] },
        { label: 'تاییدیه رزرو اقامتگاه در علی‌بابا چگونه است؟', items: ['واچر یا همان تاییدیه رزرو اقامتگاه یک رسید است که بعد از رزرو اقامتگاه برای مهمان صادر می‌شود. واچر نشان می‌دهد که مهمان همه یا بخشی از مبلغ اقامتش را پرداخت کرده است. توجه داشته باشید که واریز مبلغ به‌معنای قطعی‌شدن رزرو نیست و بعد از رزرو اقامتگاه بعد از تایید میزبان و صدور واچر، قطعی خواهد شد.برای هماهنگی‌های بیشتر، اطلاعات رزرو و اطلاعات تماس میزبان و مهمان از طریق پیامک و ایمیل برای هر دو طرف فرستاده می‌شود.'] },
        { label: 'رزرو اقامتگاه در علی‌بابا برای چه مدت زمانی امکان‌پذیر است؟', items: ['رزرو اقامتگاه از حداقل یک شب شروع می‌شود و تا دو ماه ادامه پیدا می‌کند.'] },
        { label: 'امکان رزرو اقامتگاه در کدام شهرها وجود دارد؟', items: ['از شمالی‌ترین نقطه کشور تا جنوبی‌ترین نقطه. از شرق تا غرب. کافیست مقصدتان را انتخاب کنید و اقامتگاه‌های علی‌بابا را ببینید.'] },
    ]


    const swiper = [
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/3112078/8b7175b9-9791-447d-b74f-0ff732d42ec7.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/4462596/6c25bb68-0524-4acb-bc1b-ba00c0f2a63f.jfif', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1374733/9a9e950e-2c6e-4d66-a9cb-de11884cdfdc.jpeg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1479505/629c1234-5e15-4899-92df-d89b71c4278b.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/2909302/4f7aa5a4-1836-4c33-9656-a90c51122b4d.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1309130/e6e6fc85-df40-4cd6-b34f-e3d5ecbf0b22.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/852781/19896434-8d75-4ecc-9504-ad8e09d986ab.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
    ]
    const apart = [
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/2055143/35dab7e3-28ef-4bff-b0cc-ce7e52e4f17d.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1597056/826ff20f-3c1c-4167-a6a3-9dd30ef9c278.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/5215548/6dae51d8-89f0-4a39-9235-5d689a2a2ae4.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/2055143/c8a5eb72-c176-4024-acbd-1dd77edc6a11.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/570239/a9e1b239-686e-42f0-ab37-46decb702922.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1479505/cd6f1f77-a9dd-4eee-8fe4-93aaa6180a90.jpeg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1479505/0f7c75b4-143b-4722-b399-5fc1ed30866c.jpeg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
    ]
    const ramsar = [
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1886430/01349d9b-3c43-44b1-897e-3058afc2b159.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/5240217/d1b09bfa-fc66-4e83-bafc-1412c4350eee.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/658067/78d0c001-88f7-48d4-928c-aed6278d7aa2.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1570967/de85f464-76f9-4e52-ac07-d0f39430516f.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com//image/516x324/jabama-images/image_7d894653-d1c8-4acb-9641-9392943adc72.jpg', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/2335940/35e0f346-7465-4cef-8884-e8a654b93826.JPG', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
        { image: 'https://cdn.jabama.com/image/516x324/jabama-images/1447254/ce2361dc-8479-4459-9d10-9852d0d6d8da.JPG', span: '10/54.5 امتیاز کاربران (4 نظر)', h2: 'اجاره ویلا دوخوابه استخردار آبکرم نگین 10', span1: 'کردان، البرز', span2: 'قیمت هرشب از', span3: '2,940,000تومان' },
    ]



    return (

        <section className='flex flex-wrap overflow-hidden justify-center'>
            <figure className="w-full flex">
                <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-2aa84383.jpg" alt="Accommodation" class="is-responsive is-animated" height="320" />
            </figure>
            <section className='w-full md:w-[85%] justify-center items-center flex flex-wrap '>

                <Menu />

                <div className="w-full justify-center items-center flex mb-20">
                    <Part3 />
                </div>
                <div className='flex flex-wrap w-full justify-between mb-20 content-center *:w-[24%]'>
                    <figure className='bg-white rounded-xl border border-[rgb(224,224,224)]'>
                        <img src="https://cdn.alibaba.ir/cms/uploads/Apartment_15a93f6fe7.png" alt="اجاره آپارتمان مبله" class="block h-[151px] w-full" />
                        <figcaption className='justify-center text-[25px] flex py-4'>
                            اجاره آپارتمان مبله
                        </figcaption>
                    </figure>
                    <figure className='bg-white rounded-xl border border-[rgb(224,224,224)]'>
                        <img src="https://cdn.alibaba.ir/cms/uploads/Kolbe_4e1a976a77.png" alt="اجاره کلبه" class="block h-[151px] w-full" />
                        <figcaption className='justify-center text-[25px] flex py-4'>
                            اجاره کلبه
                        </figcaption>
                    </figure>
                    <figure className='bg-white rounded-xl border border-[rgb(224,224,224)]'>
                        <img src="https://cdn.alibaba.ir/cms/uploads/Boom_Gardi_8e48d9e15f.png" alt="رزرو بومردی" class="block h-[151px] w-full" />                    <figcaption className='justify-center text-[25px] flex py-4'>
                            رزرو بوم‌گردی
                        </figcaption>
                    </figure>
                    <figure className='bg-white rounded-xl border border-[rgb(224,224,224)]'>
                        <img src="https://cdn.alibaba.ir/cms/uploads/Villa_ba1479844d.png" alt="اجاره ویلا" class="block h-[151px] w-full" />                    <figcaption className='justify-center text-[25px] flex py-4'>
                            اجاره ویلا
                        </figcaption>
                    </figure>
                </div>


                <div className='w-full flex flex-wrap justify-center'>
                    <h2 className='text-[30px] justify-end flex  w-full'>مقصدهای محبوب سفر</h2>
                    <p className='mb-5 justify-end flex  w-full'>شهرهای محبوب در بین مهمانان</p>
                    <div className='flex flex-wrap justify-between *:m-2  border-[rgb(224,224,224)]'>

                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره اپارتمان مبله در</p>
                                <h2 className='text-[25px]'>تهران</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/tehran_apartments_e9c27bb8bd.jpeg" alt="اجاره آپارتمان مبله در" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره ویلا</p>
                                <h2 className='text-[25px]'>کردان</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/kordan_9d13050a93.jpg" alt="اجاره ویلا" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره سوییت در</p>
                                <h2 className='text-[25px]'>مشهد</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/Mashhad_df4911171e.jpg" alt="اجاره سوئیت در" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره ویلا</p>
                                <h2 className='text-[25px]'>رامسر</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/Ramsar_d313a71069.png" alt="اجاره ویلا" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره سوییت</p>
                                <h2 className='text-[25px]'>تهران</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/Tehran_de314d8375.png" alt="اجاره سوئیت در" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره سوییت در</p>
                                <h2 className='text-[25px]'>کیش</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/Kish_f159ce1dd4.png" alt="اجاره سوئیت در" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>رزرو بومگردی در</p>
                                <h2 className='text-[25px]'>قشم</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/Qeshm_efd9c29cf7.png" alt="رزرو بومگردی در" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره ویلا</p>
                                <h2 className='text-[25px]'>رشت</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/Rasht_c222c29f75.jpg" alt="اجاره ویلا" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره ویلا</p>
                                <h2 className='text-[25px]'>شمال</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/shomal_430ea129c8.jpg" alt="" className=' w-[35%] p-2 rounded-lg' />
                        </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره ویلا</p>
                                <h2 className='text-[25px]'>ماسال</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/masal_acc_4e0e2b067f.jpg" alt="اجاره ویلا" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره کلبه</p>
                                <h2 className='text-[25px]'>اولسبلنگاه</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/olesbelangah_acc_4b9fcd080e.jpg" alt="اجاره کلبه در" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>
                        <figure className='bg-white flex rounded-lg justify-center content-center items-center border w-[280px]'>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--grays-400)" class="mr-auto hidden md:block ms-2"><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                            <div className='mx-4'>
                                <p>اجاره ویلا</p>
                                <h2 className='text-[25px]'>فیلبند</h2>
                            </div>
                            <img src="https://cdn.alibaba.ir/cms/uploads/filband_acc_80697d7358.jpg" alt="اجاره ویلا در" class="block mb-3 md:mb-0 md:ml-5 rounded-lg h-[72px] md:h-[88px] w-full md:w-[88px]" />                    </figure>

                        <div className='w-full rounded-lg overflow-hidden'>
                            <img
                                src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
                                alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
                                data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
                                data-expand="0"
                                class="rounded-lg my-20"
                                height="183"
                            />
                        </div>
                        <div className='flex flex-wrap w-full justify-between'>
                            <div className='w-full justify-end '>
                                <h2 className='text-[30px] my-5'>به دنبال چه نوع اقامتگاهی هستید؟</h2>
                            </div>
                            <div className='border w-[180px] rounded-lg h-[100px] flex flex-wrap justify-center *:w-full content-center items-center'>
                                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M12.7477 9.91098C12.7477 9.49677 12.4119 9.16098 11.9977 9.16098C11.5835 9.16098 11.2477 9.49677 11.2477 9.91098V10.9195C11.2477 11.3337 11.5835 11.6695 11.9977 11.6695C12.4119 11.6695 12.7477 11.3337 12.7477 10.9195V9.91098Z"></path><path d="M10.6445 4.6719C11.2046 3.5992 12.7391 3.59723 13.302 4.6685L15.7477 9.32318V6.74985C15.7477 5.92142 16.4193 5.24985 17.2477 5.24985H17.9977C18.8261 5.24985 19.4977 5.92142 19.4977 6.74985V16.4601L20.9116 19.151C21.1043 19.5177 20.9632 19.9711 20.5966 20.1638C20.2299 20.3564 19.7765 20.2154 19.5838 19.8487L19.4005 19.4998H4.59381L4.41253 19.847C4.2208 20.2142 3.76773 20.3564 3.40056 20.1647C3.03339 19.9729 2.89117 19.5199 3.08289 19.1527L10.6445 4.6719ZM11.9741 5.36621L18.6123 17.9998H14.2477V14.9998C14.2477 13.7572 13.2403 12.7498 11.9977 12.7498C10.7551 12.7498 9.74771 13.7572 9.74771 14.9998V17.9998H5.37708L11.9741 5.36621ZM12.7477 14.9998V17.9998H11.2477V14.9998C11.2477 14.5856 11.5835 14.2498 11.9977 14.2498C12.4119 14.2498 12.7477 14.5856 12.7477 14.9998ZM17.9977 13.6053L17.2477 12.1779V6.74985H17.9977V13.6053Z" fill-rule="evenodd"></path></svg>
                                <h3 className='justify-center flex'>کلبه سوییسی</h3>
                            </div>

                            <div className='border w-[180px] rounded-lg h-[100px] flex flex-wrap justify-center *:w-full content-center items-center'>
                                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M21.966 12.16a.704.704 0 0 0 .513-.717 7.5 7.5 0 0 0-14.958 0 .704.704 0 0 0 .514.717l2.353.706a3 3 0 0 0 1.724 0c.711-.213 1.42-.453 2.138-.639V19.5h-4.5v-1.29l2.068.518a.75.75 0 0 0 .364-1.456c-.985-.246-1.968-.527-2.961-.739A.75.75 0 0 0 9 16.5H5.625L3.6 13.8a.75.75 0 0 0-1.2.9c.704.938 2.244 2.935 2.244 2.935l-.8 1.865H3A.75.75 0 0 0 3 21h17.25a.75.75 0 0 0 0-1.5h-4.5v-7.273c.719.186 1.427.426 2.138.64a3 3 0 0 0 1.724 0l2.354-.707Zm-2.723-4.403a6 6 0 0 1 1.658 3.157l-1.511.453c-.286-1.671-1.071-3.453-2.256-4.975.784.299 1.504.76 2.109 1.365ZM15 6.257c1.48 1.42 2.475 3.305 2.847 5.031-2.066-.62-3.576-.635-5.694 0 .372-1.726 1.368-3.611 2.847-5.031Zm-5.9 4.657 1.51.453c.286-1.671 1.071-3.453 2.255-4.974a5.999 5.999 0 0 0-3.766 4.52ZM8.25 18v1.5H5.477L6.12 18h2.13Z" fill-rule="evenodd"></path></svg>
                                <h3 className='justify-center flex'>ساحل شمالی</h3>
                            </div>

                            <div className='border w-[180px] rounded-lg h-[100px] flex flex-wrap justify-center *:w-full content-center items-center'>
                                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M21.75 12a.75.75 0 0 1 .745.662l.005.088v9a.75.75 0 0 1-.663.745l-.087.005H2.25a.75.75 0 0 1-.745-.663L1.5 21.75v-9a.75.75 0 0 1 1.495-.088L3 12.75V21h18v-8.25a.75.75 0 0 1 .663-.745L21.75 12ZM7.912 18.108l.118.112a1.372 1.372 0 0 0 1.848.084l.092-.084a2.872 2.872 0 0 1 3.942-.112l.118.112a1.372 1.372 0 0 0 1.848.084l.092-.084a2.872 2.872 0 0 1 4.06 0 .75.75 0 1 1-1.06 1.06 1.372 1.372 0 0 0-1.848-.084l-.092.084a2.872 2.872 0 0 1-3.942.112l-.118-.112a1.372 1.372 0 0 0-1.848-.084l-.092.084a2.872 2.872 0 0 1-3.942.112l-.118-.112a1.372 1.372 0 0 0-1.94 0 .75.75 0 0 1-1.06-1.06 2.872 2.872 0 0 1 3.942-.112Zm0-3 .118.112a1.372 1.372 0 0 0 1.848.084l.092-.084a2.872 2.872 0 0 1 3.942-.112l.118.112a1.372 1.372 0 0 0 1.848.084l.092-.084a2.872 2.872 0 0 1 4.06 0 .75.75 0 1 1-1.06 1.06 1.372 1.372 0 0 0-1.848-.084l-.092.084a2.872 2.872 0 0 1-3.942.112l-.118-.112a1.372 1.372 0 0 0-1.848-.084l-.092.084a2.872 2.872 0 0 1-3.942.112l-.118-.112a1.372 1.372 0 0 0-1.94 0 .75.75 0 0 1-1.06-1.06 2.872 2.872 0 0 1 3.942-.112ZM16.875 1.5A2.625 2.625 0 0 1 19.5 4.125a.75.75 0 0 1-1.495.087L18 4.125a1.125 1.125 0 0 0-2.245-.108l-.005.108v8.625a.75.75 0 0 1-1.495.088l-.005-.088V10.5H9v2.25a.75.75 0 0 1-1.495.088L7.5 12.75V4.125a2.625 2.625 0 1 1 5.25 0 .75.75 0 0 1-1.495.087l-.005-.087a1.125 1.125 0 0 0-2.245-.108L9 4.125V6h5.25V4.125A2.625 2.625 0 0 1 16.875 1.5Zm-2.625 6H9V9h5.25V7.5Z" fill-rule="evenodd"></path></svg>
                                <h3 className='justify-center flex'>استخر دار</h3>
                            </div>

                            <div className='border w-[180px] rounded-lg h-[100px] flex flex-wrap justify-center *:w-full content-center items-center'>
                                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M8.253 13.436v-2.623l-2.03-2.03a.75.75 0 0 1 1.06-1.061l.97.97v-1.19a.75.75 0 1 1 1.5 0v2.686l.97-.97a.75.75 0 1 1 1.06 1.061l-2.03 2.03v1.127a4.501 4.501 0 0 0-.751-8.938 4.5 4.5 0 0 0-.75 8.938Zm0 1.516a6.001 6.001 0 1 1 6.362-8.08A5.25 5.25 0 1 1 16.5 17.197v3.054a.75.75 0 0 1-1.5 0v-3.053a5.254 5.254 0 0 1-3.82-2.606 5.982 5.982 0 0 0-1.428.36v5.301a.75.75 0 0 1-1.5 0v-5.3Zm4.246-1.078a3.755 3.755 0 0 0 2.502 1.802V11.25a.75.75 0 0 1 1.5 0v1.936l.97-.97a.75.75 0 0 1 1.06 1.061l-2.03 2.03v.367a3.751 3.751 0 1 0-1.536-7.342 5.992 5.992 0 0 1-2.466 5.542Z" fill-rule="evenodd"></path></svg>
                                <h3 className='justify-center flex'>جنگل شمالی</h3>
                            </div>

                            <div className='border w-[180px] rounded-lg h-[100px] flex flex-wrap justify-center *:w-full content-center items-center'>
                                <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M4.5 6.75A.75.75 0 0 1 5.25 6h13.5a.75.75 0 0 1 .75.75v3H18V9a.75.75 0 0 0-.75-.75H13.5a.75.75 0 0 0-.75.75v.75h-1.5V9a.75.75 0 0 0-.75-.75H6.75A.75.75 0 0 0 6 9v.75H4.5v-3ZM3 9.878V6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v3.128A2.25 2.25 0 0 1 22.5 12v4.313c0 .518-.42.937-.938.937H19.5v1.5a.75.75 0 1 1-1.5 0v-1.5H6v1.5a.75.75 0 1 1-1.5 0v-1.5H2.438a.937.937 0 0 1-.938-.937V12c0-.98.626-1.813 1.5-2.122ZM3 12a.75.75 0 0 1 .75-.75h16.5A.75.75 0 0 1 21 12v3.75H3V12Z" fill-rule="evenodd"></path></svg>
                                <h3 className='justify-center flex'>سوییت مبله</h3>
                            </div>

                            <div className='border w-[180px] rounded-lg h-[100px] flex flex-wrap justify-center *:w-full content-center items-center'>
                                <svg viewBox="0 0 41 40" width="40" height="40" fill="currentColor"><path d="M19.188 7.5001L19.0624 7.3536C18.3246 6.49293 17.0605 6.31854 16.1174 6.94733L13.5398 8.66574C12.9162 9.08144 12.5416 9.78127 12.5416 10.5307V15.0001H5.66663V8.7501C5.66663 8.05975 5.10698 7.5001 4.41663 7.5001C3.72628 7.5001 3.16663 8.05975 3.16663 8.7501V31.2501C3.16663 31.9405 3.72628 32.5001 4.41663 32.5001C5.10698 32.5001 5.66663 31.9405 5.66663 31.2501V30.0001H14.8111H32.0536H35.6666V31.2501C35.6666 31.9405 36.2262 32.5001 36.9166 32.5001C37.607 32.5001 38.1666 31.9405 38.1666 31.2501V11.2501C38.1666 10.5598 37.607 10.0001 36.9166 10.0001C36.2262 10.0001 35.6666 10.5598 35.6666 11.2501V15.0001H34.4166V14.2342C34.4166 13.9145 34.3552 13.5976 34.236 13.301L33.1629 10.6338C32.4011 8.74046 30.565 7.5001 28.5243 7.5001H19.188ZM18.0381 10.0001L20.3425 12.6886C20.7919 13.2127 21.581 13.2735 22.1051 12.8242C22.6293 12.3749 22.69 11.5858 22.2408 11.0616L21.3309 10.0001H28.5243C29.5446 10.0001 30.4626 10.6203 30.8435 11.567L31.9166 14.2342V15.0001H15.6666V11.0343C15.6666 10.6924 15.8356 10.3726 16.1181 10.1799C16.2899 10.0628 16.4929 10.0001 16.7009 10.0001H18.0381ZM14.8111 17.5001H32.0536H35.6666V27.5001H34.4166V26.7342C34.4166 26.4145 34.3552 26.0976 34.236 25.801L33.1629 23.1339C32.4011 21.2405 30.565 20.0001 28.5243 20.0001H19.188L19.0624 19.8536C18.3246 18.993 17.0605 18.8186 16.1174 19.4474L13.5398 21.1657C12.9162 21.5815 12.5416 22.2812 12.5416 23.0307V27.5001H5.66663V17.5001H14.8111ZM18.0381 22.5001H16.7009C16.4929 22.5001 16.2899 22.5627 16.1181 22.6799C15.8356 22.8726 15.6666 23.1924 15.6666 23.5344V27.5001H31.9166V26.7342L30.8435 24.067C30.4626 23.1202 29.5446 22.5001 28.5243 22.5001H21.3309L22.2408 23.5616C22.69 24.0857 22.6293 24.8749 22.1051 25.3242C21.581 25.7735 20.7919 25.7127 20.3425 25.1886L18.0381 22.5001ZM9.41663 26.2501C10.7973 26.2501 11.9166 25.1309 11.9166 23.7501C11.9166 22.3694 10.7973 21.2501 9.41663 21.2501C8.03591 21.2501 6.91663 22.3694 6.91663 23.7501C6.91663 25.1309 8.03591 26.2501 9.41663 26.2501ZM11.9166 11.2501C11.9166 12.6309 10.7973 13.7501 9.41663 13.7501C8.03591 13.7501 6.91663 12.6309 6.91663 11.2501C6.91663 9.86939 8.03591 8.7501 9.41663 8.7501C10.7973 8.7501 11.9166 9.86939 11.9166 11.2501Z" fill-rule="evenodd"></path></svg>
                                <h3 className='justify-center flex'>هاستل</h3>
                            </div>

                            <div className='w-full my-10'>
                                <AliBaba />
                            </div>


                            <div className='flex flex-wrap w-full'>
                                <div className='flex justify-between w-full'>
                                    <div className='flex justify-center content-center *:pr-2'>
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" data-v-382f5042=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                                        <Link href={'/s'} > مشاهده همه</Link>
                                    </div>
                                    <h2 className='text-[25px] font-bold my-5'>ویلا در کردان</h2>
                                </div>
                                <p className='w-full mb-5'>اقامتگاه هایی مناسب سفرهای خاص شما</p>
                                <div className='justify-center flex w-full'>
                                    <SwiperVilla swiper={swiper} />
                                </div>
                                <div className='justify-center flex w-full mt-20 flex-wrap *:w-full'>
                                    <h2 className='font-bold text-[25px] mt-2'>سوییت و آپارتمان در تهران</h2>
                                    <p className='my-5'>اقامتگاه‌هایی که از مهمانان بیشترین امتیاز را دریافت کرده‌اند</p>
                                    <SwiperVilla apart={apart} />
                                </div>
                                <div className='justify-center flex w-full my-20 flex-wrap *:w-full'>
                                    <h2 className='font-bold text-[25px] mt-5 mb-5'>ویلا در رامسر</h2>
                                    <SwiperVilla ramsar={ramsar} />
                                </div>

                            </div>

                            <div className='w-full'>
                                <h2 className='text-[25px] my-5'>سوالات متداول</h2>
                                <Dropdown options={options} />
                            </div>
                            <div className='w-full *:w-full flex-wrap'>
                                <h2 className='text-[30px] mt-10 mb-7'>رزرو اقامتگاه</h2>
                                <p>اگر راهی سفر هستید و می‌خواهید برای آن برنامه‌ریزی کنید، احتمالا یکی از اولین اقداماتی که انجام می‌دهید جستجوی اقامتگاه است. شاید به‌دنبال یک اقامتگاه کوچک هستید که مناسب اسکان یک نفر باشد یا شاید هم می‌خواهید گروهی سفر کنید و به‌دنبال یک اقامتگاه بسیار بزرگ هستید؛ اقامتگاهی که تمام امکانات رفاهی را برای تجربه لوکس مسافرانش فراهم کرده باشد.
                                    جدا از متراژ، فاکتورهای دیگری هم در رزرو اقامتگاه مطرح است؛ به‌عنوان مثال بعضی از مسافران ترجیح می‌دهند اقامتگاهی را انتخاب کنند که دسترسی خوبی به مراکز مهم شهر دارد. با این حساب اگر نیاز به خرید چیزی داشته باشند یا بخواهند خدمات درمانی فوری دریافت کنند به مشکل نخواهند خورد.
                                    برای بعضی دیگر از مسافران موضوع کاملا متفاوت است. آن‌ها ترجیح می‌دهند اقامتگاهی را رزرو کنند که کاملا با شهر فاصله دارد؛ یک اقامتگاه آرام و دنج، دور از شلوغی، آلودگی و سروصدا. لیست تمام‌وکمال اقامتگاه‌های علی‌بابا هر انتظاری که از یک اقامتگاه دارید را برآورده خواهد کرد. تنها کاری که لازم است انجام بدهید این است که در همین صفحه، مقصد یا نوع اقامتگاه مدنظرتان را جستجو کنید تا لیست بلند اقامتگاه‌ها را ببینید. حالا دیگر تنها کاری که لازم است انجام بدهید بررسی، مقایسه و انتخاب است.
                                    از آنجایی که لیست اقامتگاه‌های علی‌بابا بسیار زیاد است، شما می‌توانید با کمک فیلترهای وب‌سایت انتخاب‌هایتان را هدفمندتر کنید. دنبال کلبه هستید یا ویلا؟ اقامتگاه‌های بوم‌گردی را بیشتر می‌پسندید یا ترجیح می‌دهید سوئیت رزرو کنید؟ شاید هم با خانه‌های سنتی موافق‌تر هستید یا اصلا می‌خواهید یک آپارتمان برای اقامتتان انتخاب کنید. ممکن است هیچکدام از این گزینه‌ها برایتان جذاب نباشد و بخواهید مجتمع‌های اقامتی یا حتی مسافرخانه رزرو کنید. انتخابتان هر کدام که باشد، فقط کافیست آن را در فیلترهای وب‌سایت علی‌بابا علامت بزنید تا لیست نمایش محدودتر و هدفمندتر شود. علاوه بر این، فیلترهای پرکاربرد دیگری هم هستند که می‌توانند شما را در انتخاب اقامتگاه مدنظرتان راهنمایی کنند؛ مثلا اگر برای شما امکان برگزاری مراسم و مهمانی یا ورود حیوانات خانگی مسئله است، پس حتما تیک آن را فعال کنید تا فقط همان اقامتگاه‌ها را ببینید. جنگلی، روستایی، کوهستانی، شهری یا ساحلی؟ فرقی ندارد؛ لیست کامل اقامتگاه‌های علی‌بابا منتظر میزبانی از شماست.
                                </p>
                            </div>
                            <div className='flex w-full flex-wrap justify-between my-10 *:mb-2'>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                                <p className='border rounded-3xl px-10 py-2'>اجاره ویلا شمال</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}








