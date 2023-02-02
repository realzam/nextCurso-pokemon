import { SmallPokemon } from "@/interfaces";
import { Grid } from "@nextui-org/react";
import { FC } from "react";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonGrid: FC<Props> = ({ pokemons }): JSX.Element => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default PokemonGrid;
