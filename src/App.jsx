import React, { useEffect, useState, useRef } from "react";
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

import quinzeanos1 from "./assets/15anos-01.jpg";
import quinzeanos2 from "./assets/15anos-02.jpg";
import quinzeanos3 from "./assets/15anos-03.jpg";
import anoversario1 from "./assets/aniversario-01.jpg";
import anoversario2 from "./assets/aniversario-02.jpg";
import casamento1 from "./assets/casamento-01.jpg";
import casamento2 from "./assets/casamento-02.jpg";
import casamento3 from "./assets/casamento-03.jpg";
import corporativo1 from "./assets/corporativo-01.jpg";
import corporativo2 from "./assets/corporativo-02.jpg";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0,
    );
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [activeImageId, setActiveImageId] = useState(null);

    // Carrossel states
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const serviceCarouselRef = useRef(null);
    const testimonialCarouselRef = useRef(null);

    const phone = "5511951339598";
    const email = "iveseventosassessoria448@gmail.com";
    const instagram = "https://www.instagram.com/ives.eventos";
    const facebook = "https://www.facebook.com/ivone.rodrigues.7330";

    const phoneFormatted = `(${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`;

    const galleryImages = [
        {
            id: 1,
            src: casamento1,
            title: "Casamento Clássico",
            category: "Casamento",
            description: "Cerimônia elegante com decoração sofisticada",
        },
        {
            id: 2,
            src: casamento2,
            title: "Casamento na Natureza",
            category: "Casamento",
            description: "Ambiente ao ar livre com detalhes românticos",
        },
        {
            id: 3,
            src: casamento3,
            title: "Casamento Moderno",
            category: "Casamento",
            description: "Celebração contemporânea com estilo único",
        },
        {
            id: 4,
            src: quinzeanos1,
            title: "Festa de 15 Anos",
            category: "Debutante",
            description: "Celebração mágica com decoração encantadora",
        },
        {
            id: 5,
            src: quinzeanos2,
            title: "15 Anos Iluminado",
            category: "Debutante",
            description: "Estrutura com iluminação especial",
        },
        {
            id: 6,
            src: quinzeanos3,
            title: "Valsa dos Sonhos",
            category: "Debutante",
            description: "Momento especial da festa de debutante",
        },
        {
            id: 7,
            src: anoversario1,
            title: "Aniversário 50 Anos",
            category: "Aniversário",
            description: "Comemoração elegante com buffet completo",
        },
        {
            id: 8,
            src: anoversario2,
            title: "Festa Infantil",
            category: "Aniversário",
            description: "Tema safari com muita diversão",
        },
        {
            id: 9,
            src: corporativo1,
            title: "Evento Corporativo",
            category: "Corporativo",
            description: "Coffee break premium e estrutura profissional",
        },
        {
            id: 10,
            src: corporativo2,
            title: "Confraternização",
            category: "Corporativo",
            description: "Celebração empresarial com organização impecável",
        },
    ];

    const categories = [
        "Todos",
        "Casamento",
        "Debutante",
        "Corporativo",
        "Aniversário",
    ];
    const menuItems = [
        { id: "home", label: "Início" },
        { id: "services", label: "Serviços" },
        { id: "gallery", label: "Galeria" },
        { id: "testimonials", label: "Clientes" },
        { id: "contact", label: "Contato" },
    ];

    const filteredImages =
        selectedCategory === "Todos"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    const serviceCards = [
        {
            icon: (
                <FaHandHoldingHeart className="text-2xl sm:text-3xl text-rose-500" />
            ),
            title: "Experiência & Dedicação",
            desc: "Há mais de uma década realizando eventos memoráveis. Cada cliente é único e merece toda atenção e profissionalismo.",
            number: "01",
        },
        {
            icon: <FaUtensils className="text-2xl sm:text-3xl text-rose-500" />,
            title: "Serviços Completos",
            desc: "Cuidamos de toda programação e execução do menu juntamente com uma equipe de profissionais para melhor atender e servir seus convidados.",
            number: "02",
        },
        {
            icon: (
                <MdOutlineDesignServices className="text-2xl sm:text-3xl text-rose-500" />
            ),
            title: "Decoração dos Sonhos",
            desc: "Realizamos seu projeto para que tudo fique do jeuto que sempre sonhou, Tornando esse momento mais que especial.",
            number: "03",
        },
    ];

    const eventPackages = [
        {
            icon: <MdEvent className="text-4xl text-white" />,
            title: "Casamento",
            desc: "O dia mais esperado das suas vidas, planejado com todo cuidado e romantismo que vocês merecem.",
            features: [
                "Cerimônia personalizada",
                "Buffet completo",
                "Decoração dos sonhos",
                "Assessoria completa",
            ],
            whatsapp:
                "Olá, tenho interesse no pacote de *Casamento*. Gostaria de mais informações.",
        },
        {
            icon: <GiPartyPopper className="text-4xl text-white" />,
            title: "Festa de 15 Anos",
            desc: "Uma noite mágica para celebrar esta data tão especial com encanto e sofisticação.",
            features: [
                "Tema personalizado",
                "Valsa dos sonhos",
                "Decoração encantadora",
                "Cerimônia especial",
            ],
            whatsapp:
                "Olá, tenho interesse no pacote de *Festa de 15 Anos*. Gostaria de mais informações.",
        },
        {
            icon: <MdCelebration className="text-4xl text-white" />,
            title: "Corporativo",
            desc: "Eventos empresariais com profissionalismo e requinte para sua empresa.",
            features: [
                "Coffee break premium",
                "Estrutura completa",
                "Decoração executiva",
                "Organização profissional",
            ],
            whatsapp:
                "Olá, tenho interesse no pacote de *Eventos Corporativos*. Gostaria de mais informações.",
        },
        {
            icon: <BiCalendarHeart className="text-4xl text-white" />,
            title: "Aniversários",
            desc: "Celebre mais um ano de vida com uma festa inesquecível ao lado de quem você ama.",
            features: [
                "Tema à sua escolha",
                "Buffet personalizado",
                "Decoração temática",
                "Animação inclusa",
            ],
            whatsapp:
                "Olá, tenho interesse no pacote de *Aniversários*. Gostaria de mais informações.",
        },
    ];

    const testimonials = [
        {
            initials: "FM",
            name: "Flávia Mendes",
            event: "Casamento • Dez 2025",
            icon: <MdEvent size={12} />,
            text: "Meu casamento foi um sonho! A Ives Eventos cuidou de cada detalhe com tanto carinho que parecia que era o evento deles. Superou todas as minhas expectativas!",
        },
        {
            initials: "MC",
            name: "Mariana Costa",
            event: "15 Anos • Jan 2026",
            icon: <GiPartyPopper size={12} />,
            text: "Minha festa de 15 anos foi perfeita! A equipe da Ives entendeu exatamente o que eu queria e transformou em realidade. Recomendo de olhos fechados!",
        },
        {
            initials: "RA",
            name: "Ricardo Alves",
            event: "Evento Corporativo • Mar 2026",
            icon: <MdCelebration size={12} />,
            text: "Excelente organização! A Ives Eventos superou nossas expectativas no evento da empresa. Profissionais extremamente competentes e atenciosos.",
        },
        {
            initials: "CS",
            name: "Carla Souza",
            event: "Aniversário • Fev 2026",
            icon: <BiCalendarHeart size={12} />,
            text: "Minha festa de aniversário foi incrível! A decoração ficou perfeita e todos os convidados elogiaram. Recomendo muito!",
        },
    ];

    // Mobile-first: sempre 1 slide no mobile, 2 no tablet, 3 no desktop
    const getItemsPerView = () => {
        if (windowWidth < 640) return 1;
        if (windowWidth < 1024) return 2;
        return 3;
    };

    const itemsPerView = getItemsPerView();
    const totalServiceSlides = Math.ceil(eventPackages.length / itemsPerView);
    const totalTestimonialSlides = Math.ceil(
        testimonials.length / itemsPerView,
    );

    // Navegação do carrossel de serviços
    const nextServiceSlide = () => {
        setCurrentServiceIndex((prev) => (prev + 1) % totalServiceSlides);
    };

    const prevServiceSlide = () => {
        setCurrentServiceIndex(
            (prev) => (prev - 1 + totalServiceSlides) % totalServiceSlides,
        );
    };

    // Navegação do carrossel de depoimentos
    const nextTestimonialSlide = () => {
        setCurrentTestimonialIndex(
            (prev) => (prev + 1) % totalTestimonialSlides,
        );
    };

    const prevTestimonialSlide = () => {
        setCurrentTestimonialIndex(
            (prev) =>
                (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides,
        );
    };

    // Touch events para carrossel de serviços
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextServiceSlide();
        }
        if (touchStart - touchEnd < -50) {
            prevServiceSlide();
        }
        setTouchStart(0);
        setTouchEnd(0);
    };

    // Touch events para carrossel de depoimentos
    const handleTestimonialTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTestimonialTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTestimonialTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextTestimonialSlide();
        }
        if (touchStart - touchEnd < -50) {
            prevTestimonialSlide();
        }
        setTouchStart(0);
        setTouchEnd(0);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    const openWhatsApp = (message) => {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nome = formData.get("nome");
        const tipoEvento = formData.get("tipoEvento");
        const quantidadePessoas = formData.get("quantidadePessoas");
        const mensagem = formData.get("mensagem");

        const whatsappMessage = `Olá sou o(a) ${nome}, gostaria de solicitar um orçamento para um(a) ${tipoEvento} para ${quantidadePessoas} pessoas. ${mensagem}`;
        openWhatsApp(whatsappMessage);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Resetar índices quando o número de slides por visão mudar
    useEffect(() => {
        setCurrentServiceIndex(0);
        setCurrentTestimonialIndex(0);
    }, [itemsPerView]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (windowWidth < 640) {
                const galleryItems = document.querySelectorAll(".gallery-item");
                const clickedInside = Array.from(galleryItems).some((item) =>
                    item.contains(e.target),
                );
                if (!clickedInside) setActiveImageId(null);
            }
        };

        if (windowWidth < 640) {
            document.addEventListener("click", handleClickOutside);
            return () =>
                document.removeEventListener("click", handleClickOutside);
        }
    }, [windowWidth]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.3 },
        );

        menuItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
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

            {/* NAVBAR */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-rose-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-20">
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

                        <div className="hidden md:flex space-x-6 lg:space-x-12">
                            {menuItems.map((item) => (
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

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-rose-600 focus:outline-none p-2 cursor-pointer"
                        >
                            {isMenuOpen ? (
                                <FaTimes size={20} />
                            ) : (
                                <FaBars size={20} />
                            )}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-rose-100 animate-fadeIn bg-white/95 backdrop-blur-md">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left py-3 px-2 text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors text-sm tracking-wide rounded-lg cursor-pointer"
                                >
                                    {item.label}
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

            {/* HERO */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-50 via-white to-rose-50 pt-16 sm:pt-20"
            >
                <div className="absolute inset-0">
                    <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-4 sm:mb-6 flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
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

                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-rose-200 rounded-full flex justify-center">
                        <FaChevronDown
                            className="text-rose-400 animate-bounce mt-2"
                            size={10}
                        />
                    </div>
                </div>
            </section>

            {/* SERVICES CARDS */}
            <section
                id="services"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 flex items-center justify-center gap-1 sm:gap-2">
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
                        {serviceCards.map((service, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-linear-to-br from-rose-50 to-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rose-100"
                            >
                                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 group-hover:bg-rose-200 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 lg:mb-4 group-hover:text-rose-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-2xl sm:text-3xl lg:text-4xl text-rose-100 group-hover:text-rose-200">
                                    {service.number}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICE CAROUSEL - MOBILE FIRST */}
            <section className="py-16 sm:py-20 md:py-24 bg-linear-to-r from-rose-400 to-rose-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 border-4 border-white rounded-full translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8 sm:mb-10">
                            <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white/80 uppercase mb-3 sm:mb-4 block">
                                Serviços Especiais
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2">
                                Escolha o{" "}
                                <span className="font-bold">seu evento</span>
                            </h2>
                        </div>

                        {/* Carrossel Container */}
                        <div className="relative">
                            {/* Botão Anterior - Desktop */}
                            {windowWidth >= 1024 && (
                                <button
                                    onClick={prevServiceSlide}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center z-10 cursor-pointer"
                                >
                                    <FaChevronLeft size={20} />
                                </button>
                            )}

                            {/* Carrossel com arrasto */}
                            <div
                                ref={serviceCarouselRef}
                                className="overflow-hidden"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{
                                        transform: `translateX(-${currentServiceIndex * 100}%)`,
                                    }}
                                >
                                    {Array.from({
                                        length: totalServiceSlides,
                                    }).map((_, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            className="w-full shrink-0 px-2"
                                        >
                                            <div
                                                className={`grid gap-4 sm:gap-6 ${
                                                    itemsPerView === 1
                                                        ? "grid-cols-1"
                                                        : itemsPerView === 2
                                                          ? "grid-cols-2"
                                                          : "grid-cols-3"
                                                }`}
                                            >
                                                {eventPackages
                                                    .slice(
                                                        slideIndex *
                                                            itemsPerView,
                                                        slideIndex *
                                                            itemsPerView +
                                                            itemsPerView,
                                                    )
                                                    .map((service, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-full"
                                                        >
                                                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                                                                <div className="flex flex-col items-center text-center">
                                                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                                                        {
                                                                            service.icon
                                                                        }
                                                                    </div>
                                                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                                                                        {
                                                                            service.title
                                                                        }
                                                                    </h3>
                                                                    <p className="text-white/80 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                                                                        {
                                                                            service.desc
                                                                        }
                                                                    </p>
                                                                    <ul className="text-white/70 text-xs sm:text-sm space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                                                                        {service.features.map(
                                                                            (
                                                                                feature,
                                                                                i,
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        i
                                                                                    }
                                                                                >
                                                                                    ✓{" "}
                                                                                    {
                                                                                        feature
                                                                                    }
                                                                                </li>
                                                                            ),
                                                                        )}
                                                                    </ul>
                                                                    <button
                                                                        onClick={() =>
                                                                            openWhatsApp(
                                                                                service.whatsapp,
                                                                            )
                                                                        }
                                                                        className="px-4 sm:px-6 py-2 bg-white text-rose-500 rounded-full text-xs sm:text-sm font-semibold hover:bg-rose-50 transition-all duration-300 cursor-pointer"
                                                                    >
                                                                        Quero
                                                                        este
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Botão Próximo - Desktop */}
                            {windowWidth >= 1024 && (
                                <button
                                    onClick={nextServiceSlide}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center z-10 cursor-pointer"
                                >
                                    <FaChevronRight size={20} />
                                </button>
                            )}
                        </div>

                        {/* Dots - Mobile e Tablet */}
                        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                            {Array.from({ length: totalServiceSlides }).map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCurrentServiceIndex(index)
                                        }
                                        className={`transition-all duration-300 rounded-full cursor-pointer ${
                                            currentServiceIndex === index
                                                ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white"
                                                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/70"
                                        }`}
                                    />
                                ),
                            )}
                        </div>

                        {/* Botões Mobile - Navegação por setas abaixo */}
                        {windowWidth < 1024 && (
                            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
                                <button
                                    onClick={prevServiceSlide}
                                    className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                >
                                    <FaChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={nextServiceSlide}
                                    className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                >
                                    <FaChevronRight size={18} />
                                </button>
                            </div>
                        )}

                        <div className="text-center mt-8 sm:mt-10">
                            <p className="text-white/90 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                                Todos os pacotes incluem assessoria completa e
                                podem ser personalizados
                            </p>
                            <button
                                onClick={() =>
                                    openWhatsApp(
                                        "Olá, gostaria de solicitar um *orçamento personalizado* para meu evento.",
                                    )
                                }
                                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-rose-500 text-xs sm:text-sm tracking-wide hover:bg-rose-50 transition-all duration-300 rounded-full shadow-lg font-semibold cursor-pointer"
                            >
                                Solicitar orçamento personalizado
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section
                id="gallery"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-rose-50/30"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 flex items-center justify-center gap-1 sm:gap-2">
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
                            Explore nossos eventos organizados por categoria
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12">
                        {categories.map((categoria) => (
                            <button
                                key={categoria}
                                onClick={() => {
                                    setSelectedCategory(categoria);
                                    setActiveImageId(null);
                                }}
                                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                                    selectedCategory === categoria
                                        ? "bg-rose-500 text-white shadow-lg shadow-rose-200"
                                        : "bg-white text-gray-600 hover:bg-rose-100 hover:text-rose-600 border border-rose-200"
                                }`}
                            >
                                {categoria}
                            </button>
                        ))}
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="gallery-item group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                                onClick={() => {
                                    if (windowWidth < 640) {
                                        setActiveImageId(
                                            activeImageId === image.id
                                                ? null
                                                : image.id,
                                        );
                                    }
                                }}
                            >
                                <div className="aspect-3/4 sm:aspect-4/5 overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Overlay - Funciona com hover no desktop e clique no mobile */}
                                <div
                                    className={`absolute inset-0 bg-linear-to-t from-rose-900/95 via-rose-900/60 to-transparent transition-opacity duration-500 ${
                                        windowWidth < 640
                                            ? activeImageId === image.id
                                                ? "opacity-100"
                                                : "opacity-0 pointer-events-none"
                                            : "opacity-0 group-hover:opacity-100"
                                    }`}
                                >
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                                        <span className="text-[8px] sm:text-[10px] md:text-xs font-light text-rose-200 uppercase tracking-wider">
                                            {image.category}
                                        </span>
                                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-1 mb-1">
                                            {image.title}
                                        </h3>
                                        <p className="text-[10px] sm:text-xs text-rose-100 mb-2 sm:mb-3">
                                            {image.description}
                                        </p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(
                                                    instagram,
                                                    "_blank",
                                                );
                                            }}
                                            className="mt-1 sm:mt-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center gap-1 cursor-pointer"
                                        >
                                            <FaInstagram size={10} />
                                            <span>Mais informações</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Category Tag - Sempre visível */}
                                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white/90 backdrop-blur-sm px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium text-rose-600 shadow-lg flex items-center gap-0.5 sm:gap-1 z-10">
                                    {image.category === "Casamento" && (
                                        <MdEvent size={10} />
                                    )}
                                    {image.category === "Debutante" && (
                                        <GiPartyPopper size={10} />
                                    )}
                                    {image.category === "Formatura" && (
                                        <MdCelebration size={10} />
                                    )}
                                    {image.category === "Evento Especial" && (
                                        <BiCalendarHeart size={10} />
                                    )}
                                    <span>{image.category}</span>
                                </div>

                                {/* Badge de destaque */}
                                {image.id === 1 && (
                                    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-rose-500 text-white px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium shadow-lg flex items-center gap-0.5 sm:gap-1 z-10">
                                        <FaStar size={10} />
                                        <span>Destaque</span>
                                    </div>
                                )}

                                {/* Instrução para mobile - Aparece quando o overlay está fechado */}
                                {windowWidth < 640 &&
                                    activeImageId !== image.id && (
                                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-[10px] px-3 py-1 rounded-full flex items-center gap-1 z-10 pointer-events-none">
                                            <FaHandHoldingHeart size={10} />
                                            <span>Toque para ver detalhes</span>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">
                                Nenhum evento encontrado nesta categoria.
                            </p>
                        </div>
                    )}

                    <div className="text-center mt-8 sm:mt-10">
                        <button
                            onClick={() => window.open(instagram, "_blank")}
                            className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-rose-500 text-white text-xs sm:text-sm rounded-full hover:bg-rose-600 transition-all duration-300 shadow-lg shadow-rose-200 inline-flex items-center gap-2 cursor-pointer"
                        >
                            <FaCamera size={14} />
                            <span>Ver todos os eventos</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS CAROUSEL - MOBILE FIRST */}
            <section
                id="testimonials"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-16 lg:mb-20">
                        <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 flex items-center justify-center gap-1 sm:gap-2">
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

                    <div className="max-w-7xl mx-auto relative">
                        {/* Botão Anterior - Desktop */}
                        {windowWidth >= 1024 && (
                            <button
                                onClick={prevTestimonialSlide}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-rose-100 text-rose-500 w-10 h-10 rounded-full hover:bg-rose-200 transition-all duration-300 flex items-center justify-center z-10 cursor-pointer shadow-md"
                            >
                                <FaChevronLeft size={20} />
                            </button>
                        )}

                        {/* Carrossel com arrasto */}
                        <div
                            ref={testimonialCarouselRef}
                            className="overflow-hidden"
                            onTouchStart={handleTestimonialTouchStart}
                            onTouchMove={handleTestimonialTouchMove}
                            onTouchEnd={handleTestimonialTouchEnd}
                        >
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                                }}
                            >
                                {Array.from({
                                    length: totalTestimonialSlides,
                                }).map((_, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        className="w-full shrink-0 px-2"
                                    >
                                        <div
                                            className={`grid gap-4 sm:gap-6 ${
                                                itemsPerView === 1
                                                    ? "grid-cols-1"
                                                    : itemsPerView === 2
                                                      ? "grid-cols-2"
                                                      : "grid-cols-3"
                                            }`}
                                        >
                                            {testimonials
                                                .slice(
                                                    slideIndex * itemsPerView,
                                                    slideIndex * itemsPerView +
                                                        itemsPerView,
                                                )
                                                .map((testimonial, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="w-full"
                                                    >
                                                        <div className="bg-rose-50/50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg relative border border-rose-100 hover:shadow-xl transition-all duration-300 h-full">
                                                            <FaQuoteRight className="text-xl sm:text-2xl lg:text-3xl text-rose-200 absolute top-3 sm:top-4 right-3 sm:right-4" />
                                                            <div className="relative">
                                                                <div className="flex items-center mb-2 sm:mb-3 lg:mb-4">
                                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-rose-100 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                                                                        <span className="text-xs sm:text-sm lg:text-base font-bold text-rose-500">
                                                                            {
                                                                                testimonial.initials
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="ml-2 sm:ml-3">
                                                                        <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800">
                                                                            {
                                                                                testimonial.name
                                                                            }
                                                                        </h4>
                                                                        <p className="text-[10px] sm:text-xs text-rose-400 flex items-center gap-1">
                                                                            {
                                                                                testimonial.icon
                                                                            }
                                                                            <span>
                                                                                {
                                                                                    testimonial.event
                                                                                }
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 leading-relaxed italic">
                                                                    "
                                                                    {
                                                                        testimonial.text
                                                                    }
                                                                    "
                                                                </p>
                                                                <div className="flex mt-2 sm:mt-3 text-rose-300 gap-0.5">
                                                                    {[
                                                                        ...Array(
                                                                            5,
                                                                        ),
                                                                    ].map(
                                                                        (
                                                                            _,
                                                                            i,
                                                                        ) => (
                                                                            <FaStar
                                                                                key={
                                                                                    i
                                                                                }
                                                                                size={
                                                                                    10
                                                                                }
                                                                            />
                                                                        ),
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Botão Próximo - Desktop */}
                        {windowWidth >= 1024 && (
                            <button
                                onClick={nextTestimonialSlide}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-rose-100 text-rose-500 w-10 h-10 rounded-full hover:bg-rose-200 transition-all duration-300 flex items-center justify-center z-10 cursor-pointer shadow-md"
                            >
                                <FaChevronRight size={20} />
                            </button>
                        )}
                    </div>

                    {/* Dots - Mobile e Tablet */}
                    <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                        {Array.from({ length: totalTestimonialSlides }).map(
                            (_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setCurrentTestimonialIndex(index)
                                    }
                                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                                        currentTestimonialIndex === index
                                            ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-rose-500"
                                            : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-rose-300 hover:bg-rose-400"
                                    }`}
                                />
                            ),
                        )}
                    </div>

                    {/* Botões Mobile - Navegação por setas abaixo */}
                    {windowWidth < 1024 && (
                        <div className="flex justify-center gap-4 mt-6 sm:mt-8">
                            <button
                                onClick={prevTestimonialSlide}
                                className="bg-rose-100 text-rose-500 w-10 h-10 rounded-full hover:bg-rose-200 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
                            >
                                <FaChevronLeft size={18} />
                            </button>
                            <button
                                onClick={nextTestimonialSlide}
                                className="bg-rose-100 text-rose-500 w-10 h-10 rounded-full hover:bg-rose-200 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
                            >
                                <FaChevronRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CONTACT */}
            <section
                id="contact"
                className="py-16 sm:py-20 md:py-24 lg:py-32 bg-rose-50/30"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
                        <div>
                            <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-rose-400 uppercase mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2">
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
                                {[
                                    {
                                        icon: (
                                            <FaPhone className="text-lg sm:text-xl lg:text-2xl text-rose-500" />
                                        ),
                                        label: "Telefone",
                                        value: phoneFormatted,
                                        action: () =>
                                            window.open(
                                                `tel:+${phone}`,
                                                "_blank",
                                            ),
                                    },
                                    {
                                        icon: (
                                            <FaEnvelope className="text-lg sm:text-xl lg:text-2xl text-rose-500" />
                                        ),
                                        label: "Email",
                                        value: email,
                                        action: () =>
                                            window.open(
                                                `mailto:${email}`,
                                                "_blank",
                                            ),
                                    },
                                    {
                                        icon: (
                                            <FaMapMarkerAlt className="text-lg sm:text-xl lg:text-2xl text-rose-500" />
                                        ),
                                        label: "Localização",
                                        value: "São Paulo",
                                        action: null,
                                    },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex items-center group ${item.action ? "cursor-pointer" : ""}`}
                                        onClick={item.action || undefined}
                                    >
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-rose-100 transition-colors shadow-sm shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="ml-2 sm:ml-3 lg:ml-4">
                                            <p className="text-xs sm:text-sm text-gray-400 mb-0.5 sm:mb-1">
                                                {item.label}
                                            </p>
                                            <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-medium group-hover:text-rose-500 transition-colors break-all">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
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
                                        <option value="Debutante">
                                            Debutante
                                        </option>
                                        <option value="Corporativo">
                                            Corporativo
                                        </option>
                                        <option value="Aniversário">
                                            Aniversário
                                        </option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 tracking-wide">
                                        Quantidade de pessoas
                                    </label>
                                    <input
                                        type="number"
                                        name="quantidadePessoas"
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 outline-none transition-all bg-white text-sm sm:text-base"
                                        placeholder="Quantidade de pessoas"
                                    />
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
                                    />
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

            {/* FOOTER */}
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
                            {[
                                {
                                    href: instagram,
                                    icon: FaInstagram,
                                    label: "Instagram",
                                },
                                {
                                    href: facebook,
                                    icon: FaFacebookF,
                                    label: "Facebook",
                                },
                                {
                                    href: "#",
                                    icon: FaWhatsapp,
                                    label: "WhatsApp",
                                    action: () =>
                                        openWhatsApp(
                                            "Olá, gostaria de saber mais sobre os serviços da Ives Eventos.",
                                        ),
                                },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target={
                                        social.href !== "#"
                                            ? "_blank"
                                            : undefined
                                    }
                                    onClick={(e) => {
                                        if (social.action) {
                                            e.preventDefault();
                                            social.action();
                                        }
                                    }}
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                                    aria-label={social.label}
                                >
                                    <social.icon
                                        size={
                                            windowWidth < 640
                                                ? 16
                                                : windowWidth < 1024
                                                  ? 18
                                                  : 20
                                        }
                                    />
                                </a>
                            ))}
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
