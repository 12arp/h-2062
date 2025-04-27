
import { ArrowRight, BookOpen, Globe, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Speak English with <span className="text-primary">Confidence</span> & <span className="text-secondary">Pride</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At 5Vowels, we empower students in Bihar and Jharkhand with fluent English communication skills, opening doors to global opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Start Learning Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                Explore Programs
              </button>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">5000+</span>
                <span className="text-sm text-gray-600">Students</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-gray-600">Courses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">95%</span>
                <span className="text-sm text-gray-600">Success Rate</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop"
                alt="Students learning English"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute top-5 -left-5 z-0 bg-primary-100 rounded-lg w-full h-full"></div>
            <div className="absolute -bottom-4 right-0 bg-white shadow-lg p-4 rounded-lg flex items-center gap-4 z-20 animate-float">
              <div className="bg-primary-100 p-3 rounded-full">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Open doors to the world</p>
                <p className="text-sm text-gray-600">with confident English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
