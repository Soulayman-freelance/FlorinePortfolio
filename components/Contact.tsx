"use client";
import { Mail, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(formData.subject || "Contact depuis le portfolio");
    const emailBody = encodeURIComponent(formData.message);

    window.location.href = `mailto:floriineperreaut@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "floriineperreaut@gmail.com",
      href: "mailto:floriineperreaut@gmail.com",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Toulouse, France",
      href: null,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Florine Perreaut",
      href: "https://www.linkedin.com/in/florine-perreaut-2642b330a/",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@_amichii",
      href: "https://www.instagram.com/_amichii/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contactez moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Une collaboration ? Contactez moi !
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Informations de contact
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Component = info.href ? 'a' : 'div';
                  return (
                    <Component
                      key={index}
                      {...(info.href && {
                        href: info.href,
                        target: info.href.startsWith('http') ? '_blank' : undefined,
                        rel: info.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                      })}
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all ${info.href ? 'hover:bg-primary/5 group cursor-pointer' : ''
                        }`}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shrink-0 ${info.href ? 'group-hover:scale-110 transition-transform' : ''
                        }`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {info.title}
                        </p>
                        <p className="text-primary font-medium truncate">
                          {info.value}
                        </p>
                      </div>
                    </Component>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Envoyer un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nom *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="border-primary/20 focus-visible:ring-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="border-primary/20 focus-visible:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="De quoi souhaitez-vous parler ?"
                    className="border-primary/20 focus-visible:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                    className="border-primary/20 focus-visible:ring-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  Envoyer le message
                  <Send size={18} />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}