import s from "./about.module.css";
import Image from "next/image";
import Gleb from "../../images/co-founders/Gleb-director.jpg";
import Ira from "../../images/co-founders/Ira-producer.png";

export const About = () => {
  return (
    <section id="about">
      <div className={`${s.wrap}`}>
        <div className={`${s.section}`}>
          <p className={`${s.p}`}>
            Якось спитала ти так: Чому ж я з тобою?.. Сказав, що більш такої на
            світі не знайти. Думав, ходив, аж ось, декілька слів знайшлось -
            Скажи поміж сестер, що ці слова твої тепер... Люди ми тільки тоді,
            Як дуже сильно любимо! Тільки тоді, коли любимо ми, Можемо зватись
            людьми!
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
                <p className={s.name_p}>Ірина Приємницька </p>
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
                <p className={s.name_p}>Гліб Михайличенко</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
