import { Box, Typography } from '@mui/material'

export function VideoBanner() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '35rem',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        className="banner-video"
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source
          src="https://video.wixstatic.com/video/11062b_5be624e80e0d472dbbf0b01076a71f4b/720p/mp4/file.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Box>
        <Typography
          variant="h1"
          color="white"
          sx={{
            fontFamily: 'TT Tsars A Trial',
            textAlign: 'center',
            fontSize: '8.5rem',
            fontWeight: 500,
          }}
        >
          TRIP FINDER
        </Typography>
        <Typography
          variant="h6"
          color="white"
          sx={{
            textAlign: 'center',
          }}
        >
          Tu siguiente aventura al alcance de un click
        </Typography>
      </Box>
    </Box>
  )
}
