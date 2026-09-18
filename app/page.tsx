const sections = [
  ['Mais Popular', 'Todas as novidades 4.600 Kz', 5],
  ['Mais Quente', 'Seleção da semana 4.300 Kz', 4],
  ['Festas', 'Coleção especial 5.600 Kz', 4],
  ['Pacote Premium', 'Coleção completa 4.800 Kz', 4],
  ['Extremo', 'Novos lançamentos 4.400 Kz', 4],
  ['Picante', 'Escolhas exclusivas 5.000 Kz', 4],
  ['Favoritos', 'Os mais procurados 3.500 Kz', 4],
]

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
                  {(label === 'Mais Popular' && index < 6) || (label === 'Mais Quente' && index < 4) || (label === 'Festas' && index < 4) || (label === 'Pacote Premium' && index < 4) || (label === 'Extremo' && index < 4) || (label === 'Picante' && index < 4) || (label === 'Favoritos' && index < 4) ? (
                    <video
                      className="card-video"
                      src={
                        label === 'Festas'
                          ? [
                              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/50e3140dd525c547c0e3fe4ae1035972-NsZWYAewCQbu4OwyusEjWbCsAK1xjn.mp4',
                              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8d7c03460d1418d50b5f27a40ebdf925-LxxDBqrWYEO37tf25JpwG87FTZ66pg.mp4',
                              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ef17dde18a50222045833d37b11f2f1-5d4er73UzoWlPjd8AvRcnSypQ05oBo.mp4',
                              'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/da04bf15899cd1ac7000700844e2334b-iZnkCKD1jaSKUgKC9ZsknBf8BQOZEe.mp4',
                            ][index]
                          : label === 'Pacote Premium'
                            ? [
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1f41a88990492c504969e6e292b2582b-usIP9icUovPjW68e4cEPRqtkVxj5MF.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fda46037ef8a6f0191f4124eb9af1681-FMZeBNfc7o1aIgjjbm5kR1BFpnYdiI.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4b311b67b0c64bf62fbb703272f32def%20%281%29-zPoVy14dzifBvTUzc9PmYtqTapSULL.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6a23a96294dad9c033f8646b9edf68c6-uT35vt961IoxnXBY0GUZvXmMDt5MXc.mp4',
                              ][index]
                            : label === 'Extremo'
                            ? [
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uri_ifs___V_7sAOH7Bx4sbGbeiOiGzA5X0o8QIhf3uix3W8eHa2dzg-C1P7d7EY2cOi3rY99B4GCQRITdlJl0.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/be363cada73e9e35ec20f9beffde8b94-m5zwPHPo7D5wVmsluLs1hPwLLUSGRY.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cb88d387cbc040a8f3043435a90a1d88-0Zq1GdKc57pE1uI6pyNWTcYpBhrGdL.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/89775abf14fadbcc17fdbb10d66af6e1-UWNQYeC1JLhoeIBm00QTL4wVeMR2PR.mp4',
                              ][index]
                            : label === 'Picante'
                            ? [
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a818de187172865e76f14cd247ab0700-5ZLr8DlaIcXgYgojhKsyH2BRP2vgrQ.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a822512d81293ba360a7c04d3e975ab3-IJeiBuXRZF2Pxk3NfLLxHnSDcrqf1I.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09268f2cf95db6b39e2aeb55f5d8d6e5-cE47HdL4CPsfjriyhMtYRhFyhFZYdg.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f3d94c301f35a70659d76160fa2cb85d-Y3XffpNOWvb7wOeIQtcsGNrikTQUdB.mp4',
                              ][index]
                            : label === 'Favoritos'
                            ? [
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/df5c6b76c928a2148bc446354bfc11b2-3AXxSFrYQj1d3et9Min51DQ1qX3Ejg.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/It%27s_still_my_birthday_and_I_have_all_the_cake_%F0%9F%A5%B3__reel__explore__cake__birthdaygirl-6btiZvsEVGfXnY0waEpzu6ksA7MS4F.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/You_coming__%F0%9F%96%A4-1DKMXAiXwi50bSCUSGJvR338kmawDz.mp4',
                                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/you%E2%80%99re_out_with_the_boys_%26_I_send_you_this%2C_wyd_%20%281%29-VCrpH6jENeD4ygHnOOuJDoDrMfH0MN.mp4',
                              ][index]
                            : label === 'Mais Quente'
                            ? index === 0
                              ? '/b7e3605c21dd7b8f6793acf0b46d4778.mp4'
                              : index === 1
                                ? '/668162bba9905e828a119632c744c989.mp4'
                                : index === 2
                                  ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77ddd38aa0cd003bf60bc691d535e409-NnJDn2tsBvrru7H0NDmE0vNyBUFONJ.mp4'
                                  : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/42195861b3865189bc952f114b6f3d57-HUeYiLulpW2aWmfbWBtyfAtcv6qI8i.mp4'
                            : index === 0
                              ? '/b61e8fb768700984ec1ddaae9039ec89.mp4'
                              : index === 1
                                ? '/3d41fba4454ffa5d691fa959f8f58353.mp4'
                                : index === 2
                                  ? '/1044f01e42d42e8721e1c12c6ef05cb3.mp4'
                                  : index === 3
                                    ? '/5ad03fb4c020a0c2233ab7f10029e0ed.mp4'
                                    : index === 4
                                      ? '/7b2af992c52282424144af69ec058944.mp4'
                                      : '/7b2af992c52282424144af69ec058944.mp4'
                      }
                      autoPlay
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
