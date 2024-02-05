import { Html, Head, Main, NextScript } from "next/document";
import { links } from "@volvo-cars/css/links";
import { FavIcons } from "@volvo-cars/favicons/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {links().map((link) => (
          <link key={link.href} {...link} />
        ))}
        <FavIcons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
