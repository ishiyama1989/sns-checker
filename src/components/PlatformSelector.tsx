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
    <div className="flex justify-center space-x-4">
      {platforms.map((platform) => (
        <button
          key={platform.id}
          onClick={() => onPlatformChange(platform)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedPlatform.id === platform.id
              ? 'bg-blue-500 text-white shadow-lg transform scale-105'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow-md'
          }`}
        >
          {platform.name}
        </button>
      ))}
    </div>
  )
}