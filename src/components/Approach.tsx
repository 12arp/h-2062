
import { CheckCircle, Book, Languages, Headphones } from "lucide-react";

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-gray-50">
      <div className="container-padding mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our <span className="text-primary">Teaching Approach</span></h2>
          <p className="section-subtitle">
            At 5Vowels, we teach English step-by-step, starting from Grammar, moving to Translation, and finally to Conversation.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2 z-0"></div>
          
          {/* Step 1: Grammar */}
          <div className="relative z-10 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Step 1: Grammar</h3>
                  <p className="text-gray-700 mb-6">
                    We start by building a strong foundation in English grammar. Our structured lessons cover:
                  </p>
                  <ul className="space-y-3">
                    {['Parts of speech', 'Sentence structure', 'Tenses', 'Articles and prepositions'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-primary-100 p-4 rounded-full relative">
                  <div className="bg-white p-3 rounded-full">
                    <Book className="h-16 w-16 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Translation */}
          <div className="relative z-10 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Step 2: Translation</h3>
                  <p className="text-gray-700 mb-6">
                    Moving beyond grammar, we teach you to translate thoughts from your native language to English:
                  </p>
                  <ul className="space-y-3">
                    {['Hindi to English translation techniques', 'Common expressions and idioms', 'Vocabulary building', 'Writing exercises'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 order-1 flex justify-center">
                <div className="bg-primary-100 p-4 rounded-full relative">
                  <div className="bg-white p-3 rounded-full">
                    <Languages className="h-16 w-16 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Conversation */}
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Step 3: Conversation</h3>
                  <p className="text-gray-700 mb-6">
                    Finally, we focus on practical conversation skills to help you communicate with confidence:
                  </p>
                  <ul className="space-y-3">
                    {['Real-world speaking practice', 'Pronunciation and fluency', 'Listening comprehension', 'Public speaking skills'].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                <div className="bg-primary-100 p-4 rounded-full relative">
                  <div className="bg-white p-3 rounded-full">
                    <Headphones className="h-16 w-16 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
