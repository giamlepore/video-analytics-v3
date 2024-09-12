'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart2, Users, Zap, Video, Check} from "lucide-react"
// import { Slider } from "@/components/ui/slider"
import { CardContent, Card } from "@/components/ui/card"

export function PaginaAnaliticosComponent() {
  return (
    <div className="bg-purple-50 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <HeroSection />
        <VideoPlaceholder />
        <FeatureCards />
        <AnalyticsLevels />
        <VideoSpecificStats />
        <PricingSection />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="bg-white p-4 text-black">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* <img src="/placeholder.svg?height=30&width=100" alt="V3 Insights" className="h-8" /> */}
        <p className='text-gray-700 font-bold'>V3 Insights</p>
        <div className="flex space-x-6">
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">Produto</a> */}
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">Centro de Aprendizagem</a> */}
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">Preços</a> */}
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">Assistir Demo</a> */}
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="text-blue-600 border-blue-600">Falar com Vendas</Button>
          <Button className="bg-blue-600 text-white">Minha conta</Button>
        </div>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="text-center mb-16 text-black">
      <h2 className="text-sm font-semibold text-blue-600 mb-2">ANÁLISE DE ENGAJAMENTO DE VÍDEO</h2>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Retenção, engajamento e momentos mais asssistidos</h1>
      <p className="text-xl mb-6">Veja o engajamento do seu vídeo por canal de aquisição, por pessoa e tenha resultados reais.</p>
      <Button className="bg-blue-600 text-white text-lg px-8 py-3">Iniciar teste gratuito</Button>
    </section>
  )
}

function VideoPlaceholder() {
  const [email, setEmail] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsPlaying(true)
    }
  }

  if (isPlaying) {
    return (
      <div className="w-full aspect-video bg-gray-900 flex items-center justify-center text-white mb-16">
        <iframe
          src={'https://player.vimeo.com/video/1008577242?title=0&autoplay=1'}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }

  return (
    <div className="flex relative w-full aspect-video bg-gray-900 flex items-center justify-center overflow-hidden mb-16">
      <img
        src="/thumb.jpg?height=720&width=1280"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
          Coloque seu e-mail<br />para assistir esse vídeo
        </h2>
        {/* <div className="bg-blue-600 rounded-full p-4 mb-8">
          <Play className="w-6 h-6 text-white" />
        </div> */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white md:text-white mb-1">
              O SEU E-MAIL
            </label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-400"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            REPRODUZIR
          </Button>
        </form>
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute bottom-4 right-4 text-white text-sm hover:underline"
        >
          {/* Ignorar → */}
        </button>
      </div>
    </div>
  )
}

function FeatureCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-black">
      <FeatureCard
        icon={<BarChart2 />}
        title="Mapas de calor de vídeo"
        description="Veja exatamente quais partes dos seus vídeos os espectadores estão assistindo, rebobinando ou pulando."
      />
      <FeatureCard
        icon={<Users />}
        title="Teste A/B"
        description="Teste duas miniaturas, CTAs ou vídeos diferentes um contra o outro para ver qual tem melhor desempenho."
      />
      <FeatureCard
        icon={<Zap />}
        title="Integrações"
        description="Conecte o Insights à sua plataforma de automação de marketing (MAP) para trazer vídeos para sua estratégia geral."
      />
      <FeatureCard
        icon={<Video />}
        title="Webinars"
        description="Veja quais segmentos dos seus webinars são mais envolventes e como eles são ao longo do seu evento."
      />
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function AnalyticsLevels() {
  return (
    <section className="mb-16">
      {/* <h2 className="text-3xl font-bold text-center mb-12">Análises em todos os níveis</h2>
      <p className="text-xl text-center mb-12">Obtenha insights abrangentes para maximizar seu ROI.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Desempenho da conta em um relance</h3>
          <p className="text-lg mb-4">Obtenha uma visão geral rápida do desempenho da sua biblioteca de vídeos com estatísticas importantes como número de reproduções, taxa de engajamento do espectador e taxa de conversão—tudo ao seu alcance.</p>
        </div>
        <img src="/placeholder.svg?height=300&width=500" alt="Painel de Desempenho da Conta" className="rounded-lg shadow-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <img src="/placeholder.svg?height=300&width=500" alt="Desempenho por Projeto" className="rounded-lg shadow-lg order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold mb-4">Desempenho por projeto</h3>
          <p className="text-lg mb-4">Entenda como todos os vídeos em seu projeto se saem. Você pode até filtrar por tags para ver métricas de um grupo específico de vídeos.</p>
        </div>
      </div> */}
    </section>
  )
}

function VideoSpecificStats() {
  return (
    <section className="mb-16 text-black">
      <h2 className="text-3xl font-bold text-center mb-12">Estatísticas específicas de vídeo</h2>
      <p className="text-xl text-center mb-12">Mantenha o controle de cada conteúdo.</p>
      
      <div className="bg-gradient-to-br from-orange-300 to-purple-400 rounded-lg p-8">
        <EngagementMetrics />
        <VideoHeatmaps />
        <TrackViews />
      </div>
    </section>
  )
}

function EngagementMetrics() {
  return (
    <div className="bg-white rounded-lg p-6 mb-6 text-black">
      <h3 className="text-2xl font-bold mb-4">Métricas de engajamento</h3>
      <p className="text-lg mb-4">Descubra as partes mais envolventes do seu vídeo com estatísticas de reprodução e repetição segundo a segundo. Além disso, obtenha insights sobre reproduções totais, taxa de reprodução e engajamento médio.</p>
      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
        <div>
          <h4 className="text-xl font-bold">40k</h4>
          <p className="text-sm text-gray-600">Total de reproduções</p>
        </div>
        <div className="text-green-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          12%
        </div>
      </div>
    </div>
  )
}

function VideoHeatmaps() {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4">Mapas de calor de vídeo</h3>
      <p className="text-lg mb-6">
        Saiba exatamente quais partes do seu vídeo cada espectador assistiu, reassistiu e pulou. Nossos
        mapas de calor também mostram qual dispositivo e página da web eles usaram para reproduzir seu vídeo.
      </p>
      <div className="space-y-4">
        <HeatmapRow
          thumbnail="/placeholder.svg?height=50&width=50"
          engagement={[
            { color: 'bg-yellow-300', width: '30%' },
            { color: 'bg-yellow-100', width: '40%' },
            { color: 'bg-orange-400', width: '30%' },
          ]}
          percentage="39%"
        />
        <HeatmapRow
          thumbnail="/placeholder.svg?height=50&width=50"
          engagement={[
            { color: 'bg-yellow-400', width: '20%' },
            { color: 'bg-yellow-200', width: '30%' },
            { color: 'bg-yellow-100', width: '40%' },
            { color: 'bg-orange-400', width: '10%' },
          ]}
          percentage="92%"
        />
        <div className="bg-gray-100 rounded p-3 text-sm">
          <p><strong>Dispositivo:</strong> Desktop / Windows / Firefox</p>
          {/* <p><strong>IP:</strong> 37.4.252.125</p> */}
          <p><strong>Página:</strong> <a href="#" className="text-blue-600 hover:underline">https://linkedin.com...</a></p>
        </div>
        <HeatmapRow
          thumbnail="/placeholder.svg?height=50&width=50"
          engagement={[
            { color: 'bg-yellow-200', width: '50%' },
            { color: 'bg-orange-400', width: '20%' },
            { color: 'bg-yellow-100', width: '30%' },
          ]}
          percentage="68%"
        />
        <HeatmapRow
          thumbnail="/placeholder.svg?height=50&width=50"
          engagement={[
            { color: 'bg-orange-400', width: '10%' },
            { color: 'bg-yellow-400', width: '20%' },
            { color: 'bg-yellow-300', width: '70%' },
          ]}
          percentage="100%"
        />
      </div>
    </div>
  )
}

