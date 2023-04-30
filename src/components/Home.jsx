import { useState,useEffect } from "react";

const Home = () => {

    const [tracks, setTracks] = useState(null)

    useEffect(()=>{
        const url = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        fetch(url,options)
        .then((res)=>res.json())
        .then((data)=>{
            let d = data.items.filter((t)=>{ return t.track!=null });
            setTracks(d);
        })
    } , [])



    return (
    <div className="home">
        <h1>All Songs</h1>
        {tracks &&<div className="tracks">
            {
                tracks.map((element)=>{
                    return(
                        <div className="track" >
                            <img src={element.track.album.images[1].url} alt="bg" />
                            <h3>{element.track.name}</h3>
                            <audio src={element.track.preview_url} controls></audio>
                            <a href={element.track.external_urls.spotify}>listen    on spotify</a>
                        </div>
                    )
                })
            }
        </div>}
    </div>  );
}
export default Home;