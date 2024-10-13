"use client"
import localFont from "next/font/local";
import "./globals.css";
import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="justify-center flex flex-wrap text-right bg-white text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}



function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const menuRef = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const toggleMenuEqamat = () => {
    setIsVisible2(!isVisible2);
  };
  const toggleMenu3 = () => {
    setIsVisible3(!isVisible3);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && menuRef2.current && !menuRef2.current.contains(event.target) && menuRef3.current && !menuRef3.current.contains(event.target)) {
      setIsVisible(false);
      setIsVisible3(false);
      setIsVisible2(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  ///////////
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  /////////


  return (
    <section className="flex flex-wrap border w-full justify-center">
      <Modal isVisible={isModalVisible} onClose={toggleModal} />
      <nav className="py-2 w-full">
        <div className="flex w-full justify-center md:justify-between py-2 items-center content-center   px-7">
          <div className=" mx-1 md:*:mx-5  text-[17px] flex">
            <div className="flex p-2 rounded-lg hover:bg-[rgb(247,250,251)] cursor-pointer ">
              <Link className="px-3" href={'/components/markazposhtiban'}>مرکز پشتیبانی آنلاین</Link>
              <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor" data-v-52780baf=""><path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Zm.242 12.634a.72.72 0 0 0-.72.72v.36a.72.72 0 0 0 .636.715l.084.005a.72.72 0 0 0 .72-.72v-.36a.72.72 0 0 0-.72-.72Zm-.285-9.068c-.5 0-.943.07-1.33.208a2.664 2.664 0 0 0-.98.592c-.264.258-.467.57-.605.937a3.48 3.48 0 0 0-.206 1.229c0 .354.054.683.164.99.108.308.257.6.441.878.185.279.394.541.629.788.232.247.475.488.724.721.286.266.48.565.578.897.1.334.147.693.147 1.078h1.445a6.226 6.226 0 0 0-.079-.96 2.803 2.803 0 0 0-.226-.726 3.122 3.122 0 0 0-.41-.636 11.256 11.256 0 0 0-.627-.69 56.686 56.686 0 0 0-.511-.519 3.796 3.796 0 0 1-.43-.507 2.073 2.073 0 0 1-.403-1.268c0-.546.144-.973.43-1.283.287-.31.703-.464 1.25-.464.228 0 .448.03.659.09.21.059.396.153.56.28a1.4 1.4 0 0 1 .395.484c.1.195.148.428.148.698h1.444a2.797 2.797 0 0 0-.258-1.186 2.65 2.65 0 0 0-.678-.885 3.035 3.035 0 0 0-1.01-.555 4.033 4.033 0 0 0-1.26-.191Z" fill-rule="evenodd"></path></svg>            </div>
            <div className="flex p-2 rounded-lg hover:bg-[rgb(247,250,251)] cursor-pointer">
              <Link className="px-3" href={'/components/safarhayeman'}>سفرهای من</Link>
              <svg viewBox="0 0 24 24" width="1.5em" fill="currentColor" data-v-52780baf=""><path d="M13.875 1.5a1.5 1.5 0 0 1 1.496 1.388l.004.112v1.5h1.875a2.25 2.25 0 0 1 2.246 2.118l.004.132V18a2.25 2.25 0 0 1-2.118 2.246l-.132.004h-.375V21a.75.75 0 0 1-1.495.087L15.375 21v-.75h-4.97a3.001 3.001 0 0 1-2.755 2.246l-.15.004a3 3 0 0 1-2.25-4.984V6.75a2.25 2.25 0 0 1 2.118-2.246L7.5 4.5h1.875V3a1.5 1.5 0 0 1 1.388-1.496l.112-.004h3ZM7.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75-12H7.5a.75.75 0 0 0-.745.663l-.005.087v9.845a3.004 3.004 0 0 1 3.655 2.155h6.845a.75.75 0 0 0 .745-.663L18 18V6.75a.75.75 0 0 0-.663-.745L17.25 6Zm-3 2.25a.75.75 0 0 1 .745.663L15 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75Zm-3.75 0a.75.75 0 0 1 .745.663L11.25 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75ZM13.875 3h-3v1.5h3V3Z" fill-rule="evenodd"></path></svg>            </div>
            <div className="flex p-2 rounded-lg hover:bg-[rgb(247,250,251)] cursor-pointer" onClick={toggleModal}>
              <p className="px-3">ورود یا ثبت نام</p>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="ml-1 text-grays-500" data-v-52780baf=""><path d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z" fill-rule="evenodd"></path></svg>            </div>
          </div>
          <ul className="hidden *:px-5 *:py-2 text-[17px] lg:flex ">
            <li className="flex relative rounded-lg  hover:bg-[rgb(247,250,251)] cursor-pointer" onClick={toggleMenu3}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              <p className="cursor-pointer text-black rounded " >بیشتر</p>
              <div ref={menuRef} className={`w-[150px]  bg-white absolute top-[40px] justify-center rounded-lg border right-0 ${isVisible3 ? 'flex' : 'hidden'}`}>
                <ul className="flex *:w-full flex-wrap items-center px-4 py-2">
                  <li className="border-b py-2">علی بابا پلاس</li>
                  <li className="border-b py-2">مجله علی‌بابا</li>
                  <li className="py-2">بیمه مسافرتی</li>
                </ul>
              </div>
            </li>
            <li className="rounded-lg  hover:bg-[rgb(247,250,251)] cursor-pointer">ویزا</li>
            <li className="rounded-lg  hover:bg-[rgb(247,250,251)] cursor-pointer">تور</li>
            <li className="flex relative rounded-lg  hover:bg-[rgb(247,250,251)] cursor-pointer" onClick={toggleMenuEqamat}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              <p className="cursor-pointer text-black rounded">اقامت</p>
              <div ref={menuRef2} className={`w-[150px] h-fit bg-white absolute justify-center rounded-lg border right-0 top-[40px] ${isVisible2 ? 'flex' : 'hidden'}`}>
                <ul className="flex *:w-full flex-wrap items-center p-2 justify-end">
                  <li className="border-b py-2"><Link href={'/components/villa'}>ویلا و اقامتگاه</Link></li>
                  <li className="py-2"><Link href={'/components/hotel'}>هتل</Link></li>
                </ul>
              </div>
            </li>
            <li className="flex relative rounded-lg  hover:bg-[rgb(247,250,251)] cursor-pointer" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              <div className="">
                <p className="cursor-pointer text-black rounded ">بلیط</p>
                <div ref={menuRef3} className={`w-[150px]  justify-center bg-white absolute top-[40px] rounded-lg border right-0 ${isVisible ? 'flex' : 'hidden'}`}>
                  <ul className="flex *:w-full flex-wrap items-center px-4 py-2">
                    <li className="border-b py-2"><Link href={'/components/parvazDakheli'}>پرواز داخلی </Link></li>
                    <li className="border-b py-2"><Link href={'/components/parvazKhareji'}>پرواز خارجی </Link></li>
                    <li className="border-b py-2"><Link href={'/components/ghatar'}>قطار</Link></li>
                    <li className="py-2"><Link href={'/components/otubus'}>اتوبوس</Link></li>
                  </ul>
                </div>
              </div>

            </li>
          </ul>
          <div >
            <svg width="132" height="48" viewBox="0 0 132 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M83.8918 29.1095C83.8918 33.3428 81.855 37.3085 77.1054 37.3085C75.3174 37.3085 74.0602 36.6986 73.2087 35.8557L72.8189 37.3085H70.5059V16.3924H73.4402V29.308C73.4402 31.9245 74.0732 34.7596 77.2118 34.7438C80.2555 34.7294 80.9244 31.7734 80.9244 29.308C80.9244 26.8425 80.2541 23.9053 77.2104 23.8923C76.5715 23.8995 75.9387 24.0178 75.3404 24.2419V21.8569C76.1511 21.534 77.0126 21.3577 77.885 21.3362C82.0449 21.3362 83.8918 25.4458 83.8918 29.1095ZM57.2982 37.3085H60.2341V16.3924H57.2982V37.3085ZM109.809 21.342C108.937 21.3635 108.075 21.5398 107.265 21.8627V24.2476C107.863 24.0234 108.496 23.9051 109.135 23.8981C112.178 23.911 112.849 26.8497 112.849 29.3137C112.849 31.7778 112.177 34.7309 109.129 34.7438C105.99 34.7596 105.357 31.9245 105.357 29.308V16.3924H102.423V37.3099H104.736L105.124 35.8571C105.977 36.7001 107.235 37.3099 109.023 37.3099C113.769 37.3099 115.809 33.3428 115.809 29.1109C115.809 25.4458 113.962 21.3362 109.809 21.3362V21.342ZM130.667 33.1831V27.7013C130.667 23.386 127.885 21.3492 124.678 21.3492C121.291 21.3492 118.91 23.55 118.91 23.55L120.311 25.5523C120.628 25.2991 122.311 24.039 124.517 24.039C126.4 24.039 127.926 24.9021 127.926 27.7948V31.2024C127.926 33.7498 125.337 34.843 123.591 34.843C122.039 34.843 120.898 34.2216 120.898 32.8479C120.898 30.522 124.092 29.8273 126.019 29.9251V27.6826C121.794 27.4654 118.006 29.2217 118.006 33.0234C118.006 35.6673 120.057 37.3042 123.129 37.3042C125.431 37.3042 127.42 36.4167 128.392 35.4472C128.913 36.7792 130.327 37.3042 131.425 37.3042L132 35.1581C131.077 34.9567 130.671 34.5151 130.671 33.1774L130.667 33.1831ZM98.7493 33.1831V27.7013C98.7493 23.386 95.9674 21.3492 92.7612 21.3492C89.3737 21.3492 86.9931 23.55 86.9931 23.55L88.3956 25.5523C88.7106 25.2991 90.3935 24.039 92.6001 24.039C94.483 24.039 96.0106 24.9021 96.0106 27.7948V31.2024C96.0106 33.7498 93.4214 34.843 91.6737 34.843C90.1217 34.843 88.981 34.2216 88.981 32.8479C88.981 30.522 92.1743 29.8273 94.1018 29.9251V27.6826C89.8771 27.4654 86.0883 29.2217 86.0883 33.0234C86.0883 35.6673 88.1395 37.3042 91.212 37.3042C93.5135 37.3042 95.5028 36.4167 96.4752 35.4472C96.9959 36.7792 98.4099 37.3042 99.5074 37.3042L100.083 35.1581C99.1593 34.9567 98.7537 34.5151 98.7537 33.1774L98.7493 33.1831ZM53.6259 33.1831V27.7013C53.6259 23.386 50.844 21.3492 47.6378 21.3492C44.2503 21.3492 41.8697 23.55 41.8697 23.55L43.2765 25.5523C43.5915 25.2991 45.2759 24.039 47.481 24.039C49.3653 24.039 50.8915 24.9021 50.8915 27.7948V31.2024C50.8915 33.7498 48.3023 34.843 46.5546 34.843C45.004 34.843 43.8633 34.2216 43.8633 32.8479C43.8633 30.522 47.0552 29.8273 48.9841 29.9251V27.6826C44.758 27.4711 40.975 29.2274 40.975 33.0292C40.975 35.673 43.0262 37.3099 46.0987 37.3099C48.4001 37.3099 50.388 36.4224 51.3604 35.4529C51.8826 36.7849 53.2951 37.3099 54.3941 37.3099L54.9694 35.1638C54.0359 34.9567 53.6331 34.5151 53.6331 33.1774L53.6259 33.1831ZM63.8977 37.3157H66.8321V21.8224H63.8977V37.3157ZM63.8977 19.3354H66.8321V16.3924H63.8977V19.3354Z" fill="black" />
              <path d="M27.2308 35.7579C27.087 36.0182 26.7403 36.1362 26.4325 36.2239L22.9242 37.215C22.6164 37.3013 22.2323 37.3718 21.9748 37.2251C21.7173 37.0784 21.5893 36.7144 21.5073 36.408C16.4124 17.4036 15.709 13.3069 13.6593 13.3069C11.6095 13.3069 10.9119 17.4036 5.81124 36.408C5.72925 36.7144 5.59835 37.0784 5.34375 37.2251C5.08915 37.3718 4.70077 37.3013 4.39295 37.215L0.884629 36.2239C0.576806 36.1362 0.231587 36.0182 0.0877444 35.7579C-0.0560982 35.4975 0.00719254 35.1163 0.0877444 34.8186C5.30204 15.4675 8.21484 10 13.6593 10C19.1037 10 22.0223 15.466 27.2294 34.8186C27.3099 35.1163 27.3704 35.5062 27.2308 35.7579Z" fill="#FDB913" />
              <path d="M30.3479 23.5341C30.3447 23.7203 30.3021 23.9037 30.2228 24.0721L30.0789 24.4706C30.0158 24.7061 29.8729 24.9125 29.6747 25.0546C29.4436 25.1517 29.1861 25.1664 28.9454 25.0963C24.3738 24.0874 19.5948 24.6703 15.3996 26.7484C11.2045 28.8265 7.845 32.2751 5.8774 36.5231C5.73356 36.8396 5.50629 37.3099 4.99421 37.3099C4.78918 37.3091 4.58548 37.2771 4.39007 37.215L0.881756 36.2239H0.873125C0.467489 36.1089 0 35.9521 0 35.404C0.0149912 35.1669 0.0796829 34.9356 0.189873 34.7251C2.68258 29.3822 7.1079 25.1827 12.574 22.9731C18.0401 20.7635 24.1406 20.708 29.6459 22.8178C29.9192 22.9185 30.3479 23.0796 30.3479 23.5341Z" fill="url(#paint0_linear_2574_8208)" />
              <defs>
                <linearGradient id="paint0_linear_2574_8208" x1="0.00287685" y1="29.2893" x2="30.3479" y2="29.2893" gradientUnits="userSpaceOnUse">
                  <stop offset="0.3" stop-color="#FDB913" />
                  <stop offset="0.75" stop-color="#F7941F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </nav>
    </section>
  )
}







function Footer() {
  return (
    <section className=" w-full justify-center items-center flex flex-wrap">
      <div className="justify-center content-start items-start *:items-start *:content-start flex mx-5 border-t m-5 md:*:m-10 w-[90%]">
        <div className="justify-end items-center  flex">

          <div className="flex flex-wrap *:w-full w-[70%] px-2">
            <h2 className="text-[20px] font-bold">رتبه یک سفر</h2>
            <p>معتبرترین عرضه‌کننده محصولات گردشگری در ایران</p>
          </div>
          <img src="data:image/webp;base64,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" alt="Alibaba data:image/webp;base64,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"
            width="89"
            height="89"
            data-v-58641e94=""
          />
        </div>
        <div className="justify-end items-center flex px-2">
          <div className="flex flex-wrap *:w-full w-[70%]">
            <h2 className="text-[20px] font-bold">همسفر هر سفر</h2>
            <p>ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)</p>
          </div>
          <img src="data:image/webp;base64,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" alt="Alibaba data:image/webp;base64,UklGRvgFAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSHoBAAABkHPbtrE997Nt27b9fbFtq7LtdLZ/gFWms9PZqmw+OOGD+9xnx0lETAD77/+f/8lj12+yzxWDfaw36i3Z6+0iqxVLZLfXPS22gey3o8WO2dAsi53l7khTjv68EU/5Wmgvz/yZoUOBOcaMTQHmgbsx3YGhHYne+n2b7iIjwv/++xc4x687wKRR2u0AFtE9uGgzXE/gUuGi/0Dx9PHx8YsQsbiE7fDzZvEBUQurnOyev2No9SKwXG+iNZnACnqK1hoCK01Caz+BVU9gOZxHazCB5XkfrbkEVsQrtLYSWLkKWocIrHYEltMFIBz4GENA9uXjKhJnuSgiKJN56I1FGx56YtGKh1ws4nhgF5A4wbjsgEQdH2wGEIzXVoclsBhzjokXvHiE76BNuX5a6w0Fn7epTHvmO3iWML3L4OmmayA8u3QdhEddoM1hqQoPkfJeq0KaVRyYpM3E90Dc4uQaEDUqF2opEGymzIE8mUEZPnHtdnPXjA9h//3/kx5WUDggWAQAAJAcAJ0BKrAAsAA+bTCUSCQoIiEnsJsJAA2JTddRCa2ls/Vz9VzPQ8ngfLnnb/3f939p+308xH7E/sz7u3SAfrN1t39A9QD9iPS1/Zz4W/2+9ID//gwzDzazWayi/6+iLDQ9hMxKp9WxkZRP/uMkWi/ztpotxrTIG1S4sKYn30SVPRLKmjmS/DkfqyBc1q2aSW8jmvozzwH9RZ9KtrJV+vOnIFNyuWgWZK0rr+0UwhBQpdqH7a309tKvRI7Bd4gA7Xzl7qxc1hEKtYekaKcaziipy66hlpR1f7mj2hRlvF7zN8P+F+jZMPNrNZqAAAD+/PhAAAQ3/nBO/73nvIGQcehrd9OASN927CbZfdsKF+aHhYXo+u5613vd/wDSYixHk4Ed7N5+pz945yYewOPTynuI6L1Qqy3kvRK/9ku9dZdid2/L9ZdgQ+kzSmDXlnWnIjFHY8f51TP7+JBRcB9hV/uocelsHhiqEoO/vVZRdCtnIv20n8t0Y63wUHXPlSP0+W1DGIQK5i908nKfhG5v2GevjeKrCbRgcnPUKId2zdf8ShXDur7GpbX27BLGCrukRbSaGiiFTOmd5pCu39HbdYANffKAHNMTnCTGW9AP6rM18frmH0e46GGLGyzun3ze7s+Co82bKp/QhQ1eg5Kt83lid4+6lJx4mg+rBjKPV3BCsfa+uzpCrJ0QgQPqq9RdywblGikEiIMHB/6pnGy0kOxC2muYKCp7+D/R+H2qhzqVydaiYXRVvkZks0AhuAxVHZDLms7la76rv0w5kf8cLemiosRRaJCQOjefZMGxK/ad/6YSo+lllQxB2zrcvFZIO+iOue1Mz+n3MudxGQQ5xNRPqVim0aKoIlSC6nWNXjtqIZXIAklQE8OUzrGooSat1Pbosi5Rhe/x+3zvcyQOq9WyaFlK+JkW6NnnJK8nZgXgsU97RookmibmizbTlFFOS2gAL/5JBrS+YZFxAuXdTUHn5DgR7FvmgFcme+YQ7HI2M1x8r/t6Fht95dBs7YfC2uc6DETnXtNWSMMUR+XnJ8vxYCrH3ctvHhMNaazZLV9oOeF+43v8YMbvwgY1uTIloYjfWqWMrlX1DAblRg8XM6++q3woMMxNhWEIlOloUC7TShO/6+wNSyV+AyhCWefUP9ohihtJW/Zc2yr5oa2T8Qv+zecHWjza/MVgEkNfFY0Buk9eowJVWy/zDgcjlcKMdTXswg7njbKlMtLJKEOWLHZa/YKpxzE9FFqHJRrEYxn7T9q63RQ5O4TRP0JuxG7In95fHhnEVC5atO1/0qkOBe6DuXE6psvTcvfKb4Nhr4iD0SpPBPhoM8CJOPrRynMOyqLKmrildOXKgqBc375ug37J0dsLJfFcHZmriMNbmHVen0KhIAAAABbXAAX/MP7SM0og2T9UmZU4155qzY8Jafdw31EgoJ6V7+YID5SWWNTtsBhqMO+EW24SuJ8j1HLQVWR0AAAAAAAA"
            width="89"
            height="89"
            data-v-58641e94=""
          />

        </div>
        <div className="justify-end items-center flex mx-2">
          <div className="flex flex-wrap *:w-full w-[70%]">
            <h2 className="text-[20px] font-bold">همسفر همه لحظات سفر</h2>
            <p>پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر</p>
          </div>
          <img src="data:image/webp;base64,UklGRoIKAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSKMDAAABoAVJtmnbGmufa9u2bdu2bdu2bdu2bdu2eXzO3n25Mccc8++9GxETQP/8/z+dQ+aukNWkok30AXA0iTFV+Yg/PkpgRqGn4+/34ppQqstw9lYs82n0Hc5fi244EZbC5UtRDSBmnwNv7i4qF9IdWe7CjeciiVfwBf74cW5Rmysd/OHWkxGESxsIJ19PyWM5EXUz3H00nGz74OKTMVn+lO8p3H8gjGT54Ma7Q9KSrV8QPLk7tGDT3QHg+j14eFtIsbzeuEnBjSGkKgG2q72EWsAHS20ihfzICAssiSqA9SyJVvDCZHnCfmOGseLUAPvh0mzgh0GyRPTTAHqK0hBa7CzJTj2grRzRAjXhaC5GS+jS3lCKg9pAcG0Z4tj1AfvwkBJ0hFa/zS1q094pvQB4PTWvpbVEDu0AeDImi8Z6QdN3hqTR1SVdAbjSJ6mOUkHvpzvH084gzQH2w61j6OWW9gAE7W4USR+ZIKT/plrhNDFaCgDeqyqF0sEjQQB8XljSi1WomCmbQNx3Mwtaitlydh01a9WuU7de+ULq5xNzqlToBYzwwYgMqlQOhjGuTaREuGcwSO/MKtSCUd6LpEA/s0AHBSYYxlYFBhrGEwU6GsY1BRoaxlwFKhpGKQUKmsW7EApkNItZpGBCsyikQkSjeGGpQMEmMYmU/GgSOdV4YBAPSc0LBjFSkQMGkVGRDeIFH53etkaDlpPOXSVFFwj3pFc8+qtNlQmiBYwKR+oPkOxtduLYQbBHKYhlA7m80xDPCnI1IaYFxNpPXDOIVZxNAqkuEdsIUg3hQ0FClWD0QagIjO7LFEyMz8vkzWm/TL4Wo/UyITGj+UKVYzReqEmM+gv1NgSf9kKhBp/6Uj0Ky6a8VBjJJr9Y9hpc0ouFgBJM4suFgK4Wi/CCATvTcqBAyeDYlorBe9GArAzuy3aHGJ6TbQiHfbKl4bBcL47vz68f37759DtVrhDH5rwc355dO7Zt2bRh3ZpVK5YtWXQb/TXjyAdK9GERz1spx9enV49uXTp1SNemVYtmTRrNRp7MOfG555KyoPoesX95cuXIliVThnRpUqVIliRRLVLbKjjrnWfOENM6z52wf358+fDmxZMHd25cuXDmxFEsYu9VatFnD3ThQuGKtujUqFKhTIkiW6TjUJVWebvJHo+NgOFqb/Z3x2Ey2kiNdwe5VM1siChG68N2pw6SCcfrcuZvV5IYEREl7XMFwIuJYcigY+VJTf/8/9+0AFZQOCC4BgAAcCcAnQEqsACwAD5tNJVHP6MroSkS2nvwDYlibsBEEmVB562S9XhPOQtT+F/FvJgnvsAerf87f8b3AP1i6UvmA/ZH9iveW9Df95/Zn3AP75/oOsq/cD2Df2d9N791Pg9/d39vvaV//+sW4AIK8taSBskdVd4FupeJQboF8RKaC6LFnQfkJyGfAszcNwoqqCu6FVpTOIiUfJPV8dh2helycAWaQkNI4WxJ7JxcagFEtZNeTyyNhsDnO0CjUfgiKiXv3pqkqCgpLI0j8XwZ2PBuSeLO+fNfYFn1a44m2uyyzeI9yNRuLugKY6x7OzMAASdEH+deV54HLbLYynO3NRhj8R7vcLZPLCe04hJTnAHzWHAlU45GzxU71BK5Sofz7wk1vh/XhCZjFYHjM+Tt3eySGZCLQaSywmKuhglBUwx9j72broqgAP78+EAAAAOf+mx0glq7Sw9ckyOI+gbrtM3TB4DFAc15nHlR/gCLqqfnwx6vmyi0T41lToK5lLC/QdfO9/+E5g5/8NWWuEyYi2yPf/o/gn+vNnCE58ewoLNmFzSsUtvMZLmSno1UwSe2GyL3/caf2v2XCxlgfoUeAxdOCBE5gYrNjwzabSJMLGLPdgL6Z2d0ioW/Ty2HWyt+JkR2zWCfRMyxj7VbuJ7bqBoohMRHmbMWswjiRafbBqmsmGhAPIo2UOcnUPd5eBTKFb5k2ifwq6PVaHtmCqmzx+qJbEWES6BX7HW27f7RjN3pHGvnN0fz4hHPH3oCqNQqbi3x+wMTZA/zaPr8tUIQH7/UsP//kLP/oWFZn9SIy1VuOJmwhp6AZfPEkH+sIuUBRAomq2OlNA9+dRWETTJQFzss20f9dcnCvUJniDpFVh6LIaIuzoYF9z+sABFqtXlK9GRzIVHCVEbUp/Na4Mf0u/A8KFAKvth49RBOgovsIrxcAQrq093OWqn1LAIX0LW3rhoklQd/3IoCQ2F+SV1BmxDikksI5r4IWZjfMlU534aWPaTwE2UEszz6Jz1WClp+YMmkdT2vkXpXrkW48JSY2W7pLnt0N7Sj5t3Fe0ELuXQ//HMDolVOyYFdcejtO+JlGxH5H5mRzZIVEWmK8aUtV+efHCcP0rapcfP7b1O2rnrQRJQdHgNeBR+8zW35rEQy/smaIRW940sVV4lZbOsgeHJl9nzLWv6HgouOEaY50DkQpzjNaxBCSh6ZCeZSYfqq9vRJYtHJuu/lKOzw3gznmUWflF4SmyWV62m4XFDMOmV6BgLQmfseXXYxzqkWDDg2u5KqgzvzYOg+g+MzBoRxRP8/B5eyT2pH8X34QwP6fEuxR62y+/m/G9weSyfm66RgWZpYwuqiuK2F1EFUL0Tra/pq+lEFKt48jQYYNLyKrUV5oM48cTAnNdv/bSGe3Q7T0JQy3NlAAtJZQuPgW6y+qnPjppZ7G1JsCLkmNug6Vi7HBbyowRfypjBD9SJ05IFDF5AddF5+rx5zrcCDiAABtPooTnOO6+iPhs5oEP2d9L1FA6GR0YSG/TfkmKrbMeXjkRbr9SSKANPgmQQFWbHH97SKxkZ3TTbNtHRxZw4Ofcgf4bRnaPUviQM/9H+g5J+DhTq9u591jM+ZPC3T2CIY6i/nVrnfgCJxzeARszK3vkKjrJclpZuZ6bd3YRygsB4lffN85/MJP44xRXsouUIac346NdwuHcGlwT442aWeVHiHzIEkHQAof/wPFx2CkH/0iCb+l7tgcZFq7Ao62wr/93bVuVMWYAwaAeCxhDtrNvoKq7O1GyqRI/FdTRJL9jKqeKLgv3B2mWv99cNxf8th4UdbrQuZqwBlgl35N854BTfD42wYIOTa+E/UboCxdWdPWz7vLcgh8B6yIL9wrFzq4OL1KMATx+j5yNzFituz9rFZiUzNlLntvBoa6uZxD7MNwlsVSL/UqOtBhJuJzKZM2PyDRqkI6Nwb9cw0zjJI4XjzJLbDfaON/c99uROS+0xplUB166K4VG6CiI99qzZNNdnTlrCcWprez38NGz9oCYJi7aJK07TA74IO+f9KYhObRG/nSQuf03vcnelhZy+oPxz2jKuP/e4RIaUDPfx8ICS98VjCbff0SUy87neITjqBP5ulLLyEPpTOZnKVsMfNHZ28bC9AJOA9rbLj7FxzyQcxx41GfdgoLNwdIOhjH7EwwjQa5K0azpT/kC3P5ZrezHYSSeZpVu5fYVIA+UEJWgvxqJBXMV97Pl0YqdM4RSwAIOY7JCn+4UL0fMu0JjkBgoRgBskyyfwebIs0y7BqVc3IwAAAAAAAAAAAAA==" alt="Alibaba data:image/webp;base64,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"
            width="89"
            height="89"
            data-v-58641e94="" />
        </div>
      </div>



      <div className="flex w-[90%] md:w-[85%] border-t pb-3 pt-10">

        <div className=" flex flex-wrap *:w-full justify-start text-left content-start *:my-2 w-[50%]">
          <div className="flex flex-wrap *:w-full justify-start content-start">
            <div>
              <svg width="132" height="48" viewBox="0 0 132 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="justify-start flex">
                <path d="M83.8918 29.1095C83.8918 33.3428 81.855 37.3085 77.1054 37.3085C75.3174 37.3085 74.0602 36.6986 73.2087 35.8557L72.8189 37.3085H70.5059V16.3924H73.4402V29.308C73.4402 31.9245 74.0732 34.7596 77.2118 34.7438C80.2555 34.7294 80.9244 31.7734 80.9244 29.308C80.9244 26.8425 80.2541 23.9053 77.2104 23.8923C76.5715 23.8995 75.9387 24.0178 75.3404 24.2419V21.8569C76.1511 21.534 77.0126 21.3577 77.885 21.3362C82.0449 21.3362 83.8918 25.4458 83.8918 29.1095ZM57.2982 37.3085H60.2341V16.3924H57.2982V37.3085ZM109.809 21.342C108.937 21.3635 108.075 21.5398 107.265 21.8627V24.2476C107.863 24.0234 108.496 23.9051 109.135 23.8981C112.178 23.911 112.849 26.8497 112.849 29.3137C112.849 31.7778 112.177 34.7309 109.129 34.7438C105.99 34.7596 105.357 31.9245 105.357 29.308V16.3924H102.423V37.3099H104.736L105.124 35.8571C105.977 36.7001 107.235 37.3099 109.023 37.3099C113.769 37.3099 115.809 33.3428 115.809 29.1109C115.809 25.4458 113.962 21.3362 109.809 21.3362V21.342ZM130.667 33.1831V27.7013C130.667 23.386 127.885 21.3492 124.678 21.3492C121.291 21.3492 118.91 23.55 118.91 23.55L120.311 25.5523C120.628 25.2991 122.311 24.039 124.517 24.039C126.4 24.039 127.926 24.9021 127.926 27.7948V31.2024C127.926 33.7498 125.337 34.843 123.591 34.843C122.039 34.843 120.898 34.2216 120.898 32.8479C120.898 30.522 124.092 29.8273 126.019 29.9251V27.6826C121.794 27.4654 118.006 29.2217 118.006 33.0234C118.006 35.6673 120.057 37.3042 123.129 37.3042C125.431 37.3042 127.42 36.4167 128.392 35.4472C128.913 36.7792 130.327 37.3042 131.425 37.3042L132 35.1581C131.077 34.9567 130.671 34.5151 130.671 33.1774L130.667 33.1831ZM98.7493 33.1831V27.7013C98.7493 23.386 95.9674 21.3492 92.7612 21.3492C89.3737 21.3492 86.9931 23.55 86.9931 23.55L88.3956 25.5523C88.7106 25.2991 90.3935 24.039 92.6001 24.039C94.483 24.039 96.0106 24.9021 96.0106 27.7948V31.2024C96.0106 33.7498 93.4214 34.843 91.6737 34.843C90.1217 34.843 88.981 34.2216 88.981 32.8479C88.981 30.522 92.1743 29.8273 94.1018 29.9251V27.6826C89.8771 27.4654 86.0883 29.2217 86.0883 33.0234C86.0883 35.6673 88.1395 37.3042 91.212 37.3042C93.5135 37.3042 95.5028 36.4167 96.4752 35.4472C96.9959 36.7792 98.4099 37.3042 99.5074 37.3042L100.083 35.1581C99.1593 34.9567 98.7537 34.5151 98.7537 33.1774L98.7493 33.1831ZM53.6259 33.1831V27.7013C53.6259 23.386 50.844 21.3492 47.6378 21.3492C44.2503 21.3492 41.8697 23.55 41.8697 23.55L43.2765 25.5523C43.5915 25.2991 45.2759 24.039 47.481 24.039C49.3653 24.039 50.8915 24.9021 50.8915 27.7948V31.2024C50.8915 33.7498 48.3023 34.843 46.5546 34.843C45.004 34.843 43.8633 34.2216 43.8633 32.8479C43.8633 30.522 47.0552 29.8273 48.9841 29.9251V27.6826C44.758 27.4711 40.975 29.2274 40.975 33.0292C40.975 35.673 43.0262 37.3099 46.0987 37.3099C48.4001 37.3099 50.388 36.4224 51.3604 35.4529C51.8826 36.7849 53.2951 37.3099 54.3941 37.3099L54.9694 35.1638C54.0359 34.9567 53.6331 34.5151 53.6331 33.1774L53.6259 33.1831ZM63.8977 37.3157H66.8321V21.8224H63.8977V37.3157ZM63.8977 19.3354H66.8321V16.3924H63.8977V19.3354Z" fill="black" />
                <path d="M27.2308 35.7579C27.087 36.0182 26.7403 36.1362 26.4325 36.2239L22.9242 37.215C22.6164 37.3013 22.2323 37.3718 21.9748 37.2251C21.7173 37.0784 21.5893 36.7144 21.5073 36.408C16.4124 17.4036 15.709 13.3069 13.6593 13.3069C11.6095 13.3069 10.9119 17.4036 5.81124 36.408C5.72925 36.7144 5.59835 37.0784 5.34375 37.2251C5.08915 37.3718 4.70077 37.3013 4.39295 37.215L0.884629 36.2239C0.576806 36.1362 0.231587 36.0182 0.0877444 35.7579C-0.0560982 35.4975 0.00719254 35.1163 0.0877444 34.8186C5.30204 15.4675 8.21484 10 13.6593 10C19.1037 10 22.0223 15.466 27.2294 34.8186C27.3099 35.1163 27.3704 35.5062 27.2308 35.7579Z" fill="#FDB913" />
                <path d="M30.3479 23.5341C30.3447 23.7203 30.3021 23.9037 30.2228 24.0721L30.0789 24.4706C30.0158 24.7061 29.8729 24.9125 29.6747 25.0546C29.4436 25.1517 29.1861 25.1664 28.9454 25.0963C24.3738 24.0874 19.5948 24.6703 15.3996 26.7484C11.2045 28.8265 7.845 32.2751 5.8774 36.5231C5.73356 36.8396 5.50629 37.3099 4.99421 37.3099C4.78918 37.3091 4.58548 37.2771 4.39007 37.215L0.881756 36.2239H0.873125C0.467489 36.1089 0 35.9521 0 35.404C0.0149912 35.1669 0.0796829 34.9356 0.189873 34.7251C2.68258 29.3822 7.1079 25.1827 12.574 22.9731C18.0401 20.7635 24.1406 20.708 29.6459 22.8178C29.9192 22.9185 30.3479 23.0796 30.3479 23.5341Z" fill="url(#paint0_linear_2574_8208)" />
                <defs>
                  <linearGradient id="paint0_linear_2574_8208" x1="0.00287685" y1="29.2893" x2="30.3479" y2="29.2893" gradientUnits="userSpaceOnUse">
                    <stop offset="0.3" stop-color="#FDB913" />
                    <stop offset="0.75" stop-color="#F7941F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="py-2">تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰</p>
            <p className="pb-10">دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1</p>
            <figure className="flex *:rounded-lg *:object-contain *:mx-2  *:border-gray-300 *:border *:p-1  justify-start flex-wrap">
              <img alt="دامنه نرخ بلیط شرکت‌های هواپیمایی"
                data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/aira-682b7c43.png"
                data-expand="0"
                height="69"
                width="69"
                data-v-3d6aae98=""
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/aira-682b7c43.png" />
              <img alt="حقوق مسافر"
                data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/passenger-rights-48368f81.svg"
                data-expand="0"
                height="69"
                width="69"
                data-v-3d6aae98=""
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/passenger-rights-48368f81.svg" />
              <img alt="logo-samandehi"
                data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/samandehi-6e2b448a.png"
                data-expand="0"
                height="69"
                width="69"
                data-v-3d6aae98=""
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/samandehi-6e2b448a.png" />
              <img alt="کسب و کارهای مجازی"
                data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/ecunion-35c3c933.jpg"
                data-expand="0"
                height="69"
                width="69"
                data-v-3d6aae98=""
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/ecunion-35c3c933.jpg" />
              <img alt="سازمان هواپیمایی کشوری"
                data-src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/state-airline-f45c55b2.svg"
                data-expand="0"
                height="69"
                width="69"
                data-v-3d6aae98=""
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/state-airline-f45c55b2.svg" />
            </figure>
          </div>

        </div>

        <div className="w-[50%] flex flex-wrap ">
          <div className="flex w-full ml-10 md:*:ml-20 justify-end content-center mb-[10px]">

            <div className="px-3">
              <h2 className="text-[18px] mb-5 font-bold">خدمات مشتریان</h2>
              <ul className="text-[15px] *:my-1">
                <li>
                  <Link href="/s" variant="body2" color="primary">
                    مرکز پشتیبانی آنلاین
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    راهنمای خرید
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    راهنمای استرداد
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    پرسش و پاسخ
                  </Link>
                </li>

                <li>
                  <Link href="/about" variant="body2" color="primary">
                    قوانین و مقررات
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-3">
              <h2 className="text-[18px] mb-5 font-bold"> اطلاعات تکمیلی</h2>
              <ul className="text-[15px] *:my-1">
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    فروش سازمانی
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    همکاری با آژانس‌ها
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    فرصت‌های شغلی
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    سنجش رضایتمندی
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-3">
              <h2 className="text-[18px] font-bold">علی‌بابا</h2>
              <ul className="text-[15px] *:my-1">
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    چرا علی‌بابا
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    علی بابا پلاس
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    بیمه مسافرتی
                  </Link>
                </li>
                <li>
                  <Link href="/about" variant="body2" color="primary">
                    مجله علی‌بابا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] pb-10">
        <More />
      </div>
      <div className="w-[95%] md:w-[85%] flex justify-between *:mx-5 h-[70px] border-t py-10">
        <ul className="flex mx-4 *:mx-1 justify-start items-center *:text-gray-500 w-[40%]">
          <i>
            <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" class="block" title="Linkedin logo"><path d="M25.333 0A6.667 6.667 0 0132 6.667v18.666A6.667 6.667 0 0125.333 32H6.667A6.667 6.667 0 010 25.333V6.667A6.667 6.667 0 016.667 0h18.666zm-8.637 11.13h-4.174v15.305h4.174v-7.797c0-4.331 5.565-4.686 5.565 0v7.797h4.174V17.03c0-7.309-7.797-7.043-9.74-3.445V11.13h.001zm-6.957 0H5.565v15.305H9.74V11.13h-.001zM7.652 4.458a2.445 2.445 0 00-2.435 2.454 2.445 2.445 0 002.435 2.454 2.444 2.444 0 002.435-2.454 2.444 2.444 0 00-2.435-2.454z" fill-rule="evenodd"></path></svg>
          </i>
          <i>
            <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" class="block" title="Instagram logo"><path d="M17.638.001c2.88.005 3.49.028 4.951.095 1.703.078 2.866.348 3.883.743a7.841 7.841 0 012.833 1.845 7.842 7.842 0 011.845 2.833c.395 1.018.666 2.18.743 3.883.072 1.56.093 2.149.096 5.558v2.073c-.003 3.41-.024 3.999-.096 5.558-.077 1.703-.348 2.866-.743 3.883a7.844 7.844 0 01-1.845 2.833 7.842 7.842 0 01-2.833 1.845c-1.017.395-2.18.666-3.883.743-1.56.072-2.148.093-5.558.096h-2.073c-3.41-.003-3.998-.024-5.558-.096-1.702-.077-2.865-.348-3.883-.743a7.841 7.841 0 01-2.833-1.845A7.84 7.84 0 01.84 26.472c-.395-1.017-.665-2.18-.743-3.883-.067-1.462-.09-2.071-.095-4.95V14.35c.005-2.88.028-3.489.095-4.951.078-1.702.348-2.865.743-3.883a7.84 7.84 0 011.845-2.833A7.84 7.84 0 015.517.84C6.535.444 7.697.174 9.4.096c1.462-.067 2.071-.09 4.951-.095h3.287zm-.947 2.88h-1.392l-.323.001h-.596c-2.825.006-3.403.027-4.85.093-1.559.071-2.405.332-2.969.55a4.95 4.95 0 00-1.84 1.197 4.955 4.955 0 00-1.195 1.84c-.22.563-.48 1.41-.551 2.97-.066 1.445-.087 2.023-.092 4.848v.596l-.001.323v2.31c.006 2.825.027 3.403.093 4.849.07 1.56.332 2.406.55 2.97.29.747.638 1.28 1.197 1.84.56.559 1.093.906 1.84 1.196.563.219 1.41.48 2.97.55.385.018.709.032 1.03.044l.241.009c.769.024 1.605.035 3.302.039l.565.001h2.649l.565-.001c1.876-.004 2.7-.017 3.544-.048l.242-.01c.245-.009.499-.02.788-.034 1.56-.07 2.406-.331 2.97-.55a4.956 4.956 0 001.84-1.197 4.96 4.96 0 001.196-1.839c.219-.564.48-1.41.55-2.97.014-.29.025-.544.035-.788l.01-.243c.03-.843.043-1.668.047-3.543l.001-.565v-2.648l-.001-.566c.003-1.1-.01-2.202-.04-3.302l-.008-.241a108.34 108.34 0 00-.044-1.03c-.07-1.56-.331-2.407-.55-2.97a4.957 4.957 0 00-1.197-1.84 4.956 4.956 0 00-1.839-1.196c-.564-.22-1.41-.48-2.97-.551-1.446-.066-2.024-.087-4.849-.092h-.596l-.322-.001v-.001zm-.696 4.9a8.214 8.214 0 11.181 16.426 8.214 8.214 0 01-.181-16.426zm0 2.882a5.331 5.331 0 10-.146 10.662 5.331 5.331 0 00.146-10.662zm8.538-5.126a1.92 1.92 0 11.088 3.84 1.92 1.92 0 01-.088-3.84z" fill-rule="evenodd"></path></svg>
          </i>
          <i>
            <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" class="block" title="Aparat logo"><path d="M28.057 25.12l-.853 3.202a4.955 4.955 0 01-6.06 3.515l-3.02-.814a15.185 15.185 0 009.933-5.904v.001zM16.007 2.127c7.66.004 13.871 6.214 13.871 13.873a13.873 13.873 0 01-16.586 13.604A13.881 13.881 0 012.39 18.703a13.867 13.867 0 015.905-14.24 13.877 13.877 0 017.71-2.335l.002-.001zM.892 18.415a15.172 15.172 0 005.606 9.527l-2.81-.749A4.952 4.952 0 01.17 21.135l.722-2.72zm19.825-.112a3.96 3.96 0 10-1.497 7.779 3.96 3.96 0 001.497-7.779zm-9.943-1.915a3.96 3.96 0 10-1.506 7.775 3.96 3.96 0 001.506-7.775zm5.48-2.02a1.76 1.76 0 10-.656 3.46 1.76 1.76 0 00.657-3.46zm6.482-6.544a3.961 3.961 0 00-1.5 7.778 3.94 3.94 0 002.974-.607 3.96 3.96 0 001.658-4.08 3.96 3.96 0 00-3.132-3.091zm2.43-3.86l3.152.837a4.953 4.953 0 013.522 6.044l-.866 3.277a15.168 15.168 0 00-5.808-10.159v.001zm-12.38 1.945a3.962 3.962 0 10-1.496 7.782 3.962 3.962 0 001.496-7.782zM7.107.673A4.957 4.957 0 0110.868.17l2.946.768a15.176 15.176 0 00-9.746 5.524l.735-2.776A4.953 4.953 0 017.107.673z" fill-rule="evenodd"></path></svg>
          </i>
          <i>
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" class="block" title="Twitter logo"><path d="M4.13574 4.70508H8.73476L12.636 9.85653L17.3476 4.71618L19.4669 4.71582L13.5948 11.1225L19.7582 19.2611H15.1592L11.0765 13.87L6.13715 19.2589H4.01794L10.1177 12.604L4.13574 4.70508ZM15.9049 17.7611L7.15332 6.20508H7.98913L16.7407 17.7611H15.9049Z" fill-rule="evenodd"></path></svg>
          </i>
          <i>
            <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" class="block" title="youtube logo"><path d="M19.128 6.858c.248.248.427.558.519.897.528 2.127.406 5.487.01 7.696a2.012 2.012 0 0 1-1.416 1.416c-1.241.338-6.239.338-6.239.338s-4.997 0-6.239-.338a2.012 2.012 0 0 1-1.416-1.416c-.531-2.118-.386-5.48-.01-7.686a2.011 2.011 0 0 1 1.416-1.416C6.995 6.01 11.992 6 11.992 6s4.997 0 6.239.339c.339.091.648.27.897.519Zm-4.581 4.745-4.146 2.4v-4.8l4.146 2.4Z" fill-rule="evenodd"></path></svg>
          </i>
          <i>
            <svg viewBox="0 0 25 25" width="35" height="35" fill="currentColor" class="block" title="Telegram logo"><path d="m10.282 13.788-.264 3.722c.379 0 .542-.162.74-.358l1.775-1.696 3.679 2.694c.674.376 1.15.178 1.332-.621l2.414-11.315c.215-.998-.36-1.388-1.018-1.143L4.747 10.504c-.969.377-.953.916-.165 1.16l3.63 1.13L16.64 7.52c.397-.263.758-.117.46.145l-6.818 6.123Z"></path></svg>
          </i>
        </ul>
        <span className="justify-center items-center flex text-gray-500 text-[15px] w-[50%] py-5 md:py-0">کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 3.73.1)</span>
      </div>
    </section>
  )
}