interface HeatmapRowProps {
  thumbnail: string;
  engagement: Array<{ color: string; width: string }>;
  percentage: string;
}

function HeatmapRow({ thumbnail, engagement, percentage }: HeatmapRowProps) {
  return (
    <div className="flex items-center space-x-2">
      <img src={thumbnail} alt="User" className="w-12 h-12 rounded" />
      <div className="flex-grow h-6 bg-gray-200 rounded-full overflow-hidden flex">
        {engagement.map((segment, index) => (
          <div key={index} className={`${segment.color}`} style={{ width: segment.width }}></div>
        ))}
      </div>
      <span className="text-sm font-semibold">{percentage}</span>
    </div>
  )
}

function TrackViews() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Rastrear visualizações</h3>
      <p className="text-lg mb-6">
        Publique seu vídeo em vários lugares como páginas de produtos, posts de blog e e-mails. Nós
        rastrearemos seu desempenho por local de incorporação para que você saiba onde ele obtém mais visitas, reproduções e engajamento.
      </p>
      <ViewsChart />
      <div className="mt-6">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="pb-2">Fonte</th>
              <th className="pb-2">Plays</th>
              <th className="pb-2">Assistido</th>
            </tr>
          </thead>
          <tbody>
            <ViewsRow color="bg-green-400" url="linkedin.com" plays="54k" engagement="98,3%" />
            <ViewsRow color="bg-blue-400" url="instagram.com" plays="32k" engagement="32,3%" />
            <ViewsRow color="bg-purple-400" url="linkedin/post..." plays="12k" engagement="89,3%" />
            <ViewsRow color="bg-yellow-400" url="hgoogle.com..." plays="407" engagement="54,3%" />
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ViewsChart() {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const data = [
    { date: '14/02', green: 30, blue: 20, purple: 10, yellow: 5 },
    { date: '15/02', green: 35, blue: 25, purple: 12, yellow: 6 },
    { date: '16/02', green: 32, blue: 22, purple: 15, yellow: 7 },
    { date: '17/02', green: 38, blue: 28, purple: 18, yellow: 8 },
    { date: '18/02', green: 42, blue: 32, purple: 20, yellow: 10 },
    { date: '19/02', green: 39, blue: 29, purple: 17, yellow: 9 },
    { date: '20/02', green: 36, blue: 26, purple: 14, yellow: 7 },
    { date: '21/02', green: 40, blue: 30, purple: 16, yellow: 8 },
  ];

  const maxValue = Math.max(...data.flatMap(d => [d.green, d.blue, d.purple, d.yellow]));

  return (
    <div className="relative h-64">
      <svg className="w-full h-full">
        {data.map((d, i) => {
          const x = `${(i / (data.length - 1)) * 100}%`;
          return (
            <g key={d.date}>
              <line
                x1={x}
                y1="0%"
                x2={x}
                y2="100%"
                stroke={hoveredDate === d.date ? '#000' : '#e5e7eb'}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {(['yellow', 'purple', 'blue', 'green'] as const).map((color) => {
                const y = `${(1 - d[color] / maxValue) * 100}%`;
                const prevY = i > 0 ? `${(1 - data[i - 1][color] / maxValue) * 100}%` : y;
                return (
                  <line
                    key={color}
                    x1={`${((i - 1) / (data.length - 1)) * 100}%`}
                    y1={prevY}
                    x2={x}
                    y2={y}
                    stroke={`var(--${color}-400)`}
                    strokeWidth="2"
                  />
                );
              })}
              <rect
                x={x}
                y="0"
                width="1%"
                height="100%"
                fill="transparent"
                onMouseEnter={() => setHoveredDate(d.date)}
                onMouseLeave={() => setHoveredDate(null)}
              />
            </g>
          );
        })}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600">
        {data.map(d => (
          <span key={d.date}>{d.date}</span>
        ))}
      </div>
    </div>
  );
}

