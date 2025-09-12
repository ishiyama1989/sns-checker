import { SNSPlatform } from '../types'

interface SNSOverlayProps {
  platform: SNSPlatform
  showSafeZone?: boolean
}

export default function SNSOverlay({ platform, showSafeZone = false }: SNSOverlayProps) {
  const renderTikTokOverlay = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* 右側のアクションボタン */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
        {/* プロフィール画像 */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-bold">+</span>
          </div>
        </div>
        
        {/* いいねボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">127K</span>
        </div>
        
        {/* コメントボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">8,234</span>
        </div>
        
        {/* お気に入りボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">2,891</span>
        </div>
        
        {/* シェアボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">1,456</span>
        </div>
        
        {/* 音楽アイコン（回転） */}
        <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-full border-2 border-white animate-spin flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
      </div>
      
      {/* 下部の情報エリア */}
      <div className="absolute bottom-4 left-4 right-20">
        <div className="text-white space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold text-sm drop-shadow-lg">@username</span>
          </div>
          <div className="text-sm drop-shadow-lg">
            <p className="mb-1">動画の説明文がここに表示されます ✨</p>
            <p className="text-xs opacity-80">#ハッシュタグ #TikTok #おすすめ</p>
          </div>
          <div className="flex items-center space-x-2 text-xs opacity-80">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <span>オリジナル楽曲 - アーティスト名</span>
          </div>
        </div>
      </div>
      
      {/* セーフゾーン表示 */}
      {showSafeZone && platform.id === 'tiktok' && (
        <div 
          className="absolute bg-pink-500/20 border-2 border-pink-400 border-opacity-60 rounded-lg backdrop-blur-sm"
          style={{
            top: `${platform.safeZone.top}px`,
            bottom: `${platform.safeZone.bottom}px`,
            left: `${platform.safeZone.left}px`,
            right: `${platform.safeZone.right}px`,
          }}
        >
          <div className="absolute top-2 left-2 text-white text-xs font-medium bg-pink-600/80 px-2 py-1 rounded-full">
            TikTok セーフゾーン
          </div>
        </div>
      )}
    </div>
  )

  const renderInstagramOverlay = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* 右側の縦並びボタン（Instagram 2024仕様） */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col space-y-6">
        {/* プロフィール画像 */}
        <div className="relative">
          <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full p-0.5 shadow-lg">
            <div className="w-full h-full bg-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-bold">+</span>
          </div>
        </div>
        
        {/* いいねボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-11 h-11 flex items-center justify-center">
            <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">42.1K</span>
        </div>
        
        {/* コメントボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-11 h-11 flex items-center justify-center">
            <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">1,234</span>
        </div>
        
        {/* シェアボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-11 h-11 flex items-center justify-center">
            <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">567</span>
        </div>
        
        {/* その他のメニュー */}
        <div className="flex flex-col items-center">
          <div className="w-11 h-11 flex items-center justify-center">
            <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* 下部左の投稿情報 */}
      <div className="absolute bottom-4 left-4 right-16">
        <div className="text-white space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full p-0.5">
              <div className="w-full h-full bg-gray-600 rounded-full"></div>
            </div>
            <span className="text-white text-sm font-semibold drop-shadow-lg">username</span>
          </div>
          <div className="text-sm drop-shadow-lg">
            <p className="mb-1">✨ 投稿の説明文がここに表示されます</p>
            <p className="text-xs opacity-80">#ハッシュタグ #Instagram #Reels</p>
          </div>
          <div className="flex items-center space-x-2 text-xs opacity-80">
            <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <span>オリジナル音源 • username</span>
          </div>
        </div>
      </div>
      
      {/* セーフゾーン表示 */}
      {showSafeZone && platform.id === 'instagram' && (
        <div 
          className="absolute bg-gradient-to-r from-pink-500/20 to-orange-500/20 border-2 border-pink-400 border-opacity-60 rounded-lg backdrop-blur-sm"
          style={{
            top: `${platform.safeZone.top}px`,
            bottom: `${platform.safeZone.bottom}px`,
            left: `${platform.safeZone.left}px`,
            right: `${platform.safeZone.right}px`,
          }}
        >
          <div className="absolute top-2 left-2 text-white text-xs font-medium bg-pink-500/80 px-2 py-1 rounded-full">
            Instagram セーフゾーン
          </div>
        </div>
      )}
    </div>
  )

  const renderYouTubeOverlay = () => (
    <div className="absolute inset-0 pointer-events-none">
      {/* 右側のアクションボタン */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col space-y-5">
        {/* いいねボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">45K</span>
        </div>
        
        {/* よくないねボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">1.2K</span>
        </div>
        
        {/* コメントボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">2.7K</span>
        </div>
        
        {/* シェアボタン */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </div>
          <span className="text-white text-xs font-medium drop-shadow-lg">891</span>
        </div>
        
        {/* その他のメニュー */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
        </div>
        
        {/* チャンネル画像 */}
        <div className="w-10 h-10 bg-red-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
      </div>
      
      {/* 下部の動画情報 */}
      <div className="absolute bottom-16 left-4 right-20">
        <div className="text-white space-y-2">
          <div className="text-sm font-semibold drop-shadow-lg">
            面白い動画のタイトルがここに表示されます！🔥
          </div>
          <div className="text-xs opacity-90 drop-shadow-lg">
            123,456 回視聴 • 2日前
          </div>
          <div className="text-xs opacity-80 drop-shadow-lg">
            #ハッシュタグ #YouTube #Shorts #面白い
          </div>
        </div>
      </div>
      
      {/* チャンネル情報 */}
      <div className="absolute bottom-4 left-4 right-20">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <span className="text-sm font-medium drop-shadow-lg">チャンネル名</span>
          <span className="text-xs opacity-80">• 登録者数 12.3万人</span>
        </div>
      </div>

      {/* セーフゾーン表示 */}
      {showSafeZone && platform.id === 'youtube' && (
        <div 
          className="absolute bg-red-500/20 border-2 border-red-400 border-opacity-60 rounded-lg backdrop-blur-sm"
          style={{
            top: `${platform.safeZone.top}px`,
            bottom: `${platform.safeZone.bottom}px`,
            left: `${platform.safeZone.left}px`,
            right: `${platform.safeZone.right}px`,
          }}
        >
          <div className="absolute top-2 left-2 text-white text-xs font-medium bg-red-600/80 px-2 py-1 rounded-full">
            YouTube セーフゾーン
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div>
      {platform.id === 'tiktok' && renderTikTokOverlay()}
      {platform.id === 'instagram' && renderInstagramOverlay()}
      {platform.id === 'youtube' && renderYouTubeOverlay()}
    </div>
  )
}