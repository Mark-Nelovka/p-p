import s from "./about.module.css";
import Image from "next/image";
import Gleb from "../../images/co-founders/Gleb-director.jpg";
import Ira from "../../images/co-founders/Ira-producer.jpg";

export const About = () => {
  return (
    <section id="about">
      <div className={`${s.wrap}`}>
        <div className={`${s.section}`}>
          <p className={`${s.p}`}>
            И тогда, наверняка, вдруг запляшут облака, И кузнечик запиликает на
            скрипке... С голубого ручейка начинается река, Ну а дружба
            начинается с улыбки... С голубого ручейка начинается река, Ну а
            дружба начинается с улыбки...
          </p>
        </div>
        <div className={`${s.section}`}>
          <ul className={s.team_list}>
            <li className={s.card_team}>
              <div>
                <Image src={Ira} alt="person" width={305} height={355} />
              </div>
              <div className={s.text_wrap}>
                <p className={s.role_p}>Продюсер</p>
                <p className={s.name_p}>Ирина Приемницкая</p>
              </div>
            </li>
            <li className={s.card_team}>
              <div>
                <Image
                  className={s.card_img}
                  src={Gleb}
                  alt="person"
                  width={305}
                  height={355}
                />
              </div>
              <div className={s.text_wrap}>
                <p className={s.role_p}>Директор</p>
                <p className={s.name_p}>Глеб Михайличенко</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
