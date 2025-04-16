'use client'

import YouTube from 'react-youtube'

export default function VideoSection() {
  return (
    <div className="px-4 md:px-8 max-w-6xl mx-auto mb-12">
      <div className="relative">
        <div className="w-full aspect-video">
          <YouTube
            videoId="NU0U5zGC4m8"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                controls: 1,
                iv_load_policy: 3,
                fs: 1,
                playsinline: 1,
              },
            }}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
} 