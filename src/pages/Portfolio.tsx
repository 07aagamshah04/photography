import { useState } from 'react';
import { X } from 'lucide-react';

interface PortfolioImage {
  id: string;
  title: string;
  category: string;
  image_url: string;
}

const categories = [
  'All',
  'Wedding',
  'Kids',
  'Architectural',
  'Fashion',
  'Jewellery',
  'Product',
];

// 🔥 LOCAL IMAGES CONFIG (matches your folder structure exactly)
const images: PortfolioImage[] = [
  // Wedding (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `w${i + 1}`,
    title: `Wedding ${i + 1}`,
    category: 'Wedding',
    image_url: `/images/Wedding/w${i + 1}.jpg`,
  })),

  // Kids (8)
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `k${i + 1}`,
    title: `Kids ${i + 1}`,
    category: 'Kids',
    image_url: `/images/Kids/k${i + 1}.jpg`,
  })),

  // Architectural (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `a${i + 1}`,
    title: `Architectural ${i + 1}`,
    category: 'Architectural',
    image_url: `/images/Architectural/a${i + 1}.jpg`,
  })),

  // Fashion (7)
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `f${i + 1}`,
    title: `Fashion ${i + 1}`,
    category: 'Fashion',
    image_url: `/images/Fashion/f${i + 1}.jpg`,
  })),

  // Jewellery (6)
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `j${i + 1}`,
    title: `Jewellery ${i + 1}`,
    category: 'Jewellery',
    image_url: `/images/Jewellery/j${i + 1}.jpg`,
  })),

  // Product (7)
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `p${i + 1}`,
    title: `Product ${i + 1}`,
    category: 'Product',
    image_url: `/images/Product/p${i + 1}.jpg`,
  })),
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-200">
            Explore our collection of captured moments
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${selectedCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.image_url}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.image_url}
            alt={selectedImage.title}
            className="max-h-[90vh] w-auto object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
