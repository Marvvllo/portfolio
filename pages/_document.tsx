import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import { DocumentContext, DocumentInitialProps } from "next/document";

export default function MyDocument(props: DocumentProps) {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
