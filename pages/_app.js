import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script src="https://player.vimeo.com/api/player.js" /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
