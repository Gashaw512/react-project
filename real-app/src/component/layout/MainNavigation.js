import {Link} from 'react-router-dom'
import Classes from './MainNavigation.module.css';
import {useContext} from 'react'
import FavoriteContext from '../../store/favorites-context';
function MainNavigation(){

    const favoriteCtx = useContext(FavoriteContext);
    return <header className={Classes.header}>
        <div className={Classes.logo}>React Meetup</div>
        <nav className='navbar navbar-expand-lg bg'>
        <ul className='container-fluid'>
            <li >
                <Link to='/' className='bg-info'>All Meetups</Link>
            </li>
            <li>
                <Link to='/new-meetup'> Add new Meetup</Link>
            </li>
            <li>
                <Link to='/favorite'> My favorites
                <span className={Classes.badge}>{favoriteCtx.totalFavorite}</span></Link>
            </li>
        </ul>
        </nav>
    </header>
}
export default MainNavigation;