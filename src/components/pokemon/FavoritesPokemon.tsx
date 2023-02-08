import { Grid, Card } from "@nextui-org/react";
import router from "next/router";

interface Props {
  pokemons: number[];
}
export const FavoritesPokemon = ({ pokemons }: Props): JSX.Element => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((id) => (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
          <FavoritePokemonCard id={id}></FavoritePokemonCard>
        </Grid>
      ))}
    </Grid.Container>
  );
};

const FavoritePokemonCard = ({ id }: { id: number }) => {
  const onClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Card isHoverable isPressable onClick={() => onClick(id)}>
      <Card.Body css={{ p: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="100%"
          height={140}
        />
      </Card.Body>
    </Card>
  );
};
