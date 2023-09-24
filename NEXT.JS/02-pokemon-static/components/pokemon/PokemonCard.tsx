import { SmallPokemon } from '@/interfaces';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

type PokemonCardProps = {
  pokemon: SmallPokemon
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, img, name} = pokemon;
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  }

  return (
    <Card key={id} className="py-4" isHoverable isPressable onClick={onClick}>
      <CardBody>
        <Image
          alt={name}
          className="object-cover rounded-xl"
          src={img}
          width={270}
        />
      </CardBody>
      <CardFooter className='justify-between'>
        <p className='capitalize'>{name}</p>
        <p>#{id}</p>
      </CardFooter>
    </Card>
  )
}