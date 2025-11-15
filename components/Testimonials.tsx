import { Quote, Heart } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Emma K.",
      role: "Classmate & Project Partner",
      content:
        "Working on our group project was so fun! Your character designs are absolutely adorable and you're always so helpful. Can't wait to collaborate again! 💕",
      emoji: "🌸",
    },
    {
      name: "Professor Anderson",
      role: "3D Design Instructor",
      content:
        "Your creativity and attention to detail in your projects is impressive. The way you bring personality to every character shows real talent. Keep up the excellent work!",
      emoji: "⭐",
    },
    {
      name: "Jake M.",
      role: "Fellow 3D Design Student",
      content:
        "Your Blender tips saved my life during finals! Love how you always explain things in such a fun way. Your art style is goals honestly!",
      emoji: "✨",
    },
    {
      name: "Lisa Chen",
      role: "Animation Major",
      content:
        "The character you modeled for my animation project was perfect! So detailed and the topology was clean. Would love to work together on more projects!",
      emoji: "🎨",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center pb-12">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Kind Words
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sweet messages from classmates, teachers, and friends 💌
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all space-y-6 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 text-6xl opacity-10 group-hover:scale-125 transition-transform">
                {testimonial.emoji}
              </div>
              <div className="flex items-start justify-between relative z-10">
                <Quote className="w-10 h-10 text-primary/30" />
                <Heart className="w-6 h-6 text-primary fill-primary/20" />
              </div>
              <p className="text-foreground/80 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t-2 border-primary/10 relative z-10">
                <p className="text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
