import { Layout } from "@/components/layouts";
import { FavoritesPokemon, PokemonGrid } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";

import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import router from "next/router";
import { useEffect, useState } from "react";

const FavoritesPage = (): JSX.Element => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  const onClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemon pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
