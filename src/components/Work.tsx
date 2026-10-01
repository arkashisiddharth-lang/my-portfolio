import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Liluu Salon",
    category: "Salon & Beauty Website",
    tools: "React, Vite, Responsive UI, Modern Animations",
    image:
      "https://image.thum.io/get/width/1400/crop/900/https://liluu-salon-8hn6wu5z6-arkashisiddharth-7090s-projects.vercel.app",
    link: "https://liluu-salon-8hn6wu5z6-arkashisiddharth-7090s-projects.vercel.app",
  },
  {
    title: "Moon Cafe",
    category: "Café & Restaurant Website",
    tools: "React, Vite, Responsive Design, Interactive UI",
    image:
      "https://image.thum.io/get/width/1400/crop/900/https://mooncafedemo-k295bvekf-arkashisiddharth-7090s-projects.vercel.app",
    link: "https://mooncafedemo-k295bvekf-arkashisiddharth-7090s-projects.vercel.app",
  },
  {
    title: "Hub",
    category: "Modern Web Experience",
    tools: "Responsive UI, Interactive Sections, Modern Web Design",
    image:
      "https://image.thum.io/get/width/1400/crop/900/https://hub-cfvzgyq62-arkashisiddharth-7090s-projects.vercel.app",
    link: "https://hub-cfvzgyq62-arkashisiddharth-7090s-projects.vercel.app",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");

      if (!boxes.length || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth =
        boxes[0].parentElement?.getBoundingClientRect().width ?? 0;
      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

      translateX = Math.max(
        0,
        rect.width * boxes.length - (rectLeft + parentWidth) + padding
      );
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools & Features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
