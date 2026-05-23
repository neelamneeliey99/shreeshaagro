import { Link } from "react-router";
import {
  CheckCircle,
  Wrench,
  Shield,
  TrendingUp,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Premium machinery built to last with rigorous quality control",
    },
    {
      icon: Wrench,
      title: "Expert Service",
      description:
        "Professional support and maintenance for all equipment",
    },
    {
      icon: TrendingUp,
      title: "Maximum Efficiency",
      description:
        "Modern machines designed for optimal performance and fuel efficiency",
    },
  ];

  const whyChooseUs = [
    "Durable and reliable farming equipment",
    "Competitive pricing for farmers",
    "Expert technical support",
    "Wide range of agricultural machinery",
    "Trusted by farmers across Odisha",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdHJhY3RvciUyMGFncmljdWx0dXJhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzk1MzgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Farming equipment in field"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reliable Farming Machines for Modern Agriculture
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Empowering farmers with quality, durability, and
              efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                View Machines
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-colors border-2 border-white text-center"
              >
                Contact Us: 9348104343 / 9938028413
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting Farmers Across India
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At <strong>Shreesha Agro Enterprises</strong>,
                we understand the backbone of our nation is
                agriculture. That's why we're committed to
                providing farmers with the most reliable and
                efficient farming machinery.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience in the agricultural
                sector, we specialize in offering top-quality
                tractors, cultivators, seeders, and more. Our
                mission is to help farmers increase productivity
                while reducing operational costs.
              </p>
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606739211185-2c846d734a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXJtaW5nJTIwdHJhY3RvciUyMGFncmljdWx0dXJhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzk1MzgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Red tractor in field"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXJtaW5nJTIwdHJhY3RvciUyMGFncmljdWx0dXJhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzk1MzgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Green tractor under blue sky"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmYXJtaW5nJTIwdHJhY3RvciUyMGFncmljdWx0dXJhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzk1MzgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tractor plowing field"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632723893457-47e3abc47526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMGVxdWlwbWVudCUyMGZpZWxkfGVufDF8fHx8MTc3OTUzODM4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Combine harvester"
                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Machines?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide agricultural equipment that combines
              traditional reliability with modern innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon
                    size={32}
                    className="text-green-600"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmYXJtaW5nJTIwdHJhY3RvciUyMGFncmljdWx0dXJhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzk1MzgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Person operating tractor"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built on Trust, Service & Quality
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <span className="text-lg text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Farmers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ramesh Kumar",
                location: "Kujang, Odisha",
                text: "The power tiller I purchased has been running flawlessly for 3 years. Excellent build quality and efficiency!",
              },
              {
                name: "Prakash Sahoo",
                location: "Jagatsinghpur",
                text: "Great service and support. The team helped me choose the right equipment for my farm size.",
              },
              {
                name: "Suresh Panda",
                location: "Balitutha",
                text: "Reliable machines at fair prices. Shreesha Agro has become my go-to for all farming equipment.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Farm Equipment?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get in touch with us today to discuss your farming
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-colors border-2 border-white flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Contact Us Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}