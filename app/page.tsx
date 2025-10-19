'use client';

import { Music, Globe, TrendingUp, DollarSign, BarChart3, Shield, Zap, Users, CheckCircle2, Star } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for your interest! We'll contact ${email} soon.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">SoundWave</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition">Pricing</a>
              <a href="#platforms" className="text-gray-300 hover:text-purple-400 transition">Platforms</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Distribute Your Music
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              To The World
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get your music on Spotify, Apple Music, Amazon, and 150+ platforms worldwide.
            Keep 100% of your rights and royalties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105">
              Start Distributing
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition border border-white/20">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { value: '150+', label: 'Platforms' },
              { value: '50K+', label: 'Artists' },
              { value: '100%', label: 'Rights Owned' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Professional tools for independent artists
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12" />,
                title: 'Global Distribution',
                description: 'Release your music to 150+ streaming platforms and digital stores worldwide instantly.'
              },
              {
                icon: <DollarSign className="h-12 w-12" />,
                title: 'Keep 100% Royalties',
                description: 'You own your music. Keep all your rights and earnings with transparent reporting.'
              },
              {
                icon: <BarChart3 className="h-12 w-12" />,
                title: 'Advanced Analytics',
                description: 'Real-time insights into streams, revenue, and audience demographics across platforms.'
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: 'Fast Delivery',
                description: 'Your music goes live in 1-3 days. Perfect for time-sensitive releases.'
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: 'Content Protection',
                description: 'Advanced copyright protection and automated takedown services included.'
              },
              {
                icon: <TrendingUp className="h-12 w-12" />,
                title: 'Marketing Tools',
                description: 'Pre-save campaigns, smart links, and promotional tools to grow your fanbase.'
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            All Major Platforms
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Your music everywhere your fans are
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Spotify', 'Apple Music', 'Amazon Music', 'YouTube Music', 'Deezer', 'Tidal',
              'Pandora', 'SoundCloud', 'Instagram', 'TikTok', 'Shazam', 'Napster'].map((platform) => (
              <div key={platform} className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition text-center">
                <div className="text-white font-semibold">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            No hidden fees. Cancel anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$19',
                period: '/year',
                features: [
                  'Unlimited releases',
                  '150+ platforms',
                  'Keep 100% royalties',
                  'Basic analytics',
                  'Email support'
                ]
              },
              {
                name: 'Professional',
                price: '$49',
                period: '/year',
                features: [
                  'Everything in Starter',
                  'Advanced analytics',
                  'Marketing tools',
                  'Pre-save campaigns',
                  'Priority support',
                  'Custom label name'
                ],
                popular: true
              },
              {
                name: 'Label',
                price: '$199',
                period: '/year',
                features: [
                  'Everything in Professional',
                  'Unlimited artists',
                  'White-label platform',
                  'API access',
                  'Dedicated manager',
                  'Custom integrations'
                ]
              }
            ].map((plan) => (
              <div key={plan.name} className={`relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border ${plan.popular ? 'border-purple-500 scale-105' : 'border-purple-500/20'} hover:border-purple-500/50 transition`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Trusted by Artists Worldwide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Independent Artist',
                content: 'SoundWave made it so easy to get my music on all platforms. The analytics are incredible and I finally understand my audience.'
              },
              {
                name: 'Marcus Chen',
                role: 'Producer',
                content: 'The distribution speed is unmatched. Released on Friday, live everywhere by Monday. Customer support is responsive and helpful.'
              },
              {
                name: 'Luna Martinez',
                role: 'Singer-Songwriter',
                content: 'Finally, a platform that respects artists. Keeping 100% of my royalties changed everything for my music career.'
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Share Your Music?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of artists distributing their music worldwide
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
            />
            <button type="submit" className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              Get Started Free
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Music className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">SoundWave</span>
              </div>
              <p className="text-gray-400">Professional music distribution for independent artists.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Platforms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Copyright</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SoundWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
