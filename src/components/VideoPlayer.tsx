import { useRef, useState, useEffect } from 'react'
import { VideoFile, SNSPlatform } from '../types'
import SNSOverlay from './SNSOverlay'

interface VideoPlayerProps {
  videoFile: VideoFile
  platform: SNSPlatform
  showOverlay: boolean
  showSafeZone?: boolean
}

export default function VideoPlayer({ videoFile, platform, showOverlay, showSafeZone = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const [isInteracting, setIsInteracting] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setShowPlayButton(true)
      } else {
        videoRef.current.play()
        // 再生開始1秒後にボタンを隠す
        setTimeout(() => {
          setShowPlayButton(false)
        }, 1000)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleInteractionStart = () => {
    setIsInteracting(true)
  }

  const handleInteractionEnd = () => {
    setIsInteracting(false)
  }

  // 動画が停止したときにボタンを再表示
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePause = () => {
        setShowPlayButton(true)
      }
      
      video.addEventListener('pause', handlePause)
      return () => video.removeEventListener('pause', handlePause)
    }
  }, [])

  return (
    <div className="flex justify-center px-4">
      <div
        className="relative bg-black rounded-lg overflow-hidden w-full max-w-sm mx-auto"
        style={{ aspectRatio: '9/16', maxHeight: '80vh' }}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        <video
          ref={videoRef}
          src={videoFile.url}
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline
          preload="metadata"
        />

        {showOverlay && (
          <SNSOverlay platform={platform} showSafeZone={showSafeZone} />
        )}

        {/* 中央の再生/一時停止ボタン */}
        {(showPlayButton || (isPlaying && isInteracting)) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className={`bg-black bg-opacity-50 hover:bg-opacity-70 active:bg-opacity-80 rounded-full p-3 sm:p-4 transition-all transform hover:scale-110 active:scale-95 touch-manipulation ${
                isPlaying && isInteracting ? 'opacity-90' : 'opacity-100'
              }`}
            >
              {isPlaying ? (
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        )}

        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black bg-opacity-50 text-white px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm">
          {platform.name}
        </div>
      </div>
    </div>
  )
}