interface ViewsRowProps {
  color: string;
  url: string;
  plays: string;
  engagement: string;
}

function ViewsRow({ color, url, plays, engagement }: ViewsRowProps) {
  return (
    <tr>
      <td className="py-2">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
          <a href="#" className="text-blue-600 hover:underline">{url}</a>
        </div>
      </td>
      <td className="py-2">{plays}</td>
      <td className="py-2">{engagement}</td>
    </tr>
  );
}

function PricingSection() {
  return (
    <section className="mt-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-12 text-black">
      <h2 className="text-sm font-semibold text-center mb-2">PREÇOS</h2>
      <h3 className="text-4xl font-bold text-center mb-4">Escolha o plano certo para você</h3>
      <p className="text-xl text-center mb-8">Não é necessário cartão de crédito.</p>
      
      <div className="flex justify-end mb-6">
        <div className="bg-white rounded-full p-1 flex items-center">
          <span className="text-sm font-medium px-3">Cobrança anual economize 20%</span>
          <div className="w-10 h-6 bg-purple-600 rounded-full p-1">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-sm font-medium px-3">Cobrança mensal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PricingCard
          name="Grátis"
          price="R$0"
          description="Sério, grátis para sempre"
          buttonText="Cadastre-se gratuitamente"
          buttonColor="bg-blue-600"
          features={[
            "Até 10 vídeos",
            "Player personalizável",
            "Gravação e edição"
          ]}
        />
        <PricingCard
          name="Plus"
          price="R$95"
          description="Cobrado R$1.150 por ano"
          buttonText="Iniciar teste gratuito"
          buttonColor="bg-purple-600"
          features={[
            "Tudo no Grátis, e mais...",
            "Remover marca Insights",
            "CTAs básicos",
            "Múltiplos usuários"
          ]}
        />
        <PricingCard
          name="Pro"
          price="R$395"
          description="Cobrado R$4.750 por ano"
          buttonText="Iniciar teste gratuito"
          buttonColor="bg-purple-600"
          features={[
            "Tudo no Plus, e mais...",
            "Formulários de captura de leads",
            "Análise de dados avançada",
            "CTAs personalizados"
          ]}
        />
        <PricingCard
          name="Avançado"
          price="R$1.595"
          description="Cobrado R$19.150 por ano"
          buttonText="Iniciar teste gratuito"
          buttonColor="bg-purple-600"
          features={[
            "Tudo no Pro, e mais...",
            "Integrações de marketing",
            "Hospedagem de webinar",
            "Galerias de vídeo ilimitadas"
          ]}
        />
      </div>
    </section>
  )
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  features: string[];
}

function PricingCard({ name, price, description, buttonText, buttonColor, features }: PricingCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2" style={{ color: name === 'Grátis' ? '#3B82F6' : name === 'Plus' ? '#10B981' : name === 'Pro' ? '#3B82F6' : '#8B5CF6' }}>{name}</h3>
        <div className="text-4xl font-bold mb-2">{price}<span className="text-lg font-normal text-gray-600">/mês</span></div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Button className={`w-full ${buttonColor} text-white mb-6`}>{buttonText}</Button>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}