import container from "../../../styles/container.module.css";
import Image from "next/image";
import s from "../partners.module.css";
import Alexander_Lutchak from "../../../images/partners/Alexander_Lutchak.png";
import Alexandra_Degas from "../../../images/partners/Alexandra_Degas.png";
import Alisa_Ulyankina from "../../../images/partners/Alisa_Ulyankina.png";
import Anna_Dovbush from "../../../images/partners/Anna_Dovbush.png";
import Anton_Kosenko from "../../../images/partners/Anton_Kosenko.png";
import Denis_Shust from "../../../images/partners/Denis_Shust.png";
import Dima_Vasylenko from "../../../images/partners/Dima_Vasylenko.png";
import Kate_Esterlin from "../../../images/partners/Kate_Esterlin.png";
import Mitya_Borodin from "../../../images/partners/Mitya_Borodin.png";
import Ruslan_Bogdan from "../../../images/partners/Ruslan_Bogdan.png";
import Vadim_Lysak from "../../../images/partners/Vadim_Lysak.png";
import Vladimir_Akulov from "../../../images/partners/Vladimir_Akulov.png";
import Yura_Katynsky from "../../../images/partners/Yura_Katynsky.png";
import Yurii_Konovalskyi from "../../../images/partners/Yurii_Konovalskyi.png";
import { useState } from "react";

export default function Partners_en() {
  const [allShow, setAllShow] = useState(null);
  const arr = [
    {
      picture: Ruslan_Bogdan,
      name: "Ruslan Bogdan",
      position: "DOP",
    },
    {
      picture: Vladimir_Akulov,
      name: "Vladimir Akulov",
      position: "Gafer",
    },
    {
      picture: Denis_Shust,
      name: "Denis Shust",
      position: "Gafer",
    },
    {
      picture: Yurii_Konovalskyi,
      name: "Yurii Konovalskyi",
      position: "1AC Focuspuller",
    },
    {
      picture: Mitya_Borodin,
      name: "Mitya Borodin",
      position: "1st Assistant Director",
    },
    {
      picture: Vadim_Lysak,
      name: "Vadim Lysak",
      position: "SFX",
    },
    {
      picture: Alexander_Lutchak,
      name: "Alexander Lutchak",
      position: "Sound director",
    },
    {
      picture: Anna_Dovbush,
      name: "Anna Dovbush",
      position: "Art director",
    },
    {
      picture: Alexandra_Degas,
      name: "Alexandra Degas",
      position: "Art director",
    },
    {
      picture: Alisa_Ulyankina,
      name: "Alisa Ulyankina",
      position: "Make up",
    },
    {
      picture: Anton_Kosenko,
      name: "Anton Kosenko",
      position: "Location manager",
    },
    {
      picture: Yura_Katynsky,
      name: "Yura Katynsky",
      position: "Edit",
    },
    {
      picture: Dima_Vasylenko,
      name: "Dima Vasylenko",
      position: "Color",
    },
    {
      picture: Kate_Esterlin,
      name: "Kate Esterlin",
      position: "BTS",
    },
  ];

  const showMore = () => {
    if (!allShow) {
      const getAllPartners = arr.splice(4);
      setAllShow(getAllPartners);
      return;
    }
    document.getElementById("partners").scrollIntoView();
    setAllShow(null);
  };
  return (
    <section
      className={`${container.container__stretch} ${s.partners}`}
      id="partners"
    >
      <ul className={s.partners__list}>
        {arr.slice(0, 4).map((people) => {
          return (
            <li key={people.name} className={s.partners__item}>
              <span className={s.partners__iamge}>
                <Image fill="true" src={people.picture} alt={people.name} />
              </span>
              <div className={s.partners__text}>
                <p className={s.partners__name}>{people.name}</p>
                <p className={s.partners__employment}>{people.position}</p>
              </div>
            </li>
          );
        })}
        {allShow &&
          allShow.map((people) => {
            return (
              <li key={people.name} className={s.partners__item}>
                <span className={s.partners__iamge}>
                  <Image fill="true" src={people.picture} alt={people.name} />
                </span>
                <div className={s.partners__text}>
                  <p className={s.partners__name}>{people.name}</p>
                  <p className={s.partners__employment}>{people.position}</p>
                </div>
              </li>
            );
          })}
      </ul>
      <button className={s.partnersButtonMore} onClick={showMore}>
        {allShow ? (
          <p className={s.arrowMore}>&uArr;</p>
        ) : (
          <p className={s.arrowMore}>&dArr;</p>
        )}
      </button>
    </section>
  );
}
