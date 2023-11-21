import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
function Video({ title, youtube_link }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
//   console.log("title:" + title + "youtube_link:" + youtube_link);
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    // Use ref.current to access the video element
    const video = videoRef.current;

    // Check if the video is paused before playing
    if (video && video.paused) {
      video.play().catch(error => console.error('Error playing video:', error));
    }

    // Cleanup function: pause the video when the component unmounts
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []); 
  return (
    <div>
      <Card
        className="flex"
        shadow="sm"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0">
          {/* If you have an image, you can uncomment and use the Image component */}
          {/* <Image
          shadow="sm"
          radius="lg"
          width="100%"
        //   alt={item.title}
          className="w-full object-cover h-[140px]"
        //   src={item.img}
        /> */}
        </CardBody>
        <CardFooter className="flex flex-col flex-wrap gap-3 text-small justify-between">
          <b className="text-lg font-bold">{title}</b>
          <p className="text-default-500">
            <video
              ref={videoRef}
              src={youtube_link} // Update with your video file path
              controls
            />
          </p>
          <Button onClick={togglePlay}
             color="primary" className="mt-2">
            {isPlaying ? "Pause" : "Play"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Video;
