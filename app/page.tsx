const sections = [
  ['Mais Popular', 'Todas as novidades 4.600 Kz', 5],
  ['Mais Quente', 'Seleção da semana 4.300 Kz', 4],
  ['Festas', 'Coleção especial 5.600 Kz', 4],
  ['Pacote Premium', 'Coleção completa 4.800 Kz', 4],
  ['Extremo', 'Novos lançamentos 4.400 Kz', 4],
  ['Picante', 'Escolhas exclusivas 5.000 Kz', 4],
  ['Favoritos', 'Os mais procurados 3.500 Kz', 4],
]

const videoSources: Record<string, string[]> = {
  'Mais Popular': [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cellparrish_584p_20261002_142547-YTFxaqVbSucBskb1rPLtPF5HqrhIs4.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haitianbratxxx_568p_20261007_012552%20%281%29%20%281%29-2YV0CegiVcJNVvKukNuaMbx2cY7ZPI.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itsshot_ziii_568p_20261008_185220-6WwMd40oBDoSDFFhntpstoCGjGljnl.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Itsadizasankofa_1280p_20260921_154959%20%281%29-okNW9qDqhyalChxA4rV9xqMChQs3v9.mp4',
  ],
  'Mais Quente': [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jaysquirt75_1280p_20260921_044541-zpy0md5ZArsNKKRWRCXzg5liWQBa5t.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lipgglossbunny_1280p_20260918_112552-IZ7SWyTqQPqXKUFNnwk188xbIUKgFK.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minxmilliyon_568p_20261007_010725%20%281%29%20%281%29-bcwgXyMq76pdmhDrl0EolyjasqfGnL.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRETTYEVELYN001_1280p_20261007_130701-ZAqiFLqtTeAD6tQA4z57pmwHtKVR49.mp4',
  ],
  Festas: [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mocrystally_564p_20261007_143142-pvgo6ZfguQASvwzEj6I4wqaSyI2nOY.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SexxyNutinmexx_948p_20260921_152344-ntNkqMbpJqjWe6U79VxviwZFt3wTan.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sexy124_5489_1024p_20260921_040408-FBmyghS3uG9uack9ZMW2nKyDl9ccXz.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ubukenenibubi_1130p_20261011_225556-HWo4iXVG8KIkAaSMTMeETYriyoQclK.mp4',
  ],
}

const checkoutLinks: Record<string, string> = {
  'Mais Popular': 'https://standerpay.com/checkout/53c10a3f-1a16-449e-88e3-e971f0baa672',
  'Mais Quente': 'https://standerpay.com/checkout/ea41200b-2369-4c68-9bc9-dc84b05696bf',
  Festas: 'https://standerpay.com/checkout/66fc2c52-c304-4bf7-8eba-36abd5c9459c',
  'Pacote Premium': 'https://standerpay.com/checkout/b1ea8391-4981-4c49-ad0a-2ad611f38013',
  Extremo: 'https://standerpay.com/checkout/c89ff824-f459-4244-b8c7-464617e2122d',
  Picante: 'https://standerpay.com/checkout/02181d3a-4404-4532-8f0f-0906afe2eeae',
  Favoritos: 'https://standerpay.com/checkout/c475c0b8-599f-4be0-96e5-5773691540d2',
}


function PlayIcon() {
  return <span className="play-icon" aria-hidden="true"><span /></span>
}

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-label="Capa Boomerang">
        <div className="hero-placeholder">
          <img
            className="hero-image"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_Capture_-_2026-09-16_-_20-49-46-Ix7W7LeW2qOYa94pY1AqCqVVYWo0rz.png"
            alt="Quatro modelos usando lingerie em uma composição promocional Boomerang"
          />
          <div className="hero-overlay" aria-hidden="true">
            <div className="brand-pill">BOOMERANG</div>
          </div>
        </div>
      </section>

      <div className="catalog">
        {sections.map(([label, detail, count]) => (
          <section className="catalog-section" key={label}>
            <div className="section-head">
              <h2>{label}</h2>
              <div className="section-offer">
                <p>{detail} <span aria-hidden="true">▧</span></p>
                {checkoutLinks[label] && (
                  <a
                    className="checkout-button"
                    href={checkoutLinks[label]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Comprar agora
                  </a>
                )}
              </div>
            </div>
            <div className="video-grid">
              {Array.from({ length: count as number }).map((_, index) => (
                <article className="video-card" key={`${label}-${index}`}>
                  {videoSources[label]?.[index] ? (
                    <video
                      className="card-video"
                      src={videoSources[label][index]}
                      autoPlay={false}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={`Vídeo do card ${index + 1} da seção ${label}`}
                    />
                  ) : (
                    <>
                      <PlayIcon />
                      <span>SEU VÍDEO</span>
                    </>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="footer">
        <h2>BOOMERANG</h2>
        <div className="footer-description">
          <p>Boomerang é uma plataforma de modelos reais do mundo todo, com vídeos completos de todas as modelos acima e muito mais.</p>
          <p>Todos os pacotes têm de 30 a 50 vídeos, com combos e bônus especiais.</p>
          <p>Plataforma segura e confiável.</p>
          <p>Cada categoria acessada após a compra redireciona automaticamente para um grupo privado no WhatsApp, como membro VIP, com conteúdos exclusivos todos os dias.</p>
        </div>
        <nav aria-label="Links do rodapé"><a href="#suporte">Termos e suporte</a><a href="#privacidade">Política de privacidade</a></nav>
      </footer>
    </main>
  )
}
