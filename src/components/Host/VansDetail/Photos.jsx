import { useOutletContext } from "react-router-dom"

const Photos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <img src={currentVan.imageUrl} alt="hahah" width={"200px"}/>
    </div>
  )
}

export default Photos