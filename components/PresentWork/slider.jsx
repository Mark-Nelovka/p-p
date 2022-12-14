import Slider from "react-slick";
import Image from "next/image";

// import s from "./presWorks.module.css";
import Alexander_Lutchak from "../../images/partners/Alexander_Lutchak.png";
import Alexandra_Degas from "../../images/partners/Alexandra_Degas.png";
import Alisa_Ulyankina from "../../images/partners/Alisa_Ulyankina.png";
import Anna_Dovbush from "../../images/partners/Anna_Dovbush.png";
import Anton_Kosenko from "../../images/partners/Anton_Kosenko.png";
import Denis_Shust from "../../images/partners/Denis_Shust.png";
import Dima_Vasylenko from "../../images/partners/Dima_Vasylenko.png";
import Kate_Esterlin from "../../images/partners/Kate_Esterlin.png";
import Mitya_Borodin from "../../images/partners/Mitya_Borodin.png";
import Ruslan_Bogdan from "../../images/partners/Ruslan_Bogdan.png";
import Vadim_Lysak from "../../images/partners/Vadim_Lysak.png";
import Vladimir_Akulov from "../../images/partners/Vladimir_Akulov.png";
import Yura_Katynsky from "../../images/partners/Yura_Katynsky.png";
import Yurii_Konovalskyi from "../../images/partners/Yurii_Konovalskyi.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
export default function SimpleSlider() {
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
  const settings = {
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    // cssEase: "linear",

    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {arr.map((el) => {
        return (
          <div key={el.name}>
            <div>
              <Image src={el.picture} alt="person" width={305} height={355} />
            </div>
          </div>
        );
      })}
      {/* <div>
        <div>
          <Image src={pic1} alt="person" width={305} height={355} />
        </div>
      </div>
      <div>
        <div>
          <Image
            className={s.card_img}
            src={pic}
            alt="person"
            width={305}
            height={355}
          />
        </div>
      </div>
      <div>
        <div>
          <Image src={pic1} alt="person" width={305} height={355} />
        </div>
      </div>
      <div>
        <div>
          <Image
            className={s.card_img}
            src={pic}
            alt="person"
            width={305}
            height={355}
          />
        </div>
      </div>
      <div>
        <div>
          <Image src={pic1} alt="person" width={305} height={355} />
        </div>
      </div>
      <div>
        <div>
          <Image
            className={s.card_img}
            src={pic}
            alt="person"
            width={305}
            height={355}
          />
        </div>
      </div> */}
    </Slider>
  );
}
