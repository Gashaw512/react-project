import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0, 
  addFavorite: (favoriteMeetup)=>{},
  removeFavorite:(meetupId)=>{},
  itemIsFavorite:(meetupId)=>{}
}); //

export function FavoriteContextProvider(props) {
  //to manage our data that are ...................
  const [usreFavorite, setUserFavorite] =useState([]);

  // the following function states the way of changes
  function addFavoriteHanler(favoriteMeetup){
setUserFavorite((prevUserFavorite)=>{
return prevUserFavorite.concat(favoriteMeetup)
});
  }
  function removeFavoriteHandler(meetupId){
setUserFavorite(prevUserFavorite=>{
  return prevUserFavorite.filter(meetup=>meetup.id!==meetupId)
})
  }
  //to identifay is item favorite or note
  function itemIsFavoriteHandler(meetupId){
return usreFavorite.some(meetup=>meetup.id===meetupId);
  }

  const context={
favorite:usreFavorite, //when state changes this value also changes
totalFavorite: usreFavorite.length,
addFavorite:addFavoriteHanler,
removeFavorite:removeFavoriteHandler,
itemIsFavorite:itemIsFavoriteHandler
  };//holds the latest value
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
