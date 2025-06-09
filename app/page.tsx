// import FAQAccordion from "./components/FAQAccordion";
// import CTASection from "./components/CTASection";

// export default function Home() {
//   return (
//     <main className="bg-gray-900 text-white min-h-screen">
//       <section className="max-w-4xl mx-auto px-4 py-12 border border-blue-600 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-2 text-center">FAQ</h2>
//         <p className="text-gray-400 text-center mb-8">
//           Covers all the popular inquiries you may have
//         </p>

//         <FAQAccordion />
//       </section>

//       <CTASection />
//     </main>
//   );
// }




import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <FAQSection />
      <CTASection />
    </main>
  );
}

