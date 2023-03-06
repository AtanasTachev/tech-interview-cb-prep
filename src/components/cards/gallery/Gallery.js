import { useEffect, useState } from "react";

import * as cardService from '../../../services/cardService.js';

import SingleCard from "../card/SingleCard.js";

import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid'

const Gallery = () => {
    const [allBreed, setBreeds] = useState([]);

    useEffect(() => {
        cardService.getAll()
        .then(result => {
            setBreeds(Object.entries(result))
        })
    }, []);

    return (
        <Grid container spacing={2}>
            {allBreed.map(x => <Grid item xs={3} key={x}><Item><SingleCard breed={x}/></Item></Grid>)}
        </Grid>
    )
};

export default Gallery;
