import s from "./contact.module.css";

import {
  INSTAGRAM,
  EMAIL_PRODUCTION,
  TEL_GLEB,
  TEL_IRA,
} from "../../Constants/Constants";
// import Link from "next/link";
// import { useCallback, useEffect, useState } from "react";

export const Contacts = () => {
  // const [fix, setFix] = useState("qwe");

  // const styleAbout = useCallback(() => {
  //   let target = document.getElementById("footer");

  //   if (!target) {
  //     return;
  //   }
  //   var targetPosition = {
  //       top: window.pageYOffset + target.getBoundingClientRect().top,
  //     },
  //     windowPosition = {
  //       bottom: window.pageYOffset + document.documentElement.clientHeight,
  //     };

  //   if (targetPosition.top < windowPosition.bottom) {
  //     setFix("isFixed");
  //   } else {
  //     setFix("qwe");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener("scroll", styleAbout);
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", styleAbout);
  //   };
  // }, [styleAbout]);

  return (
    <section id="contacts" className={s.contactsSection}>
      {/* <div className="containerStretch"> */}
      <div className={s.wrap}>
        <div className={s.section}>
          <h2 className={s.title}>How to contact us</h2>
          <div className={s.social_list}>
            <div className={s.socialListContainer}>
              <div className={s.containerLink}>
                <p className={s.text}>see our works</p>
                <p className={s.social_link}>
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </p>
              </div>
              <div className={s.containerLink}>
                <p className={s.text}>our mail</p>

                <p className={s.social_link}>
                  <a
                    target="_blank"
                    href={`mailto:${EMAIL_PRODUCTION}`}
                    rel="noreferrer"
                  >
                    {EMAIL_PRODUCTION}
                  </a>
                </p>
              </div>
            </div>
            <div className={s.phonesContainer}>
              <p className={s.text}>Phones</p>

              <p className={s.social_link}>
                <a href={`tel:${TEL_GLEB}`}>{TEL_GLEB}</a>
              </p>
              <p className={s.social_link}>
                <a href={`tel:${TEL_IRA}`}>{TEL_IRA}</a>
              </p>
            </div>
          </div>

          <form className={s.subscribe_form} autoComplete="off">
            <input
              className={s.subscribe_form__input}
              type="email"
              placeholder="Your email"
            />
            <button className={s.btn} type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
