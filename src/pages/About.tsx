import { Award, Camera, Heart, Users, Target, TrendingUp } from 'lucide-react';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '27+', label: 'Happy Clients' },
  { number: '50+', label: 'Projects Completed' },
  // { number: '50+', label: 'Awards Won' },
];

const awards = [
  {
    title: 'Best Wedding Photographer 2023',
    organization: 'National Photography Awards',
    year: '2023',
  },
  {
    title: 'Excellence in Portrait Photography',
    organization: 'International Photography Guild',
    year: '2022',
  },
  {
    title: 'Professional Photographer of the Year',
    organization: 'Photo Masters Association',
    year: '2021',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our heart into every shot, creating images that resonate with emotion and authenticity.',
  },
  {
    icon: Camera,
    title: 'Artistry',
    description: 'Combining technical excellence with creative vision to produce stunning visual narratives.',
  },
  {
    icon: Users,
    title: 'Connection',
    description: 'Building genuine relationships with our clients to capture their true essence and personality.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality work that exceeds expectations every time.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Our Values</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Where Passion Meets Photography
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2022, ParshwaShah Photography was born from a simple passion: capturing the beauty
                of life's fleeting moments. What started as a solo venture by our founder, a photography
                enthusiast with a dream, has evolved into a premier photography studio serving clients
                across the nation.
              </p>
              <p>
                Over the past few years, we've had the privilege of documenting hundreds of weddings,
                family celebrations, corporate events, and personal milestones. Each project has taught
                us something new, refined our craft, and deepened our appreciation for the power of
                visual storytelling.
              </p>
              <p>
                Today, our team of talented photographers brings diverse perspectives and specialized
                expertise to every shoot. We combine state-of-the-art equipment with timeless techniques,
                ensuring that every image we create is both technically perfect and emotionally resonant.
              </p>
              <p>
                Our philosophy is simple: photography is not just about capturing what people look like,
                but about revealing who they are. We take the time to understand your story, your vision,
                and your dreams, translating them into images that you'll treasure for generations.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Photographer at work"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Journey in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Our Core Values
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          The principles that guide our work and define our commitment to excellence
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-12 h-12 text-gray-900" />
          </div>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading photography organizations
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600 mb-1">{award.organization}</p>
                <p className="text-gray-500 text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center bg-gray-900 text-white p-12 rounded-2xl">
          <TrendingUp className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            To create timeless visual stories that celebrate life's most meaningful moments,
            delivered with uncompromising quality, creativity, and professionalism. We strive
            to exceed expectations, build lasting relationships, and preserve memories that
            families will cherish for generations to come.
          </p>
        </div>
      </section>
    </div>
  );
}
