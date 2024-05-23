import React, { useEffect, useState } from "react";

const token =
  "BQAPqn_Wp8cZPBPNDV553djOREFyOLDC3w-wzvoErwDBpwhI0pk1FBf57c65TvJukHzbw8qu7Tj08lriUffoud0tbi3-exmJtMjSduHN1exSRSoWsAawUK7E0sQNM1oQLtrycE2Y3r-66LpF5fy7m8UdDjTCPM-maAXX_306c6BU6gwYZppUVuqjbstc6-6BIjWLPWFqx8ZEmaXFk4sg8MC79pRHNraRvsyrZ0RtTEpOzEz1qBoWyxMtdGbLT9NA6819ZgQLXb18eObjKbeF-RMM";

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

const tracksUri = [
  "spotify:track:2iNqdCchlUZEgjJbQyZf8T",
  "spotify:track:7MIStBJN4CsPM9YA6ZoU07",
  "spotify:track:3SAga35lAPYdjj3qyfEsCF",
  "spotify:track:5FINVtSd9JfKjqFAGlUEWF",
  "spotify:track:043SPVu75TXbs94ZfM9dfn",
  "spotify:track:7KKRPM4fUsfCkJnd1zPhHf",
  "spotify:track:0nTl6b84STC3E1J32yw4iq",
  "spotify:track:6ubd5TYyB1QlrwmRXeam7F",
  "spotify:track:2kRzgmBlmhvFvCEgMHltWz",
  "spotify:track:5X5db3FrBOHbibrFKA02MQ",
];

async function createPlaylist(tracksUri) {
  const { id: user_id } = await fetchWebApi("v1/me", "GET");

  const playlist = await fetchWebApi(`v1/users/${user_id}/playlists`, "POST", {
    name: "My recommendation playlist",
    description: "Playlist created by the tutorial on developer.spotify.com",
    public: false,
  });

  await fetchWebApi(
    `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(",")}`,
    "POST"
  );

  return playlist;
}

const LikedSongs = () => {
  const [playlistId, setPlaylistId] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const createdPlaylist = await createPlaylist(tracksUri);
      setPlaylistId(createdPlaylist.id);
    };

    fetchPlaylist();
  }, []);

  return (
    <>
      {playlistId && (
        <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          width="100%"
          height="100%"
          style={{ minHeight: "360px" }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
    </>
  );
};

export default LikedSongs;
