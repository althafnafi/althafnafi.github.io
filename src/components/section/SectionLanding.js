import React from "react";
import ChainTop from "../decorator/ChainTop";
import SectionContent from "./SectionContent";
import Chain from "../decorator/Chain";
import ChainBottom from "../decorator/ChainBottom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const sectionData = [
  {
    id: "about",
    title: ".what_i_do",
    content:
      "Currently trying my best to survive as a full time student at Universitas Indonesia majoring in Computer Engineering. I'm also a part of an amazing robotics team, AMV, which competes in Autonomus Marine Vehicles' Competitions.",
  },
  {
    id: "hobbies",
    title: ".hobbies",
    content: "Try out cool tech and learn new things.",
  },
  // {
  //     id: 'history',
  //     title: '.history()',
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum aspernatur reprehenderit eligendi voluptatum itaque, eos laudantium vero dolore sunt consequuntur! Debitis voluptatem quia explicabo consequatur inventore eaque eius quis! Voluptas earum molestias est ratione molestiae, voluptatibus tenetur.Dolore voluptates quidem maiores consequatur molestias excepturi, nesciunt ad libero necessitatibus.Vero eligendi qui nisi rem eum eius tempora a nemo doloribus.Itaque tempore sapiente cum veniam vel.Ratione dolorem esse recusandae illum, excepturi earum impedit placeat, commodi beatae fuga maiores qui nemo cum rerum culpa alias similique molestiae animi, dicta quae!"
  // }
];

const SectionLanding = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  return (
    <section className="font-mono">
      <div className="max-w-screen-xl px-10 sm:px-20 pt-10 mx-auto">
        <ChainTop />
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          {/* <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"

                    >
                    </div> */}
          <div className="lg:pt-2 lg:pb-5 pb-3">
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-white">althaf</span>
              <span className="text-teal-400">.web()</span>
            </h2>
            <h3 className="mt-3 font-bold text-white text-xl md:text-2xl">
              <span className="text-teal-400">print</span>
              <i>(althaf.about)</i>
            </h3>

            <p className="mt-2 text-white">
              Hi! my name is Althaf.
              <br></br>
              <strong>
                I'm an engineer and
                <br></br>a developer.
              </strong>
            </p>

            <a
              className="inline-flex items-center px-4 py-2.5 mt-8 text-white bg-teal-700 border border-teal-400 rounded-xl hover:bg-transparent hover:text-teal-400 active:text-teal-400 focus:outline-none focus:ring"
              href="#about"
            >
              <span className="text-sm font-medium">
                {" "}
                Learn more about me!{" "}
              </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
        {sectionData.map((data) => {
          return (
            <div>
              <Chain />
              <SectionContent key={data.id} data={data} />
            </div>
          );
        })}
        <ChainBottom />
      </div>
      {/* <img
                className="absolute inset-y-0 right-"
                src="../../../assets/images/splash.png"
                alt='heading'
            /> */}
    </section>
  );
};

export default SectionLanding;
