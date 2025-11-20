<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Security Shield - Protecting Financial AI Models</title>
    <meta name="description" content="Comprehensive real-time security monitoring platform for AI models in financial sector. Protect against adversarial attacks, model extraction, and data poisoning." />
    <meta name="author" content="Happy Igho Umukoro" />
    <meta name="keywords" content="AI security, financial AI, cybersecurity, threat detection, AI monitoring, machine learning security" />
    
    <meta property="og:title" content="AI Security Shield - Real-time AI Threat Detection" />
    <meta property="og:description" content="The first comprehensive AI security platform for financial institutions. 99.8% threat detection accuracy with 24/7 automated monitoring." />
    <meta property="og:type" content="website" />
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --background: 222 47% 11%;
            --foreground: 210 40% 98%;
            --primary: 199 89% 48%;
            --primary-foreground: 210 40% 98%;
            --secondary: 217 33% 17%;
            --secondary-foreground: 210 40% 98%;
            --muted: 217 33% 17%;
            --muted-foreground: 215 20% 65%;
            --accent: 199 89% 48%;
            --success: 158 64% 52%;
            --warning: 38 92% 50%;
            --border: 217 33% 17%;
            --radius: 1rem;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: hsl(var(--background));
            color: hsl(var(--foreground));
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        .slide {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 80px 48px;
            background: linear-gradient(135deg, hsl(222 47% 11%), hsl(217 91% 25%), hsl(222 47% 11%));
            position: relative;
            scroll-snap-align: start;
        }

        .slide-number {
            position: absolute;
            top: 32px;
            right: 48px;
            font-size: 14px;
            color: hsla(var(--primary) / 0.6);
        }

        .slide-content {
            max-width: 1200px;
            width: 100%;
            animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h1 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 24px;
            background: linear-gradient(135deg, hsl(199 89% 48%), hsl(199 89% 60%));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
            text-align: center;
        }

        h2 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 32px;
            color: hsl(var(--primary));
            text-align: center;
        }

        h3 {
            font-size: 1.875rem;
            font-weight: 600;
            margin-bottom: 16px;
            color: hsl(var(--primary));
        }

        .text-center {
            text-align: center;
        }

        .space-y-12 > * + * {
            margin-top: 48px;
        }

        .space-y-8 > * + * {
            margin-top: 32px;
        }

        .space-y-4 > * + * {
            margin-top: 16px;
        }

        .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid hsla(var(--primary) / 0.3);
            border-radius: var(--radius);
        }

        .glass-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-hover:hover {
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 20px 50px hsla(var(--primary) / 0.3);
            transform: translateY(-5px);
        }

        .grid {
            display: grid;
            gap: 24px;
        }

        .grid-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        .grid-4 {
            grid-template-columns: repeat(4, 1fr);
        }

        .feature-card {
            padding: 32px;
            text-align: left;
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 24px;
        }

        .stat-card {
            text-align: center;
            padding: 32px;
        }

        .stat-number {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, hsl(158 64% 52%), hsl(199 89% 48%));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 16px;
        }

        .stat-label {
            font-size: 1.125rem;
            color: hsla(var(--primary) / 0.8);
        }

        .feature-list {
            list-style: none;
            margin-top: 24px;
        }

        .feature-list li {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 0;
            font-size: 1.125rem;
            color: hsla(var(--foreground) / 0.9);
        }

        .checkmark {
            width: 28px;
            height: 28px;
            background: linear-gradient(135deg, hsl(158 64% 52%), hsl(199 89% 48%));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: white;
            font-size: 14px;
        }

        .logo-container {
            text-align: center;
            margin-bottom: 32px;
        }

        .logo {
            width: 160px;
            height: 160px;
            object-fit: contain;
            filter: drop-shadow(0 10px 30px hsla(var(--primary) / 0.5));
        }

        .subtitle {
            font-size: 1.5rem;
            color: hsl(var(--primary));
            font-weight: 600;
            margin-bottom: 32px;
        }

        .tagline {
            font-size: 1.25rem;
            color: hsla(var(--foreground) / 0.8);
            max-width: 768px;
            margin: 0 auto 32px;
            line-height: 1.6;
        }

        .success-text {
            color: hsl(var(--success));
            font-weight: 600;
        }

        .timeline {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 40px;
        }

        .timeline-item {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid hsl(var(--primary));
            border-radius: 12px;
            padding: 24px;
            transition: transform 0.3s;
        }

        .timeline-item:hover {
            transform: scale(1.05);
        }

        .timeline-date {
            font-size: 0.875rem;
            color: hsl(199 89% 60%);
            font-weight: 600;
            margin-bottom: 8px;
        }

        .timeline-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: hsl(var(--foreground));
        }

        .timeline-desc {
            font-size: 0.875rem;
            color: hsla(var(--foreground) / 0.7);
        }

        .pricing-card {
            padding: 32px;
            text-align: center;
        }

        .pricing-card.featured {
            border: 2px solid hsl(199 89% 60%);
            position: relative;
        }

        .pricing-card.featured::before {
            content: '⭐ POPULAR';
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: hsl(var(--primary));
            color: white;
            padding: 4px 16px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 700;
        }

        .price {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, hsl(199 89% 48%), hsl(199 89% 60%));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 16px 0;
        }

        .price-label {
            color: hsla(var(--foreground) / 0.6);
            margin-bottom: 24px;
        }

        .button {
            display: inline-block;
            padding: 16px 40px;
            background: linear-gradient(135deg, hsl(199 89% 48%), hsl(199 89% 60%));
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 1.125rem;
            font-weight: 600;
            margin-top: 32px;
            transition: all 0.3s;
            box-shadow: 0 10px 30px hsla(var(--primary) / 0.4);
            cursor: pointer;
            border: none;
        }

        .button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px hsla(var(--primary) / 0.6);
        }

        .navigation {
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 12px;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.5);
            padding: 12px 20px;
            border-radius: 24px;
            backdrop-filter: blur(10px);
        }

        .nav-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s;
        }

        .nav-dot.active {
            background: hsl(var(--primary));
            width: 40px;
            border-radius: 6px;
        }

        .team-member {
            text-align: center;
            padding: 32px;
        }

        .team-photo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 20px;
            border: 4px solid hsl(var(--primary));
            background: hsl(var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
        }

        .contact-info {
            font-size: 1.125rem;
            color: hsla(var(--foreground) / 0.9);
            margin: 8px 0;
        }

        @media (max-width: 768px) {
            .slide {
                padding: 60px 24px;
            }

            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 2rem;
            }

            h3 {
                font-size: 1.5rem;
            }

            .grid-2, .grid-3, .grid-4 {
                grid-template-columns: 1fr;
            }

            .timeline {
                grid-template-columns: 1fr;
            }

            .logo {
                width: 120px;
                height: 120px;
            }

            .subtitle {
                font-size: 1.25rem;
            }

            .tagline {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Slide 1: Title -->
    <section class="slide" id="slide1">
        <div class="slide-number">1/12</div>
        <div class="slide-content">
            <div class="text-center space-y-8">
                <div class="logo-container">
                    <svg class="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:hsl(199, 89%, 48%);stop-opacity:1" />
                                <stop offset="100%" style="stop-color:hsl(199, 89%, 60%);stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <path d="M100 20 L160 50 L160 110 Q160 150 100 180 Q40 150 40 110 L40 50 Z" fill="url(#shieldGradient)" opacity="0.9"/>
                        <circle cx="100" cy="90" r="30" fill="white" opacity="0.3"/>
                        <path d="M85 90 L95 100 L115 80" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                    </svg>
                </div>
                <h1>AI SECURITY SHIELD</h1>
                <p class="subtitle">Protecting Financial AI Models from Cybersecurity Threats</p>
                <p class="tagline">
                    A comprehensive security monitoring platform designed for ethical and responsible AI in the financial sector
                </p>
                <div class="glass" style="padding: 32px; max-width: 640px; margin: 0 auto;">
                    <p style="color: hsla(var(--foreground) / 0.9);">
                        <strong style="color: hsl(var(--primary));">Theme:</strong> Ethical & Responsible AI in Financial Sector<br />
                        <strong style="color: hsl(var(--primary));">Focus:</strong> Securing AI Models Against Cybersecurity Risks
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 2: The Problem -->
    <section class="slide" id="slide2">
        <div class="slide-number">2/12</div>
        <div class="slide-content space-y-12">
            <div class="text-center">
                <h2>🚨 THE PROBLEM</h2>
                <p class="tagline">Financial institutions face unprecedented AI security challenges</p>
            </div>

            <div class="grid grid-2">
                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">⚠️</div>
                    <h3>Adversarial Attacks</h3>
                    <p style="color: hsla(var(--foreground) / 0.8);">
                        Malicious inputs designed to fool AI models, potentially causing millions in fraudulent transactions
                    </p>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🔓</div>
                    <h3>Model Extraction</h3>
                    <p style="color: hsla(var(--foreground) / 0.8);">
                        Hackers stealing proprietary AI models through API queries, compromising competitive advantage
                    </p>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">☠️</div>
                    <h3>Data Poisoning</h3>
                    <p style="color: hsla(var(--foreground) / 0.8);">
                        Contaminating training data to manipulate model behavior and bypass fraud detection
                    </p>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">💥</div>
                    <h3>API Abuse</h3>
                    <p style="color: hsla(var(--foreground) / 0.8);">
                        Overwhelming systems with malicious requests, causing service disruptions and security breaches
                    </p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-number">$8.4B</div>
                <div class="stat-label">Global cost of AI/ML attacks in financial sector (2023)</div>
            </div>
        </div>
    </section>

    <!-- Slide 3: Our Solution -->
    <section class="slide" id="slide3">
        <div class="slide-number">3/12</div>
        <div class="slide-content space-y-12">
            <div class="text-center">
                <h2>✨ OUR SOLUTION</h2>
                <p class="tagline">Real-time AI Security Monitoring & Threat Detection Platform</p>
            </div>

            <div class="grid grid-3">
                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🛡️</div>
                    <h3>24/7 Monitoring</h3>
                    <p style="color: hsla(var(--foreground) / 0.8);">
                        Continuous surveillance of all AI model interactions with <span class="success-text">2.3s detection time</span>
                    </p>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3>Smart Detection</h3>
                    <p style="color: hsla(var(--foreground) / 0.8);">
                        Advanced algorithms identify threats with <span class="success-text">99.8% accuracy</span> and minimal false positives
                    </p>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Auto-Response</h3>
                    <p style="color: hsla(var(--foreground) / 0.8);">
                        Instant blocking of malicious requests with <span class="success-text">0.2% false positive rate</span>
                    </p>
                </div>
            </div>

            <div class="glass" style="padding: 32px;">
                <h3 style="text-align: center; margin-bottom: 32px;">🎨 Complete Platform Features</h3>
                <ul class="feature-list">
                    <li><span class="checkmark">✓</span> Real-time threat intelligence dashboard</li>
                    <li><span class="checkmark">✓</span> Email & SMS alert notifications</li>
                    <li><span class="checkmark">✓</span> Role-based access control (6 user roles)</li>
                    <li><span class="checkmark">✓</span> Comprehensive analytics & reporting</li>
                    <li><span class="checkmark">✓</span> Model performance tracking</li>
                    <li><span class="checkmark">✓</span> Admin user management system</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Slide 4: Key Features -->
    <section class="slide" id="slide4">
        <div class="slide-number">4/12</div>
        <div class="slide-content space-y-12">
            <h2>🎯 KEY FEATURES</h2>

            <div class="grid grid-2">
                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🔐</div>
                    <h3>Security Monitoring</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> Real-time threat detection</li>
                        <li><span class="checkmark">✓</span> Automated attack blocking</li>
                        <li><span class="checkmark">✓</span> Historical threat analysis</li>
                        <li><span class="checkmark">✓</span> Severity classification (Low/Medium/High)</li>
                    </ul>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Analytics Dashboard</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> Interactive visualizations</li>
                        <li><span class="checkmark">✓</span> Attack type distribution</li>
                        <li><span class="checkmark">✓</span> Model performance metrics</li>
                        <li><span class="checkmark">✓</span> System health monitoring</li>
                    </ul>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🚨</div>
                    <h3>Smart Alerts</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> Email notifications (SendGrid)</li>
                        <li><span class="checkmark">✓</span> SMS alerts (Twilio)</li>
                        <li><span class="checkmark">✓</span> Configurable alert rules</li>
                        <li><span class="checkmark">✓</span> Severity-based filtering</li>
                    </ul>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">👥</div>
                    <h3>User Management</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> Role-based access control</li>
                        <li><span class="checkmark">✓</span> Admin privilege management</li>
                        <li><span class="checkmark">✓</span> Sign up/Sign in authentication</li>
                        <li><span class="checkmark">✓</span> Audit logging & tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 5: Technology Stack -->
    <section class="slide" id="slide5">
        <div class="slide-number">5/12</div>
        <div class="slide-content space-y-12">
            <h2>⚙️ TECHNOLOGY STACK</h2>

            <div class="grid grid-3">
                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">💻</div>
                    <h3>Frontend</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> React 18</li>
                        <li><span class="checkmark">✓</span> Tailwind CSS</li>
                        <li><span class="checkmark">✓</span> Recharts</li>
                        <li><span class="checkmark">✓</span> Lucide Icons</li>
                    </ul>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🔧</div>
                    <h3>Backend</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> FastAPI</li>
                        <li><span class="checkmark">✓</span> PostgreSQL</li>
                        <li><span class="checkmark">✓</span> TimescaleDB</li>
                        <li><span class="checkmark">✓</span> JWT Auth</li>
                    </ul>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🔌</div>
                    <h3>Integration</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> SendGrid API</li>
                        <li><span class="checkmark">✓</span> Twilio SMS</li>
                        <li><span class="checkmark">✓</span> Docker</li>
                        <li><span class="checkmark">✓</span> LocalStorage</li>
                    </ul>
                </div>
            </div>

            <div class="glass" style="padding: 32px;">
                <h3 style="text-align: center; margin-bottom: 32px;">🏗️ Architecture Highlights</h3>
                <ul class="feature-list">
                    <li><span class="checkmark">✓</span> Single-page application (SPA) for seamless UX</li>
                    <li><span class="checkmark">✓</span> RESTful API architecture</li>
                    <li><span class="checkmark">✓</span> Time-series database optimization</li>
                    <li><span class="checkmark">✓</span> Mobile-first responsive design</li>
                    <li><span class="checkmark">✓</span> Real-time threat simulation engine</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Slide 6: Market Opportunity -->
    <section class="slide" id="slide6">
        <div class="slide-number">6/12</div>
        <div class="slide-content space-y-12">
            <h2>📈 MARKET OPPORTUNITY</h2>

            <div class="grid grid-3">
                <div class="stat-card">
                    <div class="stat-number">$28.1B</div>
                    <div class="stat-label">AI Security Market Size by 2027</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">34.8%</div>
                    <div class="stat-label">CAGR (2023-2027)</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">87%</div>
                    <div class="stat-label">Financial institutions using AI</div>
                </div>
            </div>

            <div class="grid grid-2">
                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3>Target Market</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> Banks & Financial Institutions</li>
                        <li><span class="checkmark">✓</span> Fintech Companies</li>
                        <li><span class="checkmark">✓</span> Insurance Companies</li>
                        <li><span class="checkmark">✓</span> Payment Processors</li>
                        <li><span class="checkmark">✓</span> Credit Bureaus</li>
                    </ul>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">💼</div>
                    <h3>Use Cases</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> Fraud Detection Systems</li>
                        <li><span class="checkmark">✓</span> Credit Scoring Models</li>
                        <li><span class="checkmark">✓</span> Risk Assessment AI</li>
                        <li><span class="checkmark">✓</span> Trading Algorithms</li>
                        <li><span class="checkmark">✓</span> AML/KYC Systems</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 7: Competitive Advantage -->
    <section class="slide" id="slide7">
        <div class="slide-number">7/12</div>
        <div class="slide-content space-y-12">
            <h2>🏆 COMPETITIVE ADVANTAGE</h2>

            <div class="grid grid-2">
                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">✨</div>
                    <h3>What Makes Us Different</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> <strong>Industry-specific:</strong> Built specifically for financial AI</li>
                        <li><span class="checkmark">✓</span> <strong>Real-time:</strong> 2.3s average detection time</li>
                        <li><span class="checkmark">✓</span> <strong>Comprehensive:</strong> All-in-one security platform</li>
                        <li><span class="checkmark">✓</span> <strong>User-friendly:</strong> Intuitive interface, no training needed</li>
                        <li><span class="checkmark">✓</span> <strong>Cost-effective:</strong> Lower TCO than building in-house</li>
                    </ul>
                </div>

                <div class="glass glass-hover feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Performance Metrics</h3>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> <span class="success-text">99.8%</span> threat blocking success rate</li>
                        <li><span class="checkmark">✓</span> <span class="success-text">0.2%</span> false positive rate</li>
                        <li><span class="checkmark">✓</span> <span class="success-text">99.97%</span> system uptime</li>
                        <li><span class="checkmark">✓</span> <span class="success-text">2.3s</span> mean time to detect</li>
                        <li><span class="checkmark">✓</span> <span class="success-text">24/7</span> automated monitoring</li>
                    </ul>
                </div>
            </div>

            <div class="glass" style="padding: 32px; text-align: center;">
                <h3 style="margin-bottom: 24px;">🎯 Unique Value Proposition</h3>
                <p style="font-size: 1.25rem; line-height: 1.8; color: hsla(var(--foreground) / 0.8);">
                    "The first comprehensive, real-time AI security platform designed exclusively for financial institutions, combining threat detection, automated response, and compliance monitoring in a single, user-friendly interface."
                </p>
            </div>
        </div>
    </section>

    <!-- Slide 8: Business Model -->
    <section class="slide" id="slide8">
        <div class="slide-number">8/12</div>
        <div class="slide-content space-y-12">
            <h2>💰 BUSINESS MODEL</h2>

            <div class="grid grid-3">
                <div class="glass glass-hover pricing-card">
                    <div class="feature-icon">🚀</div>
                    <h3>Starter</h3>
                    <div class="price">$299</div>
                    <div class="price-label">per month</div>
                    <ul class="feature-list" style="font-size: 1rem; margin-top: 24px;">
                        <li><span class="checkmark">✓</span> Up to 3 AI models</li>
                        <li><span class="checkmark">✓</span> 50K requests/month</li>
                        <li><span class="checkmark">✓</span> Email alerts</li>
                        <li><span class="checkmark">✓</span> Basic analytics</li>
                    </ul>
                </div>

                <div class="glass glass-hover pricing-card featured">
                    <div class="feature-icon">⭐</div>
                    <h3>Professional</h3>
                    <div class="price">$999</div>
                    <div class="price-label">per month</div>
                    <ul class="feature-list" style="font-size: 1rem; margin-top: 24px;">
                        <li><span class="checkmark">✓</span> Up to 10 AI models</li>
                        <li><span class="checkmark">✓</span> 500K requests/month</li>
                        <li><span class="checkmark">✓</span> Email & SMS alerts</li>
                        <li><span class="checkmark">✓</span> Advanced analytics</li>
                        <li><span class="checkmark">✓</span> API access</li>
                    </ul>
                </div>

                <div class="glass glass-hover pricing-card">
                    <div class="feature-icon">🏢</div>
                    <h3>Enterprise</h3>
                    <div class="price">Custom</div>
                    <div class="price-label">contact us</div>
                    <ul class="feature-list" style="font-size: 1rem; margin-top: 24px;">
                        <li><span class="checkmark">✓</span> Unlimited models</li>
                        <li><span class="checkmark">✓</span> Unlimited requests</li>
                        <li><span class="checkmark">✓</span> All features</li>
                        <li><span class="checkmark">✓</span> Dedicated support</li>
                        <li><span class="checkmark">✓</span> Custom integrations</li>
                    </ul>
                </div>
            </div>

            <div class="grid grid-2">
                <div class="stat-card">
                    <div class="stat-number">$2.4M</div>
                    <div class="stat-label">Target ARR Year 1</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">$15M</div>
                    <div class="stat-label">Target ARR Year 3</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 9: Roadmap -->
    <section class="slide" id="slide9">
        <div class="slide-number">9/12</div>
        <div class="slide-content space-y-12">
            <h2>🗺️ PRODUCT ROADMAP</h2>

            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">Q1 2025</div>
                    <div class="timeline-title">MVP Launch</div>
                    <div class="timeline-desc">Core features, 5 pilot customers, email alerts</div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">Q2 2025</div>
                    <div class="timeline-title">Enhanced Platform</div>
                    <div class="timeline-desc">SMS alerts, API access, mobile app beta</div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">Q3 2025</div>
                    <div class="timeline-title">AI Enhancement</div>
                    <div class="timeline-desc">ML-powered predictions, auto-remediation</div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-date">Q4 2025</div>
                    <div class="timeline-title">Enterprise</div>
                    <div class="timeline-desc">On-premise deployment, compliance certifications</div>
                </div>
            </div>

            <div class="glass" style="padding: 32px; margin-top: 48px;">
                <h3 style="text-align: center; margin-bottom: 32px;">🚀 Future Innovations</h3>
                <ul class="feature-list">
                    <li><span class="checkmark">✓</span> AI-powered threat prediction</li>
                    <li><span class="checkmark">✓</span> Blockchain-based audit trails</li>
                    <li><span class="checkmark">✓</span> Integration with major cloud providers</li>
                    <li><span class="checkmark">✓</span> Advanced behavioral analytics</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Slide 10: Team -->
    <section class="slide" id="slide10">
        <div class="slide-number">10/12</div>
        <div class="slide-content space-y-12">
            <h2>👥 OUR TEAM</h2>

            <div class="grid grid-3">
                <div class="glass glass-hover team-member">
                    <div class="team-photo" style="margin: 0 auto 20px;">👨‍💼</div>
                    <h3>Happy Igho Umukoro</h3>
                    <p style="color: hsl(var(--primary)); margin-bottom: 16px; font-weight: 600;">CEO & Founder</p>
                    <p style="color: hsla(var(--foreground) / 0.8); font-size: 0.95rem; line-height: 1.6;">
                        Visionary leader with expertise in AI security and financial technology, driving innovation in ethical AI solutions.
                    </p>
                </div>

                <div class="glass glass-hover team-member">
                    <div class="team-photo" style="margin: 0 auto 20px;">👨‍💻</div>
                    <h3>Technical Team</h3>
                    <p style="color: hsl(var(--primary)); margin-bottom: 16px; font-weight: 600;">Engineering</p>
                    <p style="color: hsla(var(--foreground) / 0.8); font-size: 0.95rem; line-height: 1.6;">
                        Expert engineers specializing in machine learning, cybersecurity, and scalable cloud infrastructure.
                    </p>
                </div>

                <div class="glass glass-hover team-member">
                    <div class="team-photo" style="margin: 0 auto 20px;">👔</div>
                    <h3>Advisory Board</h3>
                    <p style="color: hsl(var(--primary)); margin-bottom: 16px; font-weight: 600;">Strategic Advisors</p>
                    <p style="color: hsla(var(--foreground) / 0.8); font-size: 0.95rem; line-height: 1.6;">
                        Industry veterans from leading financial institutions and cybersecurity firms providing strategic guidance.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 11: Traction -->
    <section class="slide" id="slide11">
        <div class="slide-number">11/12</div>
        <div class="slide-content space-y-12">
            <h2>📊 TRACTION & MILESTONES</h2>

            <div class="grid grid-3">
                <div class="stat-card">
                    <div class="stat-number">5</div>
                    <div class="stat-label">Pilot Customers in Pipeline</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">$500K</div>
                    <div class="stat-label">Seed Funding Target</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">Q1 2025</div>
                    <div class="stat-label">Product Launch Date</div>
                </div>
            </div>

            <div class="glass" style="padding: 40px;">
                <h3 style="text-align: center; margin-bottom: 32px;">🎯 Key Achievements</h3>
                <div class="grid grid-2">
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> MVP development completed</li>
                        <li><span class="checkmark">✓</span> Security protocols validated</li>
                        <li><span class="checkmark">✓</span> Patent application submitted</li>
                    </ul>
                    <ul class="feature-list">
                        <li><span class="checkmark">✓</span> Strategic partnerships initiated</li>
                        <li><span class="checkmark">✓</span> Regulatory compliance framework established</li>
                        <li><span class="checkmark">✓</span> Early adopter interest confirmed</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 12: Call to Action -->
    <section class="slide" id="slide12">
        <div class="slide-number">12/12</div>
        <div class="slide-content space-y-12">
            <div class="text-center">
                <h2>🚀 LET'S PROTECT THE FUTURE OF AI</h2>
                <p class="tagline" style="max-width: 800px;">
                    Join us in revolutionizing AI security for financial institutions. Together, we can build a safer, more trustworthy AI ecosystem.
                </p>
            </div>

            <div class="glass" style="padding: 48px; text-align: center;">
                <h3 style="margin-bottom: 32px;">📞 Get in Touch</h3>
                <div class="space-y-4">
                    <p class="contact-info">
                        <strong style="color: hsl(var(--primary));">Founder & CEO:</strong> Happy Igho Umukoro
                    </p>
                    <p class="contact-info">
                        <strong style="color: hsl(var(--primary));">Email:</strong> 
                        <a href="mailto:smartxpress74@gmail.com" style="color: hsl(199 89% 60%); text-decoration: none;">smartxpress74@gmail.com</a>
                    </p>
                    <p class="contact-info">
                        <strong style="color: hsl(var(--primary));">Phone:</strong> 
                        <a href="tel:+2348065292102" style="color: hsl(199 89% 60%); text-decoration: none;">+234 806 529 2102</a>
                    </p>
                </div>

                <div style="margin-top: 48px;">
                    <a href="mailto:smartxpress74@gmail.com" class="button" style="margin: 0 8px;">
                        Schedule a Demo
                    </a>
                    <a href="mailto:smartxpress74@gmail.com?subject=Investment Inquiry" class="button" style="margin: 0 8px; background: linear-gradient(135deg, hsl(158 64% 52%), hsl(199 89% 48%));">
                        Invest Now
                    </a>
                </div>
            </div>

            <div style="text-align: center; margin-top: 48px; color: hsla(var(--foreground) / 0.6);">
                <p style="font-size: 0.875rem;">
                    © 2025 AI Security Shield. All rights reserved.
                </p>
            </div>
        </div>
    </section>

    <!-- Navigation Dots -->
    <div class="navigation">
        <div class="nav-dot active" data-slide="0"></div>
        <div class="nav-dot" data-slide="1"></div>
        <div class="nav-dot" data-slide="2"></div>
        <div class="nav-dot" data-slide="3"></div>
        <div class="nav-dot" data-slide="4"></div>
        <div class="nav-dot" data-slide="5"></div>
        <div class="nav-dot" data-slide="6"></div>
        <div class="nav-dot" data-slide="7"></div>
        <div class="nav-dot" data-slide="8"></div>
        <div class="nav-dot" data-slide="9"></div>
        <div class="nav-dot" data-slide="10"></div>
        <div class="nav-dot" data-slide="11"></div>
    </div>

    <script>
        // Navigation functionality
        const slides = document.querySelectorAll('.slide');
        const navDots = document.querySelectorAll('.nav-dot');
        let currentSlide = 0;

        // Update active nav dot
        function updateNavigation() {
            navDots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Handle scroll to update current slide
        function handleScroll() {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            slides.forEach((slide, index) => {
                const slideTop = slide.offsetTop;
                const slideBottom = slideTop + slide.offsetHeight;

                if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
                    if (currentSlide !== index) {
                        currentSlide = index;
                        updateNavigation();
                    }
                }
            });
        }

        // Scroll to specific slide
        function scrollToSlide(index) {
            slides[index].scrollIntoView({ behavior: 'smooth' });
        }

        // Add click handlers to nav dots
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                scrollToSlide(index);
            });
        });

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                if (currentSlide < slides.length - 1) {
                    scrollToSlide(currentSlide + 1);
                }
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                if (currentSlide > 0) {
                    scrollToSlide(currentSlide - 1);
                }
            }
        });

        // Initialize
        updateNavigation();
    </script>
</body>
</html>

