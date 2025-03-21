import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, Linkedin, ChevronLeft, ChevronRight, Send, Pencil, CheckCircle, FileDown, HeartHandshake } from 'lucide-react';
import landingBg from './public/assets/images/landingBg.jpg';
import logo from './public/assets/images/Logo Dental Design.svg';
import videoSource from './public/assets/demo_conception_chassis_DentalDesignV2.mp4'
import imageService from './public/assets/images/1.png'

// gallery Images imports
import image0 from "./public/assets/images/carrousel/image0.jpg";
import image1 from "./public/assets/images/carrousel/image1.png";
import image2 from "./public/assets/images/carrousel/image2.jpg";
import image3 from "./public/assets/images/carrousel/image3.jpg";
import image4 from "./public/assets/images/carrousel/image4.png";
import image5 from "./public/assets/images/carrousel/image5.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const galleryImages = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5
  ];

  const instagram = 'https://www.instagram.com/dentall_design/';
  const linkedin = 'https://www.linkedin.com/in/dental-design-1690722b1/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=fr';

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true); // Start fading out

      // Wait for 250ms before actually changing the slide
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length); // Change the slide
      }, 400);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true); // Start fading out

      // Wait for 250ms before actually changing the slide
      setTimeout(() => {
        setCurrentSlide(
          (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        ); // Change the slide
      }, 400);
    }
  };

  useEffect(() => {
    // Set an interval to change slides every 3 seconds (3000ms)
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change this time for the desired interval (in milliseconds)

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, [galleryImages.length]); // Effect runs when the length of galleryImages changes

  useEffect(() => {
    // Transition duration should match the CSS transition duration
    const timer = setTimeout(() => setIsTransitioning(false), 500); // 500ms for fade effect

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const orderSteps = [
    {
      icon: Send,
      title: "Envoi des empreintes",
      description: "Envoyez-nous vos fichiers d'empreintes numériques via notre adresse email"
    },
    {
      icon: Pencil,
      title: "Design du châssis",
      description: "Notre équipe conçoit votre prothèse avec précision selon vos spécifications"
    },
    {
      icon: CheckCircle,
      title: "Validation visuelle",
      description: "Examinez et validez le design 3D avant la finalisation"
    },
    {
      icon: FileDown,
      title: "Livraison des fichiers STL",
      description: "Réception des fichiers STL finaux prêts pour l'impression"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="#">
              <div className="flex items-center">
                <img className="h-16 w-16 text-blue-600" src={logo} />
                <span className="ml-2 text-xl font-semibold">DentalDesign</span>
              </div>
            </a>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Nos Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">À propos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Nos Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Nos Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">À propos</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Nos Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center" style={{
        backgroundImage: `url(${landingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative text-center text-white px-4">
          <img className="h-64 w-64 mx-auto mb-6 text-blue-400" src={logo} />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">DentalDesign</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Prothésiste dentaire aguerri, expert en adjointe numérique pour châssis, je sublime vos prothèses avec des
          conceptions d'une qualité exceptionnelle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img 
                src={imageService}
                alt="Services"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos Services</h2>
              <p className="text-gray-600 mb-6">
              Des conceptions de châssis, à la fois rapides et abordables. Bénéficiez d'une efficacité redoutable et de tarifs ultra-compétitifs pour des prothèses dentaires de qualité. L'esthétique et la fonctionnalité sont des éléments-clés dans la conception de châssis. Nous veillerons à ce que votre design soit à la fois attrayant et conforme aux normes de fabrication requit par les centres de production. 
              </p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Des délais rapides (En 24h)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Des prix attractifs</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Un savoir-faire de qualité</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Satisfaction garantie</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Made In France</span>
                </li>
              </ul>

              <a href='#contact'>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Contactez-nous
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Tarifs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Design châssis', price: '25€' },
              { name: 'Design modèle', price: '4€' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
                <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-blue-600 mr-2">{item.price}</p>
                    <span className="text-m text-red-600 ml-auto">{item.name === "Design châssis" && "*7€ par CP ou dent massive"}</span>
                </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Déroulement d'une commande</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < orderSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200"></div>
                  )}
                  {/* Step card */}
                  <div className="relative bg-white p-6 rounded-lg shadow-lg text-center z-10 flex flex-col items-center h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Qui sommes nous ?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Plus qu'un simple prothésiste dentaire, nous sommes un partenaire de confiance, dédié à l'excellence et à l'innovation.
                Notre expertise en conception de châssis est inégalée.
              </p>
              <p className="text-gray-600 mb-6">
              Forts de notre expérience et de notre passion, nous vous invitons à intégrer notre design révolutionnaire dans le flux numérique de votre laboratoire. Bénéficiez d'une transition fluide vers des solutions modernes et efficaces, alliant technologie de pointe et service sur mesure. Collaborons ensemble pour des résultats optimaux et des sourires éclatants !
              </p>
              <p className="text-gray-600 mb-8">
                Contactez-nous dès aujourd'hui pour bénéficier de notre expertise et transformer vos projets en réalité. Nous sommes impatients de collaborer avec vous et de contribuer à votre succès !
              </p>
              <div className="flex justify-start">
                <a href='#contact'>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Découvrez notre expertise
                  </button>
                </a>
              </div>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                <video controls loop autoPlay>
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Service Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <HeartHandshake className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Service client</h2>
            <p className="text-gray-600 text-lg mb-8">
              Chez Dental design, notre priorité est de vous offrir une expérience cliente exceptionnelle !
              Nous sommes là pour vous écouter, répondre à toutes vos questions et vous accompagner à chaque étape de votre projet. 
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Notre équipe est dévouée à votre entière satisfaction et fera tout son possible pour dépasser vos attentes. 
            </p>
            <a href='#contact'>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Contactez notre équipe
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Galerie</h2>
        <div className="relative">
          <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
            <div
              className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={galleryImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nous contacter</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6" action='https://formspree.io/f/mrgnylpg' method="POST">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom *</label>
                <input
                  type="text"
                  id="name"
                  name="nom"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  id="mail"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone (optionnel)</label>
                <input
                  type="tel"
                  id="phone"
                  name="téléphone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  rows={4}
                  id="msg"
                  name="message"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Envoyer
              </button>
            </form>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <a href='mailto:dentaldesign69@gmail.com'>
                      <span>dentaldesign69[at]gmail.com</span>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <a href='tel:0651907455'>
                      <span>+33 6 51 90 74 55</span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href={instagram} className="text-gray-600 hover:text-blue-600">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href={linkedin} className="text-gray-600 hover:text-blue-600">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/128/3153/3153851.png" width="35px" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} DentalDesign. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;