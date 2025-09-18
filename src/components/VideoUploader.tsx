import { useCallback } from 'react'
import { VideoFile } from '../types'

interface VideoUploaderProps {
  onVideoUpload: (video: VideoFile) => void
}

export default function VideoUploader({ onVideoUpload }: VideoUploaderProps) {
  const handleFileChange = useCallback((file: File) => {
    if (file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file)
      onVideoUpload({ file, url })
    } else {
      alert('動画ファイルを選択してください')
    }
  }, [onVideoUpload])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)
    const videoFile = files.find(file => file.type.startsWith('video/'))
    if (videoFile) {
      handleFileChange(videoFile)
    }
  }, [handleFileChange])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileChange(file)
    }
  }, [handleFileChange])

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex flex-col items-center justify-center w-full h-48 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex flex-col items-center justify-center pt-4 pb-5 sm:pt-5 sm:pb-6 px-4">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-xs sm:text-sm text-gray-500 text-center">
            <span className="font-semibold">クリックして動画をアップロード</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> または </span>
            <span className="sm:hidden">または </span>
            ドラッグ&ドロップ
          </p>
          <p className="text-xs text-gray-500 text-center">MP4, MOV, AVI (最大 100MB)</p>
        </div>
        <input
          type="file"
          accept="video/*"
          onChange={handleInputChange}
          className="hidden"
          id="video-upload"
        />
        <label
          htmlFor="video-upload"
          className="absolute inset-0 cursor-pointer"
        />
      </div>
    </div>
  )
}