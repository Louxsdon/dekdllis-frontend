import Navbar from "./Components/Navbar";
import Product from "./Components/ProductCard";
import ReasonCard from "./Components/ReasonCard";
import {
  BriefcaseBusiness,
  Headphones,
  Headset,
  Locate,
  LocateFixed,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  ShieldCheck,
} from "lucide-react";
import "./App.css";

export default function App({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
  };

  return (
    <>
      <div className="">
        <header>
          <Navbar />

          <section id="hero" className="bg-primary pb-5 lg:pb-0">
            <div className="container p-2 lg:p-5 md:p-0 mx-auto lg:h-[557px] flex flex-col-reverse md:flex-row items-center justify-between">
              <div className="hero-text pt-5 px-5 lg:p-0">
                <div
                  id="hero-heading"
                  className="uppercase text-white text-6xl md:text-8xl lg:text-9xl font-black"
                >
                  <span className="text-red-600">Dekd</span>
                  llis
                </div>
                <p className="md:text-4xl text-4xl lg:text-6xl font-bold">
                  Services
                </p>
                <div className="max-w-lg pt-3 lg:pt-5 texslat">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              {/* hero-images */}
              <div className="bg-white w-full md:w-[752px] md:h-[459px] rounded-lg md:rounded-3xl overflow-hidden">
                <img
                  src="/assets/images/hero-customer-support-1.jpeg"
                  alt="hero-image-1"
                />
              </div>
            </div>
          </section>
        </header>

        <main className="">
          <section className="p-5 md:p-10 lg:p-20 bg-[#F2F2F2]">
            <div className="container mx-auto ">
              <div className="section-header text-center">
                <h2 className="text-4xl font-extrabold text-black">
                  Why Choose Us
                </h2>
                <p>We are your one stop solution provider</p>
              </div>

              {/* cards */}
              <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 pt-16 max-w-6xl mx-auto">
                <ReasonCard icon={Headphones} heading={"24/7 Supports"}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et .dolore magna
                  aliqua. Ut enim ad minim venia. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla par"
                </ReasonCard>
                <ReasonCard
                  icon={BriefcaseBusiness}
                  heading={"Quality Services"}
                >
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et .dolore magna
                  aliqua. Ut enim ad minim venia. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla par"
                </ReasonCard>
                <ReasonCard icon={ShieldCheck} heading={"Confidentiality"}>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et .dolore magna
                  aliqua. Ut enim ad minim venia. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla par"
                </ReasonCard>
              </div>
            </div>
          </section>

          <section className="p-5 md:p-10 lg:p-20 bg-secondary text-secondary-content">
            <div className="container mx-auto">
              <div className="section-header text-center">
                <h2 className="text-4xl font-extrabold text-white">
                  Our Services
                </h2>
                <div className="text-slate-100">
                  <p>
                    We provide best class standard services across different
                    sectors
                  </p>
                  <p>Checkout our high quality services available.</p>
                </div>
              </div>

              {/* service section */}
              <section className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between pt-16 max-w-6xl mx-auto">
                <div className="text col-span-2 lg:w-1/2 lg:pr-12 text-justify lg:text-left">
                  <h3 className="text-xl lg:text-2xl uppercase font-extrabold text-white">
                    Telecomunications
                  </h3>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <div className="pt-8">
                    <h3 className="text-lg font-bold text-white">Networks</h3>
                    <ol className="list list-decimal list-inside pl-4">
                      <li>MTN</li>
                      <li>Telecel</li>
                      <li>AT Ghana</li>
                    </ol>
                  </div>

                  {/* actions */}
                  <div className="pt-8">
                    <button className="btn btn-primary px-12">Read More</button>
                  </div>
                </div>

                {/* service image */}
                <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-white rounded-full items-center justify-center">
                  <div className="absolute left-3 z-50">
                    <div className="w-[60px] lg:w-[120px] rounded-full overflow-hidden">
                      <img src="/assets/images/telecel-logo.jpg" alt="" />
                    </div>
                    <div className="relative -left-9 lg:-left-20 -top-5 w-[70px] lg:w-[140px] rounded-full overflow-hidden">
                      {/* <div className="absolute left-0 z-20 w-[40px] h-[40px] bg-white rounded-full"></div> */}
                      <img src="/assets/images/mtn-logo.jpg" alt="" />
                    </div>
                    <div className="relative -left-9 lg:-left-20 -top-5 w-[60px] lg:w-[120px] rounded-full overflow-hidden">
                      <img src="/assets/images/at-logo.png" alt="" />
                    </div>
                  </div>
                  <div className="relative w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src="/assets/images/happy-client-1.png"
                      alt=""
                      className="image-full scale-150"
                    />
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Shop Section */}
          <section className="py-5 px-2 md:p-10 lg:p-20 bg-white">
            <div className="container mx-auto ">
              <div className="section-header text-center max-w-xl mx-auto">
                <h2 className="text-4xl font-extrabold text-black">Shop Now</h2>
                <p>
                  Visit our shop, shop and get items delivered to you at the
                  convenient of your home. Dekdllis Commerce: shopping made
                  easy!
                </p>
              </div>

              {/* cards */}
              <div className="pt-16 max-w6xl mx-auto">
                <div className="bg-primary w-full flex justify-between items-center px-8 py-4">
                  <span>Show Room</span>
                  <span>
                    <a href="">Show More</a>
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <Product name="Iphone14 Pro Max" price={4500} />
                  <Product name="Iphone14 Pro Max" price={4500} />
                  <Product
                    name="Iphone14 Pro Max"
                    price={4500}
                    sale_price={4900}
                  />
                  <Product name="Iphone14 Pro Max" price={4500} />
                </div>
              </div>
            </div>
          </section>

          {/* Get in touch */}
          <section className="p-5 lg:p-20 bg-[#DD5500] text-secondary-content">
            <div className="container mx-auto">
              <div className="section-header text-center">
                <h2 className="text-4xl font-extrabold text-white">
                  Get in touch
                </h2>
                <div className="text-slate-100">
                  <p>
                    We are always available to help. Call us now for inquiries.
                  </p>
                </div>
              </div>

              <section className="flex flex-col lg:flex-row gap-12 items-center justify-evenly pt-16 max-w-6xl mx-auto">
                {/* contact image */}
                <div className="relative  w-[280px] lg:w-[340px] h-[280px] lg:h-[340px] bg-white border-4 rounded-[63px] rotate-45 items-center justify-center">
                  <div className="absolute top-0 right-0 z-50 -rotate-45">
                    <div className="relative -top-32 right-10 items-center justify-center flex rounded-full p-4 lg:p-6 bg-gradient-to-r border-4 border-white group-hover:border-white  text-white  from-[#1C0181] to-[#4760FF]">
                      <Headset size={50} />
                      <div className="bg-white absolute -bottom-3 -right-1 rounded-full overflow-hidden p-5"></div>
                    </div>
                  </div>
                  <div className="relative w-full h-full bg-white rounded-[60px] overflow-hidden flex items-center justify-center">
                    <img
                      className="image-full scale-[2] -rotate-45"
                      src="/assets/images/hero-customer-support-1.jpeg"
                    />
                  </div>
                </div>

                {/* contacts */}
                <div className="text col-span-2 w12 pr-12">
                  <h3 className="text-xl font-extrabold text-white">
                    Contacts
                  </h3>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center space-x-2">
                      <Phone />
                      <span>02015678251 / 0247586231</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Mail />
                      <span>dekdllisservices@gmail.com</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MapPin />
                      <span>Mafi Kumase, Volta Region, Ghana</span>
                    </li>
                  </ul>
                  <h3 className="text-xl my-4 mt-6 lg:mt-14 font-extrabold text-white">
                    Addresses
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <MapPinned />
                      <span>Post Office Box 10, Mafi Kumase</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <LocateFixed />
                      <span>VV-2564-8741</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </section>
        </main>

        <footer>
          <section className="py-5 md:py-16 text-sm text-white bg-black/95">
            <div className="container mx-auto flex flex-col lg:flex-row px-5 lg:p-0 lg:items-center justify-evenly space-y-6 lg:space-y-0">
              <div className="flex flex-col items-center">
                <div className="w-20">
                  <img src="/assets/images/logo.png" alt="Dekdllis Logo" />
                </div>
                <p className="text-xl">Dekdllis Services</p>
              </div>

              <div className="">
                <h3 className="text-xl font-extrabold text-white">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Shop</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-xl font-extrabold text-white">
                  Social Links
                </h3>
                <ul className="mt-4 flex space-x-5 fill-white">
                  <li>
                    <a href="#">
                      <svg
                        className="size-5 lg:size-6 fill-white"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="size-5 lg:size-6 fill-white"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="size-5 lg:size-6 fill-white"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>WhatsApp</title>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        className="size-5 lg:size-6 fill-white"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>X</title>
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-5 lg:py-16 text-sm text-white bg-black text-center lg:divide-x-2 flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-4">
            <p>
              Copyright &copy; {new Date().getFullYear()}, all rights reserved
            </p>
            <p className="lg:pl-4">
              Developed by{" "}
              <a href="https://apharcad.com" target="_blank">
                Apharcad Technologies
              </a>
            </p>
          </section>
        </footer>
      </div>
    </>
  );
}
