import s from "./about.module.css";
import Image from "next/image";
import Gleb from "../../images/co-founders/Gleb-director.jpg";
import Ira from "../../images/co-founders/Ira-producer.png";

export const About = () => {
  console.log("build");
  return (
    <section id="about" className={s.zxc}>
      <div className={`${s.wrap}`}>
        <div className={`${s.section}`}>
          <p className={`${s.p}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptates ea enim velit sequi maiores ex. Rerum porro voluptatum,
            aperiam molestiae temporibus facere ut voluptatibus nihil explicabo
            tempora deleniti impedit at officia! Laudantium delectus accusantium
            itaque debitis eius, ratione nihil, aspernatur, minus nulla et
            neque?
          </p>
        </div>
        <div className={`${s.section}`}>
          <ul className={s.team_list}>
            <li className={s.card_team}>
              <div>
                <Image
                  src={Ira}
                  alt="person"
                  // width={370} height={401}
                />
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
      </div>
    </section>
  );
};
