import React from 'react'
import Btn2 from '../menu/btns/btn2'
import Btn3 from '../menu/btns/btn3'
import Btn4 from '../menu/btns/btn4'
import Part3 from '../parvazDakheli/part3'
import Slider from '../parvazDakheli/slider'
import AliBaba from '../AliBaba/page'
import Dropdown from '../parvazDakheli/dropDown'
import Menu from '../menu/page'

export default function page() {


    const options = [
        { label: 'در راه آهن و هنگام سوار شدن به قطار چه مدارکی لازم است؟', items: ['شما برای ورود به قطار باید این مدارک را با خود به همراه داشته باشید: پرینت بلیط و کارت شناسایی معتبر.در صورت داشتن تخفیف جانباز یا خانواده شهدا، به همراه داشتن کارت معتبر مربوطه نیاز ضروری است.'] },
        { label: 'مقدار بار مجاز در قطار چقدر است؟', items: ['هر مسافر می‌تواند وسایل ضروری سفر خود را همراه ببرد به شرط آن‌كه حجم آن از ابعاد 75 سانتی متر و وزن 30 كیلوگرم تجاوز نكند. به عنوان مثال مسافر می‌تواند كیف‌دستی، بسته‌ و چمدان‌های كوچك محتوی لوازم شخصی، صندلی چرخ‌دار بیمار، كالسكه بچه و قفس كوچك پرندگان ریزجثه (حداكثر در ابعاد 40 سانتی‌متر) را به همراه داشته باشد.'] },
        { label: 'روال استرداد یا کنسلی بلیط قطار چگونه است؟', items: ['مسافر می‌تواند تا قبل از حرکت قطار، بلیط یا بلیط‌های خریداری‌شده را به صورت آنلاین استرداد کند. لازم است مسافر حداقل تا نیم ساعت قبل از تغییر میزان جریمه، استرداد خود را ثبت کند.برای استرداد بلیط قطار پس از زمان ذکرشده، مسافر باید تا قبل از حرکت قطار، و با ارایه بلیط چاپی و کارت شناسایی به صورت حضوری به یکی از مراکز فروش بلیط قطار مراجعه کند.'] },
        { label: 'قیمت بلیط برای کودک و نوزاد چگونه است؟', items: ['قیمت بلیط کودک نیم‌بها و نوزاد 10 درصد مبلغ بزرگسال است.'] },
        { label: 'چه زمانی باید در ایستگاه حضور داشته باشم؟', items: ['حضور در ایستگاه یک ساعت قبل از حرکت قطار الزامی است. همچنین ده دقیقه مانده به حركت، تمام درهای قطار بسته خواهد شد و بعد از بسته‌شدن درها برای جلوگیری از خطرات احتمالی، سوارشدن به قطار امكان‌پذیر نیست.'] },
        { label: 'در یک کوپه دربست چند نفر همراه اضافه می‌توان برد؟', items: ['در حال حاضر، امکان به‌همراه ‌بردن مسافر مهمان در کوپه دربست وجود ندارد.'] },
        { label: 'در صورت مفقودی بلیط قطار، چه باید کرد؟', items: ['در صورت مفقودی بلیط، مسافر می‌تواند در زمان اداری به ایستگاه‌های راه‌آهن که سیستم آنلاین فروش بلیط دارند، مراجعه کند و دوباره بلیط را دریافت کند. همچنین به شرط حضور به‌موقع (حداكثر ۴۵ دقیقه مانده به حركت) در ایستگاه‌های راه‌آهن كه سیستم فروش بلیط آنلاین دارند و در وقت اداری، بلیط المثنی طبق آیین‌نامه‌ مربوط صادر می‌شود.بلیط مفقودی باید از طریق شبكه‌ رایانه‌ای صادر شده و استرداد نشده باشد. صدور بلیط المثنی با ۵ درصد قیمت كل بلیط، انجام می‌شود و در صورت مفقود شدن آن، بلیط‌ المثنی دیگری صادر نخواهد شد. درحال حاضر بلیط المثنی از طریق سیستم استرداد نمی‌شود. (استرداد بلیط المثنی فقط به شرط ارائه‌ بلیط اصلی و بلیط المثنی به صورت همزمان در ایستگاه‌های آنلاین و كلیه‌ نمایندگی‌های فروش و با هماهنگی مركز یكپارچه فروش بلیط قطار انجام می‌شود).'] },
        { label: 'آیا این امکان وجود دارد که مسافر در پکیج قطار با هتل فدک درخواست اقامت بیشتر در هتل داشته باشد؟ در صورت امکان، وضعیت آن به چه صورتی است؟', items: ['امکان اقامت بیشتر وجود دارد اما باید قبل از خرید با هتل مربوطه هماهنگ کرده باشند؛ همچنین تاریخ رفت و برگشت بلیط قطار باید بر اساس روزهایی باشد که در هتل می‌مانید. گفتنی است اقامت قطار فدک شامل شب اول و شب آخر می‌شود.'] },
        { label: 'آیا خانوم‌ها می‌توانند بلیط قطار را برای کوپه مخصوص بانوان بخرند؟', items: ['بله این امکان وجود دارد. خانوم‌ها می‌توانند برای آرامش و راحتی خود در طول سفر، بلیط قطار را برای کوپه مخصوص بانوان بخرند. البته کوپه مخصوص آقایان هم برای آن‌ها درنظر گرفته شده است.'] },
        { label: 'شرایط بیمه قطار چه گونه است؟', items: ['تمام مسافران قطار از لحظه‌ ورود به ایستگاه مبدا تا خروج از ایستگاه مقصد در برابر حوادث بیمه هستند. بیمه‌ حوادث مسافری شامل جبران هزینه‌های پزشكی و همچنین جبران نقص عضو یا فوت ناشی از حوادثی مانندآتش سوزی، تصادف، انفجار، خارج شدن قطار از ریل، مانور، سنگ‌پرانی و سایر حوادث احتمالی می‌شود.`'] },
    ]
    return (
        <section className='flex justify-center overflow-hidden flex-wrap '>
            <figure className="w-full flex">
                <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-35461d4c.jpg" alt="Train" class="is-responsive is-animated" height="320" />
            </figure>
            <section className='w-full md:w-[85%] justify-center items-center flex flex-wrap '>

                <Menu ghatar={<div><span className='mx-2 rounded-3xl py-2 px-5 border'>دربست نميخواهم</span><span className='mx-2 rounded-3xl py-2 px-5 border'>مسافرين عادی </span><span className=' rounded-3xl py-2 px-5 border'>یک طرفه</span><span className='mx-2 rounded-3xl py-2 px-5 border'>حمل خودرو نميخواهم  </span></div>} />
                <div className="w-full justify-center items-center flex">
                    <Part3 />
                </div>
                <figure className="mt-6 mb-6">
                    <img className="w-full rounded-lg" src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp" alt="Alibaba" height="195" />
                </figure>
                <Slider />
                <AliBaba />
                <div className='w-full'>
                    <Dropdown options={options} />
                </div>
                <div className=' w-full my-20'>
                    <h2 className='text-[30px] mb-5'>بلیط قطار</h2>
                    <p>هر کسی که یک بار با قطار سفر کرده باشد می‌داند که قطار امن است و همین موضوع آن را به یکی از مناسب‌ترین وسائل نقلیه برای سفر به مقاصد دور و نزدیک تبدیل کرده. در سفر با قطار می‌توانید بدون نگرانی از نوسانات شرایط جوی، کمبود سوخت، تصادفات و... لحظات آرامی را سپری کنید. در کنار این موارد، موسیقی ریتمیک حرکت قطار روی ریل به خودی خود موجب آرامش سرنشینان می‌شود؛ حتی بعضی از مسافران ادعا کرده‌اند که این ریتم منظم موجب می‌شود تا خواب راحت‌تری در قطار داشته باشند.علاوه بر امنیت، سفر با قطار مزایای دیگری هم دارد. قیمت ..</p>
                </div>
                <div className='flex justify-between *:mx-2 h-fit *:border *:border-gray-300'>
                    <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/train03-3939bf8b.jpg" alt="" className='h-[200px] rounded-t-lg' />
                        <p className='p-4'>همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                            اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                            ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.</p>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/train02-bdc8c838.jpg" alt="" className='h-[200px] rounded-t-lg' />
                        <p className='p-4'>همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                            اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                            ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.</p>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/train01-a9319967.jpg" alt="" className='h-[200px] rounded-t-lg' />
                        <p className='p-4'>همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                            اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                            ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.</p>
                    </figure>
                </div>
                <div className='my-5'>
                    <h2 className='text-[30px] my-5'>قیمت بلیط قطار</h2>
                    <p>سفر با قطار می‌تواند یک تصمیم اقتصادی به حساب بیاید، چرا که شما با انتخاب قطار می‌توانید هزینه‌های سفرتان را به طور چشمگیری کاهش دهید. قیمت تمام شده بلیط قطار کاملا بستگی به مسیر، شرکت ریلی و نوع قطار انتخابی شما دارد. بعضی از شرکت‌های ریلی امکان حمل خودرو را برای شما در نظر گرفته‌اند که در صورت انتخاب این گزینه، مبلغی به هزینه‌های سفر شما اضافه می‌شود. برای اطلاع از آخرین قیمت بلیط قطار در مسیر مورد نظر خود کافیست سری به سامانه علی‌بابا بزنید و با مشخص کردن مبدا، مقصد و تاریخ سفر، لیستی از پیشنهادات را دریافت کنید. برای شناسایی ارزان‌ترین بلیط قطار گزینه «مرتب‌سازی بر اساس قیمت» به کمک شما می‌آید.جایگاهی که قطار در حمل و نقل عمومی به خود اختصاص داده، جایگاهی میانه است. در ایران سفر با هواپیما را اغلب هم معنا با سفرهای لوکس و سفر با اتوبوس را سفرهایی مقرون به صرفه می‌دانند‌، در نتیجه سفر با قطار انتخابی بین این دو است. در سال‌های اخیر و با ورود قطارهای پنج ستاره مانند فدک و زندگی به مسیرهای ریلی، جایگاه این وسیله نقلیه متوجه تغییراتی شده است. کسانی که تا پیش از این سفر با هواپیما انتخاب اول‌شان بود، در صورتی که دغدغه زمان نداشته باشند، این قطارها را برای سفر ا...</p>
                    <h2 className='text-[30px] my-5'>رزرو بلیط قطار</h2>
                    <p>رزرو بلیط قطار، سفر با قطار را راحت‌تر از همیشه کرده است. برای خرید اینترنتی بلیط قطار کافی است وارد وب‌سایت علی‌بابا شوید، سپس با وارد کردن نام شهر مبدا و مقصد و تاریخ رفت و برگشت می‌توانید تمام قطارهای شرکت‌های ریلی در مسیر مورد نظرتان را مشاهده کنید. بسته به ساعت حرکت، امکانات قطار و بودجه می‌توانید مناسب‌ترین بلیط را انتخاب کنید و با نهایی کردن رزرو بلیط قطار و پرداخت آن، بلیط خود را به صورت آنلاین دریافت کنید.</p>
                </div>
                <div className='flex *:mx-2 my-10 *:border *:border-gray-300'>
                    <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400 '>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/train07-190ff6bb.jpg" alt="" className=' rounded-t-lg' />
                        <p className='p-4'>همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                            اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                            ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.</p>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/train06-52f070a5.jpg" alt="" className='rounded-t-lg' />
                        <p className='p-4'>همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                            اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                            ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.</p>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/train05-cb016de5.jpg" alt="" className='rounded-t-lg' />
                        <p className='p-4'>همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                            اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                            ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.</p>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/train04-18b35025.jpg" alt="" className='rounded-t-lg' />
                        <p className='p-4'>همان طور که اشاره شد، ارزان بودن قیمت بلیط نسبت به سایر وسایل نقلیه بین‌شهری، یکی از انگیزه‌های اصلی مردم برای سفر با اتوبوس است. عوامل متعددی در تعیین قیمت بلیط‌های اتوبوس موثرند که از مهم‌ترین آن‌ها می‌توان به طول سفر و امکانات اتوبوس اشاره کرد.
                            اما اگر به دنبال استعلام قیمت بلیط اتوبوس برای یک یا چند مسیر هستید، می‌توانید به علی‌بابا مراجعه کنید. کافی است مبدا، مقصد و زمان سفر را مشخص کنید تا لیست کاملی از قیمت بلیط اتوبوس شرکت‌های مختلف را مشاهده کنید.
                            ضمنا قیمت بلیط VIP را نیز می‌توانید در همین لیست ببینید. اگر هم به دنبال بلیط اتوبوس ارزان هستید، می‌توانید در تنظیمات بالای صفحه، بلیط‌ها را براساس کمترین قیمت تعیین کنید.</p>
                    </figure>
                </div>
                <div className='my-5'>
                    <h2 className='mb-5 text-[25px] font-bold my-5'>شرکت‌های ریلی در ایران</h2>
                    <p>به صورت کلی شرکت رجا و شرکت‌های زیرمجموعه سفیر و شرکت فدک، تامین‌کنندگان قطارهای خطوط ریلی ایران هستند و علی‌بابا بخش اعظمی از بلیط این شرکت‌ها را از طریق سامانه علی‌بابا به متقاضیان عرضه می‌کند. شرکت‌های زیرمجموعه سفیر عبارتند از: راه آهن شرقی بنیاد (بن ریل)، جوپار، ریل سیر کوثر، ریل ترابر سبا، مهتاب سیر جم (مهتاب)، قطارهای مسافری نور (نورالرضا)، رعد و پارس لاریم.
                        قطارهای رجا
                        قطارهای بن‌ریل
                    </p>
                </div>
                <div className='flex *:w-[23%] flex-wrap justify-between *:border *:border-gray-300 *:my-3 '>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/noor-reza-d592ac6c.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای مسافری نور</h2>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/fadak-train-bae61810.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای نوآفرین (فدک)</h2>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/bon-rail-b9e90489.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای بن‌ریل</h2>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/raja-95d463e4.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای رجا</h2>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/jopar-94ebda33.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای جوپار</h2>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/mahtab-f2506c75.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای مهتاب سیر جم</h2>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/saba-rail-75ba0a6a.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای ریل ترابر سبا</h2>
                    </figure>
                    <figure className='flex flex-wrap *:w-full w-[23%] rounded-lg bg-white border-gray-400'>
                        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/companies/rail-seir-kowthar-cc5ee8ae.jpg" alt="" className='rounded-t-lg' />
                        <h2 className='text-[15px] font-bold p-2 py-3'>قطارهای ریل‌ سیر کوثر</h2>
                    </figure>
                </div>
                <div className='my-10'>
                    <h2 className='text-[30px] mb-3'>مسیرها و امکانات قطارهای ایران</h2>
                    <p>قطارهای مسافری به دو دسته کلی تقسیم می‌شوند: قطارهای سالنی و کوپه‌ای. با توجه به ظرفیت هر قطار، قطارهای کوپه‌ای شامل کوپه‌های چهار و شش نفره می‌شوند که صندلی‌های کوپه به صورت تخت باز می‌شوند. برخی از قطارهای کوپه‌ای از نوع کوپه‌صندلی هستند که صندلی‌ها در این قطارها قابلیت تخت شدن ندارند. نوع واگن قطارهای کوپه شامل غزال بنیاد، سروش بنیاد (پارس)، پرستو، پلور سبز، سفیر، پارسی، سبز، سیمرغ، زندگی، نگین، غدیر و خلیج فارس هستند. بسته به ظرفیت قطارهای سالنی، در هر ردیف سه یا چهار صندلی وجود دارد. نوع واگن این قطارها شامل قطارهای صبا اتوبوسی و پردیس سالنی است. علاوه بر مسیرهای حومه‌ای، قطارهای اتوبوسی در مسیرهای تهران - مشهد – تهران، تهران – قم - تهران، تهران – میانه - تهران و تهران – یزد - تهران نیز تردد دارند.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطارهای رجا</h2>
                    <p>در ابتدای شروع فعالیت صنعت ریلی در کشور، حمل مسافر و بار تفکیک نشده بود و این خدمات را راه آهن ایران ارائه می‌داد. در سال 1376 بخش خدمات مسافری صنعت ریلی کشور به شرکت رجا واگذار شد. این شرکت در ابتدا زیرمجموعه بخش دولتی بود و در سال 1388 به بخش خصوصی واگذار شد. تنوع قطارهای شرکت رجا گزینه‌های مختلفی را بر اساس امکانات، خدمات و کیفیت در اختیار مسافران قرار می‌دهند. این قطارها به انواع قطارهای چهار تخته، قطارهای شش تخته، قطارهای سالنی و قطار مجلل زندگی تقسیم می‌شوند.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطارهای چهار تخته رجا</h2>
                    <p>قطارهای چهار تخته رجا انواع مختلفی دارند و به قطارهای ویژه شامل قطارهای زندگی، سیمرغ و سبز، کلاس یک شامل قطارهای غزال و پلور سبز، کلاس دو شامل قطارهای لوکس چهار تخته و البرز و کلاس سه شامل قطار خلیج فارس تقسیم می‌شوند.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطارهای سالنی رجا</h2>
                    <p>قطارهای سالنی رجا در مقایسه با سایر قطارهای آن قیمت مناسب‌تری دارد و برای کسانی که سفرهای مقرون به صرفه را ترجیح می‌دهند گزینه بسیار مناسبی است. دسته‌بندی این قطارها شامل کلاس ویژه (تندروی پردیس)، کلاس یک (صبا و ارم) و کلاس سه (اتوبوسی، دو طبقه مترویی و معمولی صندلی) می‌شود.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطارهای شش تخته رجا</h2>
                    <p>قطارهای شش تخته رجا برای سفرهای دسته جمعی و گروهی هم از لحاظ فضا و هم قیمت بسیار مناسب هستند. این قطارها به سه کلاس تقسیم می‌شوند و کلاس یک شامل قطار میلاد، کلاس دو شامل قطار پارسی و زاگرس و کلاس سه شامل قطار شش تخته تبدیلی می‌شود.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطار مجلل زندگی رجا</h2>
                    <p>قطار مجلل زندگی به روزترین و لوکس‌ترین قطاری است که شرکت ریلی رجا وارد ناوگان ریلی کشور کرده است و برای کسانی که ترس از پرواز دارند و سفرهای لوکس و راحت را ترجیح می‌دهند انتخابی ایده‌آل است، چرا که ظاهر قطار زندگی و امکانات کوپه‌های چهار نفره آن بسیار متفاوت است. به محض ورود با نوشیدنی خوشامدگویی از مهمانان پذیرایی می‌شود و دمپایی راحتی برای تردد در راهرو در اختیار آن‌ها قرار می‌گیرد. هر کوپه مجهز به دو مانیتور 18 اینچ است که مسافران می‌توانند از آرشیو فیلم و موسیقی آن با استفاده از هدفون‌هایی که در اختیار آن‌ها قرار می‌گیرد استفاده کنند. وب‌سایت علی‌بابا امکان خرید و استرداد آنلاین تمام قطارهای شرکت ریلی رجا را فراهم کرده است و مسافران می‌توانند در کمتر از دو دقیقه بلیط قطار مورد نظر را جستجو و خرید خود را نهایی کنند.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطارهای سفیر</h2>
                    <p>شرکت سفیر از بزرگترین شرکت‌های ریلی در ایران است که شرکت‌های زیادی از جمله بن‌ریل، جوپار، ریل سیر کوثر، مهتاب سیر جم، رعد تبریز، پارس لاریم و نور از زیرمجموعه‌های آن هستند که در ادامه به معرفی آنها پرداخته‌ایم.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>شرکت بن ریل</h2>
                    <p>شرکت راه آهن بنیاد شرقی که امروزه آن را با نام بن‌ریل می‌شناسیم در سال 1373 با خرید 10 واگن مسافری و 100 واگن باری فعالیت خود را در بخش مسافری و باری ریلی کشور آغاز کرد. بن‌ریل اولین شرکت ریلی خصوصی است که وارد بخش خدمات ریلی و باری ایران شد. اکنون که ربع قرن از فعالیت این شرکت می‌گذرد رشد چشمگیری در کیفیت ارائه خدمات و ناوگان آن دیده می‌شود و بن‌ریل توانسته است تعداد واگن‌های خود را در طول مدت فعالیت از 10 به 131 دستگاه برساند. 7.5 درصد از سرانه سالانه جابه‌جایی مسافران ریلی به بن‌ریل می‌رسد و ناوگان این شرکت ظرفیت حمل دو میلیون مسافر را در مسیرهای ریلی سراسر کشور دارند. ناوگان شرکت ریلی بن‌ریل شامل قطارهای پارسی، سفیر، غزال، سروش و پلور می‌شود. علاوه بر خرید آنلاین بلیط قطارهای بن‌ریل در وب‌سایت علی‌بابا، این وب‌سایت امکان استرداد آنلاین را هم فراهم کرده است و بعد از کنسل کردن بلیط هزینه آن در کمترین زمان ممکن به حساب مسافران برمی‌گردد.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>شرکت ریلی ریل سیر کوثر</h2>
                    <p>در سال 1384 شرکت قطارهای مسافری کوثر فعالیت خود را با خرید دو رام قطار مسافری غزال در صنعت ریلی ایران آغاز کرد. با اضافه شدن واگن‌های چهار تخته لوکس غزال به واگن‌های دیگر، این شرکت شروع به جابه‌جایی مسافران در مسیرهای مشهد-بندرعباس-مشهد و یزد-مشهد-یزد کرد. خرید 134 دستگاه واگن مخزن‌دار مخصوص حمل و نقل مواد نفتی و روغنی آغاز فعالیت ریل سیر کوثر در زمینه حمل بار بود. ریل سیر کوثر در حال حاضر روزانه به 2000 مسافر خدمات سفر ارائه می‌کند. فضای کوپه‌های قطار چهار تخته لوکس غزال بسیار راحت است و در بدو ورود بسته پذیرایی و چای در اختیار مهمانان قرار می‌گیرد. چنانچه لازم باشد در مسیر سفر وعده‌های غذایی اصلی را میل کنید، می‌توانید از رستوران قطار سفارش دهید. در کوپه‌ها مانیتور تعبیه شده است و اگر علاقه‌مند بودید از آرشیو موسیقی و فیلم در طول راه استفاده کنید، هدفون در اختیار شما قرار می‌گیرد. کتاب، روزنامه و ویلچیر بنا به درخواست شما برای‌تان فراهم می‌شود.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>شرکت ریلی مهتاب سیر جم</h2>
                    <p>شرکت ریلی مهتاب سیر جم از سال 1389 مسافران را در مسیرهای ریلی کشور جابه‌جا می‌کند. ناوگان این شرکت ریلی شامل 87 دستگاه واگن پارسی، 23 دستگاه واگن اتوبوسی آلمانی و واگن‌های شش تخته لوکس هستند. قطارهای این شرکت ریلی در مسیر اهواز-مشهد-اهواز، تهران-خرمشهر-تهران، تهران-اندیمشک-تهران، تهران-اهواز-تهران و تهران-شیراز-اهواز تردد دارند. قطار لوکس شش تخته در طول مسیر با بسته پذیرایی، چای و آب معدنی از مسافران پذیرایی می‌کند و سرویس خواب در اختیار مسافران قرار می‌دهد. هنگام خرید بلیط هم می‌توانید وعده غذایی خود را با پرداخت هزینه اضافی از منوی پیشنهادی انتخاب کنید.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>شرکت ریلی ترابر سبا</h2>
                    <p>تاریخچه فعالیت شرکت ریلی ترابر سبا در مسیرهای ریلی ایران به شهریورماه سال 1388 برمی‌گردد. فعالیت این شرکت با خرید 50 واگن مسافری شروع شد و در سال 92، 28 دستگاه واگن کره‌ای اتوبوسی هم به ناوگان آن اضافه شد. در سال 1393، 37 دستگاه واگن پارسی خریداری شد که در حال حاضر از 25 دستگاه بهره‌برداری شده است. واگن‌های چهار تخته و شش تخته پارسی امکانات مشابهی را در اختیار مسافران قرار می‌دهند. در هر دو نوع از واگن‌ها رستوران برای صرف وعده‌های غذایی گرم و متنوع وجود دارد. مانیتور در کوپه‌ها تعبیه شده و امکان استفاده از آرشیو فیلم و موسیقی وجود دارد. چای، آب معدنی، بسته پذیرایی و سرویس خواب به صورت رایگان در اختیار مهمانان قرار می‌گیرند. درب‌های اتومات لمسی، سیستم احضار مهمان‌دار، سیستم تهویه و عطرافشان از دیگر امکانات این واگن‌ها هستند.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>شرکت رعد تبریز</h2>
                    <p>شركت قطارهاى مسافربری رعد تبریز در سال ۱۳۸۲ در بخش حمل و نقل ریلی مسافری آغاز به کار کرد. قطارهای این شرکت جز اولين قطارهای خصوصي در مسير تهران-تبريز بودند که توافق‌نامه راه‌اندازی آن ميان شركت قطارهاي مسافري رجا و رعد تبريز به امضا رسید. همچنین قطارهای سهند رعد از اوایل دهه ۸۰ شروع به جابه‌جایی مسافران کردند و به تدریج گستره فعالیت خود را از مسیر تهران-تبریز به سایر مسیرها توسعه دادند. قطارهای سهند در دسته چهارتخته‌های لوکس قرار می‌گیرند. واگن‌های چهار تخته سهند مسافران را در مسیرهای ریلی تهران-تبریز-تهران، تهران-مشهد-تهران، تهران-یزد-تهران، تهران-اصفهان-تهران و تبریز-مشهد-تهران جا به جا می‌کنند. از میان تمام این مسیرها فقط در مسیر تبریز-مشهد-تبریز امکان ثبت سفارش غذا هنگام تهیه بلیط وجود دارد. رستوران و فروشگاه تنقلات در تمام مسیرها وجود دارد. آب معدنی، روزنامه و سرویس خواب در اختیار مهمانان قرار می‌گیرد.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>شرکت مسافری نور</h2>
                    <p>شرکت نورالرضا (قطارهای مسافری نور) اولین شرکت در بخش خصوصی است که تجیزات قطارهای خود را بدون واسطه از قطعه‌سازان آلمانی، ایتالیایی و ژاپنی تامین کرده است. نور در حال حاضر با 54 دستگاه واگن لوکس چهارتخته و امکانات و خدماتی شایسته، یکی از باکیفیت‌ترین ارائه‌کننده‌های خدمات ریلی در کشور است. قطارهای لوکس چهار تخته شرکت ریلی نورالرضا در مسیرهای تهران-مشهد-تهران، تهران-شیراز-تهران، کرج-مشهد-کرج و اصفهان-مشهد-اصفهان تردد دارند. در سفر با قطارهای نورالرضا مسافران می‌توانند هنگام خرید بلیط وعده غذایی خود را هم از منوی پیشنهادی رزرو کنند و در صورتی که غذا را رزرو نکرده باشند امکان خرید غذا در واگن هم وجود دارد . در بدو ورود از مهمانان پذیرایی می‌شود و در طول مسیر می‌توانید از فروشگاه واگن تنقلات و خوراکی خریداری کنید. کوپه ها مجهز به مانیتور هستند و هدفون در اختیار مسافران قرار می‌گیرد. آب معدنی، ویلچیر و روزنامه در صورت درخواست به مهمانان ارائه می‌شود.</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطارهای فدک</h2>
                    <p>قطار فدک، اولین قطار پنج ستاره ایرانی است که با ورود به سیستم ریلی کشور در سال 1394 توانست استانداردهای صنعت ریلی را به طرز قابل ملاحظه ای بهبود بخشد و نگرش مسافران را در خصوص سفر با قطار تغییر داده است قطارهای فدک با ارائه سفری لوکس و ایمن برای مهمانان خود، توانسته است سفر با قطار را برای آنان خاطره انگیز سازد. از جمله ویژگی های اصلی قطارهای فدک عبارتند از :</p>
                    <h2 className='text-[20px] font-bold mt-10 mb-5'>قطارهای جوپار</h2>
                    <p>شرکت قطارهای مسافری و باری جوپار فعالیت خود را در سال 1381 در بخش خصوصی آغاز کرد. در ابتدا ناوگان این شرکت محدود به 22 دستگاه واگن شش تخته پارسی بود که در سال 88، 84 دستگاه واگن درجه یک پارسی و در سال93، 45 دستگاه واگن مسافری به ناوگان آن اضافه شد. در حال حاضر جوپار یکی از بزرگترین شرکت‌های ریلی است که در مسیرهای تهران-مشهد-تهران، تهران-بندرعباس-تهران، تهران-کرمان-تهران، تهران-زاهدان-تهران و کرمان-مشهد-کرمان فعالیت دارد.
                        قطار شش تخته پارسی که در مسیرهای ریلی پرتردد مسافران را جابه جا می‌کند، امکانات لازم برای سفری راحت را در اختیار مسافران قرار می‌دهد. رستوران مجهز قطار امکان سفارش و میل کردن غذا را در طول راه فراهم می‌کند و همچنین از غرفه فروش تنقلات مسافران می‌توانند خوراکی‌های‌شان را تهیه کنند. کوپه شش تخته مجهز به مانیتور برای تماشای فیلم و گوش دادن به موسیقی در طول مسیر است. سرویس خواب، روزنامه و آب معدنی هم به صورت رایگان در اختیار مسافران قرار می‌گیرد.</p>
                </div>
                <div className=' justify-center flex flex-wrap'>
                    <h2 className='text-[30px] w-full justify-center flex font-bold'>مجله سفر و گردشگری</h2>
                    <div className='flex justify-between m-3 *:m-3 *:border *:border-gray-300'>
                        <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/why-online-14e79519.jpg" alt="" className='h-[150px] rounded-t-lg' />
                            <h2 className='font-bold text-[18px] p-2'>چگونه با کمترین هزینه به مشهد سفر کنیم؟</h2>
                            <p className='p-2'>اگر می‌خواهید بلیط قطار مشهد را خریداری کنید اما نگران هزینه‌اش هستید، این نوشتار را بخوانید. برای خرید بلیط ارزان قطار تهران‌ـ مشهد، گزینه‌های مختلفی مقابل شماست؛ از قطارهای اتوبوسی و کوپه‌‌ای.</p>
                        </figure>
                        <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/luxury-mashhad-45b25709.jpg" alt="" className='h-[150px] rounded-t-lg' />
                            <h2 className='font-bold text-[18px] p-2'>قطارهای لوکس مسیر تهران-مشهد کدام‌ها هستند؟</h2>
                            <p className='p-2'>قطارهای لوکس مسیر تهران-مشهد کدام‌ها هستند؟
                                اگر چه اغلب شرکت‌های ریلی در مسیر پر تردد تهران-مشهد قطار دارند،قطار 5 ستاره فدک، قطار زندگی، غزال vip، قطار نورالرضا و غدیر بهترین قطارهای این مسیر هستند</p>
                        </figure>
                        <figure className='flex flex-wrap *:w-full w-[30%] rounded-lg bg-white border-gray-400'>
                            <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/mashhad-low-cost-494cbf28.jpg" alt="" className='h-[150px] rounded-t-lg' />
                            <h2 className='font-bold text-[18px] p-2'>چرا بلیط قطار را آنلاین بخریم؟</h2>
                            <p className='p-2'>خرید آنلاین بلیط قطار کار را برای سفر با این وسیله نقلیه ریلی آسان ساخته است. اگر قصد سفر را دارید، می‌توانید با خرید آنلاین بلیط قطار در زمان و هزینه صرفه‌جویی کنید.</p>
                        </figure>
                    </div>
                </div>
            </section>
        </section>
    )
}




