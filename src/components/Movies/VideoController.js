import useGetVideoData from "../../hooks/useGetVideoData";
const VideoController = ({movieId}) => {
  const videoData = useGetVideoData(movieId);
  const filterTrailer = videoData?.results?.find((data) => data.type === "Trailer");
  return (
    <div className="mx-50 z-0">
    <iframe
      height="500"
      className="w-screen"
      style={{paddingTop:"5px"}}
      src={`https://www.youtube.com/embed/${filterTrailer?.key}?si=7FCIaAeCP0pLqG59&autoplay=1&mute=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    </div>
  );
};

export default VideoController;
