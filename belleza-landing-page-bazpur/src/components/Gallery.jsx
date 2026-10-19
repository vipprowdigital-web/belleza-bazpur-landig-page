import { motion } from "framer-motion";

const Gallery = ({ gallery = [] }) => {
  const items = gallery.filter((item) => item.image);

  if (items.length === 0) return null;

  return (
    <section id="gallery" className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <p className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Gallery
          </p>
          <h2 className="font-bold capitalize tracking-tighter text-3xl md:text-5xl leading-tight bg-linear-to-r from-[#791535] via-[#826955] to-[#fddfbf] text-transparent bg-clip-text">
            Life at Belleza
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-accent/20 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title || "Belleza gallery"}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.title && (
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/80 to-transparent px-4 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-light text-sm font-semibold">
                    {item.title}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
