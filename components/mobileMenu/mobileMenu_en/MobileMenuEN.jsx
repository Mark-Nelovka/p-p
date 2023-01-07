import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  TEL_IRA,
  TEL_GLEB,
  INSTAGRAM,
  EMAIL_PRODUCTION,
} from "../../../Constants/Constants";
import LogoMobile from "../../../images/LogoFix-removebg-preview.png";
import CloseModalIcon from "../../../images/Close-icon.svg";
import INST from "../../../images/instagram.svg";
import s from "./mobMenuEn.module.css";
import scrollToSection from "../../../General/scrollToSection";

export default function MobileMenuEn({ toggleShowBackdrop, show }) {
  useEffect(() => {
    if (show === "one") {
      return;
    }
    window.addEventListener("keydown", toggleShowBackdrop);
    return () => {
      window.removeEventListener("keydown", toggleShowBackdrop);
    };
  }, [toggleShowBackdrop, show]);

  return (
    <div className={s[`menuContainer--${show}`]}>
      <button className={s.closeIcon} id="close" onClick={toggleShowBackdrop}>
        <Image
          src={CloseModalIcon}
          id="close"
          alt="close menu button"
          width="15"
        />
      </button>

      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <Link href="works" prefetch={false}>
            Works
          </Link>
        </li>
        <li className={s.menuItem}>
          <button id="aboutButton" onClick={scrollToSection}>
            About
          </button>
        </li>
        <li className={s.menuItem}>
          {/* <button> */}
          <Link href="/en/courses">Courses</Link>
          {/* </button> */}
        </li>
      </ul>
      <ul className={s.menuSocList}>
        <li className={s.menuItem}>
          <a href={`tel:${TEL_IRA}`}>{TEL_IRA}</a>
        </li>
        <li className={s.menuItem}>
          <a href={`tel:${TEL_GLEB}`}>{TEL_GLEB}</a>
        </li>

        <li className={s.menuItem}>
          <a href={`mailto:${EMAIL_PRODUCTION}`}>EMAIL</a>
        </li>
        <li className={s.menuItem}>
          <a target="_blank" rel="noreferrer" href={`${INSTAGRAM}`}>
            <Image src={INST} alt="inst" />
          </a>
        </li>
      </ul>

      <div className={s.LogoContainer}>
        <Image src={LogoMobile} alt="Logo" width="150" height="150" />
      </div>
      <div className={s.languageChangeContainer}>
        <button className={s.languageChangeButton}>
          <Link href="/en">EN</Link>
        </button>
        <button className={s.languageChangeButton}>
          <Link href="/ru">RU</Link>
        </button>
        <button className={s.languageChangeButton}>
          <Link href="/ua">UA</Link>
        </button>
      </div>
    </div>
  );
}
