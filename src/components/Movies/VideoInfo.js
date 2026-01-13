const VideoInfo = ({title, desc}) => {
    return ( 
    <div className="-mt-60">
     <h1 className="text-2xl font-bold text-white ml-20 mt-20">{title}</h1>
     <p className="text-sm text-white ml-20 w-4/12">{desc}</p>
     <div className="flex">
        <button className="text-white mt-10 ml-20 p-3 border-red-600 rounded-sm border-2 bg-red-300 hover:bg-opacity-5">Play</button>
        <button className="text-white mt-10 ml-20 p-3 border-red-600 rounded-sm border-2">More Info</button>
     </div>
    </div>);
}
 
export default VideoInfo;