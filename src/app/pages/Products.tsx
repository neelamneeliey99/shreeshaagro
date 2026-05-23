import { useState } from "react";
import { Link } from "react-router";
import { Fuel, Gauge, Wrench, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const products = [
    {
      id: 1,
      name: "VST Power Tiller ",
      category: "machines",
      image:
        "https://www.vsttractors.com/wp-content/uploads/2025/01/DSC00718.png",
      description:
        "These power tillers are designed to efficiently operate in both wet and dry fields. Designed for heavy duty operations, VST power tillers are equipped with powerful and reliable engines with robust transmission. ",
      features: [
        "Fuel Efficient",
        "Designed for heavy duty operations",
        "All-terrain Performance",
      ],
    },
    {
      id: 2,
      name: "VST Brush Cutter",
      category: "machines",
      image:
        "https://www.vsttractors.com/wp-content/uploads/2025/01/226LD.png",
      description:
        "VST brush cutters come in handy when ride-on lawn mowers can’t reach smaller portions in the garden. De-weeding around trees and near borders is made very easy and effective with VST brush cutters.",
      features: [
        "Light weight",
        "Easy Operation",
        "Fuel Efficient",
      ],
    },
    {
      id: 3,
      name: "VST Power Weeder",
      category: "machines",
      image:
        "https://www.vsttractors.com/wp-content/uploads/2025/01/FT50.png",
      description:
        "These weeders find significant utility in inter-cultivation, step-cultivation, ploughing, and de-weeding. They are suitable for various applications, including vegetable farming, horticulture, plantation crops, etc. ",
      features: [
        "Fuel efficiency",
        "Lightweight design",
        "Ease of operation",
      ],
    },
    {
      id: 4,
      name: "Sprayer",
      category: "implements",
      image: `${import.meta.env.BASE_URL}sprayer.png`,
      description:
        "Sprayers with high performance, productivity, and persistence. Made for India with global technology and design. Value-for-money products available in Economy, Regular, and Premium series to cater to customers of all classes.",
      features: [
        "Easy to operate ",
        "fuel efficiency",
        "Easy maintenance",
      ],
    },
    {
      id: 5,
      name: "Electric Pumps",
      category: "pumps",
      image:
        "https://www.vsttractors.com/wp-content/uploads/2024/09/Self-Priming-Pumps.png",
      description:
        "Whether you need a pump for irrigation, drainage, or domestic water supply, we have the perfect solution to meet your needs. VST agricultural pumps are engineered to deliver efficient water transfer and irrigation, ensuring optimal crop growth and yield.",
      features: [
        "Long-lasting performanc",
        "Minimal maintenance",
        "Efficient water transfer and irrigation",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "machines", name: "Small Farm Machines" },
    { id: "implements", name: "Implements" },
    { id: "pumps", name: "Pumps" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-green-100">
            Explore our comprehensive range of farming machinery
            and equipment
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map(
                        (feature, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Our Machines Stand Out
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Fuel size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fuel Efficient
              </h3>
              <p className="text-gray-600">
                Advanced engines designed to maximize output
                while minimizing fuel consumption
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gauge size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                High Performance
              </h3>
              <p className="text-gray-600">
                Built for demanding agricultural tasks with
                superior power and reliability
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Maintenance
              </h3>
              <p className="text-gray-600">
                Simple servicing requirements with readily
                available spare parts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing the Right Equipment?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Our experts are ready to assist you in finding the
            perfect machinery for your farm
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}