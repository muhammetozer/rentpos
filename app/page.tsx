import {
  ArrowRight,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Building2,
  Mail,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#7A1425] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute right-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              Güvenli Ödeme Çözümleri
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              İşletmeniz İçin{" "}
              <span className="text-white/70">
                Güvenli ve Hızlı
              </span>{" "}
              Ödeme Çözümleri
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              İşletmenizin ödeme süreçlerini kolaylaştıran,
              güvenli ve esnek ödeme çözümleriyle müşterilerinize
              kusursuz bir alışveriş deneyimi sunun.
            </p>

            {/* FEATURES */}
            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <CheckCircle2 size={19} />
                Tüm bankalara taksit imkânı
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <CheckCircle2 size={19} />
                Ücretsiz kurulum
              </div>

              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <CheckCircle2 size={19} />
                Kesintisiz teknik destek
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+905319601509"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#7A1425] transition-all hover:bg-slate-100 hover:shadow-xl"
              >
                <Phone size={17} />
                Bizi Arayın
              </a>

              <a
                href="tel:+905319601509"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Hemen Başvur
                <ArrowRight size={17} />
              </a>
            </div>

            {/* PHONE AND EMAIL */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="tel:+905319601509"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <Phone size={16} />
                +90 531 960 15 09
              </a>

              <a
                href="mailto:rentpos@rentpos.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <Mail size={16} />
                rentpos@rentpos.com
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-white/10" />

              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/15 pb-6">
                  <div>
                    <p className="text-sm font-medium text-white/60">
                      RentPos
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      Ödeme Çözümleri
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-3">
                    <ShieldCheck size={27} className="text-white" />
                  </div>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                    <CreditCard size={23} className="text-white" />

                    <p className="mt-5 text-sm font-semibold text-white">
                      Esnek Ödeme
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/60">
                      Müşterilerinize farklı ödeme ve taksit
                      seçenekleri sunun.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                    <Building2 size={23} className="text-white" />

                    <p className="mt-5 text-sm font-semibold text-white">
                      Tüm Bankalar
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/60">
                      Türkiye'deki tüm bankalarla uyumlu
                      taksit altyapısı.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A1425]/10">
                      <CheckCircle2
                        size={20}
                        className="text-[#7A1425]"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Ücretsiz Kurulum
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Gizli maliyet olmadan hızlı başlangıç
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="urunler" className="bg-[#F8F3F4] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7A1425]">
              Ürünlerimiz
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              İşletmeniz için
              <br />
              ödeme çözümleri
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              İşletmenizin ihtiyaçlarına uygun ödeme çözümleriyle
              müşterilerinize güvenli ve kolay bir ödeme deneyimi
              sunun.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* SANAL POS */}
            <div className="group rounded-2xl border border-[#7A1425]/15 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#7A1425]/40 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A1425]">
                <CreditCard size={24} className="text-white" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Sanal POS
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                E-ticaret sitenizde ve dijital satış
                kanallarınızda güvenli online ödeme alın.
                Müşterilerinize farklı ödeme seçenekleri ve
                taksit imkânları sunun.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#7A1425]">
                <CheckCircle2 size={17} />
                Tüm bankalara taksit imkânı
              </div>

              <a
                href="tel:+905319601509"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7A1425] transition-colors hover:text-[#5E0F1D]"
              >
                Bilgi Alın
                <ArrowRight size={16} />
              </a>

              <a
                href="mailto:rentpos@rentpos.com"
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#7A1425] transition-colors hover:text-[#5E0F1D]"
              >
                <Mail size={16} />
                E-posta ile bilgi alın
              </a>
            </div>

            {/* FİZİKİ POS */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8">
              <div className="absolute right-5 top-5 rounded-full bg-[#7A1425]/10 px-3 py-1.5 text-xs font-semibold text-[#7A1425]">
                Çok Yakında
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F3F4]">
                <CreditCard size={24} className="text-[#7A1425]" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Fiziki POS
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Mağaza ve işletmelerinizde kartlı ödemeleri
                kolayca kabul edebilmeniz için fiziki POS
                çözümlerimiz çok yakında hizmetinizde.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7A1425]">
                Yakında
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RENTPOS */}
      <section id="cozumler" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7A1425]">
              Neden RentPos?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              İşletmeniz için daha kolay ödeme
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#7A1425]/10 bg-[#F8F3F4] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7A1425]">
                <ShieldCheck size={22} className="text-white" />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Güvenli Ödeme
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Ödeme işlemleriniz için güvenli ve modern bir
                altyapı sunuyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-[#7A1425]/10 bg-[#F8F3F4] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7A1425]">
                <CreditCard size={22} className="text-white" />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Taksit İmkânı
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Türkiye'deki tüm bankalarla uyumlu esnek
                taksit altyapısıyla müşterilerinize ödeme
                kolaylığı sağlayın.
              </p>
            </div>

            <div className="rounded-2xl border border-[#7A1425]/10 bg-[#F8F3F4] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7A1425]">
                <Phone size={22} className="text-white" />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Kesintisiz Destek
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Teknik destek ekibimizle ödeme süreçlerinizde
                ihtiyaç duyduğunuz her an yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className="bg-[#7A1425] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Hakkımızda
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                İşletmenizin
                <br />
                yanında RentPos
              </h2>

              <div className="mt-7 h-1 w-16 rounded-full bg-white" />
            </div>

            <div>
              <p className="text-lg leading-9 text-white/85">
                İşletmenizin dijital dönüşüm süreçlerini hızlandırmak
                ve müşterilerinize kusursuz bir alışveriş deneyimi
                sunmak adına, en gelişmiş ödeme çözümlerini tek bir
                platformda birleştiriyoruz. Teknik karmaşıklıkları
                ortadan kaldıran hızlı entegrasyon sürecimiz sayesinde
                sisteminizi dakikalar içinde aktif hale
                getirebilirsiniz.
              </p>

              <p className="mt-6 text-lg leading-9 text-white/85">
                Türkiye’deki tüm bankalarla uyumlu esnek taksit
                altyapımız, müşterilerinize bütçelerine uygun ödeme
                seçenekleri sunarak dönüşüm oranlarınızı artırmanıza
                yardımcı olur. Üstelik hiçbir gizli maliyet
                barındırmayan ücretsiz kurulum avantajımız ve
                kesintisiz teknik desteğimizle, ticari yolculuğunuzun
                her adımında yanınızda yer alıyoruz.
              </p>

              <p className="mt-6 text-lg leading-9 text-white/85">
                Günümüzün hızla gelişen dijital ticaret dünyasında,
                finansal süreçlerin güvenli, pratik ve erişilebilir
                olması en kritik başarı faktörlerinden biridir.
                Bizler, işletmenizin ödeme alma süreçlerini en yüksek
                performansla yürütmesini sağlamak amacıyla yenilikçi
                altyapı çözümleri sunuyoruz.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+905319601509"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#7A1425] transition-all hover:bg-slate-100"
                >
                  <Phone size={17} />
                  Bizi Arayın
                </a>

                <a
                  href="mailto:rentpos@rentpos.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  <Mail size={17} />
                  E-posta Gönderin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F8F3F4] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#7A1425]">
            Hemen Başlayın
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ödeme çözümlerimizi keşfedin.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Sanal POS çözümlerimiz hakkında bilgi almak ve
            başvuru yapmak için şimdi bizi arayın veya bize
            e-posta gönderin.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+905319601509"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7A1425] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#5E0F1D] hover:shadow-lg"
            >
              <Phone size={17} />
              +90 531 960 15 09
            </a>

            <a
              href="mailto:rentpos@rentpos.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#7A1425]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#7A1425] transition-all hover:border-[#7A1425] hover:shadow-lg"
            >
              <Mail size={17} />
              E-posta Gönderin
            </a>
          </div>

          <a
            href="mailto:rentpos@rentpos.com"
            className="mt-5 inline-block text-sm font-medium text-slate-500 transition-colors hover:text-[#7A1425]"
          >
            rentpos@rentpos.com
          </a>
        </div>
      </section>
    </main>
  );
}