export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">お問い合わせ</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">お問い合わせについて</h2>
            <p className="text-gray-700 leading-relaxed">
              SNS Safety Zone Checkerに関するご質問、ご意見、ご要望がございましたら、
              以下の方法でお気軽にお問い合わせください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">お問い合わせ方法</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-3">メールでのお問い合わせ</h3>
                <p className="text-gray-700 mb-2">下記のメールアドレスまでご連絡ください：</p>
                <p className="text-blue-600 font-medium">support@sns-safety-checker.com</p>
                <p className="text-gray-600 text-sm mt-3">
                  ※お返事まで2-3営業日いただく場合があります。予めご了承ください。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-800 mb-3">GitHubでの報告</h3>
                <p className="text-gray-700 mb-2">バグ報告や機能要望は以下のGitHubリポジトリでも受け付けています：</p>
                <a 
                  href="https://github.com/ishiyama1989/sns-checker/issues" 
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">お問い合わせの種類</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">技術的なご質問</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>使い方がわからない</li>
                  <li>動画がアップロードできない</li>
                  <li>セーフティーゾーンが正しく表示されない</li>
                  <li>対応ブラウザについて</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">ご要望・ご意見</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>新しいプラットフォームの対応</li>
                  <li>機能の改善提案</li>
                  <li>UIの改善要望</li>
                  <li>その他のご意見</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">よくある質問</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Q: 動画ファイルはサーバーに保存されますか？</h3>
                <p className="text-gray-700">
                  A: いいえ。アップロードされた動画はブラウザ内でのみ処理され、
                  サーバーに送信されることはありません。ページを離れると完全に削除されます。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Q: 対応している動画形式は？</h3>
                <p className="text-gray-700">
                  A: MP4、MOV、AVI、WebMなど、主要な動画形式に対応しています。
                  ブラウザでサポートされている形式であれば再生可能です。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Q: 利用料金はかかりますか？</h3>
                <p className="text-gray-700">
                  A: 当サイトは完全無料でご利用いただけます。
                  アカウント登録も不要です。
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">お問い合わせ時のお願い</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>お使いのブラウザとバージョンをお知らせください</li>
              <li>問題が発生した際の操作手順を詳しくお教えください</li>
              <li>エラーメッセージが表示された場合は、その内容もお知らせください</li>
              <li>スクリーンショットがあると問題解決に役立ちます</li>
            </ul>
          </section>

          <div className="border-t pt-8 text-gray-600 text-sm">
            <p>最終更新日：2024年1月1日</p>
          </div>
        </div>
      </div>
    </div>
  )
}