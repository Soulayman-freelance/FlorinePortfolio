"use client";
import { Hero } from "../../components/Hero";
import { Navigation } from "../../components/Navigation";

import { About } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Skills } from "../../components/Skills";
import { Projects } from "../../components/Project";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

export function HomePage() {
    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
