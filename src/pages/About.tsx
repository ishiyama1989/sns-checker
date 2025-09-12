export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">このサイトについて</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">SNS Safety Zone Checker とは</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SNS Safety Zone Checkerは、TikTok、Instagram Reels、YouTube Shortsに投稿する動画の
              「セーフティーゾーン」を事前にチェックできる無料のWebツールです。
            </p>
            <p className="text-gray-700 leading-relaxed">
              セーフティーゾーンとは、各SNSプラットフォームのUI要素（いいねボタン、コメントボタン、
              シェアボタンなど）に隠れない安全な領域のことを指します。
              重要なテキストやオブジェクトがUIに隠れてしまわないよう、投稿前に確認することができます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">主な機能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📱 複数プラットフォーム対応</h3>
                <p className="text-gray-700">
                  TikTok、Instagram Reels、YouTube Shortsの3つの主要なショート動画プラットフォームに対応しています。
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🎥 リアルタイムプレビュー</h3>
                <p className="text-gray-700">
                  アップロードした動画に実際のUI要素をオーバーレイ表示し、
                  リアルタイムでセーフティーゾーンを確認できます。
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">🔒 プライバシー重視</h3>
                <p className="text-gray-700">
                  動画ファイルはブラウザ内でのみ処理され、
                  サーバーに送信されることはありません。完全にローカルで動作します。
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">💰 完全無料</h3>
                <p className="text-gray-700">
                  すべての機能を無料で利用できます。
                  アカウント登録やログインも不要です。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">使い方</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">プラットフォームを選択</h3>
                  <p className="text-gray-700">
                    TikTok、Instagram Reels、YouTube Shortsの中から、投稿予定のプラットフォームを選択します。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">動画をアップロード</h3>
                  <p className="text-gray-700">
                    チェックしたい動画ファイルをドラッグ&ドロップするか、ファイル選択ボタンからアップロードします。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">セーフティーゾーンを確認</h3>
                  <p className="text-gray-700">
                    プラットフォームのUI要素とセーフティーゾーンが動画上に表示されます。
                    重要な要素が隠れていないか確認できます。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">対応ブラウザ</h2>
            <p className="text-gray-700 mb-4">以下のブラウザで動作確認済みです：</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-medium">Chrome</div>
                <div className="text-sm text-gray-600">推奨</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🦊</div>
                <div className="font-medium">Firefox</div>
                <div className="text-sm text-gray-600">対応</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🧭</div>
                <div className="font-medium">Safari</div>
                <div className="text-sm text-gray-600">対応</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🌊</div>
                <div className="font-medium">Edge</div>
                <div className="text-sm text-gray-600">対応</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">技術仕様</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li><strong>フロントエンド:</strong> React 18 + TypeScript + Vite</li>
                <li><strong>スタイリング:</strong> Tailwind CSS</li>
                <li><strong>動画処理:</strong> HTML5 Video API</li>
                <li><strong>対応動画形式:</strong> MP4, MOV, AVI, WebM など</li>
                <li><strong>デプロイ:</strong> Vercel</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">開発者について</h2>
            <p className="text-gray-700 leading-relaxed">
              SNS Safety Zone Checkerは、コンテンツクリエイターの皆様により良い投稿体験を提供したいという想いから
              開発されました。動画制作において重要な要素が意図せずUIに隠れてしまう問題を解決し、
              より効果的なコンテンツ作成をサポートすることを目的としています。
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">ご意見・ご要望</h2>
            <p className="text-gray-700 mb-4">
              新機能のご要望や改善点などがございましたら、
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline mx-1">お問い合わせページ</a>
              からお気軽にご連絡ください。
            </p>
            <p className="text-gray-700">
              また、GitHubでのフィードバックも歓迎しています：
              <a 
                href="https://github.com/ishiyama1989/sns-checker" 
                className="text-blue-600 hover:text-blue-800 underline ml-1"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          </section>

          <div className="border-t pt-8 text-gray-600 text-sm">
            <p>最終更新日：2024年1月1日</p>
          </div>
        </div>
      </div>
    </div>
  )
}