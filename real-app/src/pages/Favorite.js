import {useContext} from 'react'
import MeetupList from '../component/meetups/MeetupList';
import FavoriteContext from '../store/favorites-context';
function FavoritePage(){
    const favoriteCtx=useContext(FavoriteContext);

    let content;
    if(favoriteCtx.totalFavorite===0){
        content=<p>You got no Favorite yet. add some?</p>
    }
    else{
        content=<MeetupList meetups={favoriteCtx.favorite} />
    }

    return(<section>
        <h1>My Favorite</h1>
        {content}
    </section>)

}
export default FavoritePage;