/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionsSection } from './components/SolutionsSection';
import { DashboardPreview } from './components/DashboardPreview';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar onRequestDemo={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero onRequestDemo={handleOpenDemoModal} />

        {/* B. Problem Section */}
        <ProblemSection />

        {/* C. Our Solutions Section */}
        <SolutionsSection />

        {/* D. Features & Dashboard Live Preview */}
        <DashboardPreview />

        {/* E. Benefits Section */}
        <BenefitsSection />

        {/* F. How It Works Section */}
        <HowItWorks />

        {/* G. About EcoNexi Section */}
        <AboutSection />

        {/* H. Contact & Demo Inquiries Section */}
        <ContactSection onRequestDemo={handleOpenDemoModal} />
      </main>

      {/* I. Footer */}
      <Footer onRequestDemo={handleOpenDemoModal} />

      {/* Interactive Demo Request Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
}
