import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { publicKey, hash } from './passwords.jsx';
import './CharacterLists.css';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching character list');
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`);
                console.log('Character list fetched:', response.data);
                setCharacters(response.data.data.results);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching character list:', err);
                setError(err.message);
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    console.log('Rendering BrowseCharacters Component');
    return (
        <div className='home-container'>
            <h2>Browse Characters</h2>

            <div className="character-list">
                {characters.map(character => (
                    <div key={character.id} className="character-card">
                    <Link to={`/character-details/${character.id}`}>
                      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                      <h3>{character.name}</h3>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;
