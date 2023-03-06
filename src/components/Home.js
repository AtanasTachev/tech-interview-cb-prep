import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>            
            <h1>The Films Gallery</h1>
            <Link to="/gallery">Go to Gallery</Link>
        </div>
    )
}

export default Home