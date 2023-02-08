import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

export const Layout: FC<Props> = ({
  children,
  title = "Pokemon App uwu",
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Sergio Zamorano" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar></Navbar>
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
