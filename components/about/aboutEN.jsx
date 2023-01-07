import Image from "next/image";
import Gleb from "../../images/co-founders/Gleb-director.jpg";
import Ira from "../../images/co-founders/Ira-producer.jpg";
import s from "./about.module.css";

export const About = () => {
  return (
    <section id="about" className={s.zxc}>
      <div className={`${s.wrap}`}>
        <div className={`${s.containerFotoCreators}`}>
          <ul className={s.team_list}>
            <li className={s.card_team}>
              <div>
                <Image src={Ira} alt="person" />
              </div>
              <div className={s.text_wrap}>
                <p className={s.role_p}>Producer</p>
                <p className={s.name_p}>Irina Priemnitskaya</p>
              </div>
            </li>
            <li className={s.card_team}>
              <div>
                <Image
                  className={s.card_img}
                  src={Gleb}
                  alt="person"
                  fill="true"
                  width={370}
                  height={550}
                />
              </div>
              <div className={s.text_wrap}>
                <p className={s.role_p}>Director</p>
                <p className={s.name_p}>Gleb Mikhaylichenko</p>
              </div>
            </li>
          </ul>
        </div>
        <p className={`${s.textAbout}`}>
          Production company for the creation of creative and commercial
          projects. From idea to implementation on screen. From video per minute
          to full-length pictures. Your equipment, your team, your style.
        </p>
      </div>
    </section>
  );
};
