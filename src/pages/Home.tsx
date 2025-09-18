import { useState } from 'react'
import { SNS_PLATFORMS } from '../constants'
import { VideoFile, SNSPlatform } from '../types'
import VideoUploader from '../components/VideoUploader'
import VideoPlayer from '../components/VideoPlayer'
import PlatformSelector from '../components/PlatformSelector'

export default function Home() {
  const [videoFile, setVideoFile] = useState<VideoFile | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<SNSPlatform>(SNS_PLATFORMS[0])
  const [showOverlay, setShowOverlay] = useState(true)
  const [showSafeZone, setShowSafeZone] = useState(false)

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800 leading-tight">
        SNS動画セーフティーゾーンチェッカー
      </h1>

      <div className="mb-4 sm:mb-6">
        <PlatformSelector
          platforms={SNS_PLATFORMS}
          selectedPlatform={selectedPlatform}
          onPlatformChange={setSelectedPlatform}
        />
      </div>

      {!videoFile ? (
        <VideoUploader onVideoUpload={setVideoFile} />
      ) : (
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <button
              onClick={() => setVideoFile(null)}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-500 text-white rounded text-sm sm:text-base hover:bg-gray-600 transition-colors order-last sm:order-first"
            >
              別の動画を選択
            </button>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => setShowOverlay(!showOverlay)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded text-xs sm:text-sm transition-colors ${
                  showOverlay
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {showOverlay ? 'オーバーレイを隠す' : 'オーバーレイを表示'}
              </button>
              <button
                onClick={() => setShowSafeZone(!showSafeZone)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded text-xs sm:text-sm transition-colors ${
                  showSafeZone
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {showSafeZone ? 'セーフゾーンを隠す' : 'セーフゾーンを表示'}
              </button>
            </div>
          </div>
          
          <VideoPlayer
            videoFile={videoFile}
            platform={selectedPlatform}
            showOverlay={showOverlay}
            showSafeZone={showSafeZone}
          />
        </div>
      )}
    </div>
  )
}