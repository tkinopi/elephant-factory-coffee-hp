import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ELEPHANT FACTORY COFFEE | 京都・河原町の隠れ家カフェ',
  description: '京都市中京区、河原町の裏路地にある隠れ家コーヒーショップ。村上春樹の作品にちなんだ店名で、アンティーク家具に囲まれた静かな空間でスペシャルティコーヒーをどうぞ。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
