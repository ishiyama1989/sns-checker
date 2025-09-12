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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        SNS動画セーフティーゾーンチェッカー
      </h1>
      
      <div className="mb-6">
        <PlatformSelector 
          platforms={SNS_PLATFORMS}
          selectedPlatform={selectedPlatform}
          onPlatformChange={setSelectedPlatform}
        />
      </div>

      {!videoFile ? (
        <VideoUploader onVideoUpload={setVideoFile} />
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setVideoFile(null)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              別の動画を選択
            </button>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowOverlay(!showOverlay)}
                className={`px-4 py-2 rounded transition-colors ${
                  showOverlay 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {showOverlay ? 'オーバーレイを隠す' : 'オーバーレイを表示'}
              </button>
              <button
                onClick={() => setShowSafeZone(!showSafeZone)}
                className={`px-4 py-2 rounded transition-colors ${
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