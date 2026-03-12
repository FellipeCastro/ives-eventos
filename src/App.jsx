import React, { useEffect, useState } from "react";
import {
    FaStar,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaQuoteRight,
    FaRegGem,
    FaUtensils,
    FaChevronDown,
    FaBars,
    FaTimes,
    FaHeart,
    FaSmile,
    FaHandHoldingHeart,
    FaChevronLeft,
    FaChevronRight,
    FaCamera,
} from "react-icons/fa";
import {
    MdEvent,
    MdCelebration,
    MdOutlineDesignServices,
    MdMessage,
} from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";
import { BiUser, BiCalendarHeart } from "react-icons/bi";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0,
    );
    const [currentServiceSlide, setCurrentServiceSlide] = useState(0);

    const nextServiceSlide = () => {
        setCurrentServiceSlide((prev) => (prev + 1) % 4);
    };

    const prevServiceSlide = () => {
        setCurrentServiceSlide((prev) => (prev - 1 + 4) % 4);
    };

    // Gallery images data
    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Casamento na Praia",
            category: "Casamento",
            description: "Cerimônia intimista com decoração em rosas",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Festa de 15 Anos",
            category: "Debutante",
            description: "Tema floral com iluminação especial",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Casamento Clássico",
            category: "Casamento",
            description: "Decoração elegante com velas e flores",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Aniversário de 50 anos",
            category: "Evento Especial",
            description: "Festa surpresa com buffet completo",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Casamento no Campo",
            category: "Casamento",
            description: "Cerimônia rústica com elementos naturais",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Festa de Formatura",
            category: "Formatura",
            description: "Noite de gala para novos profissionais",
        },
    ];

    // Detectar largura da tela para responsividade do carrossel
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calcular número de imagens por slide baseado na largura da tela
    const getImagesPerSlide = () => {
        if (windowWidth < 640) return 1; // mobile
        if (windowWidth < 1024) return 2; // tablet
        return 3; // desktop
    };

    const imagesPerSlide = getImagesPerSlide();
    const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

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
                "A Ives Eventos é especialista em casamentos e festas de 15 anos. Oferece experiência em buffet, decoração sofisticada e organização profissional para eventos dos sonhos.",
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
            { threshold: 0.3 },
        );

        ["home", "services", "gallery", "testimonials", "contact"].forEach(
            (id) => {
                const element = document.getElementById(id);
                if (element) observer.observe(element);
            },
        );

        return () => observer.disconnect();
    }, []);

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide, totalSlides]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // altura do header
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
        setIsMenuOpen(false);
    };

    // Funções para WhatsApp com mensagens personalizadas
    const openWhatsApp = (message) => {
        const phoneNumber = "5511999999999"; // Substitua pelo número real
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nome = formData.get("nome");
        const email = formData.get("email");
        const tipoEvento = formData.get("tipoEvento");
        const mensagem = formData.get("mensagem");

        const whatsappMessage = `Olá, gostaria de solicitar um orçamento:%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Tipo de Evento:* ${tipoEvento}%0A*Mensagem:* ${mensagem}`;

        openWhatsApp(whatsappMessage);
    };

    return (
        <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
            {/* Schema markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    name: "Ives Eventos",
                    description: "Assessoria de eventos especializada",
                    priceRange: "$$",
                    areaServed: "Brasil",
                })}
            </script>

            {/* Navigation with Rose Background */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-rose-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo with Rose */}
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => scrollToSection("home")}
                        >
                            <FaHeart className="text-xl sm:text-2xl text-rose-500 mr-1 sm:mr-2" />
                            <span className="text-xl sm:text-2xl font-light tracking-tight text-rose-600">
                                IVES
                            </span>
                            <span className="hidden xs:inline ml-1 sm:ml-2 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 font-light uppercase">
                                Eventos
                            </span>
                        </div>

                        {/* Desktop Menu - Hidden on mobile */}
                        <div className="hidden md:flex space-x-6 lg:space-x-12">
                            {[
                                { id: "home", label: "Início" },
                                { id: "services", label: "Serviços" },
                                { id: "gallery", label: "Galeria" },
                                { id: "testimonials", label: "Clientes" },
                                { id: "contact", label: "Contato" },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-xs lg:text-sm tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                                        activeSection === item.id
                                            ? "text-rose-600 font-medium"
                                            : "text-gray-600 hover:text-rose-500"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Contact Button - Desktop */}
                        <div className="hidden md:block">
                            <button
                                onClick={() =>
                                    openWhatsApp(
                                        "Olá, gostaria de saber mais sobre os serviços da Ives Eventos.",
                                    )
                                }
                                className="px-4 lg:px-6 py-2 lg:py-2.5 bg-rose-500 text-white text-xs lg:text-sm tracking-wide hover:bg-rose-600 transition-all duration-300 rounded-full shadow-lg shadow-rose-200 flex items-center gap-1 lg:gap-2 whitespace-nowrap cursor-pointer"
                            >
                                <FaPhone className="text-xs lg:text-sm" />
                                <span>Entre em contato</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-rose-600 focus:outline-none p-2 cursor-pointer"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? (
                                <FaTimes size={20} />
                            ) : (
                                <FaBars size={20} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu - Dropdown */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-rose-100 animate-fadeIn bg-white/95 backdrop-blur-md">
                            {[
                                "Início",
                                "Serviços",
                                "Galeria",
                                "Clientes",
                                "Contato",
                            ].map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        scrollToSection(
                                            [
                                                "home",
                                                "services",
                                                "gallery",
                                                "testimonials",
                                                "contact",
                                            ][index],
                                        )
                                    }
                                    className="block w-full text-left py-3 px-2 text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors text-sm tracking-wide rounded-lg cursor-pointer"
                                >
                                    {item}
                                </button>
                            ))}
                            <div className="pt-4 mt-2 border-t border-rose-100">
                                <button
                                    onClick={() =>
                                        openWhatsApp(
                                            "Olá, gostaria de saber mais sobre os serviços da Ives Eventos.",
                                        )
                                    }
                                    className="w-full px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer"
                                >
                                    <FaPhone className="text-sm" />
                                    Entre em contato
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section - Rose Gradient */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-50 via-white to-rose-50 pt-16 sm:pt-20"
            >
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-4 sm:mb-6 block flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                            <FaHandHoldingHeart className="text-rose-400 text-sm sm:text-base" />
                            <span>Ives Eventos</span>
                            <FaHandHoldingHeart className="text-rose-400 text-sm sm:text-base" />
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-800 mb-4 sm:mb-8 leading-tight sm:leading-[1.1] px-2">
                            Onde sonhos se
                            <span className="block font-bold text-rose-500 mt-2 sm:mt-0">
                                tornam realidade
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                            A Ives Eventos transforma momentos especiais em
                            memórias inesquecíveis. Com mais de uma década de
                            experiência, oferece dedicação e excelência em cada
                            detalhe.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                            <button
                                onClick={() => scrollToSection("services")}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-rose-500 text-white text-xs sm:text-sm tracking-wide hover:bg-rose-600 transition-all duration-300 rounded-full shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                            >
                                <MdEvent className="text-sm sm:text-base" />
                                <span>Conheça os serviços</span>
                            </button>
                            <button
                                onClick={() =>
                                    openWhatsApp(
                                        "Olá, gostaria de solicitar um orçamento para meu evento.",
                                    )
                                }
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-rose-300 text-rose-600 text-xs sm:text-sm tracking-wide hover:bg-rose-50 transition-all duration-300 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                            >
                                <FaRegGem className="text-sm sm:text-base" />
                                <span>Solicite um orçamento</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-rose-200 rounded-full flex justify-center">
                        <FaChevronDown
                            className="text-rose-400 animate-bounce mt-2"
                            size={10}
                        />
                    </div>
                </div>
            </section>

            {/* Services Section - Rose Cards */}
            <section
                id="services"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 block flex items-center justify-center gap-1 sm:gap-2">
                            <BiUser className="text-sm sm:text-base" />
                            <span>Serviços</span>
                            <BiUser className="text-sm sm:text-base" />
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4 sm:mb-6 px-2">
                            Por que escolher a{" "}
                            <span className="font-bold text-rose-500">
                                Ives Eventos?
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                            A Ives Eventos coloca todo seu coração e experiência
                            em cada detalhe para que seu evento seja exatamente
                            como você sonhou.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {/* Service 1 */}
                        <div className="group relative bg-linear-to-br from-rose-50 to-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100">
                            <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 group-hover:bg-rose-200 transition-colors">
                                <FaHandHoldingHeart className="text-xl sm:text-2xl lg:text-3xl text-rose-500" />
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-4 group-hover:text-rose-600 transition-colors">
                                Experiência & Dedicação
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Há mais de uma década realizando eventos
                                memoráveis. Cada cliente é único e merece toda
                                atenção e profissionalismo.
                            </p>
                            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-2xl sm:text-3xl lg:text-4xl text-rose-100 group-hover:text-rose-200">
                                01
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="group relative bg-linear-to-br from-rose-50 to-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100">
                            <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 group-hover:bg-rose-200 transition-colors">
                                <FaUtensils className="text-xl sm:text-2xl lg:text-3xl text-rose-500" />
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-4 group-hover:text-rose-600 transition-colors">
                                Serviços Completos
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Cuida de tudo: buffet personalizado, decoração
                                elegante e organização completa. Você só precisa
                                aproveitar.
                            </p>
                            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-2xl sm:text-3xl lg:text-4xl text-rose-100 group-hover:text-rose-200">
                                02
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="group relative bg-linear-to-br from-rose-50 to-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100 sm:col-span-2 lg:col-span-1">
                            <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 group-hover:bg-rose-200 transition-colors">
                                <MdOutlineDesignServices className="text-xl sm:text-2xl lg:text-3xl text-rose-500" />
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-4 group-hover:text-rose-600 transition-colors">
                                Decoração Sofisticada
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Cria ambientes que refletem sua personalidade.
                                Cada detalhe é pensado para tornar seu momento
                                ainda mais especial.
                            </p>
                            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-2xl sm:text-3xl lg:text-4xl text-rose-100 group-hover:text-rose-200">
                                03
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Events Banner - Rose */}
            <section className="py-16 sm:py-20 md:py-24 bg-linear-to-r from-rose-400 to-rose-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white/80 uppercase mb-3 sm:mb-4 block">
                                Serviços Especiais
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2">
                                Escolha o{" "}
                                <span className="font-bold">seu evento</span>
                            </h2>
                        </div>

                        {/* Carrossel de Serviços */}
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-out gap-4"
                                    style={{
                                        transform: `translateX(-${currentServiceSlide * 100}%)`,
                                    }}
                                >
                                    {/* Card Casamento */}
                                    <div className="w-full flex-shrink-0 px-2">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                                    <MdEvent className="text-4xl text-white" />
                                                </div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                                    Casamento
                                                </h3>
                                                <p className="text-white/80 text-sm sm:text-base mb-6">
                                                    O dia mais esperado das suas
                                                    vidas, planejado com todo
                                                    cuidado e romantismo que
                                                    vocês merecem.
                                                </p>
                                                <ul className="text-white/70 text-sm space-y-2 mb-6">
                                                    <li>
                                                        ✓ Cerimônia
                                                        personalizada
                                                    </li>
                                                    <li>✓ Buffet completo</li>
                                                    <li>
                                                        ✓ Decoração dos sonhos
                                                    </li>
                                                    <li>
                                                        ✓ Assessoria completa
                                                    </li>
                                                </ul>
                                                <button
                                                    onClick={() =>
                                                        openWhatsApp(
                                                            "Olá, tenho interesse no pacote de *Casamento*. Gostaria de mais informações.",
                                                        )
                                                    }
                                                    className="px-6 py-2 bg-white text-rose-500 rounded-full text-sm font-semibold hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                                                >
                                                    Quero este
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 15 Anos */}
                                    <div className="w-full flex-shrink-0 px-2">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                                    <GiPartyPopper className="text-4xl text-white" />
                                                </div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                                    Festa de 15 Anos
                                                </h3>
                                                <p className="text-white/80 text-sm sm:text-base mb-6">
                                                    Uma noite mágica para
                                                    celebrar esta data tão
                                                    especial com encanto e
                                                    sofisticação.
                                                </p>
                                                <ul className="text-white/70 text-sm space-y-2 mb-6">
                                                    <li>
                                                        ✓ Tema personalizado
                                                    </li>
                                                    <li>✓ Valsa dos sonhos</li>
                                                    <li>
                                                        ✓ Decoração encantadora
                                                    </li>
                                                    <li>
                                                        ✓ Cerimônia especial
                                                    </li>
                                                </ul>
                                                <button
                                                    onClick={() =>
                                                        openWhatsApp(
                                                            "Olá, tenho interesse no pacote de *Festa de 15 Anos*. Gostaria de mais informações.",
                                                        )
                                                    }
                                                    className="px-6 py-2 bg-white text-rose-500 rounded-full text-sm font-semibold hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                                                >
                                                    Quero este
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Eventos Corporativos */}
                                    <div className="w-full flex-shrink-0 px-2">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                                    <MdCelebration className="text-4xl text-white" />
                                                </div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                                    Corporativo
                                                </h3>
                                                <p className="text-white/80 text-sm sm:text-base mb-6">
                                                    Eventos empresariais com
                                                    profissionalismo e requinte
                                                    para sua empresa.
                                                </p>
                                                <ul className="text-white/70 text-sm space-y-2 mb-6">
                                                    <li>
                                                        ✓ Coffee break premium
                                                    </li>
                                                    <li>
                                                        ✓ Estrutura completa
                                                    </li>
                                                    <li>
                                                        ✓ Decoração executiva
                                                    </li>
                                                    <li>
                                                        ✓ Organização
                                                        profissional
                                                    </li>
                                                </ul>
                                                <button
                                                    onClick={() =>
                                                        openWhatsApp(
                                                            "Olá, tenho interesse no pacote de *Eventos Corporativos*. Gostaria de mais informações.",
                                                        )
                                                    }
                                                    className="px-6 py-2 bg-white text-rose-500 rounded-full text-sm font-semibold hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                                                >
                                                    Quero este
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Aniversário */}
                                    <div className="w-full flex-shrink-0 px-2">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                                    <BiCalendarHeart className="text-4xl text-white" />
                                                </div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                                    Aniversários
                                                </h3>
                                                <p className="text-white/80 text-sm sm:text-base mb-6">
                                                    Celebre mais um ano de vida
                                                    com uma festa inesquecível
                                                    ao lado de quem você ama.
                                                </p>
                                                <ul className="text-white/70 text-sm space-y-2 mb-6">
                                                    <li>
                                                        ✓ Tema à sua escolha
                                                    </li>
                                                    <li>
                                                        ✓ Buffet personalizado
                                                    </li>
                                                    <li>
                                                        ✓ Decoração temática
                                                    </li>
                                                    <li>✓ Animação inclusa</li>
                                                </ul>
                                                <button
                                                    onClick={() =>
                                                        openWhatsApp(
                                                            "Olá, tenho interesse no pacote de *Aniversários*. Gostaria de mais informações.",
                                                        )
                                                    }
                                                    className="px-6 py-2 bg-white text-rose-500 rounded-full text-sm font-semibold hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                                                >
                                                    Quero este
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botões de Navegação */}
                            <button
                                onClick={prevServiceSlide}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                            >
                                <FaChevronLeft size={20} />
                            </button>

                            <button
                                onClick={nextServiceSlide}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                            >
                                <FaChevronRight size={20} />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-6">
                                {[0, 1, 2, 3].map((index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCurrentServiceSlide(index)
                                        }
                                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                                            currentServiceSlide === index
                                                ? "w-8 h-2 bg-white"
                                                : "w-2 h-2 bg-white/50 hover:bg-white/70"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <p className="text-white/90 text-sm sm:text-base mb-4">
                                Todos os pacotes incluem assessoria completa e
                                podem ser personalizados
                            </p>
                            <button
                                onClick={() =>
                                    openWhatsApp(
                                        "Olá, gostaria de solicitar um *orçamento personalizado* para meu evento.",
                                    )
                                }
                                className="px-8 py-3 bg-white text-rose-500 text-sm tracking-wide hover:bg-rose-50 transition-all duration-300 rounded-full shadow-lg font-semibold cursor-pointer"
                            >
                                Solicitar orçamento personalizado
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - Carousel */}
            <section
                id="gallery"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-rose-50/30"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 block flex items-center justify-center gap-1 sm:gap-2">
                            <FaCamera className="text-sm sm:text-base" />
                            <span>Galeria</span>
                            <FaCamera className="text-sm sm:text-base" />
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-3 sm:mb-4 lg:mb-6 px-2">
                            Momentos que já{" "}
                            <span className="font-bold text-rose-500">
                                realizamos
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                            Cada foto representa um sonho realizado com muito
                            carinho e dedicação
                        </p>
                    </div>

                    {/* Carousel */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Main Carousel */}
                        <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                }}
                            >
                                {Array.from({ length: totalSlides }).map(
                                    (_, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            className="w-full flex-shrink-0"
                                        >
                                            <div
                                                className={`grid gap-3 sm:gap-4 lg:gap-6 p-1 sm:p-2 ${
                                                    imagesPerSlide === 1
                                                        ? "grid-cols-1"
                                                        : imagesPerSlide === 2
                                                          ? "grid-cols-2"
                                                          : "grid-cols-3"
                                                }`}
                                            >
                                                {galleryImages
                                                    .slice(
                                                        slideIndex *
                                                            imagesPerSlide,
                                                        slideIndex *
                                                            imagesPerSlide +
                                                            imagesPerSlide,
                                                    )
                                                    .map((image) => (
                                                        <div
                                                            key={image.id}
                                                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                                        >
                                                            <div className="aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                                                                <img
                                                                    src={
                                                                        image.src
                                                                    }
                                                                    alt={
                                                                        image.title
                                                                    }
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                    loading="lazy"
                                                                />
                                                            </div>

                                                            {/* Overlay with info */}
                                                            <div className="absolute inset-0 bg-linear-to-t from-rose-900/90 via-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                                                                    <span className="text-[10px] sm:text-xs font-light text-rose-200 uppercase tracking-wider">
                                                                        {
                                                                            image.category
                                                                        }
                                                                    </span>
                                                                    <h3 className="text-sm sm:text-base lg:text-xl font-semibold mt-1 mb-1 lg:mb-2">
                                                                        {
                                                                            image.title
                                                                        }
                                                                    </h3>
                                                                    <p className="text-xs sm:text-sm text-rose-100 hidden sm:block">
                                                                        {
                                                                            image.description
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Category Tag */}
                                                            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-rose-600 shadow-lg">
                                                                {image.category}
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
                        {totalSlides > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-rose-500 w-8 h-8 lg:w-12 lg:h-12 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300 items-center justify-center z-10 cursor-pointer"
                                    aria-label="Anterior"
                                >
                                    <FaChevronLeft
                                        size={windowWidth < 1024 ? 16 : 20}
                                    />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-rose-500 w-8 h-8 lg:w-12 lg:h-12 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300 items-center justify-center z-10 cursor-pointer"
                                    aria-label="Próximo"
                                >
                                    <FaChevronRight
                                        size={windowWidth < 1024 ? 16 : 20}
                                    />
                                </button>
                            </>
                        )}

                        {/* Dots Indicator */}
                        {totalSlides > 1 && (
                            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 lg:mt-8">
                                {Array.from({ length: totalSlides }).map(
                                    (_, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setCurrentSlide(index)
                                            }
                                            className={`transition-all duration-300 rounded-full cursor-pointer ${
                                                currentSlide === index
                                                    ? "w-4 sm:w-6 lg:w-8 h-1.5 sm:h-2 bg-rose-500"
                                                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-rose-200 hover:bg-rose-300"
                                            }`}
                                            aria-label={`Ir para slide ${index + 1}`}
                                        />
                                    ),
                                )}
                            </div>
                        )}

                        {/* Mobile Navigation Arrows */}
                        {totalSlides > 1 && windowWidth < 640 && (
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white/90 backdrop-blur-sm text-rose-500 w-10 h-10 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                                >
                                    <FaChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-white/90 backdrop-blur-sm text-rose-500 w-10 h-10 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
                                >
                                    <FaChevronRight size={16} />
                                </button>
                            </div>
                        )}

                        {/* Counter */}
                        <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-rose-400">
                            <span className="font-semibold">
                                {currentSlide * imagesPerSlide + 1}-
                                {Math.min(
                                    (currentSlide + 1) * imagesPerSlide,
                                    galleryImages.length,
                                )}
                            </span>
                            <span> de {galleryImages.length} eventos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonials"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 md:mb-16 lg:mb-20">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 block flex items-center justify-center gap-1 sm:gap-2">
                            <FaQuoteRight className="text-sm sm:text-base" />
                            <span>Depoimentos</span>
                            <FaQuoteRight className="text-sm sm:text-base" />
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-3 sm:mb-4 lg:mb-6 px-2">
                            O que dizem{" "}
                            <span className="font-bold text-rose-500">
                                nossos clientes
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                        {/* Testimonial 1 */}
                        <div className="bg-rose-50/50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg relative border border-rose-100 hover:shadow-xl transition-all duration-300">
                            <FaQuoteRight className="text-2xl sm:text-3xl lg:text-4xl text-rose-200 absolute top-3 sm:top-4 right-3 sm:right-4 lg:right-8" />
                            <div className="relative">
                                <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm sm:text-base lg:text-2xl font-bold text-rose-500">
                                            FM
                                        </span>
                                    </div>
                                    <div className="ml-2 sm:ml-3 lg:ml-4">
                                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                                            Flávia Mendes
                                        </h4>
                                        <p className="text-xs sm:text-sm text-rose-400 flex items-center gap-1">
                                            <MdEvent size={12} />
                                            <span>Casamento • Dez 2025</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed italic">
                                    "Meu casamento foi um sonho! A Ives Eventos
                                    cuidou de cada detalhe com tanto carinho que
                                    parecia que era o evento deles. Superou
                                    todas as minhas expectativas!"
                                </p>
                                <div className="flex mt-2 sm:mt-3 lg:mt-4 text-rose-300 gap-0.5 sm:gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={12} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-rose-50/50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg relative border border-rose-100 hover:shadow-xl transition-all duration-300">
                            <FaQuoteRight className="text-2xl sm:text-3xl lg:text-4xl text-rose-200 absolute top-3 sm:top-4 right-3 sm:right-4 lg:right-8" />
                            <div className="relative">
                                <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm sm:text-base lg:text-2xl font-bold text-rose-500">
                                            MC
                                        </span>
                                    </div>
                                    <div className="ml-2 sm:ml-3 lg:ml-4">
                                        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                                            Mariana Costa
                                        </h4>
                                        <p className="text-xs sm:text-sm text-rose-400 flex items-center gap-1">
                                            <GiPartyPopper size={12} />
                                            <span>15 Anos • Jan 2026</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed italic">
                                    "Minha festa de 15 anos foi perfeita! A
                                    equipe da Ives entendeu exatamente o que eu
                                    queria e transformou em realidade. Recomendo
                                    de olhos fechados!"
                                </p>
                                <div className="flex mt-2 sm:mt-3 lg:mt-4 text-rose-300 gap-0.5 sm:gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={12} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section - Rose */}
            <section
                id="contact"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-rose-50/30"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
                        <div>
                            <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 block flex items-center gap-1 sm:gap-2">
                                <FaHeart className="text-sm sm:text-base" />
                                <span>Contato</span>
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-3 sm:mb-4 lg:mb-6">
                                Vamos conversar
                                <br className="hidden sm:block" />
                                sobre o{" "}
                                <span className="font-bold text-rose-500">
                                    seu evento
                                </span>
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-12">
                                Entre em contato para começar a planejar juntos
                                esse momento especial. A Ives Eventos está
                                pronta para realizar seu sonho.
                            </p>

                            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                                <div
                                    className="flex items-center group cursor-pointer"
                                    onClick={() =>
                                        openWhatsApp(
                                            "Olá, gostaria de falar com a Ives Eventos pelo telefone.",
                                        )
                                    }
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors shadow-sm flex-shrink-0">
                                        <FaPhone className="text-lg sm:text-xl lg:text-2xl text-rose-500" />
                                    </div>
                                    <div className="ml-2 sm:ml-3 lg:ml-4">
                                        <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">
                                            Telefone
                                        </p>
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-medium group-hover:text-rose-500 transition-colors">
                                            (11) 99999-9999
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center group cursor-pointer"
                                    onClick={() =>
                                        openWhatsApp(
                                            "Olá, gostaria de enviar um email para a Ives Eventos.",
                                        )
                                    }
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors shadow-sm flex-shrink-0">
                                        <FaEnvelope className="text-lg sm:text-xl lg:text-2xl text-rose-500" />
                                    </div>
                                    <div className="ml-2 sm:ml-3 lg:ml-4">
                                        <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">
                                            Email
                                        </p>
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-medium group-hover:text-rose-500 transition-colors break-all">
                                            contato@iveseventos.com.br
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors shadow-sm flex-shrink-0">
                                        <FaMapMarkerAlt className="text-lg sm:text-xl lg:text-2xl text-rose-500" />
                                    </div>
                                    <div className="ml-2 sm:ml-3 lg:ml-4">
                                        <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">
                                            Localização
                                        </p>
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-medium group-hover:text-rose-500 transition-colors">
                                            São Paulo - Atende todo Brasil
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 sm:p-6 lg:p-8 xl:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-rose-100">
                            <form
                                onSubmit={handleFormSubmit}
                                className="space-y-3 sm:space-y-4 lg:space-y-6"
                            >
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 tracking-wide">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        name="nome"
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white text-sm sm:text-base"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 tracking-wide">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white text-sm sm:text-base"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 tracking-wide">
                                        Tipo de evento
                                    </label>
                                    <select
                                        name="tipoEvento"
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white text-sm sm:text-base"
                                    >
                                        <option value="Casamento">
                                            Casamento
                                        </option>
                                        <option value="Festa de 15 Anos">
                                            Festa de 15 Anos
                                        </option>
                                        <option value="Evento Corporativo">
                                            Evento Corporativo
                                        </option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 tracking-wide">
                                        Mensagem
                                    </label>
                                    <textarea
                                        name="mensagem"
                                        rows="3"
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white resize-none text-sm sm:text-base"
                                        placeholder="Conte um pouco sobre seu evento..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-rose-500 text-white text-xs sm:text-sm tracking-wide hover:bg-rose-600 transition-all duration-300 rounded-lg sm:rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 font-semibold flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <MdMessage className="text-sm sm:text-base" />
                                    <span>Enviar mensagem</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Rose */}
            <footer className="bg-linear-to-r from-rose-500 to-rose-600 text-white py-8 sm:py-10 lg:py-12 xl:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 lg:mb-12">
                        <div className="mb-4 sm:mb-0 text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start">
                                <FaHeart className="text-xl sm:text-2xl lg:text-3xl mr-1 sm:mr-2" />
                                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                                    IVES
                                </span>
                                <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/80 font-light uppercase">
                                    Eventos
                                </span>
                            </div>
                            <p className="text-white/80 mt-1 sm:mt-2 text-xs sm:text-sm">
                                Realizando sonhos com excelência e carinho desde
                                2015.
                            </p>
                        </div>
                        <div className="flex space-x-2 sm:space-x-3 lg:space-x-4">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openWhatsApp(
                                        "Olá, gostaria de acompanhar a Ives Eventos no Instagram.",
                                    );
                                }}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                                aria-label="Instagram"
                            >
                                <FaInstagram
                                    size={
                                        windowWidth < 640
                                            ? 16
                                            : windowWidth < 1024
                                              ? 18
                                              : 20
                                    }
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openWhatsApp(
                                        "Olá, gostaria de acompanhar a Ives Eventos no Facebook.",
                                    );
                                }}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF
                                    size={
                                        windowWidth < 640
                                            ? 16
                                            : windowWidth < 1024
                                              ? 18
                                              : 20
                                    }
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openWhatsApp(
                                        "Olá, gostaria de falar com a Ives Eventos pelo WhatsApp.",
                                    );
                                }}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp
                                    size={
                                        windowWidth < 640
                                            ? 16
                                            : windowWidth < 1024
                                              ? 18
                                              : 20
                                    }
                                />
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-white/20 pt-4 sm:pt-6 lg:pt-8 text-center text-white/80 text-[10px] sm:text-xs">
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
