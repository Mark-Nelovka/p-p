import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "./Hero.module.css";

export const Hero = () => {
  const [scroll, setScroll] = useState(true);
  // const [pos, setPos] = useState("none");

  const router = useRouter();

  const visibleButtonLangeage = () => {
    let target = document.getElementById("footer");

    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
      },
      windowPosition = {
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (targetPosition.top < windowPosition.bottom) {
      // setPos("isFixed");
      setScroll(false);
    } else {
      // setPos("none");
      setScroll(true);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", visibleButtonLangeage);
    }
    return () => {
      window.removeEventListener("scroll", visibleButtonLangeage);
    };
  }, []);

  return (
    <section className={`${s.heroSectionContainer}`}>
      <div className={s.videoContainer}>
        <video
          className={s.video}
          // playsInline
          autoPlay
          loop
          muted
          src={require("../../Video/Video3.mp4")}
        />
        <div className={s.title}>
          <span>P</span>
          <span>R</span>
          <span>I</span>
          <span>Ë</span>
          <span>M</span> PRODUCTION
        </div>
        <Link href={`${router.pathname}/works`}>Check out all works</Link>
        {scroll && (
          <div className={s.ChangeLangButtonContainer}>
            <button>
              <Link href={"/en"}>EN</Link>
            </button>
            <button>
              <Link href={"/ru"}>RU</Link>
            </button>
            <button>
              <Link href={"/ua"}>UA</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
