"use client"
import AliBaba from '../AliBaba/page'
import Link from 'next/link'
import React, { useState } from 'react';

import Menu from '../menu/page';
import Swipero from './Imageslider';
import Swipero2 from './imageslider2';
import Swipero3 from './imageslider3';

export default function page() {


    const swiperr2 = [
        { image: 'https://cdn.alibaba.ir/cms/uploads/16851267645865984_afda52744c.jpg', span1: 'آبان', h3: 'نمایشگاه گوانگژو چین (کانتون)', span3: 'آبان ماهتور 9 روزه - پرواز - هتل 4 ستاره', div2: 'شروع قیمت از', strong: '58,000,000', small: 'تومان' },
        { image: 'https://cdn.alibaba.ir/cms/uploads/16851267645865984_afda52744c.jpg', span1: 'آبان', h3: 'نمایشگاه گوانگژو چین (کانتون)', span3: 'آبان ماهتور 9 روزه - پرواز - هتل 4 ستاره', div2: 'شروع قیمت از', strong: '58,000,000', small: 'تومان' },
        { image: 'https://cdn.alibaba.ir/cms/uploads/16851267645865984_afda52744c.jpg', span1: 'آبان', h3: 'نمایشگاه گوانگژو چین (کانتون)', span3: 'آبان ماهتور 9 روزه - پرواز - هتل 4 ستاره', div2: 'شروع قیمت از', strong: '58,000,000', small: 'تومان' },
    ]
    const swiperr3 = [
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },
        { image: 'https://cdn.jabama.com/image/350x350/jabama-images/image_fb924bc9-e0c2-4046-a1dd-bdaa22f8124a.jpg', h5: 'هتل شایگان کیش', btn: 'جزئیات و خرید', span2: '1 شب و 2 روز', span1: 'ستاره ★ ۵ ', strong: '3,872,800', small: 'تومان', span3: 'برای ۱ نفر شامل هتل، پرواز، خدمات' },

    ]






    return (
        <section className='flex flex-wrap overflow-hidden justify-center'>
            <figure className="w-full flex justify-center">
                <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-a8cf97cd.jpg" alt="Tour" class="is-responsive is-animated" height="320" />
            </figure>
            <section className=' w-[85%] justify-center flex flex-wrap'>

                <Menu tur={<div className='w-full flex justify-end pe-2'>
                    <div className='flex border rounded-lg p-2 mb-5 w-[250px] '>
                        <div className='flex flex-wrap *:w-full'>
                            <h3>تور هتل + بلیط</h3>
                            <p className='text-[15px] text-[rgb(194,194,194)]'> بلیط + اقامت متناسب با برنامه شما</p>
                        </div>
                        <input type="checkbox" className='ms-5' />
                    </div>
                    <div className='flex border rounded-lg p-2 mb-5  w-[250px] ms-2'>
                        <div className='flex flex-wrap *:w-full'>
                            <h3>تور هتل + بلیط</h3>
                            <p className='text-[15px] text-[rgb(194,194,194)]'> بلیط + اقامت متناسب با برنامه شما</p>
                        </div>
                        <input type="checkbox" className='ms-5 rounded-full' />
                    </div>
                </div>} />



                <div className='*:w-full flex flex-wrap w-full'>
                    <h2 className='text-[30px] font-bold'>آغاز ماجراجویی اینجاست</h2>
                    <p className='tetx-[20px] mb-5 mt-2'>تورهای گروهی علی‌بابا، تجربه‌ای ناب از سفر</p>
                    <div className='flex justify-between'>
                        <div className='flex content-center'>
                            <Link href={'/s'} className='text-[rgb(118,172,234)] items-center flex'> مشاهده تور های گروهی </Link>
                            <div className=' flex '>
                                <button aria-label="برو به اسلاید بعد" aria-controls="group-tour" class="px-2 border rounded-lg ml-4 next-prev" data-v-03fe8f52=""><svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor" data-v-03fe8f52=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg></button>
                                <button aria-label="برو به اسلاید قبل" aria-controls="group-tour" class="px-2 border rounded-lg ml-2 next-prev swiper-button-disabled" data-v-03fe8f52="" disabled=""><svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" data-v-03fe8f52=""><path d="M7.302 21.266a.75.75 0 0 0 1.08 1.037l.066-.069 8.25-9.75a.75.75 0 0 0 .058-.89l-.058-.078-8.25-9.75a.75.75 0 0 0-1.202.893l.056.075L15.142 12l-7.84 9.266Z"></path></svg></button>
                            </div>
                        </div>
                        <ul className='flex *:text-[19px] *:px-5 border-b *:py-2'>
                            <li>همه</li>
                            <li>تور خارجی</li>
                            <li>همسایه گردی</li>
                            <li>جنوب گردی</li>
                            <li>تور های نمایشگاهی و فستیوالی</li>
                        </ul>
                    </div>
                    <Swipero2 swiperr2={swiperr2} />
                    <div className='flex justify-center my-10'>
                        <span className='py-3 px-7 border-[rgb(1,119,219)] text-[rgb(1,119,219)] rounded-lg border'>مشاهده همه تور های گروهی</span>
                    </div>
                </div>

                <figure className='rounded-lg overflow-hidden'>
                    <img
                        src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
                        alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
                        data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
                        data-expand="0"
                        class="is-responsive is-animated is-rounded w-full ls-is-cached lazyloaded" height="183" />
                </figure>
                <AliBaba />
                <Garanti />
                <div className=' mb-20 mt-20  flex *:w-[60%] justify-center flex-wrap *:justify-center items-center content-center *:text-center *:flex'>
                    <h2 className='text-[30px] font-bold'>خدمات ویژه تور</h2>
                    <p className='mt-7 mb-4'>سفر به کیش همیشه یکی از گزینه‌های روی میز است. جزیره‌ای آرام و زیبا در خلیج فارس که به خاطر داشتن امکانات رفاهی و تفریحی فراوانش، گردشگران را به وسوسه می‌اندازد که نه یک بار که چند بار، سفر به این جزیره را تجربه کنند. حالا اگر بخواهید تور کیش را از علی بابا رزرو کنید، علاوه بر آنکه خیالتان از رزرو تور با بهترین قیمت بازار راحت است، می‌توانید از هدیه ویژه علی بابا هم استفاده کنید. این هدیه ویژه کسانی است که از امکان خرید تور با بهترین قیمت استفاده کرده‌اند.</p>
                    <Link href={'/k'} className='text-[rgb(139,185,237)]'>بیشتر بخوانید</Link>
                </div>
                <Swipero3 swiperr3={swiperr3} />
                <div className='flex flex-wrap *:w-full mb-3'>
                    <h2 className='text-[25px] font-bold mb-5'>سایر تورهای علی‌بابا</h2>
                    <p>برای افرادی که به تازگی پا به عرصه ی گردشگری گذاشته‌اند، سفر با تور بهترین گزینه است. چرا که راهنمایان تور به خاطر تجربه‌های زیادی که دارند، اطلاعات خیلی دقیقی از مقصد گردشگری دارند و استفاده از دانش آن‌ها می تواند ناشناخته‌هایی از مقصد رویایی‌تان را به شما نشان دهد و صد در صد دانستن برخی اطلاعات بهتر از این است که شما فقط آن منطقه را ببینید. تور خارجی و داخلی علی‌بابا خاطره یک سفر رویایی را برای شما به ارمغان خواهند آورد.</p>
                </div>
                <div className='mb-20 flex flex-wrap *:w-[30%] justify-end *:m-2'>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور استانبول</span>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور كيش</span>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور کیش از کرمان</span>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور کیش از شیراز</span>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور کیش از اصفهان</span>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور کیش از تبریز</span>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور کیش از مشهد</span>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <span>تور کیش از اهواز</span>
                    </div>
                </div>
            </section>


        </section>
    )
}


