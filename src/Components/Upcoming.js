import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import Sidebar from './Sidebar';
import './Upcoming.css'; // Import the CSS file

function Upcoming({ rendered }) {
    const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'upcoming') {
            return upcomingAnime?.map((anime) => {
                return (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </Link>
                );
            });
        } else {
            return searchResults?.map((anime) => {
                return (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </Link>
                );
            });
        }
    };

    return (
        <div className="popular-styled">
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </div>
    );
}

export default Upcoming;
