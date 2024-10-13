import React from 'react'
import Part3 from '../parvazDakheli/part3'
import Slider from '../parvazDakheli/slider'
import AliBaba from '../AliBaba/page'
import Dropdown from '../parvazDakheli/dropDown'
import Menu from '../menu/page'

export default function page() {
    const options = [
        { label: 'پیش از رزرو هتل، چگونه درباره هتل و فرآیند رزرو آن اطلاعات کسب کنم؟', items: ['فرایند انتخاب و رزرو اینترنتی هتل در علی بابا بسیار ساده است. به سادگی و با چند کلیک می توانید با انتخاب مقصد و تاریخ سفر خود، هتل مد نظر خود را با قیمت مناسب رزرو کنید. با این حال در صورت نیاز، مرکز پشتیبانی علی بابا به صورت 24 ساعته پاسخگوی شماست.'] },
        { label: 'هزینه هتل خارجی را چه طور بپردازیم؟ آیا استفاده از کارت‌های شتاب امکان‌پذیر است؟', items: ['زمانی که برای رزرو هتل خارجی به وب‌سایت یا اپلیکیشن علی بابا مراجعه می‌کنید، خیالتان از بابت نحوه پرداخت راحت باشد. شما می‌توانید هزینه رزرو هتل را با همین کارت‌های شتاب خودتان بپردازید. به هیچ وجه نیازی به استفاده از کارت‌های اعتباری خارجی نیست.'] },
        { label: 'آیا پس از اینکه هتل را رزرو کردیم، می‌توانیم رزرومان را کنسل کنیم و پولمان را پس بگیریم؟', items: ['   طبیعی است که گاهی اوقات سفرمان به هر دلیلی کنسل شود. هر کدام از هتل‌ها قوانین خودشان را برای کنسلی دارند.بعضی از هتل‌ها استرداد پول را می‌پذیرند؛ البته این استرداد در بیشتر موارد با کسر هزینه جریمه است. میزان جریمه هم باز به قوانین هتل و زمانی که کنسلی را اعلام می‌کنید، بستگی دارد. (هر چه دیرتر کنسلی را اعلام کنید، احتمال افزایش جریمه بیشتر است).اما هتل‌هایی هم وجود دارند که کنسلی و استرداد وجه را نمی‌پذیرند. زمانی که در علی بابا در حال رزرو آنلاین هتل هستید، می‌توانید به راحتی قوانین کنسلی را بخوانید.در هنگام رزرو در مقابل هر یک از اتاق‌های هتل واژه‌های «قوانین کنسلی» یا «غیرقابل استرداد» را مشاهده می‌کنید. غیرقابل استرداد همان طور که از نامش پیداست، وجهی به شما پس نمی‌دهد. اما اگر واژه قوانین کنسلی را هنگام جستجوی یک هتل دیدید، روی آن کلیک کنید و این قوانین را بخوانید. '] },
        { label: 'چه ساعتی می‌توانیم اتاق‌مان را تحویل بگیریم و چه ساعتی باید اتاق را پس بدهیم؟', items: ['معمولا ورود مسافر به اتاق (چک‌این) در ساعت 14 و خروج مسافر (چک‌اوت) ساعت 12 ظهر است..'] },
        { label: 'نیم‌شارژ ورود و خروج چیست؟', items: ['ساعت ورود به هتل ساعت 14 و خروج 12 ظهر است؛ مسافرانی که ورود زودهنگام (حدود ساعت 8 صبح) یا خروج دیرهنگام (حدود ساعت 18 عصر) را دارند، از این گزینه استفاده می‌کنند؛ قیمت نیم‌شارژ معمولا نصف رزرو یک شب است. با این حال این هزینه توسط هتل تعیین می‌شود و از هتلی به هتل دیگر می‌تواند متفاوت باشد...'] },
        { label: 'کودکان تا چه سنی رایگان پذیرش می‌شوند و تخت آنها چگونه است؟', items: ['شرایط سنی کودک برای پذیرش در هتل در قسمت «قوانین» اطلاع‌رسانی شده است....'] },
        { label: 'تفاوت اتاق‌ها با هم مانند دبل یا توئین بودن یا جونیور یا امپریال یا حتی سوئیت چیست؟', items: ['اتاق دبل دو تخت چسبیده‌به‌هم دارد و مناسب زوج‌ها است. اتاق‌های تویین دو تخت سینگل یا جدا از هم دارند. اتاق‌هایی مثل جونیور یا امپریال از نظر متراژ، دیزاین و طبقات نسبت به اتاق‌های استاندارد اتاق‌های باکیفیت‌تری هستند. البته سرویس و خدمات هتل برای همه اتاق‌ها یکسان است.....'] },
        { label: 'واچر چیست؟', items: ['رسید پرداخت و تاییدیه رزرو اقامتگاه را «واچر» می‌گویند. واچر پس از انجام پرداخت توسط شما از طرف سیستم رزرواسیون علی بابا صادر می‌شود و در اختیار شما قرار می‌گیرد.'] },
        { label: 'دلیل پایین بودن نرخ هتل های علی بابا چیست؟', items: ['علی بابا با تامین‌کنندگان قرارداد سالیانه دارد و در ایام غیرپیک هم مسافر هتل‌ها را تامین می‌کند. این باعث می‌شود تا علی بابا بتواند امکان رزرو ارزان هتل را برای مسافران فراهم کند.'] },
        { label: 'مبلغ درج شده در وب‌سایت علی بابا مبلغ نهایی است؟ آیا امکان دارد بعدا تغییر کند؟', items: ['مبلغ اعلام‌شده نهایی است، مگر در زمان‌های خاص مانند عید نوروز؛ در این شرایط حتما در هنگام رزرو اعلام می‌شود که نرخ فعلی علی‌الحساب است.'] },
    ]
    return (
        <section className='flex flex-wrap justify-center overflow-hidden'>
            <figure className="w-full flex justify-center">
                <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-ea8b776d.jpg" alt="Hotel" class="is-responsive is-animated" height="320" />
            </figure>
            <section className='w-full md:w-[85%] justify-center items-center flex flex-wrap '>
                <Menu />
                <div className="w-full justify-center items-center flex">
                    <Part3 />
                </div>
                <div className="w-full">
                    <figure className="w-full">
                        <img src="" alt="" className="w-full object-cover" />
                    </figure>
                </div>
                <figure className="mt-6 mb-6">
                    <img className="w-full rounded-lg" src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp" alt="Alibaba" height="195" />
                </figure>
                <Slider />
                <AliBaba />
                <div className=' flex flex-wrap *:w-[30%] justify-between *:m-2'>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های انتالیا</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/antalya-25a374ed.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/antalya-25a374ed.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="">
                            </img>
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های استانبول</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/turkey-389ce7c7.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/turkey-389ce7c7.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های وان</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/van-9eee0b71.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/van-9eee0b71.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های دبی</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/dubai-a62a33c3.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/dubai-a62a33c3.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های دبی</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/dubai-a62a33c3.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/dubai-a62a33c3.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های ایروان</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/yerevan-d15e89f7.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/yerevan-d15e89f7.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های امستردام</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/amsterdam-d9bf7123.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/amsterdam-d9bf7123.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های باکو</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/baku-8540bc5c.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/baku-8540bc5c.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های رم</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/rome-1b18d679.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/rome-1b18d679.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های برلین</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/berlin-b831a84d.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/berlin-b831a84d.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های میلان</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/milan-c2e18d36.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/milan-c2e18d36.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های مسکو</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/moscow-226dafbe.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/moscow-226dafbe.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>

                </div>
                <div className=' flex flex-wrap *:w-[30%] justify-between *:m-2 my-20'>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های مشهد</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/mashhad-a0012cea.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/mashhad-a0012cea.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های تهران</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/tehran-10864b90.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/tehran-10864b90.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های کیش</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/kish-0b69a801.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/kish-0b69a801.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های تبریز</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/tabriz-8426cacb.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/tabriz-8426cacb.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های اصفهان</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/isfahan-6e454c58.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/isfahan-6e454c58.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                    <div className='border rounded-lg py-5 justify-between items-center content-center  flex *:text-[20px] px-5 cursor-pointer'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="shrink-0 text-grays-300" data-v-12d9821e=""><path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path></svg>
                        <div className='flex justify-center content-center '>
                            <span className='px-2'>هتل های شیراز</span>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/shiraz-4fbe8527.svg" alt="Alibaba https://cdn.alibaba.ir/h2/desktop/assets/images/city-icons/shiraz-4fbe8527.svg" class="is-responsive is-animated" height="38" width="38" data-v-12d9821e="" />
                        </div>
                    </div>
                </div>
                <h2 className='w-full text-[black] text-[30px] my-5 font-bold'>پرسش‌های متداول درباره رزرو هتل در علی‌بابا</h2>
                <div className='w-full justify-center items-center content-center'>
                    <Dropdown options={options} />
                </div>
                <div className='flex flex-wrap *:w-full mb-[180px]'>
                    <h2 className='text-[25px] mb-5 mt-14 font-bold'>رزرو هتل از علی بابا، همسفر هر سفر</h2>
                    <p>سال 1393، در طلایی‌ترین روزهایی که ایران تغییرات دیجیتال را در آغوش می‌کشید، وب‌سایتی متولد شد که کارش را از فروش بلیط آغاز کرده بود.
                        علی بابا به عنوان یکی از اولین بسترهای آنلاین خرید بلیط آنقدر در کار خود استمرار نشان داد که توانست به سرعت، تمام آنچه که برای سفر مورد نیاز است را در بستری آنلاین به متقاضیان سفر عرضه کند. رزرو آنلاین هتل و سایر محصولات گردشگری برای علی بابا راهی برای رسیدن به مفهوم تازه‌ای از سفر بود.
                        علی بابا امروز فقط یک وب‌سایت و اپلیکیشن فروش محصولات گردشگری نیست؛ علی بابا خودِ سفر است؛ مجموعه‌ای که لذت تجربه سفر را برای مسافران معنا می‌کند.
                        علی بابا در تمام این چند سال، چمدانی از اعتبار و تجربه برای خود جمع کرده تا همسفری لایق برای همه سفرهای شما باشد و با حمایت شما در رتبه یک گردشگری کشور بایستد.</p>
                    <h2 className='text-[25px]  mb-5 mt-10 font-bold'>رزرو آنلاین هتل در علی بابا، به سادگی آب خوردن</h2>
                    <p>رزرو هتل در گذشته و پیش از امکان رزرو اینترنتی هتل را به خاطر بیاورید. اول باید دل به راه می‌زدیم، به مقصد می‌رسیدیم و بعد هم از این هتل به آن هتل به دنبال اتاقی تمیز، مطمئن و با قیمتی مناسب می‌گشتیم. اگر خیلی هم دقیق بودیم، یک دستمان به تلفن بود تا شماره هتلی آشنا در مقصد را بگیریم و پیش از سفر اتاقی مناسب رزرو کنیم.
                        با ظهور اینترنت، راه آسان‌تری برای رزرو هتل پیشِ روی مسافران قرار گرفت. رزرو آنلاین هتل راهی سریع، مطمئن و آسان بود که می‌توانست خیال مسافران را از بابت برنامه‌ریزی دقیق سفر راحت کند.
                        علی بابا به عنوان رتبه یک سفر و بستری مطمئن برای خرید همه ملزومات سفر، امکان رزرو اینترنتی هتل را هم فراهم کرد تا در کنار سایر محصولات، در واقع بهترین سایت رزرو هتل هم باشد.
                        برای رزرو هتل در علی بابا کافی است به صفحه هتل بیایید، مقصد و بازه زمانی اقامت خود را تعیین کنید و سپس جستجو را بزنید. محبوب‌ترین هتل‌ها به ترتیب خودشان را به شما نشان می‌دهند.
                        در همین صفحه نتایج جستجو می‌توانید مشخصات هر هتل را ببینید و نتیجه جستجو را بر اساس ستاره‌های هتل، امکانات رفاهی، محبوبیت هتل بر اساس امتیاز کاربران و سایر معیارهای مفید محدود کنید.
                        با کلیک روی هر هتل، سایر امکانات هتل با تصاویر و جزئیات کامل مثل جانمایی هتل روی نقشه و فاصله تا جاذبه‌های گردشگری به شما نمایش داده می‌شود تا رزرواسیون هتل را به مطمئن‌ترین شکل ممکن انجام دهید.</p>
                    <h2 className='text-[25px] mb-5 mt-10 font-bold'>رزرو هتل ارزان، پیشنهاد علی بابا به شما</h2>
                    <p>راهکار علی بابا برای اطمینان از اینکه کمترین هزینه را برای رزرو اینترنتی هتل پرداخت می‌کنید، تضمین بهترین قیمت بازار است.
                        برخی هتل‌ها در صفحه نتایج جستجو با علامتی خاص از بقیه جدا شده‌اند. اگر این هتل‌ها را رزرو کنید و با قیمتی پایین‌تر دقیقا با همین شرایط در جایی دیگر آن‌ها را پیدا کنید، به علی بابا اطلاع می‌دهید تا با دو برابر این اختلاف قیمت، کد تخفیفی برای رزرو هتل به شما تقدیم کند.
                        همچنین با استفاده از فیلتر نتیجه جستجو، مرتب کردن هتل‌ها از ارزان‌ترین به گران‌ترین، کاهش ستاره‌های هتل‌ها و در نهایت کمی تغییر در برنامه سفر می‌توانید ارزان‌ترین هتل‌ها را برای رزرو پیدا کنید.
                        ضمنا اگر برای سفرتان عجله ندارید، می‌توانید گزینه اطلاع از کاهش قیمت را در اپلیکیشن علی بابا فعال کنید تا کاهش قیمت‌ها از طریق ایمیل یا پیامک به شما خبر داده شود.</p>
                    <h2 className='text-[25px] mb-5 mt-10 font-bold'>رزرو هتل خارجی با کارت شتاب ریالی</h2>
                    <p>یکی از دغدغه‌های مهم مسافران کشورهای خارجی، رزرو هتل خارجی با پرداخت هزینه ریالی است. این امکان در علی بابا فراهم است تا تنها با داشتن کارت شتاب و دسترسی به رمز پوزا، هتل خارجی مدنظرتان را هم با پرداخت ریالی، رزرو کنید.</p>
                </div>
            </section>
        </section>
    )
}
