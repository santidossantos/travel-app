export function VideoBanner() {
  return (
    <video
      className="banner-video"
      autoPlay
      muted
      loop
      style={{ width: '100vw' }}
    >
      <source
        src="https://video.wixstatic.com/video/11062b_5be624e80e0d472dbbf0b01076a71f4b/720p/mp4/file.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  )
}
