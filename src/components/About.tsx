
import { BookOpen, Award, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-padding mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About <span className="text-primary">5Vowels</span></h2>
          <p className="section-subtitle">
            Our mission is simple yet powerful: to empower the students of Bihar and Jharkhand with fluent, confident English communication skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="feature-card text-center">
            <div className="inline-flex items-center justify-center bg-primary-100 p-4 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Complete Learning Journey</h3>
            <p className="text-gray-600">
              From basic foundation building to advanced levels of fluency, we guide you every step of the way.
            </p>
          </div>

          <div className="feature-card text-center">
            <div className="inline-flex items-center justify-center bg-primary-100 p-4 rounded-full mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Structured Approach</h3>
            <p className="text-gray-600">
              Our carefully designed programs ensure you master English with confidence and pride.
            </p>
          </div>

          <div className="feature-card text-center">
            <div className="inline-flex items-center justify-center bg-primary-100 p-4 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-World Application</h3>
            <p className="text-gray-600">
              We prepare you for job opportunities, higher education, and traveling the world.
            </p>
          </div>
        </div>

        <div className="bg-primary-50 p-8 md:p-12 rounded-2xl">
          <div className="md:w-4/5 mx-auto text-center">
            <p className="text-lg md:text-xl italic text-gray-800 mb-4">
              "When students step outside Bihar or Jharkhand — whether for job opportunities or further studies — we want them to carry the pride of saying:
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary">
              I learned my English from 5Vowels, and today, I speak it fluently."
            </p>
            <p className="mt-6 text-gray-600">
              At 5Vowels, we don't just teach English. <span className="font-semibold">We open doors to the world.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
