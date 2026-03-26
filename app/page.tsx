'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'contact'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('top')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Header */}
      <header style={{
        background: 'var(--primary)',
        padding: '0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(0,0,0,0.4)'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 24px 0' }}>
          <div style={{ textAlign: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(200,169,110,0.2)' }}>
            <p style={{ color: 'var(--accent-light)', fontSize: '11px', letterSpacing: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
              Specialty Coffee
            </p>
            <h1 style={{ color: 'var(--accent)', fontSize: '22px', letterSpacing: '2px', fontWeight: '700' }}>
              ELEPHANT FACTORY COFFEE
            </h1>
            <p style={{ color: 'var(--accent-light)', fontSize: '12px', marginTop: '4px', letterSpacing: '1px' }}>
              京都・河原町の隠れ家コーヒーショップ
            </p>
          </div>

          {/* Tabs */}
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '0' }}>
            {([
              { id: 'top', label: 'トップ' },
              { id: 'menu', label: 'メニュー' },
              { id: 'info', label: '店舗情報' },
              { id: 'contact', label: 'お問い合わせ' },
            ] as { id: Tab; label: string }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '2px solid var(--accent)' : '2px solid transparent',
                  color: activeTab === tab.id ? 'var(--accent)' : 'var(--accent-light)',
                  padding: '14px 20px',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'Noto Sans JP, sans-serif',
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px 60px' }}>

        {/* TOP TAB */}
        {activeTab === 'top' && (
          <div>
            {/* Hero */}
            <div style={{
              background: 'var(--primary-mid)',
              margin: '40px 0 48px',
              borderRadius: '4px',
              padding: '64px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(200,169,110,0.2)',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at center, rgba(200,169,110,0.08) 0%, transparent 70%)',
              }} />
              <p style={{ color: 'var(--accent)', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
                Est. in Kyoto
              </p>
              <h2 style={{ color: 'var(--accent-light)', fontSize: '28px', lineHeight: '1.6', marginBottom: '20px' }}>
                河原町の裏路地に佇む<br />
                <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>物語のあるコーヒー</span>
              </h2>
              <p style={{ color: '#A89070', fontSize: '14px', lineHeight: '2', maxWidth: '480px', margin: '0 auto 32px' }}>
                村上春樹の作品にちなんだ店名が示すように、
                ここは日常を少し離れるための場所。
                丁寧に淹れたスペシャルティコーヒーとともに、
                アンティーク家具に囲まれた静かなひとときを。
              </p>
              <button
                onClick={() => setActiveTab('menu')}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                  padding: '12px 32px',
                  fontSize: '13px',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.2s',
                  textTransform: 'uppercase',
                }}
              >
                Menu を見る
              </button>
            </div>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
              {[
                {
                  icon: '☕',
                  title: 'スペシャルティコーヒー',
                  desc: '厳選された豆を丁寧に焙煎。産地の個性を活かした一杯をお楽しみください。'
                },
                {
                  icon: '🏛️',
                  title: 'アンティークな空間',
                  desc: '古書や年代物の家具が醸し出す独特の雰囲気。時間を忘れてお過ごしいただけます。'
                },
                {
                  icon: '📚',
                  title: '文学とコーヒー',
                  desc: '村上春樹の作品からインスパイアされた、物語を感じる飲み物とスイーツ。'
                },
              ].map((f) => (
                <div key={f.title} style={{
                  background: 'var(--primary-mid)',
                  border: '1px solid rgba(200,169,110,0.15)',
                  borderRadius: '4px',
                  padding: '32px 24px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{f.icon}</div>
                  <h3 style={{ color: 'var(--accent)', fontSize: '15px', marginBottom: '12px', fontWeight: '600' }}>{f.title}</h3>
                  <p style={{ color: '#A89070', fontSize: '13px', lineHeight: '1.9' }}>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Hours Quick */}
            <div style={{
              background: 'var(--primary)',
              border: '1px solid rgba(200,169,110,0.2)',
              borderRadius: '4px',
              padding: '32px 40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
            }}>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Hours</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '16px' }}>12:00 〜 22:00</p>
                <p style={{ color: '#7A6A54', fontSize: '13px', marginTop: '4px' }}>不定休（Instagramにてお知らせ）</p>
              </div>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Location</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '14px' }}>京都市中京区蛸薬師通東入ル</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '14px' }}>備前島町309-4 HKビル2F</p>
              </div>
              <div>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</p>
                <p style={{ color: 'var(--accent-light)', fontSize: '16px' }}>075-212-1808</p>
              </div>
            </div>
          </div>
        )}

        {/* MENU TAB */}
        {activeTab === 'menu' && (
          <div style={{ paddingTop: '40px' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '20px', textAlign: 'center', letterSpacing: '3px', marginBottom: '8px', textTransform: 'uppercase' }}>Menu</h2>
            <p style={{ color: '#7A6A54', textAlign: 'center', fontSize: '13px', marginBottom: '40px' }}>メニュー</p>

            {[
              {
                category: 'Hot Coffee',
                items: [
                  { name: 'エスプレッソ', price: '¥550', desc: '深煎り豆の濃厚な一杯' },
                  { name: 'カフェラテ', price: '¥650', desc: 'まろやかなミルクとのハーモニー' },
                  { name: 'カプチーノ', price: '¥650', desc: 'フォームミルクをたっぷりと' },
                  { name: 'ドリップコーヒー', price: '¥600', desc: '本日の豆をハンドドリップで' },
                  { name: 'アメリカーノ', price: '¥580', desc: 'すっきりとした飲み口' },
                ]
              },
              {
                category: 'Iced Coffee',
                items: [
                  { name: 'アイスラテ', price: '¥680', desc: '氷でゆっくり冷やした濃厚ラテ' },
                  { name: 'アイスドリップ', price: '¥630', desc: '水出し12時間の繊細な味わい' },
                  { name: 'コーヒーフロート', price: '¥750', desc: 'バニラアイスを浮かべた夏の定番' },
                ]
              },
              {
                category: 'Other Drinks',
                items: [
                  { name: 'チャイラテ', price: '¥680', desc: 'スパイス香るホットチャイ' },
                  { name: 'ほうじ茶ラテ', price: '¥650', desc: '京都らしい和のラテ' },
                  { name: 'レモネード', price: '¥620', desc: '自家製シロップのさっぱりレモン' },
                ]
              },
              {
                category: 'Food & Sweets',
                items: [
                  { name: 'バスクチーズケーキ', price: '¥580', desc: 'とろけるような濃厚チーズケーキ' },
                  { name: 'クロワッサン', price: '¥450', desc: '毎朝仕入れるサクサクのクロワッサン' },
                  { name: 'スコーン', price: '¥480', desc: 'クロテッドクリーム添え' },
                  { name: 'アフォガート', price: '¥680', desc: 'エスプレッソとアイスの絶妙な組み合わせ' },
                ]
              },
            ].map((section) => (
              <div key={section.category} style={{ marginBottom: '40px' }}>
                <h3 style={{
                  color: 'var(--accent)',
                  fontSize: '14px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid rgba(200,169,110,0.3)',
                  paddingBottom: '12px',
                  marginBottom: '20px',
                }}>
                  {section.category}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {section.items.map((item) => (
                    <div key={item.name} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: '16px 20px',
                      background: 'var(--primary-mid)',
                      border: '1px solid rgba(200,169,110,0.1)',
                      borderRadius: '3px',
                    }}>
                      <div>
                        <p style={{ color: 'var(--accent-light)', fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>{item.name}</p>
                        <p style={{ color: '#7A6A54', fontSize: '12px' }}>{item.desc}</p>
                      </div>
                      <p style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '600', marginLeft: '16px', whiteSpace: 'nowrap' }}>{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p style={{ color: '#7A6A54', fontSize: '12px', textAlign: 'center', marginTop: '8px' }}>
              ※ 価格は税込み表示です。季節によりメニューが変わる場合がございます。
            </p>
          </div>
        )}

        {/* INFO TAB */}
        {activeTab === 'info' && (
          <div style={{ paddingTop: '40px' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '20px', textAlign: 'center', letterSpacing: '3px', marginBottom: '8px', textTransform: 'uppercase' }}>Shop Info</h2>
            <p style={{ color: '#7A6A54', textAlign: 'center', fontSize: '13px', marginBottom: '40px' }}>店舗情報・アクセス</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
              <div style={{
                background: 'var(--primary-mid)',
                border: '1px solid rgba(200,169,110,0.15)',
                borderRadius: '4px',
                padding: '32px',
              }}>
                <h3 style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>基本情報</h3>
                {[
                  { label: '店名', value: 'ELEPHANT FACTORY COFFEE' },
                  { label: '電話番号', value: '075-212-1808' },
                  { label: '住所', value: '京都市中京区蛸薬師通東入ル\n備前島町309-4 HKビル2F' },
                  { label: '営業時間', value: '12:00 〜 22:00' },
                  { label: '定休日', value: '不定休\n（Instagramにてお知らせ）' },
                  { label: 'Instagram', value: '@elephantfactorycoffee' },
                ].map((row) => (
                  <div key={row.label} style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    borderBottom: '1px solid rgba(200,169,110,0.1)',
                  }}>
                    <p style={{ color: 'var(--accent)', fontSize: '12px', minWidth: '80px', paddingTop: '2px' }}>{row.label}</p>
                    <p style={{ color: 'var(--accent-light)', fontSize: '13px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{row.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <div style={{
                  background: 'var(--primary-mid)',
                  border: '1px solid rgba(200,169,110,0.15)',
                  borderRadius: '4px',
                  padding: '32px',
                  marginBottom: '24px',
                }}>
                  <h3 style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>アクセス</h3>
                  {[
                    { icon: '🚇', text: '阪急京都線「河原町駅」徒歩5分' },
                    { icon: '🚃', text: '京阪「祇園四条駅」徒歩8分' },
                    { icon: '🚌', text: '市バス「四条河原町」バス停すぐ' },
                  ].map((item) => (
                    <div key={item.text} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '14px',
                    }}>
                      <span style={{ fontSize: '18px' }}>{item.icon}</span>
                      <p style={{ color: 'var(--accent-light)', fontSize: '13px', lineHeight: '1.7' }}>{item.text}</p>
                    </div>
                  ))}
                </div>

                <div style={{
                  background: 'var(--primary)',
                  border: '1px solid rgba(200,169,110,0.2)',
                  borderRadius: '4px',
                  padding: '24px 32px',
                }}>
                  <h3 style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Google マップで見る</h3>
                  <a
                    href="https://maps.google.com/?q=ELEPHANT+FACTORY+COFFEE+京都"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                      padding: '10px 24px',
                      fontSize: '12px',
                      letterSpacing: '2px',
                      textDecoration: 'none',
                      borderRadius: '2px',
                      textTransform: 'uppercase',
                    }}
                  >
                    地図を開く
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === 'contact' && (
          <div style={{ paddingTop: '40px', maxWidth: '560px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '20px', textAlign: 'center', letterSpacing: '3px', marginBottom: '8px', textTransform: 'uppercase' }}>Contact</h2>
            <p style={{ color: '#7A6A54', textAlign: 'center', fontSize: '13px', marginBottom: '40px' }}>お問い合わせ</p>

            <div style={{
              background: 'var(--primary-mid)',
              border: '1px solid rgba(200,169,110,0.15)',
              borderRadius: '4px',
              padding: '40px',
              marginBottom: '32px',
            }}>
              <p style={{ color: 'var(--accent-light)', fontSize: '14px', lineHeight: '2', marginBottom: '28px', textAlign: 'center' }}>
                ご不明な点やご質問がございましたら、<br />
                お電話またはInstagramよりお気軽にお問い合わせください。
              </p>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>Phone</p>
                <a href="tel:075-212-1808" style={{ color: 'var(--accent-light)', fontSize: '24px', textDecoration: 'none', letterSpacing: '2px' }}>
                  075-212-1808
                </a>
                <p style={{ color: '#7A6A54', fontSize: '12px', marginTop: '6px' }}>受付時間：12:00 〜 22:00（不定休）</p>
              </div>

              <div style={{ borderTop: '1px solid rgba(200,169,110,0.15)', paddingTop: '24px', textAlign: 'center' }}>
                <p style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>Instagram</p>
                <a
                  href="https://www.instagram.com/elephantfactorycoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: 'transparent',
                    border: '1px solid var(--accent)',
                    color: 'var(--accent)',
                    padding: '12px 32px',
                    fontSize: '13px',
                    letterSpacing: '2px',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  Instagram を開く
                </a>
              </div>
            </div>

            <div style={{
              background: 'var(--primary)',
              border: '1px solid rgba(200,169,110,0.2)',
              borderRadius: '4px',
              padding: '24px 32px',
              textAlign: 'center',
            }}>
              <p style={{ color: '#7A6A54', fontSize: '13px', lineHeight: '2' }}>
                〒604-8072<br />
                京都市中京区蛸薬師通東入ル備前島町309-4 HKビル2F<br />
                ELEPHANT FACTORY COFFEE
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--primary)',
        borderTop: '1px solid rgba(200,169,110,0.15)',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <p style={{ color: 'var(--accent)', fontSize: '14px', letterSpacing: '2px', marginBottom: '8px' }}>ELEPHANT FACTORY COFFEE</p>
        <p style={{ color: '#7A6A54', fontSize: '12px' }}>© 2024 Elephant Factory Coffee. All rights reserved.</p>
      </footer>
    </div>
  )
}
