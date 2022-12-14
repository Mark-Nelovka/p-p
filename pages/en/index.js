import Footer_en from "../../components/footer/footer_en/footer_en";
import { HeaderEn } from "../../components/header";
import Hero from "../../components/hero";
import { About } from "../../components/about/aboutEN";
import { Contacts } from "../../components/contacts/ContactEN";
import { HmM_en } from "../../components/HmM";
import Partners_en from "../../components/partners/partners_en/partners_en";
import { PresWorks } from "../../components/PresentWork";
import Head from "next/head";

export default function En() {
  return (
    <>
      <Head>
        <title>Priem production</title>
      </Head>
      <HeaderEn />
      <Hero />
      <About />
      <HmM_en />
      <Partners_en />
      <PresWorks />
      <Contacts />
      {/* <footer id="footer">
        <Footer_en />
      </footer> */}
    </>
  );
}

// export async function getStaticProps() {
//   // const res = await fetch('https://drive.google.com/drive/folders/1fxqd9hhnhPNHuUQ70r_1nXqoH4lt8AXO?usp=share_link')
//   // const snapshot = await res.json()
//   // console.log(res);
//   // if (!res) {
//   //   return {
//   //     notFound:true
//   //   }
//   // }
//   // return {
//   //   props: {
//   //     res
//   //   }
//   // }
// }
