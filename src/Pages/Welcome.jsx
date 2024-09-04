import React from "react";
import { useEffect } from "react";

import Footer from "../componets/Footer/Footer";

import WelcomePageImage1 from "../images/WelcomePageImage1.png";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function Welcome() {
  useEffect(() => {
    const image1 = WelcomePageImage1;
  }, []);

  return (
    <div>
      {/*Hero Section*/}
      <div
        style={{
          background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${WelcomePageBanner})`,
        }}
        className="h-[32rem] w-full sm:h-[65vh] xl:h-[80vh] bg-slate-800 relative"
      >
        <div className="grid content-center justify-center h-full justify-items-center">
          <div className="w-10/12 text-center sm:w-11/12 md:w-40rem">
            <Fade duration={2000}>
              <h1 className="mb-3 text-3xl font-semibold text-center text-white sm:text-4xl md:text-6xl">
                SAND PROJECT
              </h1>
              <h1 className="mb-4 text-xl text-center text-stone-400 font-light sm:text-2xl">
                SANAM AROM NONG DEARN
              </h1>
              <h1 className="mb-2 text-center text-stone-400 font-light sm:text-xl sm:mb-8">
                A website for movie lovers and a place for SANAM AROM NONG DEARN.
              </h1>
              <div>
                <input
                  placeholder="Email Address"
                  className="w-full p-2 py-3 rounded-sm sm:py-4 md:py-5 md:w-3/4"
                />
                <Link to={"/signup"}>
                  <button
                    style={{ backgroundColor: '#2A6354' }}
                    className="px-4 py-2 mt-3 font-medium text-white rounded-sm sm:py-4 md:mt-0 md:pb-5 md:text-xl md:w-1/4">
                    Get Started
                  </button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
          }}
        ></div>
      </div>

      {/* Section 2 */}
      <section className="bg-black border-y-8 border-y-zinc-800">
        <Fade>
          <div className="flex justify-center md:py-8">
            <div className="lg:flex lg:items-center lg:w-9/12">
              <div>
                <h1 className="mt-2 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Enjoy on your TV.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </h1>
              </div>
              <div className="flex justify-center">
                <img className="" src={WelcomePageImage1} />
              </div>
            </div>
          </div>
        </Fade>
      </section>



      {/* Section 6 */}
      <section>
        <div
          style={{
            background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%), url(${WelcomePageBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="h-[32rem] w-full sm:h-[65vh] xl:h-[80vh] bg-slate-800 relative flex items-center justify-center"
        >
          <ul className="mb-4 text-xl text-center text-stone-400 font-light sm:text-2xl">
            <li>662110182 นางสาวกัญชรส มีรัตน์</li>
            <li>662110198 นางสาวเพียงเพียร นิยะตะ</li>
            <li>662110199 นายภัทรดนัย ยศบุญ</li>
            <li>662110205 นางสาวสุชญา อนุชปรีดา</li>
          </ul>

        </div>


      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Welcome;
