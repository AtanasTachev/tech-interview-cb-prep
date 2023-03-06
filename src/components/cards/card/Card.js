import { Link } from 'react-router-dom';

const Card = ({breed}) => {
    const breedName = breed[0];
    const breedList = breed[1].length>0 ? breed[1].join(', ') : 'No specific breeds';
    console.log(breedList)

    return (
        <li> 
            <h2>{breedName}</h2>
            <h5>{breedList}</h5>
            <Link to={`/details/${breedName}`}>Detail</Link>
        </li>
    )   
}

export default Card;