function More() {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <p>
        ... بلیط چارتر تور کیش | توراستانبول  | بلیط قطار | خرید بلیط هواپیما خارجی | اطلاعات فرودگا‌هی
        <span id="dots" className="text-gray-500 w-full text-[14px]" style={{ display: showMore ? 'none' : 'inline' }}>...</span>
        <span id="more" className="text-gray-500 text-[14px]" style={{ display: showMore ? 'inline' : 'none' }}>
          شیوه‌نامه حقوق مسافر | رزرو هتل | هتل مشهد | هتل کیش | هتل درویشی مشهد | شایگان کیش  | بلیط اتوبوس | بلیط تهران استانبول | بلیط استانبول به تهران         </span>
      </p>
      <button onClick={toggleText} id="myBtn" className="text-[rgb(117,172,234)]">
        {showMore ? 'کم تر' : 'بیش تر'}
      </button>
    </>
  );
}


// components/Modal.js

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (

    <div className=" w-full md:w-auto shadow-2xl absolute z-20 left-[50%] top-[15%] translate-x-[-50%] rounded-lg bg-white justify-center flex *:w-full *:my-4 flex-wrap *:justify-center *:flex">
      <div className="flex justify-start">
        <div onClick={onClose} className="mt-4 w-full px-4 py-3 bg-blue-500 text-white">
          <svg viewBox="0 0 24 24" width="24px" height="24px" fill="currentColor" data-v-3d0a3c64="" className="cursor-pointer"><path d="m5.335 4.282.07.063L12 10.939l6.595-6.594a.75.75 0 0 1 1.123.99l-.063.07L13.061 12l6.594 6.595a.75.75 0 0 1-.99 1.123l-.07-.063L12 13.061l-6.595 6.594a.75.75 0 0 1-1.123-.99l.063-.07L10.939 12 4.345 5.405a.75.75 0 0 1 .99-1.123Z"></path></svg>
        </div>
      </div>
      <h2 className=" font-bold text-[18px]">ورود یا ثبت‌نام</h2>
      <p className="text-gray-700">برای ادامه شماره موبایل خود را وارد کنید.</p>

      <div>
        <fieldset class="border border-gray-300 rounded p-2 w-[60%]">
          <legend class="text-gray-500 px-2">شماره موبایل</legend>
          <div class="flex items-center border border-gray-300 rounded">
            <span dir="ltr" class="text-gray-300 mr-1 px-2 border-r">+۹۸</span>
            <input id="al1180194" dir="ltr" type="tel" maxlength="10" name="mobile" autocomplete="off" class="flex-grow p-2 text-right" inputmode="numeric" />
          </div>
        </fieldset>

      </div>
      <span class="text-red-500 text-sm">شماره موبایل را وارد کنید.</span>
      <div>
        <i></i>
        <span className="text-gray-700">استفاده از علی‌بابا به معنی پذیرش قوانین و مقررات این سرویس است</span>
      </div>
      <div className="flex flex-wrap *:my-2">
        <button className='border px-5 py-4 rounded-lg bg-[rgb(138,184,236)] text-[white] w-[60%]'> تایید و دریافت کد</button>
        <span className='w-full justify-center flex text-[rgb(14,122,220)]'>ورود با کلمه عبور</span>
      </div>
    </div >



  );
};


