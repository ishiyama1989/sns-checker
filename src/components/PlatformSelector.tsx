import { SNSPlatform } from '../types'

interface PlatformSelectorProps {
  platforms: SNSPlatform[]
  selectedPlatform: SNSPlatform
  onPlatformChange: (platform: SNSPlatform) => void
}

export default function PlatformSelector({ 
  platforms, 
  selectedPlatform, 
  onPlatformChange 
}: PlatformSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
      {platforms.map((platform) => (
        <button
          key={platform.id}
          onClick={() => onPlatformChange(platform)}
          className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 touch-manipulation ${
            selectedPlatform.id === platform.id
              ? 'bg-blue-500 text-white shadow-lg transform scale-105'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow-md active:bg-gray-100'
          }`}
        >
          {platform.name}
        </button>
      ))}
    </div>
  )
}