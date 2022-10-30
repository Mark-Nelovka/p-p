// import Image from "next/image"
import s from "../works.module.css";
import container from "../../../styles/container.module.css";

function Works_en({ snapshot }) {
  let i = 1;
  return (
    <>
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
        Works
        {/* <ul className={s.works__list}>
                    {snapshot.map((snap)=>(
                        <li className={s.works__item} key = {i++}>
                            <span className={s.works__image}>
                                <Image src ={snap.url}
                                    layout="fill"
                                />
                            </span>
                            <div className={ s.works__box}>
                                <p className={s.works__name}>{snap.name}</p>
                                <p className={s.works__dop}>{snap.dop}</p>
                            </div>
                        </li>
                    ))}
                </ul> */}
      </section>
    </>
  );
}
export default Works_en;
