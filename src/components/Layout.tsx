import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* ヘッダーナビゲーション */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
              SNS Safety Zone Checker
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                ホーム
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                このサイトについて
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1">
        {children}
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SNS Safety Zone Checker</h3>
              <p className="text-gray-300 text-sm">
                TikTok、Instagram Reels、YouTube Shortsの動画投稿前に、
                セーフティーゾーンを確認できるツールです。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    このサイトについて
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">法的情報</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                    利用規約
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 SNS Safety Zone Checker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}