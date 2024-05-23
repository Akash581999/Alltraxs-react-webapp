import React, { useState } from "react";

function PlaylistAdd({
  currentSong,
  addToPlaylist,
  removeFromPlaylist,
  isInPlaylist,
}) {
  const [isAdded, setIsAdded] = useState(isInPlaylist(currentSong));

  const handleTogglePlaylist = () => {
    if (isAdded) {
      removeFromPlaylist(currentSong);
      setIsAdded(false);
      alert(`Song removed from Liked songs`);
    } else {
      addToPlaylist(currentSong);
      setIsAdded(true);
      alert(`Song added to Liked songs`);
    }
  };

  return (
    <>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={handleTogglePlaylist}
      >
        {isAdded ? (
          <span className="text-danger">
            Remove from playlist <i className="fa fa-minus"></i>
          </span>
        ) : (
          <span className="text-success">
            Add to playlist <i className="fa fa-plus"></i>
          </span>
        )}
      </button>
    </>
  );
}

export default PlaylistAdd;
