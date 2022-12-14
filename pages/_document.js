import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index"></meta>
        <meta
          name="description"
          content="Website for a professional video production studio"
        ></meta>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          href="https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F{video_id}"
          type="application/json+oembed"
          title="{video_title}"
        />
        <link
          rel="alternate"
          href="https://vimeo.com/api/oembed.xml?url=https%3A%2F%2Fvimeo.com%2F{video_id}"
          type="text/xml+oembed"
          title="{video_title}"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
