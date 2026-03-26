'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'contact'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('top')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'top', label: 'トップ' },
    { id: 'menu', label: 'メニュー' },
    { id: 'info', label: '店舗情報' },
    { id: 'contact', label: 'お問い合わせ' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Header */}
      <header style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 20px' }}>
          <div className="site-header-inner">
            {/* Logo */}
            <div style={{ padding: '4px 0' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', letterSpacing: '2px', color: 'var(--primary)', fontWeight: '600', lineHeight: 1 }}>
                ELEPHANT FACTORY COFFEE
              </p>
              <p style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--text-light)', marginTop: '3px' }}>
                KYOTO · SPECIALTY COFFEE
              </p>
            </div>
            {/* Nav */}
            <nav className="site-nav">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '2px solid var(--accent)' : '2px solid transparent',
                    color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-light)',
                    padding: '20px 18px 18px',
                    fontSize: '12px',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    fontFamily: "'Noto Sans JP', sans-serif",
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="main-pad" style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* ── TOP ── */}
        {activeTab === 'top' && (
          <div>
            {/* Hero */}
            <div className="hero-grid" style={{
              margin: '48px 0 64px',
              background: 'var(--primary)',
              borderRadius: '2px',
              minHeight: '380px',
            }}>
              {/* Left — text */}
              <div className="hero-pad" style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--accent-light)', marginBottom: '20px', textTransform: 'uppercase' }}>
                  Est. in Kyoto · Specialty Coffee
                </p>
                <h2 className="hero-title" style={{ fontFamily: "'Zen Old Mincho', serif", lineHeight: '1.5', color: '#F4EFE6', marginBottom: '16px', fontWeight: '700' }}>
                  物語のある<br />一杯を。
                </h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '13px', color: 'var(--accent-light)', fontStyle: 'italic', marginBottom: '20px', letterSpacing: '1px' }}>
                  "A cup of coffee, a novel, and time to yourself."
                </p>
                <p style={{ color: 'rgba(244,239,230,0.6)', fontSize: '13px', lineHeight: '2', maxWidth: '320px' }}>
                  河原町の裏路地。アンティーク家具と古書に囲まれた静かな空間で、スペシャルティコーヒーをどうぞ。
                </p>
              </div>
              {/* Right — deco (hidden on mobile via CSS) */}
              <div className="hero-deco" style={{ background: 'var(--bg-section)', padding: '48px 32px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '32px', right: '32px', width: '100px', height: '100px', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.4 }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.25 }} />
                <p style={{ fontFamily: "'Zen Old Mincho', serif", fontSize: '72px', color: 'var(--border)', lineHeight: 1, marginBottom: '12px', fontWeight: '900' }}>☕</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: 'var(--primary-mid)', letterSpacing: '4px', fontWeight: '600' }}>ELEPHANT</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '12px', color: 'var(--text-light)', letterSpacing: '3px', marginTop: '4px' }}>FACTORY COFFEE</p>
              </div>
            </div>

            {/* 3 pillars */}
            <div className="grid-3" style={{ background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '2px', overflow: 'hidden', marginBottom: '64px' }}>
              {[
                { no: '01', title: 'Specialty Coffee', jp: 'スペシャルティコーヒー', desc: '産地・農園にこだわった豆を丁寧に焙煎。土地の個性が宿る一杯。' },
                { no: '02', title: 'Literary Atmosphere', jp: '文学的な空間', desc: '村上春樹の作品に着想を得た店名。本と物語に囲まれた隠れ家。' },
                { no: '03', title: 'Antique Interior', jp: 'アンティーク内装', desc: '年代物の家具と古書。京都の路地裏に佇む、時間を忘れる空間。' },
              ].map(item => (
                <div key={item.no} className="pillar-pad" style={{ background: 'var(--white)', padding: '36px 28px' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '14px' }}>{item.no}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: 'var(--primary)', lineHeight: '1.3', marginBottom: '6px', fontWeight: '600' }}>{item.title}</h3>
                  <p style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '1px', marginBottom: '12px' }}>{item.jp}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.9' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Info strip */}
            <div className="info-bar" style={{ background: 'var(--bg-section)', border: '1px solid var(--border)', borderRadius: '2px', padding: '28px 36px' }}>
              {[
                { label: 'Hours', value: '12:00 — 22:00', sub: '不定休（Instagramにてお知らせ）' },
                { label: 'Location', value: '京都市中京区蛸薬師通東入ル', sub: '備前島町309-4 HKビル2F' },
                { label: 'Phone', value: '075-212-1808', sub: '' },
              ].map(info => (
                <div key={info.label}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '10px', letterSpacing: '3px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '5px' }}>{info.label}</p>
                  <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '500' }}>{info.value}</p>
                  {info.sub && <p style={{ color: 'var(--text-light)', fontSize: '11px', marginTop: '2px' }}>{info.sub}</p>}
                </div>
              ))}
              <button onClick={() => setActiveTab('menu')} style={{ background: 'var(--accent)', border: 'none', color: 'var(--white)', padding: '11px 24px', fontSize: '12px', letterSpacing: '2px', cursor: 'pointer', borderRadius: '1px', fontFamily: "'Noto Sans JP', sans-serif", whiteSpace: 'nowrap' }}>
                メニューを見る →
              </button>
            </div>
          </div>
        )}

        {/* ── MENU ── */}
        {activeTab === 'menu' && (
          <div style={{ paddingTop: '48px' }}>
            <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '6px' }}>Menu</p>
              <h2 className="section-title" style={{ color: 'var(--primary)', fontWeight: '700' }}>メニュー</h2>
            </div>

            {[
              { category: 'Hot Coffee', items: [
                { name: 'エスプレッソ', price: '¥550', desc: '深煎り豆の濃厚な一杯' },
                { name: 'カフェラテ', price: '¥650', desc: 'まろやかなミルクとのハーモニー' },
                { name: 'カプチーノ', price: '¥650', desc: 'フォームミルクをたっぷりと' },
                { name: 'ドリップコーヒー', price: '¥600', desc: '本日の豆をハンドドリップで' },
                { name: 'アメリカーノ', price: '¥580', desc: 'すっきりとした飲み口' },
              ]},
              { category: 'Iced Coffee', items: [
                { name: 'アイスラテ', price: '¥680', desc: '氷でゆっくり冷やした濃厚ラテ' },
                { name: 'アイスドリップ', price: '¥630', desc: '水出し12時間の繊細な味わい' },
                { name: 'コーヒーフロート', price: '¥750', desc: 'バニラアイスを浮かべた夏の定番' },
              ]},
              { category: 'Other Drinks', items: [
                { name: 'チャイラテ', price: '¥680', desc: 'スパイス香るホットチャイ' },
                { name: 'ほうじ茶ラテ', price: '¥650', desc: '京都らしい和のラテ' },
                { name: 'レモネード', price: '¥620', desc: '自家製シロップのさっぱりレモン' },
              ]},
              { category: 'Food & Sweets', items: [
                { name: 'バスクチーズケーキ', price: '¥580', desc: 'とろけるような濃厚チーズケーキ' },
                { name: 'クロワッサン', price: '¥450', desc: '毎朝仕入れるサクサクのクロワッサン' },
                { name: 'スコーン', price: '¥480', desc: 'クロテッドクリーム添え' },
                { name: 'アフォガート', price: '¥680', desc: 'エスプレッソとアイスの絶妙な組み合わせ' },
              ]},
            ].map((section, si) => (
              <div key={section.category} style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '10px', letterSpacing: '2px', color: 'var(--accent)', minWidth: '20px' }}>
                    {String(si + 1).padStart(2, '0')}
                  </p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: 'var(--primary)', letterSpacing: '2px', fontWeight: '600' }}>{section.category}</h3>
                  <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>
                <div className="grid-2-menu" style={{ background: 'var(--border)' }}>
                  {section.items.map(item => (
                    <div key={item.name} style={{ background: 'var(--white)', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>{item.name}</p>
                        <p style={{ color: 'var(--text-light)', fontSize: '12px' }}>{item.desc}</p>
                      </div>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--accent)', fontSize: '15px', fontWeight: '600', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p style={{ color: 'var(--text-light)', fontSize: '12px', textAlign: 'center', fontStyle: 'italic' }}>
              ※ 価格は税込み表示です。季節によりメニューが変わる場合がございます。
            </p>
          </div>
        )}

        {/* ── INFO ── */}
        {activeTab === 'info' && (
          <div style={{ paddingTop: '48px' }}>
            <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '6px' }}>Shop Info</p>
              <h2 className="section-title" style={{ color: 'var(--primary)', fontWeight: '700' }}>店舗情報・アクセス</h2>
            </div>
            <div className="grid-2">
              <div>
                {[
                  { label: '店名', value: 'ELEPHANT FACTORY COFFEE' },
                  { label: '電話番号', value: '075-212-1808' },
                  { label: '住所', value: '京都市中京区蛸薬師通東入ル\n備前島町309-4 HKビル2F' },
                  { label: '営業時間', value: '12:00 〜 22:00' },
                  { label: '定休日', value: '不定休（Instagramにてお知らせ）' },
                  { label: 'Instagram', value: '@elephantfactorycoffee' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', letterSpacing: '1px', color: 'var(--accent)', minWidth: '76px', paddingTop: '2px', textTransform: 'uppercase', flexShrink: 0 }}>{row.label}</p>
                    <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{row.value}</p>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ background: 'var(--bg-section)', border: '1px solid var(--border)', borderRadius: '2px', padding: '28px', marginBottom: '16px' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', letterSpacing: '3px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '16px' }}>Access</p>
                  {[
                    { icon: '🚇', text: '阪急京都線「河原町駅」徒歩5分' },
                    { icon: '🚃', text: '京阪「祇園四条駅」徒歩8分' },
                    { icon: '🚌', text: '市バス「四条河原町」バス停すぐ' },
                  ].map(item => (
                    <div key={item.text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                      <p style={{ color: 'var(--text-mid)', fontSize: '13px', lineHeight: '1.7' }}>{item.text}</p>
                    </div>
                  ))}
                </div>
                <a href="https://maps.google.com/?q=ELEPHANT+FACTORY+COFFEE+京都" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', background: 'var(--primary)', color: 'var(--bg)', padding: '14px 20px', textAlign: 'center', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', borderRadius: '1px' }}>
                  Google マップで開く
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── CONTACT ── */}
        {activeTab === 'contact' && (
          <div style={{ paddingTop: '48px', maxWidth: '600px' }}>
            <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '11px', letterSpacing: '4px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '6px' }}>Contact</p>
              <h2 className="section-title" style={{ color: 'var(--primary)', fontWeight: '700' }}>お問い合わせ</h2>
            </div>
            <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: '2', marginBottom: '32px' }}>
              ご不明な点・ご質問は、お電話またはInstagramよりお気軽にどうぞ。
            </p>
            <div className="contact-grid" style={{ marginBottom: '32px' }}>
              <a href="tel:075-212-1808" style={{ display: 'block', background: 'var(--primary)', color: 'var(--bg)', padding: '28px 22px', textDecoration: 'none', borderRadius: '1px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '10px', letterSpacing: '3px', color: 'var(--accent-light)', marginBottom: '8px', textTransform: 'uppercase' }}>Phone</p>
                <p style={{ fontSize: '19px', letterSpacing: '1px' }}>075-212-1808</p>
                <p style={{ fontSize: '11px', color: 'rgba(244,239,230,0.5)', marginTop: '5px' }}>12:00 〜 22:00 / 不定休</p>
              </a>
              <a href="https://www.instagram.com/elephantfactorycoffee" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', background: 'var(--accent)', color: 'var(--white)', padding: '28px 22px', textDecoration: 'none', borderRadius: '1px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '10px', letterSpacing: '3px', color: 'rgba(253,250,246,0.7)', marginBottom: '8px', textTransform: 'uppercase' }}>Instagram</p>
                <p style={{ fontSize: '14px', letterSpacing: '1px', wordBreak: 'break-all' }}>@elephantfactorycoffee</p>
                <p style={{ fontSize: '11px', color: 'rgba(253,250,246,0.7)', marginTop: '5px' }}>DMもお気軽に</p>
              </a>
            </div>
            <div style={{ background: 'var(--bg-section)', border: '1px solid var(--border)', borderRadius: '2px', padding: '22px 28px' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '13px', lineHeight: '2' }}>
                〒604-8072<br />
                京都市中京区蛸薬師通東入ル備前島町309-4 HKビル2F<br />
                ELEPHANT FACTORY COFFEE
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--primary)', padding: '32px 20px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', letterSpacing: '3px', color: 'var(--bg)', marginBottom: '3px' }}>ELEPHANT FACTORY COFFEE</p>
            <p style={{ fontSize: '11px', color: 'rgba(244,239,230,0.4)', letterSpacing: '1px' }}>KYOTO · SPECIALTY COFFEE</p>
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(244,239,230,0.3)' }}>© 2024 Elephant Factory Coffee</p>
        </div>
      </footer>
    </div>
  )
}
