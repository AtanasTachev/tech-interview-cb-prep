import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as cardService from '../../../services/cardService.js';

const Detail = () => {
    const { breed } = useParams();
    console.log(breed);
    const [ breedDetails, setBreedDetails ] = useState({});

    useEffect(() => {
        cardService.getOne(breed)
        .then(breedResult => {
            setBreedDetails(breedResult.message);
        }).catch(error => {
            console.log(error);
        })
    }, [breed])

    return (
        <div>
            <h2>Breed: {breed}</h2>
            <img style={{height:400}} src={breedDetails}/>
            <Link to="/gallery">Back to Gallery</Link>
        </div>
    )
}

export default Detail