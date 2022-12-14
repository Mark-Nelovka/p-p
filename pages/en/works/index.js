import { HeaderEn } from "../../../components/header";
import Works_en from "../../../components/works/works_en/works_en";
import Footer_en from "../../../components/footer/footer_en/footer_en";
function Works({ res }) {
  return (
    <>
      <HeaderEn />
      <Works_en />
      {/* <footer>
        <Footer_en />
      </footer> */}
    </>
  );
}
export default Works;

// export async function getStaticProps() {
// const res = await fetch('http://localhost:8080/snapshot')
// const snapshot = await res.json()
// if (!snapshot){
//     return{
//         notFound: true
//     }
// }
// return{
//     props:{
//         snapshot
//     }
// }




// export async function getStaticProps(){
//   const res = await fetch('http://localhost:8080/snapshot')
//   const snapshot = await res.json()
//   if (!snapshot){
//       return{ 
//           notFound: true
//       }
//   }
//   return{
//       props:{
//           snapshot
//       }
//   }   
// }
