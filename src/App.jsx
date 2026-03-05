import React from 'react';

const App = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ives Eventos",
    "description": "Assessoria de eventos especializada em casamentos e festas de 15 anos",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brasil"
    },
    "priceRange": "$$",
    "telephone": "+55 XX XXXX-XXXX",
    "openingHours": "Mo-Su 09:00-18:00"
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Ives Eventos | Assessoria de Eventos | Casamentos e Festas de 15 Anos</title>
        <meta name="description" content="Ives Eventos - Realizamos sonhos com excelência e carinho. Assessoria completa para casamentos, festas de 15 anos e eventos especiais. Decoração elegante e sofisticada." />
        <meta name="keywords" content="eventos, casamentos, festas de 15 anos, assessoria de eventos, buffet, decoração" />
        <meta property="og:title" content="Ives Eventos - Realizamos Sonhos com Excelência" />
        <meta property="og:description" content="Assessoria de eventos especializada em momentos especiais. Decoração elegante e serviços completos de buffet." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ives Eventos" />
        <meta name="twitter:description" content="Onde sonhos se tornam realidade" />
        <link rel="canonical" href="https://iveseventos.com.br" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" 
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
          </div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-5xl md:text-7xl font-serif text-rose-800 text-center mb-4">
              Ives Eventos
            </h1>
            <p className="text-xl md:text-2xl text-rose-600 text-center italic mb-8">
              Onde sonhos se tornam realidade
            </p>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6">
                Realizamos sonhos com excelência e carinho!
              </h2>
              <div className="h-1 w-24 bg-rose-400 mx-auto"></div>
            </div>
          </div>
        </header>

        {/* Main Message */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl text-rose-700 font-serif italic mb-4">
                "Meu casamento foi um sonho!
              </p>
              <p className="text-xl md:text-2xl text-gray-600 mb-2">
                A decoração está maravilhante e
              </p>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                todos os detalhes foram perfeitos:
              </p>
              <p className="text-xl md:text-2xl text-rose-600 font-semibold">
                a equipe da Ives Eventos foi incrível!"
              </p>
              <footer className="mt-4">
                <cite className="text-gray-500 not-italic">— Flávia —</cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-16 bg-rose-50">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-800 text-center mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold text-rose-700 mb-4">
                Experiência & Dedicação
              </h3>
              <p className="text-gray-600 text-lg">
                Serviços completos de buffet
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold text-rose-700 mb-4">
                Decoração elegante e sofisticada
              </h3>
              <p className="text-gray-600 text-lg">
                Decoração de alta qualidade
              </p>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-rose-800 mb-4">
              Assessoria de Eventos
            </h2>
            <p className="text-xl text-gray-600">
              Festas de 15 Anos | Casamentos
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-serif text-rose-800 text-center mb-6">
              Realize sua festa de 15 anos com encanto e sofisticação
            </h3>
            <p className="text-xl text-rose-600 text-center">
              Pacotes Completos para a sua festa inesquecível
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-serif text-rose-800 text-center mb-12">
            Depoimentos dos Nossos Clientes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {['Ana', 'Flávia', 'Roberta'].map((name, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center">
                    <span className="text-rose-600 font-semibold text-xl">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-700">{name}</h3>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 italic">
                  {index === 0 && "Uma experiência maravilhosa! Equipe profissional e atenciosa."}
                  {index === 1 && "Meu casamento foi perfeito! Todos os detalhes impecáveis."}
                  {index === 2 && "Realizaram o sonho da minha festa de 15 anos. Inesquecível!"}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center">
            <p className="text-lg text-rose-600 mb-2">✓ Sua festa é uma conquista</p>
            <p className="text-lg text-rose-600 mb-2">✓ Teste de confiança</p>
            <p className="text-lg text-rose-600 mb-2">✓ Seja o seu cliente mais feliz</p>
            <p className="text-lg text-rose-600">✓ Para nossa próxima plateia</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-rose-700 text-white rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif mb-4">
              Onde sonhos se tornam realidade
            </h2>
            <p className="text-xl mb-8">
              Faça do seu evento um momento inesquecível
            </p>
            <button className="bg-white text-rose-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-100 transition-colors transform hover:scale-105">
              Solicite um Orçamento
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-serif mb-4">Ives Eventos</h3>
            <p className="text-gray-300 mb-2">Assessoria de Eventos | Festas de 15 Anos | Casamentos</p>
            <p className="text-gray-300 mb-4">Eventos Especiais</p>
            <div className="h-px w-24 bg-rose-400 mx-auto mb-4"></div>
            <p className="text-sm text-gray-400">
              © 2024 Ives Eventos. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

// Helmet component for meta tags
const Helmet = ({ children }) => {
  return (
    <head>
      {children}
    </head>
  );
};

export default App;