import { Link } from 'react-router-dom';

import { Card, Button, Avatar } from '@mui/material';

import * as cardService from '../../../services/cardService.js';
import { useEffect, useState } from 'react';

const SingleCard = ({breed}) => {
    const breedName = breed[0];
    const breedList = breed[1].length>0 ? breed[1].join(', ') : 'No specific breeds';
    console.log(breedList)
    const [breedImg, setBreedImg] = useState({});

    useEffect(() => {
        cardService.getOne(breedName)
        .then(breedImage => {
            setBreedImg(breedImage.message)
        }).catch(error => {
            console.log(error)
        })
    }, [breedName])

    return (
        <Card>                
            <h2>{breedName}</h2>
            <Avatar src={breedImg}></Avatar>
            <h5>{breedList}</h5>
            <Button variant='outlined'>
                <Link to={`/details/${breedName}`}>Detail</Link>
            </Button>
        </Card>
    )   
}

export default SingleCard;