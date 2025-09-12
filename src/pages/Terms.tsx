export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">利用規約</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 利用規約について</h2>
            <p className="text-gray-700 leading-relaxed">
              SNS Safety Zone Checker（以下「当サイト」）をご利用いただく際は、
              以下の利用規約（以下「本規約」）に同意していただく必要があります。
              本規約に同意いただけない場合は、当サイトのご利用をお控えください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. サービス内容</h2>
            <p className="text-gray-700">
              当サイトは、TikTok、Instagram Reels、YouTube Shortsに投稿する動画の
              セーフティーゾーン（UIに隠れない安全な領域）をチェックするためのツールを提供します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 利用条件</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">3.1 年齢制限</h3>
                <p className="text-gray-700">
                  13歳未満の方は当サイトをご利用いただけません。
                  18歳未満の方は保護者の同意を得てご利用ください。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">3.2 利用目的</h3>
                <p className="text-gray-700">
                  当サイトは個人的な利用目的でのみご利用いただけます。
                  商用利用や再配布は禁止されています。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 禁止行為</h2>
            <p className="text-gray-700 mb-4">当サイトの利用において、以下の行為を禁止します：</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>法令に違反する行為</li>
              <li>著作権を侵害するコンテンツのアップロード</li>
              <li>わいせつ、暴力的、差別的なコンテンツのアップロード</li>
              <li>サイトの運営を妨害する行為</li>
              <li>サイトのセキュリティを破る行為</li>
              <li>他のユーザーに迷惑をかける行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. 知的財産権</h2>
            <p className="text-gray-700">
              当サイトのデザイン、プログラム、コンテンツ等の知的財産権は当サイト運営者に帰属します。
              ユーザーがアップロードしたコンテンツの著作権は、それぞれのユーザーに帰属します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. 免責事項</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">6.1 サービスの利用</h3>
                <p className="text-gray-700">
                  当サイトの利用は、ユーザーの責任において行ってください。
                  当サイトのご利用により生じた損害については、当サイトは一切の責任を負いません。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">6.2 情報の正確性</h3>
                <p className="text-gray-700">
                  当サイトで提供する情報の正確性については最善を尽くしておりますが、
                  完全性や正確性を保証するものではありません。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. サービスの変更・停止</h2>
            <p className="text-gray-700">
              当サイトは、事前の予告なくサービス内容の変更や停止を行う場合があります。
              これによりユーザーに生じた損害について、当サイトは責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibond text-gray-800 mb-4">8. 利用規約の変更</h2>
            <p className="text-gray-700">
              当サイトは、必要に応じて本利用規約を変更することがあります。
              変更した場合は、当サイト上に掲載いたします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. 準拠法・管轄</h2>
            <p className="text-gray-700">
              本利用規約は日本法に準拠します。当サイトに関する紛争については、
              当サイト運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
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