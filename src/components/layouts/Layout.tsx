import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

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
