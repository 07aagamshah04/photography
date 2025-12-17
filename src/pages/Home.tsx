import { Link } from 'react-router-dom';
import { Camera, Heart, Users, ArrowRight, Building2, Shirt, Gem, Package } from 'lucide-react';

const categories = [
  {
    title: 'Wedding',
    icon: Heart,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Capturing your special day with elegance',
  },
  {
    title: 'Kids',
    icon: Users,
    image: 'https://images.pexels.com/photos/1104014/pexels-photo-1104014.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Preserving childhood memories',
  },
  {
    title: 'Architectural',
    icon: Building2,
    image: 'public/images/interior.jpg',
    description: 'Showcasing interiors with light, design, and detail',
  },
  {
    title: 'Fashion',
    icon: Shirt,
    image: 'public/images/fashion.jpg',
    description: 'Editorial and lifestyle fashion photography',
  },
  {
    title: 'Jewellery',
    icon: Gem,
    image: 'public/images/jewellery.jpg',
    description: 'Luxury jewellery captured with precision and elegance',
  },
  {
    title: 'Product',
    icon: Package,
    image: 'public/images/product.jpg',
    description: 'Clean and impactful product visuals for brands',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Capturing Moments That Last Forever
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional photography that tells your unique story with artistry and passion
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to ParshwaShah Photography
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate photographers dedicated to capturing life's most precious moments.
            With over a decade of experience and a keen eye for detail, we transform ordinary moments into
            extraordinary memories. Every photograph tells a story, and we're here to tell yours with
            creativity, professionalism, and heart.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Specializations
            </h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of photography services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.title}
                  to="/portfolio"
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent className="w-6 h-6 text-white" />
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-12 md:p-16 text-center text-white">
            <Camera className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Magic Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your photography needs and create stunning visuals that exceed your expectations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
