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
  const [isHovering, setIsHovering] = useState(false)

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
    <div className="flex justify-center">
      <div 
        className="relative bg-black rounded-lg overflow-hidden" 
        style={{ width: '405px', height: '720px' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <video
          ref={videoRef}
          src={videoFile.url}
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {showOverlay && (
          <SNSOverlay platform={platform} showSafeZone={showSafeZone} />
        )}
        
        {/* 中央の再生/一時停止ボタン */}
        {(showPlayButton || (isPlaying && isHovering)) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className={`bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-4 transition-all transform hover:scale-110 ${
                isPlaying && isHovering ? 'opacity-90' : 'opacity-100'
              }`}
            >
              {isPlaying ? (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
        )}

        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
          {platform.name}
        </div>
      </div>
    </div>
  )
}