import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const BASE_URL_VIMEO = "https://player.vimeo.com";
const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en({ snapshot }) {
  const [vid, setVid] = useState(null);
  const [video, setVideo] = useState(null);
  const [snapshots, setSnapshots] = useState(null);

  // const router = useRouter();
  const getVideo = (str) => {
    setVideo(str);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/video")
      .then((res) => {
        const dataWithChangedDeskription = res.data.data.map((el) => {
          const koma = el.description && el.description.indexOf(",");
          const firstStr = el.description && el.description.slice(0, koma);
          const secondStr = el.description && el.description.slice(koma + 1);
          if (firstStr && secondStr) {
            return {
              ...el,
              description: {
                director: firstStr,
                directed: secondStr && secondStr.trim(),
              },
            };
          }
        });
        setSnapshots(dataWithChangedDeskription);
      })
      .catch((error) => console.log(error));
  }, []);

  // let i = 1;
  return (
    <>
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
        <button onClick={getVideo}>Get video</button>
        {snapshots && (
          <>
            <ul>
              {snapshots.map((it, inx) => {
                console.log(it);
                return (
                  <li key={inx} onClick={() => getVideo(it.player_embed_url)}>
                    <Image
                      src={it.pictures.base_link}
                      alt="Stroka"
                      width="300"
                      height="200"
                    />
                  </li>
                );
              })}
            </ul>
            {video && (
              <ReactPlayer
                url={video}
                className={s.worksVideoQwe}
                config={{
                  vimeo: {
                    playerOptions: {
                      playsinline: true,
                    },
                  },
                }}
              />
            )}
          </>
        )}
      </section>
    </>
  );
}
export default Works_en;
