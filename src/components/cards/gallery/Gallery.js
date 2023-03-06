import Card from "../card/Card.js";

import * as cardService from '../../../services/cardService.js';
import { useEffect, useState } from "react";

const Gallery = () => {
    const [allBreed, setBreeds] = useState([]);

    useEffect(() => {
        cardService.getAll()
        .then(result => {
            setBreeds(Object.entries(result))
        })
    }, []);

    return (
        <ul>
            {allBreed.map(x => <Card key={x} breed={x}/>)}
        </ul>
    )
};

export default Gallery;