function Garanti() {


    const slides = [
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(4).jpg?w=96&h=96&q=75', alt: 'Slide 1', text: 'تور تهران به كيش', text2: 'برای ۱ نفر 2,925,200تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(0).jpg?w=96&h=96&q=75', alt: 'Slide 2', text: 'تور اصفهان به کیش', text2: 'برای ۱ نفر1, 2,806,000تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(9).jpg?w=96&h=96&q=75', alt: 'Slide 3', text: 'تور تهران به مشهد', text2: 'برای ۱ نفر1, 822, 2,800تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(2).jpg?w=96&h=96&q=75', alt: 'Slide 4', text: 'تور مشهد به کیش', text2: 'برای ۱ نفر1, 2,446,500تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(3).jpg?w=96&h=96&q=75', alt: 'Slide 5', text: 'تور شیراز به کیش', text2: 'برای ۱ نفر1, 6,554,000تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(1).jpg?w=96&h=96&q=75', alt: 'Slide 6', text: 'تور تهران به استانبول', text2: 'برای ۱ نفر1, 2,171,900تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(8).jpg?w=96&h=96&q=75', alt: 'Slide 7', text: 'تور تهران به قشم', text2: 'برای ۱ نفر1, 2,794,000تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(5).jpg?w=96&h=96&q=75', alt: 'Slide 8', text: 'تور تبریز به کیش', text2: 'برای ۱ نفر1, 3,915,000تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(6).jpg?w=96&h=96&q=75', alt: 'Slide 9', text: '    تور اهواز به کیش', text2: 'برای ۱ نفر1, 2,441,600تومان' },
        { image: 'https://cdn.alibaba.ir/ostorage/tour-statics/Tour-Homepage-PriceGuarantee%20(7).jpg?w=96&h=96&q=75', alt: 'Slide 10', text: 'تور ساری به کیش', text2: 'برای ۱ نفر1, 2,769,100تومان' },
    ]


    return (
        <>
            <div className='flex *:justify-center *:items-center *:content-center'>
                <div className='w-[50%]'>

                    <div className="container mx-auto">
                        <Swipero slides={slides} />
                    </div>
                </div>
                <div className='flex flex-wrap *:w-full w-[50%]'>
                    <h2 className='text-[30px] font-bold mb-10'>گارانتی بهترین قیمت</h2>
                    <p>داستان بسیار ساده است. برای اینکه مطمئن باشید بهترین قیمت تور در علی‌بابا ارائه شده است، می‌توانید باز هم در مورد تور جستجو کنید. اگر همان تور را با قیمت پایین‌تری در جایی دیگر دیدید، این موضوع را به علی‌بابا اطلاع دهید. پس از بررسی این موضوع، علی‌بابا با تخفیفی معادل دو برابر این اختلاف قیمت برایتان تور رزرو می‌کند.</p>
                    <Link href='/s' className='text-[rgb(1,119,219)]'>بیشتر بخوانید</Link>
                </div>
            </div>

        </>

    )
}







