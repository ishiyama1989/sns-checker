export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">プライバシーポリシー</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 個人情報の取り扱いについて</h2>
            <p className="text-gray-700 leading-relaxed">
              SNS Safety Zone Checker（以下「当サイト」）では、ユーザーのプライバシーを尊重し、
              個人情報の保護に努めています。本プライバシーポリシーは、当サイトがどのような個人情報を
              収集し、どのように利用するかを説明するものです。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. 収集する情報</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 動画ファイル</h3>
                <p className="text-gray-700">
                  当サイトにアップロードされた動画ファイルは、ブラウザ内でのみ処理され、
                  サーバーに保存されることはありません。動画ファイルはページを離れると完全に削除されます。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 アクセスログ</h3>
                <p className="text-gray-700">
                  サイトの改善のため、Google Analyticsを使用してアクセス統計を収集する場合があります。
                  これには IP アドレス、ブラウザの種類、アクセス時間等が含まれます。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 情報の利用目的</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>当サイトのサービス提供</li>
              <li>サイトの改善・最適化</li>
              <li>利用統計の作成（個人を特定しない形での利用）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 第三者への提供</h2>
            <p className="text-gray-700">
              当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookie（クッキー）について</h2>
            <p className="text-gray-700">
              当サイトでは、サービスの向上のためCookieを使用する場合があります。
              Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Google AdSense について</h2>
            <p className="text-gray-700">
              当サイトでは Google AdSense を利用しており、広告配信のためにCookieを使用しています。
              詳細は <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Googleのプライバシーポリシー</a> をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. プライバシーポリシーの変更</h2>
            <p className="text-gray-700">
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。
              変更した場合は、当サイト上に掲載いたします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. お問い合わせ</h2>
            <p className="text-gray-700">
              本プライバシーポリシーに関するお問い合わせは、
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">お問い合わせページ</a> からご連絡ください。
            </p>
          </section>

          <div className="border-t pt-8 text-gray-600 text-sm">
            <p>制定日：2024年1月1日</p>
            <p>最終更新日：2024年1月1日</p>
          </div>
        </div>
      </div>
    </div>
  )
}