import s from "../HmM.module.css";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
export default function HmM_en() {
  const [size, setSize] = useState("");
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [orientation, setOrientation] = useState();
  const detect = () => {
    setOrientation(screen.orientation.type);
  };
  useEffect(() => {
    const oriental = window.addEventListener("resize", detect);
  }, []);
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setOrientation(screen.orientation.type);
    if (height / width <= 0.59) {
      setSize("Three");
    } else if (height / width <= 0.88) {
      setSize("Two");
    } else {
      setSize("One");
    }
  }, [height, width, orientation]);
  return (
    <>
      <section className={`${s.HmM}`}>
        {size === "One" && (
          <>
            <div className={s.videoContainer__1}>
              <video
                className={s.video__1}
                playsInline
                autoPlay
                loop
                muted
                src={require("../../../Video/IMG_5834.mp4")}
              />
            </div>
          </>
        )}
        {size === "Two" && (
          <>
            <div className={s.videoBox__2}>
              <div className={s.videoContainer__2__1}>
                <video
                  className={s.video__2__1}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
              <div className={s.videoContainer__2__2}>
                <video
                  className={s.video__2__2}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
            </div>
          </>
        )}
        {size === "Three" && (
          <>
            <div className={s.videoBox__3}>
              <div className={s.videoContainer__3__1}>
                <video
                  className={s.video__3__1}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
              <div className={s.videoContainer__3__2}>
                <video
                  className={s.video__3__2}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
              <div className={s.videoContainer__3__3}>
                <video
                  className={s.video__3__3}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
            </div>
          </>
        )}
        {/* {console.log(window.screen.width)} */}
        {/* <div className={s.zxc1}>
                    <video className={s.asd1}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}></video>
                </div> */}
        {/* <div className={s.zxc2}>
                    <video className={s.asd2}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}></video>
                </div>
                <div className={s.zxc3}>
                    <video className={s.asd3}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}></video>
                </div> */}
        {/* <div className={s.zxcasd}>
                <div className={s.videoContainer1}>
                <video className={s.video1}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}
                    />
                </div> */}
        {/* <div className={s.videoContainer}>

                    <ReactPlayer src={require("../../../Video/IMG_5834.mp4")}></ReactPlayer>
                    <video className={s.video}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}
                    /> */}
        {/* <video className={s.video__1}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}
                    />
                     <video className={s.video__2}
                        playsInline
                        autoPlay
                        loop
                        muted
                        src={require("../../../Video/IMG_5834.mp4")}
                    /> */}

        {/* </div> */}

        {/* </div> */}

        <div className={s.HmM__box}>
          <div className={`${s.HmM__item} `}>
            <p className={s.HmM__title}>SCRIPT WRITING</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>idea development</p>
              </li>
              <li className={s.HmM__description}>
                <p>reference selection</p>
              </li>
              <li className={s.HmM__description}>
                <p>script writing</p>
              </li>
              <li className={s.HmM__description}>
                <p>detailed storyboard</p>
              </li>
            </ul>
          </div>
          <div className={s.HmM__item}>
            <p className={s.HmM__title}>TRITMENT WRITING</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>Logline / plot</p>
              </li>
              <li className={s.HmM__description}>
                <p>reference per frame</p>
              </li>
              <li className={s.HmM__description}>
                <p>color palette solution</p>
              </li>
              <li className={s.HmM__description}>
                <p>camera movement</p>
              </li>
              <li className={s.HmM__description}>
                <p>makeup / costume</p>
              </li>
              <li className={s.HmM__description}>
                <p>dreamcast</p>
              </li>
              <li className={s.HmM__description}>
                <p>synopsis</p>
              </li>
            </ul>
          </div>
          <div className={s.HmM__item}>
            <p className={s.HmM__title}>TEAM</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>selection of a team on request</p>
              </li>
              <li className={s.HmM__description}>
                <p>work with the best in the country</p>
              </li>
            </ul>
          </div>
          <div className={s.HmM__item}>
            <p className={s.HmM__title}>CAMERA + LIGHT</p>
            <p>Have our</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>Blackmagic 4k</p>
              </li>
              <li className={s.HmM__description}>
                <p>2 LED</p>
              </li>
              <li className={s.HmM__description}>
                <p>2 Softbox</p>
              </li>
              <li className={s.HmM__description}>
                <p>1 Godox</p>
              </li>
            </ul>
          </div>
          <div className={s.HmM__item}>
            <p className={s.HmM__title}>STYLE</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>creating an image</p>
              </li>
              <li className={s.HmM__description}>
                <p>make-up selection</p>
              </li>
              <li className={s.HmM__description}>
                <p>working with a stylist</p>
              </li>
            </ul>
          </div>
          <div className={s.HmM__item}>
            <p className={s.HmM__title}>ACTING COACHING</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>working with an acting coach</p>
              </li>
              <li className={s.HmM__description}>
                <p>rehearsals with the director before filming</p>
              </li>
            </ul>
          </div>
          <div className={s.HmM__item}>
            <p className={s.HmM__title}>VIDEO EDIT / COLOR / SOUND DESIGN</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>collaboration with the team</p>
              </li>
            </ul>
          </div>
          <div className={s.HmM__item}>
            <p className={s.HmM__title}>OUR STUDIO</p>
            <ul className={s.HmM__about}>
              <li className={s.HmM__description}>
                <p>70 sq/m</p>
              </li>
              <li className={s.HmM__description}>
                <p>with equipment</p>
              </li>
              <li className={s.HmM__description}>
                <p>makeup area</p>
              </li>
              <li className={s.HmM__description}>
                <p>terrace overlooking the city</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className={`${container.container__stretch} ${s.HmM}`} onClick = {handleDownId}>
            <div className={s.videoContainer}>
                <video className={s.video}
                    playsInline
                    autoPlay
                    loop
                    muted
                    src={require("../../../Video/IMG_5834.mp4")}
                />
                 <ul className={`${s.HmM__list}`} >
                  
                        < li className={`${s.HmM__item}  ${id === 1 && s.HmM__bottom__center} ${id === 2 && s.HmM__center__top}`}>
                    <p className={s.HmM__title}>SCRIPT WRITING</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>idea development</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>reference selection</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>script writing</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>detailed storyboard</p>
                        </li>
                    </ul>
                        </li>
                    {id === 2 &&
                        <li className={s.HmM__item} >
                            <p className={s.HmM__title}>TRITMENT WRITING</p>
                            <ul className={s.HmM__about}>
                                <li className={s.HmM__description}>
                                    <p>Logline / plot</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>reference per frame</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>color palette solution</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>camera movement</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>makeup / costume</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>dreamcast</p>
                                </li>
                                <li className={s.HmM__description}>
                                    <p>synopsis</p>
                                </li>
                            </ul>
                        </li>
                    }
               { id === 3 && <li className={s.HmM__item} >
                    <p className={s.HmM__title}>TEAM</p>                    
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>selection of a team on request</p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>work with the best in the country</p>
                        </li>
                    </ul>
                </li>}
                {id === 4 && <li className={s.HmM__item} >
                    <p className={s.HmM__title}>CAMERA + LIGHT</p>
                    <p>
                        Have our 
                    </p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                Blackmagic 4k 
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                2 LED  
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                2 Softbox
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                1 Godox
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 5 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>STYLE</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                creating an image
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                make-up selection
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                working with a stylist
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 6 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>ACTING COACHING</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                working with an acting coach
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                rehearsals with the director before filming
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 7 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>VIDEO EDIT / COLOR / SOUND DESIGN</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                collaboration with the team
                            </p>
                        </li>
                    </ul>
                </li>}
                {id === 8 && <li className={s.HmM__item}>
                    <p className={s.HmM__title}>OUR STUDIO</p>
                    <ul className={s.HmM__about}>
                        <li className={s.HmM__description}>
                            <p>
                                70 sq/m
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                with equipment
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                makeup area
                            </p>
                        </li>
                        <li className={s.HmM__description}>
                            <p>
                                terrace overlooking the city
                            </p>
                        </li>
                    </ul>
                </li>}
            </ul>
            </div>

           
        </section> */}
    </>
  );
}
