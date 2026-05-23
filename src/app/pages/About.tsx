import { Link } from "react-router";
import {
  Target,
  Heart,
  Award,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We prioritize farmer needs and build lasting relationships based on trust",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Every machine meets rigorous standards for durability and performance",
    },
    {
      icon: Handshake,
      title: "Integrity",
      description:
        "Honest pricing, transparent dealings, and reliable after-sales support",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Continuously updating our offerings with modern agricultural technology",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "500+", label: "Happy Farmers" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-green-100">
            Building trust with farmers through quality
            machinery and dedicated service
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shreesha Agro Enterprises
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Founded with a vision to empower the farming
                  community,{" "}
                  <strong>Shreesha Agro Enterprises</strong> has
                  been serving farmers across India with
                  reliable agricultural machinery and equipment.
                </p>
                <p>
                  We understand that agriculture is the backbone
                  of our economy, and farmers need dependable
                  tools to maximize their productivity. That's
                  why we specialize in providing high-quality
                  farming equipments that combine traditional
                  durability with modern efficiency.
                </p>
                <p>
                  Based in Balitutha, Jagatsinghpur, we've built
                  strong relationships with farmers throughout
                  the region by offering not just machinery, but
                  comprehensive support, fair pricing, and
                  genuine care for their success.
                </p>
                <p>
                  Our commitment extends beyond sales. We
                  provide expert guidance on equipment
                  selection, maintenance support, and
                  after-sales service to ensure every farmer
                  gets the maximum value from their investment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMGVxdWlwbWVudCUyMGZpZWxkfGVufDF8fHx8MTc3OTUzODM4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agricultural field"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMGVxdWlwbWVudCUyMGZpZWxkfGVufDF8fHx8MTc3OTUzODM4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Farming equipment in field"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659021181759-2f987070b6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxmYXJtaW5nJTIwdHJhY3RvciUyMGFncmljdWx0dXJhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzk1MzgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tractor in field"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685335686020-e0b487f7f426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8ZmFybWluZyUyMHRyYWN0b3IlMjBhZ3JpY3VsdHVyYWwlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzc5NTM4MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern farming equipment"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg">
                To empower farmers with reliable, affordable,
                and efficient agricultural machinery that
                enhances productivity and contributes to
                sustainable farming practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To become the most trusted name in agricultural
                equipment in India, known for quality products,
                exceptional service, and genuine commitment to
                farmer prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon
                    size={36}
                    className="text-green-600"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Farmers Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-700">
                Every machine undergoes thorough inspection to
                ensure it meets our high standards before
                reaching you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fair Pricing
              </h3>
              <p className="text-gray-700">
                Competitive prices without compromising on
                quality, making modern farming accessible to
                all.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-700">
                Our team helps you choose the right equipment
                based on your farm size, crop type, and budget.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                After-Sales Support
              </h3>
              <p className="text-gray-700">
                Comprehensive maintenance support and readily
                available spare parts when you need them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local Presence
              </h3>
              <p className="text-gray-700">
                Based in your region, we understand local
                farming needs and are always accessible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-700">
                Years of satisfied customers and successful
                partnerships with farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner with Shreesha Agro Enterprises
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to make your farming more
            productive and profitable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Our Products
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-green-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}