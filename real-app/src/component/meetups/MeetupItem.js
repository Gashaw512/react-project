import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {useContext} from 'react';// to establish connecion
import FavoriteContext from "../../store/favorites-context";
function MeetupItem(props) {
  
  const favoriteCtx=useContext(FavoriteContext);
  const itemIsFavorite=favoriteCtx.itemIsFavorite(props.id)
  function togleFavoriteStatusHandler(){
if(itemIsFavorite){
  favoriteCtx.removeFavorite(props.id)
} else{
  favoriteCtx.addFavorite({
    id: props.id,
    title: props.title,
    description: props.description,
    image: props.image,
    address: props.address
  })
}

  }
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.image} />
      </div>
      <div className={classes.content}>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
        
      </div>
      <div className={classes.action}>
        <button onClick={togleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorite' : ' Add to Favorite'}</button>
      </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
