import React, { useState } from "react";
import classNames from "classnames";

const LikeButton = () => {
    const [likes, setLikes] = useState(100); // Start with 102 likes
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    return (

        <>
        <h3>3. like button</h3>
        <button 
            className={classNames("like-button", { "liked": liked })} 
            onClick={handleLike}
        >
            Like | <span className="likes-counter">{likes}</span>
        </button>

        </>

    );
};

export default LikeButton;
