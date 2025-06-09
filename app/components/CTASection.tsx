export default function CTASection() {
  return (
    <section
      className="relative bg-gray-800 text-white rounded-lg overflow-hidden mt-12"
      aria-label="Call to Action"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
        aria-hidden="true"
      ></div>

      {/* Overlay */}
      <div className="relative max-w-3xl mx-auto p-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-3xl font-bold">Take your 1st Survey!</h3>
          <p className="mt-1 text-lg text-gray-300">Less than 5mins</p>
        </div>

        <div className="flex gap-4">
          <button
            className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 text-white font-semibold px-6 py-3 rounded transition"
            type="button"
          >
            Take a Survey
          </button>

          <button
            className="border border-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-white text-white font-semibold px-6 py-3 rounded transition"
            type="button"
          >
            Explore Survey →
          </button>
        </div>
      </div>
    </section>
  );
}
