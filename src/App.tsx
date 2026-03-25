import { motion } from "motion/react";
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Star,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const SERVICES = [
  {
    title: "Servis Rutin",
    description: "Perawatan berkala untuk menjaga performa mesin tetap optimal dan irit bahan bakar.",
    icon: <Settings className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Ganti Oli",
    description: "Pilihan oli berkualitas tinggi untuk perlindungan mesin maksimal di segala kondisi.",
    icon: <Wrench className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Tune Up",
    description: "Penyetelan ulang komponen mesin untuk mengembalikan tenaga motor Anda.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
  },
  {
    title: "Servis Injeksi",
    description: "Pembersihan sistem injeksi menggunakan alat modern untuk tarikan lebih responsif.",
    icon: <CheckCircle2 className="w-8 h-8 text-brand-primary" />,
  },
];

const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    role: "Pengguna NMAX",
    content: "Pelayanan sangat memuaskan. Mekaniknya jujur dan menjelaskan detail apa saja yang perlu diganti.",
    rating: 5,
  },
  {
    name: "Siska Putri",
    role: "Pengguna Vario",
    content: "Bengkel paling bersih yang pernah saya datangi. Ruang tunggunya nyaman dan pengerjaannya cepat.",
    rating: 5,
  },
  {
    name: "Andi Wijaya",
    role: "Pengguna CBR150",
    content: "Sangat ahli menangani motor sport. Sparepart original dan harga transparan. Recommended!",
    rating: 4,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Fixed header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsApp = (message: string) => {
    const phone = "6281234567890"; // Ganti dengan nomor asli
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-2 rounded-lg">
              <Wrench className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-brand-dark">MOTOFIX<span className="text-brand-primary">PRO</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="font-medium hover:text-brand-primary transition-colors cursor-pointer">Beranda</button>
            <button onClick={() => scrollToSection("services")} className="font-medium hover:text-brand-primary transition-colors cursor-pointer">Layanan</button>
            <button onClick={() => scrollToSection("about")} className="font-medium hover:text-brand-primary transition-colors cursor-pointer">Tentang Kami</button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-brand-primary/20 cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4"
          >
            <button onClick={() => scrollToSection("home")} className="text-left text-lg font-medium">Beranda</button>
            <button onClick={() => scrollToSection("services")} className="text-left text-lg font-medium">Layanan</button>
            <button onClick={() => scrollToSection("about")} className="text-left text-lg font-medium">Tentang Kami</button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-lg font-bold text-brand-primary">Hubungi Kami</button>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Spacer for fixed header */}
        <div className="h-20 w-full" />
        
        {/* Hero Section */}
        <section id="home" className="relative min-h-[80vh] md:h-[85vh] flex items-start md:items-center overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=2070&auto=format&fit=crop" 
              alt="Motorcycle workshop"
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/60 md:bg-gradient-to-r md:from-brand-dark md:via-brand-dark/40 md:to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-16 pb-12 md:py-0">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 px-4 py-1 rounded-full mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Bengkel Resmi & Terpercaya</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
                Performa Maksimal Untuk <span className="text-brand-primary">Motor Anda</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                Kami hadir dengan mekanik ahli dan peralatan modern untuk memastikan motor Anda selalu dalam kondisi prima. Servis cepat, transparan, dan bergaransi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleWhatsApp("Halo MotoFix Pro, saya ingin booking servis untuk motor saya.")}
                  className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/30 cursor-pointer"
                >
                  Booking Servis Sekarang <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Lihat Layanan
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Stats Floating Card */}
          <div className="hidden lg:block absolute bottom-12 right-24 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 rounded-3xl flex gap-12 border-white/10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-dark">10+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Tahun Pengalaman</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-dark">5k+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Pelanggan Puas</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-dark">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Mekanik Ahli</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-brand-primary font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4">Layanan Unggulan</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-dark">Solusi Lengkap Motor Anda</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-brand-light border border-gray-100 hover:shadow-2xl hover:shadow-brand-dark/5 transition-all group"
                >
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary transition-colors">
                    <div className="group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-brand-dark text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mechanic working"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-primary p-8 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-4xl font-bold">99%</div>
                <div className="text-sm font-medium opacity-80">Tingkat Kepuasan</div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-brand-primary font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4">Tentang Kami</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Berdedikasi Sejak 2014 Untuk Keamanan Berkendara Anda</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                MotoFix Pro bukan sekadar bengkel biasa. Kami adalah tim profesional yang memiliki passion tinggi dalam dunia otomotif roda dua. Dengan standar operasional yang ketat, kami menjamin setiap motor yang keluar dari bengkel kami berada dalam kondisi terbaiknya.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Suku cadang asli & bergaransi",
                  "Mekanik bersertifikat nasional",
                  "Peralatan diagnostik komputer terbaru",
                  "Transparansi biaya tanpa biaya tersembunyi"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-brand-primary/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection("contact")}
                className="border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-brand-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-brand-primary font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4">Testimoni</h2>
              <h3 className="text-4xl font-bold text-brand-dark">Apa Kata Mereka?</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div>
                      <div className="font-bold text-brand-dark">{t.name}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-brand-primary font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4">Hubungi Kami</h2>
              <h3 className="text-4xl font-bold text-brand-dark mb-8">Siap Melayani Anda</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-brand-light p-4 rounded-2xl">
                    <MapPin className="text-brand-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Lokasi Bengkel</h4>
                    <p className="text-gray-600">Jl. Otomotif Raya No. 123, Jakarta Selatan, 12345</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-brand-light p-4 rounded-2xl">
                    <Phone className="text-brand-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telepon / WhatsApp</h4>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-brand-light p-4 rounded-2xl">
                    <Clock className="text-brand-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Sabtu: 08:00 - 17:00<br />Minggu: 09:00 - 15:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="bg-brand-dark text-white p-3 rounded-xl hover:bg-brand-primary transition-colors"><Instagram /></a>
                <a href="#" className="bg-brand-dark text-white p-3 rounded-xl hover:bg-brand-primary transition-colors"><Facebook /></a>
              </div>
            </div>

            <div className="bg-brand-light p-8 md:p-12 rounded-[2.5rem] border border-gray-200">
              <h4 className="text-2xl font-bold mb-6">Kirim Pesan</h4>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const motor = formData.get("motor");
                const message = formData.get("message");
                handleWhatsApp(`Halo MotoFix Pro, saya ${name}. Saya ingin servis motor ${motor}. Keluhan: ${message}`);
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Nama Lengkap</label>
                    <input name="name" type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">No. WhatsApp</label>
                    <input name="phone" type="tel" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="0812..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Tipe Motor</label>
                  <input name="motor" type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all" placeholder="Contoh: Honda Vario 150" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Pesan / Keluhan</label>
                  <textarea name="message" rows={4} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition-all resize-none" placeholder="Jelaskan kebutuhan servis Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-brand-primary/20 transition-all cursor-pointer">
                  Kirim Sekarang
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1.5 rounded-lg">
              <Wrench className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">MOTOFIX<span className="text-brand-primary">PRO</span></span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2026 MotoFix Pro. All rights reserved. Built for safety.
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
