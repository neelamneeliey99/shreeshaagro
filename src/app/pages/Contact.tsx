import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : '',
      `Message: ${formData.message}`,
    ].filter(Boolean).join('\n');
    const whatsappUrl = `https://wa.me/919348104343?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Contact number and Location",
      details: [
        "Call at: 9348104343 / 9938028413",
        "Address: At-Balitutha, Near Union Bank",
        "Kujang, Dist-Jagatsinghpur",
        "Odisha - 754141",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["shubhasisnayak179@gmail.com"],
      color: "bg-green-100 text-green-600",
      link: "mailto:shubhasisnayak179@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday",
        "9:00 AM - 6:00 PM",
        "Sunday: By Appointment",
      ],
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-green-100">
            Get in touch with us for any inquiries about our
            farming machinery.
          </p>{" "}
          <p>Phone no: 9348104343 / 9938028413</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare
                  className="text-green-600"
                  size={32}
                />
                <h2 className="text-3xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for contacting us! We'll get back to
                  you soon.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  We're here to answer your questions about our
                  farming machinery and help you choose the
                  right equipment for your needs. Reach out to
                  us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${info.color}`}
                      >
                        <info.icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-700 hover:text-green-600 transition-colors"
                          >
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className="text-gray-700"
                              >
                                {detail}
                              </p>
                            ))}
                          </a>
                        ) : (
                          info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-gray-700"
                            >
                              {detail}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1484759288640-783b22c95d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmYXJtaW5nJTIwdHJhY3RvciUyMGFncmljdWx0dXJhbCUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3Nzk1MzgzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Farming at sunset"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp / Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-700 to-green-600 text-white p-12 rounded-2xl shadow-2xl">
            <Phone size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Call us or send a WhatsApp message for immediate
              assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919348104343"
                className="px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919348104343?text=Hi%2C%20I%20am%20interested%20in%20your%20farming%20machines.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-400 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you provide after-sales service?
              </h3>
              <p className="text-gray-700">
                Yes, we offer comprehensive after-sales support
                including maintenance guidance, spare parts, and
                technical assistance for all our machinery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What payment options are available?
              </h3>
              <p className="text-gray-700">
                We accept various payment methods including
                cash, bank transfer, and can discuss flexible
                payment plans based on your requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer delivery services?
              </h3>
              <p className="text-gray-700">
                Yes, we provide delivery services for all
                equipment within Odisha and neighboring regions.
                Delivery charges may vary based on location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I get a demonstration before purchase?
              </h3>
              <p className="text-gray-700">
                Absolutely! We encourage customers to see our
                machinery in action. Contact us to schedule a
                demonstration at our location or your farm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}