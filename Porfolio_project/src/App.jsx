import { useState } from "react";
import {
  Home,
  User,
  Code,
  Mail,
  HeartPulse,
  Users,
  Shield,
  Clock,
  Play,
  Menu,
  Import,
} from "lucide-react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FooterSection from "./components/FooterSection";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ScrollWrapper from "./hooks/Wrapper";

export default function Portfolio() {
  return (
    <ScrollWrapper>
      <div className="bg-white text-gray-900">
        <Header />

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </ScrollWrapper>
  );
}
