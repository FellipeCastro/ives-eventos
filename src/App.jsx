import React, { useEffect, useState } from "react";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // SEO optimization
    useEffect(() => {
        document.title =
            "Ives Eventos - Assessoria de Eventos | Casamentos & 15 Anos";

        const metaDescription = document.querySelector(
            'meta[name="description"]',
        );
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Assessoria de eventos especializada em casamentos e festas de 15 anos. Experiência em buffet, decoração sofisticada e organização profissional.",
            );
        }
    }, []);

    // Intersection Observer for active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 },
        );

        ["home", "services", "testimonials", "contact"].forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            {/* Schema markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    name: "Ives Eventos",
                    description: "Assessoria de eventos",
                    priceRange: "$$",
                    areaServed: "Brasil",
                })}
            </script>

            {/* Navigation with Rose Background */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-rose-100">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo with Rose */}
                        <div className="flex items-center">
                            <span className="text-2xl font-light tracking-tight text-rose-600">
                                IVES
                            </span>
                            <span className="ml-2 text-xs tracking-[0.3em] text-rose-400 font-light uppercase">
                                Eventos
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-12">
                            {[
                                { id: "home", label: "Início" },
                                { id: "services", label: "Serviços" },
                                { id: "testimonials", label: "Experiências" },
                                { id: "contact", label: "Contato" },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm tracking-wide transition-all duration-300 ${
                                        activeSection === item.id
                                            ? "text-rose-600 font-medium"
                                            : "text-gray-600 hover:text-rose-500"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Contact Button - Rose */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-6 py-2.5 bg-rose-500 text-white text-sm tracking-wide hover:bg-rose-600 transition-all duration-300 rounded-full shadow-lg shadow-rose-200"
                            >
                                Fale Conosco
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-rose-600 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-6 border-t border-rose-100 animate-fadeIn bg-white">
                            {[
                                "Início",
                                "Serviços",
                                "Experiências",
                                "Contato",
                            ].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        scrollToSection(
                                            [
                                                "home",
                                                "services",
                                                "testimonials",
                                                "contact",
                                            ][index],
                                        )
                                    }
                                    className="block w-full text-left py-3 text-gray-600 hover:text-rose-600 transition-colors text-sm tracking-wide"
                                >
                                    {item}
                                </button>
                            ))}
                            <div className="pt-4 mt-2 border-t border-rose-100">
                                <button className="w-full px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300">
                                    Fale Conosco
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section - Rose Gradient */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-50"
            >
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
                </div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-sm tracking-[0.3em] text-rose-400 uppercase mb-6 block">
                            ✦ Ives Eventos ✦
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-800 mb-8 leading-[1.1]">
                            Onde sonhos se
                            <span className="block font-bold text-rose-500">
                                tornam realidade
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Realizamos momentos únicos com excelência e
                            dedicação. Assessoria completa para eventos que
                            merecem ser inesquecíveis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection("services")}
                                className="px-8 py-4 bg-rose-500 text-white text-sm tracking-wide hover:bg-rose-600 transition-all duration-300 min-w-[200px] rounded-full shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transform hover:-translate-y-1"
                            >
                                Conheça nossos serviços
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-8 py-4 border-2 border-rose-300 text-rose-600 text-sm tracking-wide hover:bg-rose-50 transition-all duration-300 min-w-[200px] rounded-full"
                            >
                                Solicitar orçamento
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-rose-200 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-rose-400 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Services Section - Rose Cards */}
            <section id="services" className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <span className="text-sm tracking-[0.3em] text-rose-400 uppercase mb-4 block">
                            Nossa Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                            Por que escolher a{" "}
                            <span className="font-bold text-rose-500">
                                Ives Eventos?
                            </span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Excelência e carinho em cada detalhe para
                            transformar seu evento em uma experiência
                            inesquecível.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="group relative bg-gradient-to-br from-rose-50 to-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100">
                            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-200 transition-colors">
                                <span className="text-3xl text-rose-500">
                                    ✦
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                                Experiência & Dedicação
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mais de uma década organizando eventos
                                memoráveis com profissionalismo e atenção aos
                                detalhes.
                            </p>
                            <div className="absolute bottom-6 right-6 text-4xl text-rose-100 group-hover:text-rose-200">
                                01
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="group relative bg-gradient-to-br from-rose-50 to-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100">
                            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-200 transition-colors">
                                <span className="text-3xl text-rose-500">
                                    🍽️
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                                Serviços Completos
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Buffet personalizado, decoração elegante e
                                organização completa para seu evento.
                            </p>
                            <div className="absolute bottom-6 right-6 text-4xl text-rose-100 group-hover:text-rose-200">
                                02
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="group relative bg-gradient-to-br from-rose-50 to-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100">
                            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-200 transition-colors">
                                <span className="text-3xl text-rose-500">
                                    🌸
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                                Decoração Sofisticada
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ambientes únicos e elegantes que refletem a
                                personalidade de cada cliente.
                            </p>
                            <div className="absolute bottom-6 right-6 text-4xl text-rose-100 group-hover:text-rose-200">
                                03
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Events Banner - Rose */}
            <section className="py-24 bg-gradient-to-r from-rose-400 to-rose-500 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-sm tracking-[0.3em] text-white/80 uppercase mb-4 block">
                            Edição Especial
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                            Festa de 15 anos com
                            <span className="font-bold block mt-2">
                                encanto e sofisticação
                            </span>
                        </h3>
                        <p className="text-white/90 mb-10 text-lg">
                            Pacotes exclusivos para uma celebração inesquecível
                        </p>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-10 py-4 bg-white text-rose-500 text-sm tracking-wide hover:bg-rose-50 transition-all duration-300 inline-block rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                        >
                            Conheça os pacotes
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-32 bg-rose-50/30">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <span className="text-sm tracking-[0.3em] text-rose-400 uppercase mb-4 block">
                            Depoimentos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                            Experiências que{" "}
                            <span className="font-bold text-rose-500">
                                marcam
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg relative border border-rose-100">
                            <div className="text-6xl text-rose-200 absolute top-4 right-8">
                                "
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center">
                                        <span className="text-2xl text-rose-500">
                                            FM
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-800">
                                            Flávia Mendes
                                        </h4>
                                        <p className="text-sm text-rose-400">
                                            Casamento • Dez 2025
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed italic">
                                    "Meu casamento foi um sonho! Cada detalhe
                                    pensado com carinho, uma organização
                                    impecável. A Ives Eventos superou todas as
                                    expectativas."
                                </p>
                                <div className="flex mt-4 text-rose-300">
                                    {"★".repeat(5)}
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg relative border border-rose-100">
                            <div className="text-6xl text-rose-200 absolute top-4 right-8">
                                "
                            </div>
                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center">
                                        <span className="text-2xl text-rose-500">
                                            MC
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-800">
                                            Mariana Costa
                                        </h4>
                                        <p className="text-sm text-rose-400">
                                            15 Anos • Jan 2026
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed italic">
                                    "Minha festa de 15 anos foi simplesmente
                                    perfeita. Profissionais incríveis que
                                    transformaram meu sonho em realidade."
                                </p>
                                <div className="flex mt-4 text-rose-300">
                                    {"★".repeat(5)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section - Rose */}
            <section id="contact" className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="text-sm tracking-[0.3em] text-rose-400 uppercase mb-4 block">
                                Contato
                            </span>
                            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                                Vamos conversar
                                <br />
                                sobre seu{" "}
                                <span className="font-bold text-rose-500">
                                    evento
                                </span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-12">
                                Entre em contato para começarmos a planejar
                                juntos um momento inesquecível.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center group">
                                    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                                        <span className="text-2xl text-rose-500">
                                            📞
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-400 mb-1">
                                            Telefone
                                        </p>
                                        <p className="text-gray-800 font-medium group-hover:text-rose-500 transition-colors">
                                            (11) 99999-9999
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center group">
                                    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                                        <span className="text-2xl text-rose-500">
                                            ✉️
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-400 mb-1">
                                            Email
                                        </p>
                                        <p className="text-gray-800 font-medium group-hover:text-rose-500 transition-colors">
                                            contato@iveseventos.com.br
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center group">
                                    <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                                        <span className="text-2xl text-rose-500">
                                            📍
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-400 mb-1">
                                            Endereço
                                        </p>
                                        <p className="text-gray-800 font-medium group-hover:text-rose-500 transition-colors">
                                            São Paulo, SP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-rose-50 to-white p-12 rounded-3xl shadow-xl border border-rose-100">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 tracking-wide">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 tracking-wide">
                                        Tipo de evento
                                    </label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white">
                                        <option>Casamento</option>
                                        <option>Festa de 15 Anos</option>
                                        <option>Evento Corporativo</option>
                                        <option>Outros</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2 tracking-wide">
                                        Mensagem
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white resize-none"
                                        placeholder="Conte um pouco sobre seu evento..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-rose-500 text-white text-sm tracking-wide hover:bg-rose-600 transition-all duration-300 rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 font-semibold"
                                >
                                    Enviar mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Rose */}
            <footer className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <div className="mb-6 md:mb-0 text-center md:text-left">
                            <span className="text-3xl font-bold text-white">
                                IVES
                            </span>
                            <span className="ml-2 text-sm tracking-[0.3em] text-white/80 font-light uppercase">
                                Eventos
                            </span>
                            <p className="text-white/80 mt-2 text-sm">
                                Onde sonhos se tornam realidade com excelência e
                                carinho.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <span className="text-white">📷</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <span className="text-white">👤</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <span className="sr-only">WhatsApp</span>
                                <span className="text-white">💬</span>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
                        <p>
                            © 2026 Ives Eventos. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
