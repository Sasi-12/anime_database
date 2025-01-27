import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import Sidebar from './Sidebar';
import './Popular.css';

function Popular({ viewType }) {
    const { popularAnime, isSearch, searchResults } = useGlobalContext();

    // Render popular anime
    const renderPopularAnime = () => {
        return popularAnime?.length > 0 ? (
            popularAnime.map((anime) => (
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img
                        src={anime.images.jpg.large_image_url}
                        alt={`Cover art for ${anime.title}`}
                    />
                </Link>
            ))
        ) : (
            <p>No popular anime available.</p>
        );
    };

    // Render search results
    const renderSearchResults = () => {
        return searchResults?.length > 0 ? (
            searchResults.map((anime) => (
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img
                        src={anime.images.jpg.large_image_url}
                        alt={`Cover art for ${anime.title}`}
                    />
                </Link>
            ))
        ) : (
            <p>No search results founds.</p>
        );
    };

    return (
        <div className="popular-container">
            <div className="popular-anime">
                {!isSearch && viewType === 'popular'
                    ? renderPopularAnime()
                    : renderSearchResults()}
            </div>
            <Sidebar />
        </div>
    );
}

export default Popular;
