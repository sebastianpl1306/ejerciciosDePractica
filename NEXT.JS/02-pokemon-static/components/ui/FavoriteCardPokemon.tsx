import { Card, CardBody, Image } from "@nextui-org/react"
import { useRouter } from "next/router";

type FavoriteCardPokemonProps = {
  id: number;
}

export const FavoriteCardPokemon = ({ id }: FavoriteCardPokemonProps) => {
  const router = useRouter();

  const onFavoriteClicked = () =>{
    router.push(`/pokemon/${id}`);
  }

  return (
    <Card key={id} className='col-span-12 sm:col-span-6 md:col-span-2 lg:col-span-1' onClick={onFavoriteClicked} isHoverable isPressable >
      <CardBody>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          height={ 140 }
        />
      </CardBody>
    </Card>
  )
}