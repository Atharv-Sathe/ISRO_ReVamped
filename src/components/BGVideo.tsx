import { useState } from "react";
import hero from "/video1.mp4";
import MRM_5106 from "../assets/images/MRM_5106_50.webp";
import { cn } from "../utils/cn";
export default function BGVideo({
  className,
  ...props
}: {
  className?: string;
}) {
  const [muted, setMuted] = useState(true);
  return (
    <div className="relative">
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-4 right-4 z-10 bg-white text-black px-4 py-2 rounded-lg"
      >
        {!muted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        )}
      </button>
      <img
        src={MRM_5106}
        alt="ISRO"
        className="absolute top-0 left-0 w-full h-screen object-cover filter-none -z-10"
      />
      <video
        autoPlay
        playsInline
        muted={muted}
        loop
        id="myVideo"
        className={cn(
          "top-0 left-0 w-full h-screen z-0 object-cover hidden lg:block",
          className
        )}
        {...props}
      >
        <source src={hero} type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
      <div
        id="black-overlay"
        className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30"
      >
      </div>
    </div>
  );
}
