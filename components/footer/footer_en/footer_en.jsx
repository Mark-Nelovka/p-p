import Link from "next/link";
import React, { useEffect, useState } from "react";
import scrollToSection from "../../../General/scrollToSection";
import s from "../footer.module.css";

// import image from "../../../images/Logo.png";
import image from "../../../images/LogoFix-removebg-preview.png";
import container from "../../../styles/container.module.css";
import Image from "next/image";
import axios from "axios";
export default function Footer_en() {
  const [work, setWork] = useState(false);
  const [language, setLanguage] = useState(false);
  const handleToggle = (e) => {
    if (e.target.id.trim() === "language") {
      setLanguage(true);
      setWork(false);
      return;
    } else if (e.target.id === "work") {
      setLanguage(false);
      setWork(true);
      return;
    } else {
      setLanguage(false);
      setWork(false);
      return;
    }
  };

  return (
    // <div
    //   onMouseMove={handleToggle}
    //   className={`${s.footer} ${container.container__stretch}`}
    // >
    //   <ul className={s.footer__list}>
    //     <li>
    //       <ul className={s.footer__list__disen}>
    //         <li className={`${s.footer__item} ${s.footer__works}`} id="work">
    //           <p id="work">works</p>
    //           {work && (
    //             <ul
    //               className={`${s.footer__modal__list} ${s.footer__modal__list__work}`}
    //               id="work"
    //             >
    //               <li id="work">All works</li>
    //               <li id="work">Commercials</li>
    //               <li id="work">Music video</li>
    //             </ul>
    //           )}
    //         </li>

    //         <li className={`${s.footer__item} ${s.footer__contacts}`}>
    //           <p id="contactsButton" onClick={scrollToSection}>
    //             Contacts
    //           </p>
    //         </li>

    //         <li className={`${s.footer__item} ${s.footer__about}`}>
    //           <p id="aboutButton" onClick={scrollToSection}>
    //             About us
    //           </p>
    //         </li>
    //       </ul>
    //     </li>

    //     <li
    //       id="language"
    //       // onMouseEnter={handleToggle}
    //       className={`${s.footer__item} ${s.footer__language}`}
    //     >
    //       <p id="language" onClick={handleToggle}>
    //         Language
    //       </p>
    //       {language && (
    //         <ul
    //           id="language"
    //           className={`${s.footer__modal__list} ${s.footer__modal__list__language}`}
    //         >
    //           <li id="language">
    //             <Link href="/en">
    //               <a id="language">English</a>
    //             </Link>
    //           </li>
    //           <li id="language">
    //             <Link href="/ua">
    //               <a id="language">Ukraine</a>
    //             </Link>
    //           </li>
    //           <li id="language">
    //             <Link href="/ru">
    //               <a id="language">Russian</a>
    //             </Link>
    //           </li>
    //         </ul>
    //       )}
    //     </li>
    //     <li>
    //       <ul className={s.footer__list__disen}>
    //         <li className={`${s.footer__item} ${s.footer__about__1}`}>
    //           <p id="aboutButton" onClick={scrollToSection}>
    //             About us
    //           </p>
    //         </li>
    //         <li className={`${s.footer__item} ${s.footer__contacts__1}`}>
    //           <p id="contactsButton" onClick={scrollToSection}>
    //             Contacts
    //           </p>
    //         </li>
    //         <li className={`${s.footer__item} ${s.footer__about__1}`}>
    //           <p id="aboutButton" onClick={scrollToSection}>
    //             About us
    //           </p>
    //         </li>
    //       </ul>
    //     </li>
    //   </ul>
    // </div>
    // <div className={`${s.footer__experiens} ${container.container__stretch}`}>
    //   <ul className={s.footer__experiens__list}>
    //     <li
    //       className={`${s.footer__experiens__item} ${s.footer__experiens__works}`}
    //     >
    //       <p>Works</p>
    //       <ul>
    //         <li>ALL WORKS</li>
    //         <li>comercials</li>
    //         <li>music video</li>
    //       </ul>
    //     </li>
    //     <li>
    //       <ul className={s.footer__experiens__second}>
    //         <li>PARTNERS</li>
    //         <li className={s.footer__experiens__second__about}>ABOUT US</li>
    //         <li>contacts</li>
    //       </ul>
    //     </li>
    //     <li>
    //       <p className={s.footer__experiens__filmmaking}>FILMMAKING</p>
    //       <ul className={s.footer__experiens__follow__list}>
    //         <li>INSTAGRAM</li>
    //         <li>YOUTUBE</li>
    //         <li>FACEBOOK</li>
    //       </ul>
    //       <p className={s.footer__experiens__follow}>fOLLOW US</p>
    //     </li>
    //     <li className={s.footer__experiens__lang}>
    //       <p>LAnguageS</p>
    //       <ul className={s.footer__experiens__lang__list}>
    //         <li>english</li>
    //         <li>UKRianian</li>
    //         <li>russiaN</li>
    //       </ul>
    //     </li>
    //   </ul>
    //   <div className={s.footer__image}>
    //     <Image
    //       className={s.footer__image}
    //       src={image}
    //       width={100}
    //       height={100}
    //       alt="Logo footer"
    //     />
    //   </div>
    // </div>
    // </div>
    <div className={`${container.container__stretch} ${s.footer__standart}`}>
      <ul className={s.footer__standart__list}>
        <li>
          <p>About</p>
          <ul>
            <li>Partners</li>
            <li>How we make?</li>
            <li>Examples</li>
          </ul>
        </li>
        {/* <li>
          <p>
            Contacts
          </p>
        </li> */}
        <li>
          <p>Works</p>
          <ul className={s.footer__standart__works__list}>
            <li>All works</li>
            <li>COMMERCIALS</li>
            <li>MUSIC VIDEOS</li>
          </ul>
        </li>
        <li>
          <p>Language</p>
          <ul className={s.footer__standart__works__list}>
            <li>english</li>
            <li>UKRianian</li>
            <li>russiaN</li>
          </ul>
        </li>
      </ul>
      <div className={s.footer__standart__priem}>
        <p>PRIЁM PRODUCTION</p>
      </div>
    </div>
  );
}
