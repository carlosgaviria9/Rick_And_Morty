import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom';

const Nav = ({onSearch, setAccess}) => {
    // const navigate = useNavigate();
    
    const handleLogOut = () => {
        setAccess(false);
        // navigate('/');
    }
    return(

        <nav>
            <SearchBar onSearch={onSearch}/>

            <button>
                <Link to='/about' >ABOUT</Link>
            </button>

            <button>
                <Link to='/home' >HOME</Link>
            </button>
            {/* <Link to='/' >LOG OUT</Link> */}
            <button onClick={handleLogOut}>LOG OUT</button>
        </nav>
    )
}

export default Nav;