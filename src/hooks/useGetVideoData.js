import { useEffect, useState } from "react";
import { api_options } from "../utils/constants";

const useGetVideoData = (movieId) => {
    const[bgVideoInfo, setBgVideoInfo] = useState();
    const fetchVideoData = async() => {
      const res = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", api_options)
      const jsonData = await res.json()
      setBgVideoInfo(jsonData)
    }
    useEffect(() => {
      fetchVideoData()
    },[])

  return bgVideoInfo;
} 

export default useGetVideoData