import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as cardService from '../../../services/cardService.js';

import { Card, Button, Item } from '@mui/material';

const Detail = () => {
    const { breed } = useParams();
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
        <Card>
            <h2>Breed: {breed}</h2>
            <img style={{height:400}} src={breedDetails}/>
            <Button variant='outlined'>
                <Link to="/gallery">Back to Gallery</Link>
            </Button>
        </Card>
    )
}

export default Detail