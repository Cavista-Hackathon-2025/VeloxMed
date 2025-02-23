import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Clock,
  Brain,
  Building2,
  // ChevronRight,
  Users,
  Laptop,
  Bell,
  LineChart,
  Calendar,
  Pill,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  ArrowRight,
  Shield,
  Award,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Stethoscope className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">VeloxMed</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-6">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
              >
                Contact
              </button>
              <Link
                to="/login"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                VeloxMed
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Contact
              </button>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The Future of Smart Healthcare Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Say goodbye to long wait times, overcrowded hospitals, and
              inefficient resource management. VeloxMed revolutionizes
              healthcare with AI-driven solutions.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <span>HIPAA Compliant & Secure</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <span>Trusted by Leading Healthcare Providers</span>
              </div>
            </div>
            <Link
              to="/signup"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
              alt="Medical Professional"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=50"
                    alt="Doctor"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=50"
                    alt="Nurse"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Trusted by 1000+</p>
                  <p className="text-gray-500">Healthcare Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Availability</h3>
              <p className="text-gray-600">
                Real-time tracking of beds and doctor availability. Always know
                where resources are available.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Triage</h3>
              <p className="text-gray-600">
                Smart scheduling and emergency case prioritization. Optimize
                doctor-patient allocation.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Pill className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Inventory Management
              </h3>
              <p className="text-gray-600">
                Never run out of critical supplies with automated monitoring and
                predictive alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-16 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who Benefits?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Building2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                For Hospitals & Clinics
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <LineChart className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Increase operational efficiency</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Reduce patient wait times</span>
                </li>
                <li className="flex items-start">
                  <Bell className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Predictive inventory alerts</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">For Patients</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Faster treatment times</span>
                </li>
                <li className="flex items-start">
                  <Laptop className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Easy online scheduling</span>
                </li>
                <li className="flex items-start">
                  <Bell className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Real-time updates and notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+(234) 808 131 6671</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@veloxmed.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                No14 , Odunuga Street Ikeja, Lagos Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">VeloxMed</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing healthcare with smart automation and AI-driven
                solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("benefits")}
                    className="text-gray-400 hover:text-white"
                  >
                    Benefits
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} VeloxMed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
