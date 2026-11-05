import { ArrowRight, Droplets, HeartHandshake, MapPin, Menu, ShowerHead, Sparkles, Users } from 'lucide-react'

const locations = [
  { name: 'Centro de Acolhimento , Centro Pop', address: 'R. Queiroz dos Santos, 736 — Centro', hours: '2° a 6°, 8h às 17h' },
  { name: 'Praça da Estação CPTM', address: 'Av. Central, próximo ao terminal', hours: 'Terças, das 16h às 19h' },
  { name: 'Parque Municipal', address: 'Entrada norte — Vila Nova', hours: 'Quintas, das 14h às 18h' },
]

const equipment = [
  ['01', 'Cabines de banho', 'Estruturas móveis com privacidade, chuveiro e espaço para troca.'],
  ['02', 'Kit de higiene', 'Sabonete, shampoo, toalha, escova e itens essenciais para cada pessoa.'],
  ['03', 'Apoio e acolhimento', 'Equipe voluntária preparada para receber com respeito, escuta e cuidado.'],
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#173c3b]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Banho que Acolhe - início">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e76f51] text-white shadow-sm"><Droplets size={22} /></span>
          <span className="text-lg font-bold tracking-tight">Banho Comunitario</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Navegação principal">
          <a href="#projeto" className="transition-colors hover:text-[#e76f51]">O projeto</a>
          <a href="#locais" className="transition-colors hover:text-[#e76f51]">Onde acontece</a>
          <a href="#estrutura" className="transition-colors hover:text-[#e76f51]">Estrutura</a>
        </nav>
        <a href="#apoie" className="hidden rounded-full bg-[#173c3b] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:block">Quero apoiar</a>
        <button className="rounded-full border border-[#173c3b]/15 p-2 md:hidden" aria-label="Abrir menu"><Menu size={20} /></button>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#dceae4] px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-[#34716a]"><Sparkles size={15} /> Higiene também é dignidade</div>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-.05em] text-[#173c3b] sm:text-6xl lg:text-7xl">Um banho pode mudar o começo de um dia.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#58706b]"><strong className="text-[#173c3b]">A técnica e o espaço da margem: </strong>Avaliação e implementação tática de estações de higienização fixas e móveis no abc paulista</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#locais" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e76f51] px-6 py-4 font-bold text-white shadow-lg shadow-[#e76f51]/20 transition-transform hover:-translate-y-1">Conheça os locais <ArrowRight size={18} /></a>
            <a href="#projeto" className="inline-flex items-center justify-center rounded-full border border-[#173c3b]/15 px-6 py-4 font-bold text-[#173c3b] hover:bg-white">Entenda o projeto</a>
          </div>
          <div className="mt-12 flex items-center gap-8 border-t border-[#173c3b]/10 pt-6">
            <div><p className="text-3xl font-bold">240+</p><p className="text-sm text-[#6b817c]">banhos realizados</p></div>
            <div><p className="text-3xl font-bold">3</p><p className="text-sm text-[#6b817c]">pontos na cidade</p></div>
            <div><p className="text-3xl font-bold">18</p><p className="text-sm text-[#6b817c]">voluntários</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="aspect-square rounded-[42%_42%_32%_32%] bg-[#dceae4] p-6 sm:p-10">
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[38%_38%_28%_28%] bg-[#b8d7cc]">
              <div className="absolute -right-4 top-8 h-32 w-32 rounded-full bg-[#f2c36b]/70 blur-sm" />
              <div className="absolute bottom-0 left-0 h-28 w-full bg-[#85b9a9]" />
              <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-[#f7f5ef] shadow-xl"><ShowerHead size={64} strokeWidth={1.4} className="text-[#e76f51]" /></div>
              <div className="relative z-10 mt-6 rounded-full bg-white/80 px-5 py-3 text-sm font-bold text-[#34716a] shadow-sm">Cuidado que chega</div>
              <div className="absolute left-14 top-16 text-3xl text-white/80">·</div><div className="absolute right-20 top-28 text-5xl text-white/70">·</div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-7"><p className="text-xs font-bold uppercase tracking-wider text-[#e76f51]">Próximo atendimento</p><p className="mt-1 font-bold">Sábado · Centro</p></div>
        </div>
      </section>

      <section id="projeto" className="bg-[#173c3b] px-6 py-20 text-[#f7f5ef] lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#f2c36b]">Por que fazemos</p><h2 className="max-w-xl text-4xl font-bold leading-tight tracking-[-.04em] sm:text-5xl">Acolher é olhar para a pessoa inteira.</h2></div><p className="max-w-lg text-lg leading-8 text-[#c2d3cc]">Nosso projeto nasce da parceria entre voluntários, comerciantes e equipamentos públicos. A cada encontro, oferecemos mais do que um banho: oferecemos tempo, escuta e a chance de seguir o dia com mais confiança.</p></div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3"><div className="rounded-3xl bg-white/10 p-7"><HeartHandshake className="mb-12 text-[#f2c36b]" size={28} /><h3 className="text-xl font-bold">Respeito sempre</h3><p className="mt-3 leading-7 text-[#c2d3cc]">Atendimento sem julgamentos, com privacidade e liberdade de escolha.</p></div><div className="rounded-3xl bg-white/10 p-7"><Users className="mb-12 text-[#f2c36b]" size={28} /><h3 className="text-xl font-bold">Feito em rede</h3><p className="mt-3 leading-7 text-[#c2d3cc]">Unimos pessoas e organizações para transformar cuidado em ação.</p></div><div className="rounded-3xl bg-[#e76f51] p-7"><MapPin className="mb-12 text-white" size={28} /><h3 className="text-xl font-bold">Perto de quem precisa</h3><p className="mt-3 leading-7 text-white/85">Escolhemos pontos conhecidos, seguros e acessíveis para facilitar o acesso.</p></div></div>
      </section>

      <section id="locais" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#e76f51]">Mapa de atendimento</p><h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl">Onde nos encontrar</h2></div><p className="max-w-sm text-[#6b817c]">Confira os locais e horários das próximas ações do Banho que Acolhe.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{locations.map((location, index) => <article key={location.name} className="rounded-3xl border border-[#173c3b]/10 bg-white p-7 shadow-sm"><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dceae4] text-sm font-bold text-[#34716a]">0{index + 1}</span><MapPin size={20} className="text-[#e76f51]" /></div><h3 className="mt-9 text-xl font-bold">{location.name}</h3><p className="mt-3 text-sm leading-6 text-[#6b817c]">{location.address}</p><div className="mt-6 border-t border-[#173c3b]/10 pt-4 text-sm font-semibold text-[#34716a]">{location.hours}</div></article>)}</div></section>

      <section id="estrutura" className="bg-[#e9eee9] px-6 py-20 lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#e76f51]">Como funciona</p><h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl">Uma estrutura simples, segura e humana.</h2></div><div className="mt-12 grid gap-8 md:grid-cols-3">{equipment.map(([number, title, description]) => <div key={number} className="border-t-2 border-[#173c3b]/15 pt-5"><span className="text-sm font-bold text-[#e76f51]">{number}</span><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[#6b817c]">{description}</p></div>)}</div></div></section>

      <section id="apoie" className="px-6 py-20 lg:px-10 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[32px] bg-[#f2c36b] px-8 py-10 sm:px-12 lg:flex-row lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-[#7c5520]">Faça parte</p><h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-.03em] text-[#173c3b] sm:text-4xl">Toda pessoa merece um lugar para se sentir bem.</h2></div><a href="mailto:contato@banhoqueacolhe.org" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#173c3b] px-6 py-4 font-bold text-white transition-transform hover:-translate-y-1">Quero ser voluntário <ArrowRight size={18} /></a></div></section>

      <footer className="border-t border-[#173c3b]/10 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-[#6b817c] sm:flex-row"><p>© 2026 Banho que Acolhe</p><p>Um projeto de cuidado, respeito e cidadania.</p></div></footer>
    </main>
  )
}
