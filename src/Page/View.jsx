import React, { useEffect, useState } from "react";
import axios from "axios";
import Video from "../components/Video";

function View() {
  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    async function getData() {
      const Data = await axios.get("http://localhost:8000/videos", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setVideoData(Data.data);
    }
    getData();
  }, []);
  console.log(videoData);
  return (
    <div>
      {videoData &&
        videoData.map((item) => {
          return <Video title={item.title} youtube_link={item.youtube_link} />;
        })}
    </div>
  );
}

export default View;
