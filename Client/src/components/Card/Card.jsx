import {Link} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions';
import {connect} from 'react-redux';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav }) {
  
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
   }
   
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
const mapDispatchToProps = (dispatch) => {
   return{
      addFav: () => {dispatch(addFav())},
      removeFar:(id) => {dispatch(removeFav(id))}
   }
}
export default connect(
   null,
   mapDispatchToProps
)(Card);