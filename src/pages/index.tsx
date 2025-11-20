import { useState, useEffect } from "react";
import { Slide } from "@/components/Slide";
import { StatCard } from "@/components/StatCard";
import { FeatureCard } from "@/components/FeatureCard";
import { FeatureList } from "@/components/FeatureList";
import { NavigationDots } from "@/components/NavigationDots";
import { TimelineItem } from "@/components/TimelineItem";
import { PricingCard } from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Lock, Skull, Zap, Target, Activity, Mail, Phone } from "lucide-react";
import logoImage from "@/assets/ai-shield-logo.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12;

  useEffect(() => {
    const handleScroll = () => {
      const slides = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      slides.forEach((slide, index) => {
        const slideTop = slide.offsetTop;
        const slideBottom = slideTop + slide.offsetHeight;

        if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
          setCurrentSlide(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const slides = document.querySelectorAll("section");
    slides[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Slide 1: Title */}
      <Slide slideNumber="1/12" id="slide1">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8 animate-in zoom-in duration-1000">
            <img
              src={logoImage}
              alt="AI Security Shield"
              className="w-40 h-40 object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gradient leading-tight">
            AI SECURITY SHIELD
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold">
            Protecting Financial AI Models from Cybersecurity Threats
          </p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A comprehensive security monitoring platform designed for ethical and responsible AI in the financial sector
          </p>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto mt-12">
            <p className="text-foreground/90 space-y-2">
              <strong className="text-primary">Theme:</strong> Ethical & Responsible AI in Financial Sector<br />
              <strong className="text-primary">Focus:</strong> Securing AI Models Against Cybersecurity Risks
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 2: The Problem */}
      <Slide slideNumber="2/12" id="slide2">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">🚨 THE PROBLEM</h2>
            <p className="text-xl md:text-2xl text-foreground/80">
              Financial institutions face unprecedented AI security challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon="⚠️" title="Adversarial Attacks">
              <p className="text-foreground/80">
                Malicious inputs designed to fool AI models, potentially causing millions in fraudulent transactions
              </p>
            </FeatureCard>

            <FeatureCard icon="🔓" title="Model Extraction">
              <p className="text-foreground/80">
                Hackers stealing proprietary AI models through API queries, compromising competitive advantage
              </p>
            </FeatureCard>

            <FeatureCard icon="☠️" title="Data Poisoning">
              <p className="text-foreground/80">
                Contaminating training data to manipulate model behavior and bypass fraud detection
              </p>
            </FeatureCard>

            <FeatureCard icon="💥" title="API Abuse">
              <p className="text-foreground/80">
                Overwhelming systems with malicious requests, causing service disruptions and security breaches
              </p>
            </FeatureCard>
          </div>

          <StatCard
            number="$8.4B"
            label="Global cost of AI/ML attacks in financial sector (2023)"
          />
        </div>
      </Slide>

      {/* Slide 3: Our Solution */}
      <Slide slideNumber="3/12" id="slide3">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">✨ OUR SOLUTION</h2>
            <p className="text-xl md:text-2xl text-foreground/80">
              Real-time AI Security Monitoring & Threat Detection Platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="🛡️" title="24/7 Monitoring">
              <p className="text-foreground/80">
                Continuous surveillance of all AI model interactions with <span className="text-success font-semibold">2.3s detection time</span>
              </p>
            </FeatureCard>

            <FeatureCard icon="🎯" title="Smart Detection">
              <p className="text-foreground/80">
                Advanced algorithms identify threats with <span className="text-success font-semibold">99.8% accuracy</span> and minimal false positives
              </p>
            </FeatureCard>

            <FeatureCard icon="⚡" title="Auto-Response">
              <p className="text-foreground/80">
                Instant blocking of malicious requests with <span className="text-success font-semibold">0.2% false positive rate</span>
              </p>
            </FeatureCard>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">🎨 Complete Platform Features</h3>
            <FeatureList
              items={[
                "Real-time threat intelligence dashboard",
                "Email & SMS alert notifications",
                "Role-based access control (6 user roles)",
                "Comprehensive analytics & reporting",
                "Model performance tracking",
                "Admin user management system",
              ]}
            />
          </div>
        </div>
      </Slide>

      {/* Slide 4: Key Features */}
      <Slide slideNumber="4/12" id="slide4">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">🎯 KEY FEATURES</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon="🔐" title="Security Monitoring">
              <FeatureList
                items={[
                  "Real-time threat detection",
                  "Automated attack blocking",
                  "Historical threat analysis",
                  "Severity classification (Low/Medium/High)",
                ]}
              />
            </FeatureCard>

            <FeatureCard icon="📊" title="Analytics Dashboard">
              <FeatureList
                items={[
                  "Interactive visualizations",
                  "Attack type distribution",
                  "Model performance metrics",
                  "System health monitoring",
                ]}
              />
            </FeatureCard>

            <FeatureCard icon="🚨" title="Smart Alerts">
              <FeatureList
                items={[
                  "Email notifications (SendGrid)",
                  "SMS alerts (Twilio)",
                  "Configurable alert rules",
                  "Severity-based filtering",
                ]}
              />
            </FeatureCard>

            <FeatureCard icon="👥" title="User Management">
              <FeatureList
                items={[
                  "Role-based access control",
                  "Admin privilege management",
                  "Sign up/Sign in authentication",
                  "Audit logging & tracking",
                ]}
              />
            </FeatureCard>
          </div>
        </div>
      </Slide>

      {/* Slide 5: Technology Stack */}
      <Slide slideNumber="5/12" id="slide5">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">⚙️ TECHNOLOGY STACK</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon="💻" title="Frontend">
              <FeatureList items={["React 18", "Tailwind CSS", "Recharts", "Lucide Icons"]} />
            </FeatureCard>

            <FeatureCard icon="🔧" title="Backend">
              <FeatureList items={["FastAPI", "PostgreSQL", "TimescaleDB", "JWT Auth"]} />
            </FeatureCard>

            <FeatureCard icon="🔌" title="Integration">
              <FeatureList items={["SendGrid API", "Twilio SMS", "Docker", "LocalStorage"]} />
            </FeatureCard>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary">🏗️ Architecture Highlights</h3>
            <FeatureList
              items={[
                "Single-page application (SPA) for seamless UX",
                "RESTful API architecture",
                "Time-series database optimization",
                "Mobile-first responsive design",
                "Real-time threat simulation engine",
              ]}
            />
          </div>
        </div>
      </Slide>

      {/* Slide 6: Market Opportunity */}
      <Slide slideNumber="6/12" id="slide6">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">📈 MARKET OPPORTUNITY</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <StatCard number="$28.1B" label="AI Security Market Size by 2027" />
            <StatCard number="34.8%" label="CAGR (2023-2027)" />
            <StatCard number="87%" label="Financial institutions using AI" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon="🎯" title="Target Market">
              <FeatureList
                items={[
                  "Banks & Financial Institutions",
                  "Fintech Companies",
                  "Insurance Companies",
                  "Payment Processors",
                  "Credit Bureaus",
                ]}
              />
            </FeatureCard>

            <FeatureCard icon="💼" title="Use Cases">
              <FeatureList
                items={[
                  "Fraud Detection Systems",
                  "Credit Scoring Models",
                  "Risk Assessment AI",
                  "Trading Algorithms",
                  "AML/KYC Systems",
                ]}
              />
            </FeatureCard>
          </div>
        </div>
      </Slide>

      {/* Slide 7: Competitive Advantage */}
      <Slide slideNumber="7/12" id="slide7">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">🏆 COMPETITIVE ADVANTAGE</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon="✨" title="What Makes Us Different">
              <FeatureList
                items={[
                  "Industry-specific: Built specifically for financial AI",
                  "Real-time: 2.3s average detection time",
                  "Comprehensive: All-in-one security platform",
                  "User-friendly: Intuitive interface, no training needed",
                  "Cost-effective: Lower TCO than building in-house",
                ]}
              />
            </FeatureCard>

            <FeatureCard icon="📊" title="Performance Metrics">
              <FeatureList
                items={[
                  "99.8% threat blocking success rate",
                  "0.2% false positive rate",
                  "99.97% system uptime",
                  "2.3s mean time to detect",
                  "24/7 automated monitoring",
                ]}
              />
            </FeatureCard>
          </div>

          <div className="glass rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6 text-primary">🎯 Unique Value Proposition</h3>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
              "The first comprehensive, real-time AI security platform designed exclusively for financial institutions, combining threat detection, automated response, and compliance monitoring in a single, user-friendly interface."
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 8: Business Model */}
      <Slide slideNumber="8/12" id="slide8">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">💰 BUSINESS MODEL</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              icon="🚀"
              name="Starter"
              price="$299"
              period="per month"
              features={[
                "Up to 3 AI models",
                "50K requests/month",
                "Email alerts",
                "Basic analytics",
              ]}
            />

            <PricingCard
              icon="⭐"
              name="Professional"
              price="$999"
              period="per month"
              features={[
                "Up to 10 AI models",
                "500K requests/month",
                "Email & SMS alerts",
                "Advanced analytics",
                "API access",
              ]}
              highlighted
            />

            <PricingCard
              icon="🏢"
              name="Enterprise"
              price="Custom"
              period="contact us"
              features={[
                "Unlimited models",
                "Unlimited requests",
                "All features",
                "Dedicated support",
                "Custom integrations",
              ]}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <StatCard number="$2.4M" label="Target ARR Year 1" />
            <StatCard number="$15M" label="Target ARR Year 3" />
          </div>
        </div>
      </Slide>

      {/* Slide 9: Roadmap */}
      <Slide slideNumber="9/12" id="slide9">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">🗺️ PRODUCT ROADMAP</h2>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />
            <div className="grid md:grid-cols-4 gap-6 relative">
              <TimelineItem
                date="Q1 2025"
                title="MVP Launch"
                description="Core features, 5 pilot customers, email alerts"
              />
              <TimelineItem
                date="Q2 2025"
                title="Enhanced Platform"
                description="SMS alerts, API access, mobile app beta"
              />
              <TimelineItem
                date="Q3 2025"
                title="AI Enhancement"
                description="ML-powered predictions, auto-remediation"
              />
              <TimelineItem
                date="Q4 2025"
                title="Enterprise"
                description="On-premise deployment, compliance certifications"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <FeatureCard icon="📅" title="Short-term Goals (Q1-Q2 2025)">
              <FeatureList
                items={[
                  "Launch MVP with core security features",
                  "Onboard 5 pilot customers",
                  "Achieve 99.5% uptime SLA",
                  "Integrate email & SMS alerts",
                ]}
              />
            </FeatureCard>

            <FeatureCard icon="🚀" title="Long-term Vision (2026+)">
              <FeatureList
                items={[
                  "Expand to healthcare & retail sectors",
                  "AI-powered predictive threat detection",
                  "Global market expansion",
                  "Strategic partnerships with major banks",
                ]}
              />
            </FeatureCard>
          </div>
        </div>
      </Slide>

      {/* Slide 10: Team */}
      <Slide slideNumber="10/12" id="slide10">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">👥 OUR TEAM</h2>

          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-12 text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl font-bold">
                HU
              </div>
              <h3 className="text-3xl font-bold text-gradient">Happy Igho Umukoro</h3>
              <p className="text-xl text-primary font-semibold">CEO & Founder</p>
              <div className="space-y-4 text-foreground/80">
                <p className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:smartxpress74@gmail.com" className="hover:text-primary transition-colors">
                    smartxpress74@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+2348065292102" className="hover:text-primary transition-colors">
                    +234 806 529 2102
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">Why This Team?</h3>
            <p className="text-lg text-foreground/80 text-center leading-relaxed">
              Our team combines deep expertise in AI/ML, cybersecurity, and financial technology. With a track record of building enterprise-grade security solutions, we understand the unique challenges financial institutions face in protecting their AI infrastructure.
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 11: Traction */}
      <Slide slideNumber="11/12" id="slide11">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary text-center mb-12">📊 TRACTION & VALIDATION</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <StatCard number="5" label="Pilot Customers Ready" />
            <StatCard number="$500K" label="Letters of Intent" />
            <StatCard number="3" label="Strategic Partnerships" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon="✅" title="Key Achievements">
              <FeatureList
                items={[
                  "Completed MVP development",
                  "Secured initial pilot agreements",
                  "Filed for patent on threat detection algorithm",
                  "SOC 2 Type II compliance roadmap established",
                ]}
              />
            </FeatureCard>

            <FeatureCard icon="🎯" title="Next Milestones">
              <FeatureList
                items={[
                  "Close first paying customers (Q1 2025)",
                  "Achieve $100K MRR (Q2 2025)",
                  "Expand team to 10 members",
                  "Series A fundraising (Q4 2025)",
                ]}
              />
            </FeatureCard>
          </div>

          <div className="glass rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6 text-primary">💵 Funding Ask</h3>
            <div className="text-5xl font-extrabold text-gradient mb-4">$2.5M</div>
            <p className="text-xl text-foreground/80 mb-6">Seed Round</p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-semibold text-primary mb-2">40% Product Development</p>
                <p className="text-sm text-foreground/70">Enhanced AI capabilities & features</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">35% Sales & Marketing</p>
                <p className="text-sm text-foreground/70">Customer acquisition & brand building</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">25% Operations</p>
                <p className="text-sm text-foreground/70">Team expansion & infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 12: Call to Action */}
      <Slide slideNumber="12/12" id="slide12">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
            Join Us in Securing the Future of Financial AI
          </h2>

          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            As AI becomes the backbone of financial services, security cannot be an afterthought. Partner with us to protect what matters most.
          </p>

          <div className="glass rounded-2xl p-10 space-y-6">
            <h3 className="text-3xl font-bold text-primary">Let's Connect</h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <a
                  href="mailto:smartxpress74@gmail.com"
                  className="hover:text-primary transition-colors font-semibold"
                >
                  smartxpress74@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <a
                  href="tel:+2348065292102"
                  className="hover:text-primary transition-colors font-semibold"
                >
                  +234 806 529 2102
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-white text-xl px-12 py-6 rounded-xl hover:shadow-[0_15px_50px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <a href="mailto:smartxpress74@gmail.com">Schedule a Demo</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary text-xl px-12 py-6 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              asChild
            >
              <a href="tel:+2348065292102">Contact Us</a>
            </Button>
          </div>

          <div className="pt-12 border-t border-primary/30">
            <p className="text-foreground/60">
              © 2025 AI Security Shield. Protecting Financial AI, One Model at a Time.
            </p>
          </div>
        </div>
      </Slide>

      <NavigationDots
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlideChange={scrollToSlide}
      />
    </div>
  );
};

export default Index;

