const baseUrl = 'https://dog.ceo/api';

export const getAll = async () => {
    try {
        let response = await fetch(`${baseUrl}/breeds/list/all`, {mode: 'cors'});
        
        let breeds = await response.json();
        console.log(breeds.message)
        return breeds.message;

        } catch (error) {
            console.log({message: error.message});
        }
    };

export const getOne = async (breed) => {
    try {
        let response = await fetch(`${baseUrl}/breed/${breed}/images/random`, {mode: 'cors'});
        let imageUrl = await response.json();
        return imageUrl;
    } catch (error) {
        console.log({message: error.message})
    }
}
 