
const testimonials = [
  {
    quote: "Before joining 5Vowels, I struggled to even introduce myself in English. Today, I'm confidently giving presentations at my university in Delhi.",
    author: "Priya Kumari",
    location: "Patna, Bihar",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "5Vowels gave me the confidence to pursue my dream of studying abroad. Their step-by-step approach made learning English enjoyable and effective.",
    author: "Rahul Singh",
    location: "Ranchi, Jharkhand",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "The teachers at 5Vowels understand our specific challenges as Hindi speakers. Their methods helped me transform my English skills in just 6 months.",
    author: "Neha Sharma",
    location: "Gaya, Bihar",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-padding mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Success <span className="text-primary">Stories</span></h2>
          <p className="section-subtitle">
            Hear from our students who transformed their lives by mastering English with 5Vowels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-8 flex-grow">
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">Join thousands of students who have transformed their communication skills with 5Vowels</p>
          <button className="btn-primary">
            Start Your English Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
