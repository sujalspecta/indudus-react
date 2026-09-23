
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div className="video-btn" onClick={() => setIsOpen(true)}>
        <i className="fi flaticon-play"></i>
      </div>

      <VideoModal
        isOpen={isOpen}
        videoId="GWUi86VUsFo?si=TFi1qzBHkk3QH5ch"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default VideoSection;