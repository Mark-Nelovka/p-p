import FormSubscribe from "../../../General/Form";
import Backdrop from "../../../General/Backdrop";
import toggleBackdrop from "../../../General/toggleBackdrop";
import { useEffect, useState } from "react";
import Image from "next/image";
import CloseModalIcon from "../../../images/Close-icon.svg";
import ss from "../../../components/mobileMenu/mobileMenu_en/mobMenuEn.module.css";
import s from "./courses.module.css";
import { HeaderEn } from "../../../components/header";

function PageCourses() {
  const [showForm, setShowForm] = useState(false);
  const [coursesTitleForSubscribe, setCoursesTitleForSubscribe] = useState("");

  const openForm = (e) => {
    const { id } = e.target;
    setCoursesTitleForSubscribe(id);
    setShowForm(!showForm);
  };

  const toggleShowBackdrop = (e) => {
    const DoClose = toggleBackdrop(e);
    if (`${DoClose}` === "false") {
      setShowForm(toggleBackdrop(e));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", toggleShowBackdrop);
    return () => {
      window.removeEventListener("keydown", toggleShowBackdrop);
    };
  }, []);

  return (
    <>
      <HeaderEn />
      <section className={s.coursesSection}>
        <div className="containerStretch">
          <h2 className={s.pageTitle}>Courses</h2>
          <div className={s.cardsContainer}>
            <div className={s.cardContainer}>
              <h3 className={s.cardTitle}>courseName: Pro</h3>
              <ul className={s.coursesList}>
                <li>Визитка хронометраж 1 минута. 2 видео на 2 языках</li>
                <li>Сцена из кино/пьесы (с возможностью партнера в кадре)</li>
                <li>Монолог (из кино/пьесы)</li>
                <li>
                  Шоурил из оговорённых работ (снятых сцен с нами + материалы
                  актера)
                </li>
                <li>Хедшоты (6 основных фото для актёрского портфолио)</li>
                <li>
                  Личная консультация с коучем и преподавателем по актёрскому
                  мастерству
                </li>
              </ul>
              <div className={s.buttonContainer}>
                <button
                  onClick={openForm}
                  id="courseName: Pro"
                  className={s.buttonProposition}
                >
                  Leave your proposition
                </button>
              </div>
            </div>
            <div className={s.cardContainer}>
              <h3 className={s.cardTitle}>courseName: Extended</h3>
              <ul className={s.coursesList}>
                <li>Визитка хронометраж 1 минута. 2 видео на 2 языках</li>
                <li>Монолог (из кино/пьесы)</li>
                <li>Хедшоты (6 основных фото для актёрского портфолио)</li>
                <li>
                  Личная консультация с коучем и преподавателем по актёрскому
                  мастерству
                </li>
              </ul>
              <div className={s.buttonContainer}>
                <button
                  className={s.buttonProposition}
                  onClick={openForm}
                  id="courseName: Extended"
                >
                  Leave your proposition
                </button>
              </div>
            </div>
            <div className={s.cardContainer}>
              <h3 className={s.cardTitle}>courseName: Basic</h3>
              <ul className={s.coursesList}>
                <li>Визитка хронометраж 1 минута. 2 видео на 2 языках</li>
                <li>Хедшоты (6 основных фото для актёрского портфолио)</li>
              </ul>
              <div className={s.buttonContainer}>
                <button
                  className={s.buttonProposition}
                  onClick={openForm}
                  id="courseName: Basic"
                >
                  Leave your proposition
                </button>
              </div>
            </div>
          </div>
        </div>
        {showForm && (
          <>
            <Backdrop toggleShowBackdrop={toggleShowBackdrop}>
              <div className={s.formContainer}>
                <button
                  className={ss.closeIcon}
                  id="close"
                  onClick={toggleShowBackdrop}
                >
                  <Image
                    src={CloseModalIcon}
                    alt="close menu button"
                    id="close"
                    width="15"
                  />
                </button>
                <FormSubscribe
                  toggleShowBackdrop={toggleShowBackdrop}
                  course={coursesTitleForSubscribe}
                />
              </div>
            </Backdrop>
          </>
        )}
      </section>
    </>
  );
}

export default PageCourses;
