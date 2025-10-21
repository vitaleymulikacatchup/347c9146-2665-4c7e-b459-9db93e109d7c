"use client"

import { MessageCircle, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [{"id":"hero-tech","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern technology office workspace - Photo by Pew Nguyen"},{"id":"about-innovation","url":"https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Group of developers working together on a computer programming project indoors."},{"id":"cloud-computing","url":"https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Overhead view of a laptop showing data visualizations and charts on its screen."},{"id":"web-development","url":"https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of young programmer working on multiple laptops in a modern office setting."},{"id":"mobile-apps","url":"https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hands holding a smartphone displaying business stages in a cozy indoor setting."},{"id":"team-lead","url":"https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businesswoman presenting data on a large digital screen in a modern office setting."},{"id":"senior-developer","url":"https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two young professionals in an office setting, collaborating on a project using a laptop."},{"id":"ux-designer","url":"https://images.pexels.com/photos/8507583/pexels-photo-8507583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Asian woman smiling while working at a desk with laptops in a busy office environment."},{"id":"testimonial-1","url":"https://images.pexels.com/photos/34326362/pexels-photo-34326362.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful woman organizing envelopes in a modern mailroom setting."},{"id":"testimonial-2","url":"https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young businesswoman using smartphone indoors with confident expression. Modern and professional setting."},{"id":"testimonial-3","url":"https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two young professionals in an office setting, collaborating on a project using a laptop."},{"id":"testimonial-4","url":"https://images.pexels.com/photos/15364852/pexels-photo-15364852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed photo of a Lumix camera lens with blurred green background, showcasing optical technology."},{"id":"microsoft-logo","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},{"id":"google-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},{"id":"apple-logo","url":"https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Vibrant Apple logo design featuring rainbow colors on a white background."},{"id":"amazon-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},{"id":"meta-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},{"id":"netflix-logo","url":"https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A couple enjoys streaming shows on a large TV in a cozy, brick-walled living room."},{"id":"spotify-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},{"id":"contact-tech","url":"https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A doctor consulting with a patient in an office, discussing a medical chart."}];

export default function Home() {
  // Asset resolution helpers
  const resolveAsset = (assetId: string) => {
    const _a = assetMap.find(a => a.id === assetId);
    return {
      url: _a?.url ?? "/public/images/placeholder.webp",
      alt: _a?.alt ?? "Decorative image"
    };
  };

  // Hero assets
  const heroAsset = resolveAsset("hero-tech");
  
  // Service assets
  const cloudAsset = resolveAsset("cloud-computing");
  const webDevAsset = resolveAsset("web-development");
  const mobileAsset = resolveAsset("mobile-apps");
  
  // Team assets
  const teamLeadAsset = resolveAsset("team-lead");
  const seniorDevAsset = resolveAsset("senior-developer");
  const uxDesignerAsset = resolveAsset("ux-designer");
  
  // Testimonial assets
  const testimonial1Asset = resolveAsset("testimonial-1");
  const testimonial2Asset = resolveAsset("testimonial-2");
  const testimonial3Asset = resolveAsset("testimonial-3");
  const testimonial4Asset = resolveAsset("testimonial-4");
  
  // Logo assets
  const microsoftAsset = resolveAsset("microsoft-logo");
  const googleAsset = resolveAsset("google-logo");
  const appleAsset = resolveAsset("apple-logo");
  const amazonAsset = resolveAsset("amazon-logo");
  const metaAsset = resolveAsset("meta-logo");
  const netflixAsset = resolveAsset("netflix-logo");
  const spotifyAsset = resolveAsset("spotify-logo");
  
  // Contact asset
  const contactAsset = resolveAsset("contact-tech");

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechForward"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Business with Cutting-Edge Technology"
          description="We deliver innovative software solutions, cloud services, and digital transformation strategies that drive your business forward in the digital age."
          tag="IT Solutions"
          tagIcon={Zap}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Our Services", href: "services" }
          ]}
          imageSrc={heroAsset.url}
          imageAlt={heroAsset.alt}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Who We Are"
          description={[
            "TechForward is a leading IT company specializing in enterprise software development, cloud infrastructure, and digital transformation consulting.",
            "With over a decade of experience, we help businesses leverage technology to achieve sustainable growth and operational excellence."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Core Services"
          description="Comprehensive IT solutions tailored to meet your business needs and drive digital transformation"
          tag="Services"
          features={[
            {
              id: "01",
              title: "Cloud Computing Solutions",
              description: "Scalable cloud infrastructure, migration services, and ongoing management to optimize your operations and reduce costs",
              imageSrc: cloudAsset.url,
              imageAlt: cloudAsset.alt
            },
            {
              id: "02",
              title: "Custom Software Development",
              description: "Bespoke applications and enterprise software solutions built with cutting-edge technologies to solve your unique challenges",
              imageSrc: webDevAsset.url,
              imageAlt: webDevAsset.alt
            },
            {
              id: "03",
              title: "Mobile App Development",
              description: "Native and cross-platform mobile applications that engage users and extend your business reach across all devices",
              imageSrc: mobileAsset.url,
              imageAlt: mobileAsset.alt
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Industry veterans with proven track records in delivering exceptional technology solutions"
          tag="Team"
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Chief Technology Officer",
              description: "Former Microsoft Azure architect with 15 years of experience in enterprise cloud solutions and digital transformation.",
              imageSrc: teamLeadAsset.url,
              imageAlt: teamLeadAsset.alt,
              socialLinks: [
                { icon: "Linkedin", url: "https://linkedin.com/in/sarah-mitchell" },
                { icon: "Twitter", url: "https://twitter.com/sarahtech" }
              ]
            },
            {
              id: "2",
              name: "David Chen",
              role: "Lead Developer",
              description: "Full-stack engineer specializing in React, Node.js, and cloud-native applications with expertise in scalable architectures.",
              imageSrc: seniorDevAsset.url,
              imageAlt: seniorDevAsset.alt,
              socialLinks: [
                { icon: "Github", url: "https://github.com/davidchen" },
                { icon: "Linkedin", url: "https://linkedin.com/in/david-chen" }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "UX/UI Designer",
              description: "Creative designer with a passion for user-centered design and expertise in creating intuitive digital experiences.",
              imageSrc: uxDesignerAsset.url,
              imageAlt: uxDesignerAsset.alt,
              socialLinks: [
                { icon: "Globe", url: "https://emilyrodriguez.design" },
                { icon: "Instagram", url: "https://instagram.com/emily_designs" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Trusted by leading companies to deliver exceptional results"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Adams",
              role: "CTO",
              company: "FinTech Solutions",
              rating: 5,
              imageSrc: testimonial1Asset.url,
              imageAlt: testimonial1Asset.alt
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "Founder",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: testimonial2Asset.url,
              imageAlt: testimonial2Asset.alt
            },
            {
              id: "3",
              name: "Lisa Wang",
              role: "VP Engineering",
              company: "TechCorp",
              rating: 5,
              imageSrc: testimonial3Asset.url,
              imageAlt: testimonial3Asset.alt
            },
            {
              id: "4",
              name: "Robert Kumar",
              role: "Digital Director",
              company: "InnovateNow",
              rating: 5,
              imageSrc: testimonial4Asset.url,
              imageAlt: testimonial4Asset.alt
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that rely on our technology solutions"
          tag="Partners"
          logos={[
            microsoftAsset.url,
            googleAsset.url,
            appleAsset.url,
            amazonAsset.url,
            metaAsset.url,
            netflixAsset.url,
            spotifyAsset.url
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact"
          tagIcon={MessageCircle}
          title="Ready to Transform Your Business?"
          description="Get in touch with our experts to discuss how we can help accelerate your digital transformation journey."
          imageSrc={contactAsset.url}
          imageAlt={contactAsset.alt}
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By submitting, you agree to our Terms of Service and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                { label: "Cloud Solutions", href: "cloud-solutions" },
                { label: "Software Development", href: "software-development" },
                { label: "Mobile Apps", href: "mobile-apps" },
                { label: "IT Consulting", href: "it-consulting" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "careers" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Case Studies", href: "case-studies" },
                { label: "Blog", href: "blog" },
                { label: "Documentation", href: "docs" },
                { label: "Support", href: "support" }
              ]
            }
          ]}
          copyrightText="© 2025 | TechForward"
        />
      </div>
    </ThemeProvider>
  );
}