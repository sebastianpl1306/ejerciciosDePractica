import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const {gifs, isLoading} = useFetchGifs(category);

  return (
    <div>
        <h3>{category}</h3>
        {isLoading && (<h6>Cargando...</h6>)}
        <div className="card-grid">
          {
            gifs.map((images)=><GifItem key={images.id} {...images}/>)
          }
        </div>
    </div>
  )
}
