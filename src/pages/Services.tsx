import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Wedding',
    description:
      'Capturing your wedding day with timeless elegance and emotion. From intimate moments to grand celebrations, we ensure every detail is beautifully preserved.',
    image_url:
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '2',
    title: 'Kids',
    description:
      'Preserving joyful childhood memories with natural and playful photography that captures innocence, expressions, and unforgettable moments.',
    image_url:
      'https://images.pexels.com/photos/1104014/pexels-photo-1104014.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '3',
    title: 'Architectural',
    description:
      'Showcasing interiors with light, design, and detail. Professional interior photography that highlights space, aesthetics, and structure.',
    image_url: '/images/interior.jpg',
  },
  {
    id: '4',
    title: 'Fashion',
    description:
      'Editorial and lifestyle fashion photography designed to highlight style, confidence, and personality for brands and portfolios.',
    image_url: '/images/fashion.jpg',
  },
  {
    id: '5',
    title: 'Jewellery',
    description:
      'Luxury jewellery photography with precise lighting and fine detail to showcase elegance, brilliance, and craftsmanship.',
    image_url: '/images/jewellery.jpg',
  },
  {
    id: '6',
    title: 'Product',
    description:
      'Clean and impactful product visuals for brands, e-commerce, and marketing with a focus on clarity and premium presentation.',
    image_url: '/images/product.jpg',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">
            Comprehensive photography solutions for every occasion
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* TEXT */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Professional equipment & expertise',
                    'High-resolution edited images',
                    'Fast turnaround time',
                    'Customizable packages',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-gray-900" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                >
                  Book This Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* IMAGE */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with us and we’ll help you choose the perfect photography
            package for your needs and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
