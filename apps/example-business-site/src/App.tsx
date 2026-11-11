// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {stoneTheme} from '@astryxdesign/theme-stone/built';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Button} from '@astryxdesign/core/Button';
import {Text, Heading} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Badge} from '@astryxdesign/core/Badge';
import {Card} from '@astryxdesign/core/Card';
import {Banner} from '@astryxdesign/core/Banner';
import {Divider} from '@astryxdesign/core/Divider';

/**
 * Nexora Digital — single-page business website
 *
 * Astryx components render the UI (text, buttons, cards, form fields).
 * Tailwind utilities handle page layout and responsive breakpoints.
 * All business details below are placeholders: edit the BUSINESS object.
 */

const BUSINESS = {
  name: 'Nexora Digital',
  tagline: 'Websites & IT services for growing businesses',
  city: 'Kochi, Kerala',
  phoneDisplay: '+91 98765 43210',
  phoneLink: '+919876543210',
  whatsapp: '919876543210',
  email: 'hello@nexoradigital.example',
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM',
};

const NAV = [
  {href: '#services', label: 'Services'},
  {href: '#work', label: 'Work'},
  {href: '#about', label: 'About'},
  {href: '#pricing', label: 'Pricing'},
  {href: '#contact', label: 'Contact'},
];

const SERVICES = [
  {
    title: 'Website design',
    body: 'Modern, mobile-first websites that load fast and turn visitors into enquiries.',
  },
  {
    title: 'Online stores',
    body: 'Sell online with product catalogues, UPI and card payments, and order tracking.',
  },
  {
    title: 'Google & social presence',
    body: 'Google Business Profile, Instagram and Facebook setup so customers find you.',
  },
  {
    title: 'IT support & AMC',
    body: 'Laptop, network and printer support for offices, with annual maintenance plans.',
  },
  {
    title: 'Business email',
    body: 'Professional email on your own domain, set up and migrated without downtime.',
  },
  {
    title: 'Automation & AI tools',
    body: 'Chatbots, WhatsApp replies and simple automations that save your team hours.',
  },
];

const WORK = [
  {
    client: 'Spice Route Café',
    type: 'Restaurant',
    result: 'Online menu and table booking — 40% more weekend reservations.',
  },
  {
    client: 'Periyar Textiles',
    type: 'Retail store',
    result: 'Online store with UPI checkout, now 120+ orders a month.',
  },
  {
    client: 'GreenLeaf Clinic',
    type: 'Healthcare',
    result: 'Appointment booking site and office network setup for 3 branches.',
  },
];

const STATS = [
  {value: '120+', label: 'Projects delivered'},
  {value: '8 yrs', label: 'In business'},
  {value: '4.9★', label: 'Google rating'},
  {value: '24 hr', label: 'Support response'},
];

const PLANS = [
  {
    name: 'Starter',
    price: '₹14,999',
    note: 'one-time',
    features: [
      '5-page website',
      'Mobile friendly',
      'WhatsApp & call buttons',
      'Google Maps listing',
    ],
    isFeatured: false,
  },
  {
    name: 'Business',
    price: '₹34,999',
    note: 'one-time',
    features: [
      'Up to 12 pages',
      'Blog or news section',
      'Business email setup',
      'Basic SEO',
      '3 months free support',
    ],
    isFeatured: true,
  },
  {
    name: 'Store',
    price: '₹59,999',
    note: 'one-time',
    features: [
      'Online store',
      'UPI & card payments',
      'Up to 200 products',
      'Order management training',
    ],
    isFeatured: false,
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-body/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2 no-underline">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-on-accent">
            N
          </span>
          <Text type="label" size="lg" weight="bold">
            {BUSINESS.name}
          </Text>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-secondary no-underline hover:text-primary">
              <Text type="body" color="inherit">
                {item.label}
              </Text>
            </a>
          ))}
        </nav>
        <Button label="Get a quote" variant="primary" size="sm" href="#contact" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <VStack gap={5}>
          <div>
            <Badge variant="success" label={`Now booking projects in ${BUSINESS.city}`} />
          </div>
          <Heading
            level={1}
            type="display-1"
            textWrap="balance"
            className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Your business, online and running smoothly.
          </Heading>
          <Text type="large" color="secondary" textWrap="pretty">
            {BUSINESS.name} builds fast websites, online stores and reliable IT
            setups for shops, clinics, restaurants and offices — so you can
            focus on your customers.
          </Text>
          <HStack gap={3} wrap="wrap">
            <Button label="Get a free quote" variant="primary" size="lg" href="#contact" />
            <Button label="See our work" variant="secondary" size="lg" href="#work" />
          </HStack>
        </VStack>
        <Card padding={6} elevation="med">
          <VStack gap={4}>
            <Text type="label" color="secondary">
              Why businesses choose us
            </Text>
            {[
              'Website live in as little as 7 days',
              'Fixed prices — no hidden charges',
              'Local team you can call or meet',
              'Support in English and Malayalam',
            ].map(point => (
              <HStack key={point} gap={3} vAlign="center">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-sm font-bold text-success">
                  ✓
                </span>
                <Text type="body">{point}</Text>
              </HStack>
            ))}
          </VStack>
        </Card>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div className="border-y border-border bg-muted">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
        {STATS.map(stat => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <dt className="order-2">
              <Text type="supporting" color="secondary">
                {stat.label}
              </Text>
            </dt>
            <dd className="order-1">
              <Heading level={3} type="display-3">
                {stat.value}
              </Heading>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <VStack gap={2}>
      <Text type="label" color="accent">
        {eyebrow}
      </Text>
      <Heading
        level={2}
        type="display-2"
        textWrap="balance"
        className="text-3xl leading-tight md:text-4xl">
        {title}
      </Heading>
      {body && (
        <Text type="large" color="secondary" textWrap="pretty">
          {body}
        </Text>
      )}
    </VStack>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <VStack gap={8}>
        <SectionHeading
          eyebrow="Services"
          title="Everything your business needs to work online"
          body="One team for your website, devices and digital tools."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Card key={service.title} padding={5} elevation="low">
              <VStack gap={2}>
                <Text type="supporting" color="secondary" hasTabularNumbers>
                  {String(i + 1).padStart(2, '0')}
                </Text>
                <Heading level={3}>{service.title}</Heading>
                <Text type="body" color="secondary">
                  {service.body}
                </Text>
              </VStack>
            </Card>
          ))}
        </div>
      </VStack>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <VStack gap={8}>
          <SectionHeading eyebrow="Our work" title="Results for local businesses" />
          <div className="grid gap-5 md:grid-cols-3">
            {WORK.map(project => (
              <Card key={project.client} padding={5}>
                <VStack gap={3}>
                  <div>
                    <Badge variant="neutral" label={project.type} />
                  </div>
                  <Heading level={3}>{project.client}</Heading>
                  <Text type="body" color="secondary">
                    {project.result}
                  </Text>
                </VStack>
              </Card>
            ))}
          </div>
        </VStack>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <SectionHeading
          eyebrow="About us"
          title="A small team that treats your business like our own"
        />
        <VStack gap={4}>
          <Text type="large" color="secondary" textWrap="pretty">
            {BUSINESS.name} started in {BUSINESS.city} with one goal: make good
            technology simple and affordable for small businesses.
          </Text>
          <Text type="body" color="secondary" textWrap="pretty">
            We plan with you, build quickly, and stay on call after launch. You
            get one point of contact, clear timelines and a fixed price agreed
            before work begins.
          </Text>
          <Divider />
          <HStack gap={6} wrap="wrap">
            <VStack gap={1}>
              <Text type="label">Visit</Text>
              <Text type="body" color="secondary">
                {BUSINESS.city}
              </Text>
            </VStack>
            <VStack gap={1}>
              <Text type="label">Open</Text>
              <Text type="body" color="secondary">
                {BUSINESS.hours}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <VStack gap={8}>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, fixed packages"
            body="Prices include design, setup and launch. Domain and hosting are billed at cost."
          />
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {PLANS.map(plan => (
              <Card
                key={plan.name}
                padding={6}
                elevation={plan.isFeatured ? 'high' : 'low'}>
                <div className="flex h-full flex-col gap-5">
                  <HStack gap={2} vAlign="center">
                    <Heading level={3}>{plan.name}</Heading>
                    {plan.isFeatured && <Badge variant="info" label="Most popular" />}
                  </HStack>
                  <HStack gap={2} vAlign="end">
                    <Heading level={4} type="display-2">
                      {plan.price}
                    </Heading>
                    <Text type="supporting" color="secondary">
                      {plan.note}
                    </Text>
                  </HStack>
                  <ul className="flex flex-1 flex-col gap-2">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex gap-2">
                        <span aria-hidden className="text-success">
                          ✓
                        </span>
                        <Text type="body">{feature}</Text>
                      </li>
                    ))}
                  </ul>
                  <Button
                    label={`Choose ${plan.name}`}
                    variant={plan.isFeatured ? 'primary' : 'secondary'}
                    width="100%"
                    href="#contact"
                  />
                </div>
              </Card>
            ))}
          </div>
        </VStack>
      </div>
    </section>
  );
}

function buildWhatsAppLink(name: string, phone: string, message: string) {
  const text = `Hello ${BUSINESS.name}, I'm ${name}${
    phone ? ` (${phone})` : ''
  }.\n\n${message}`;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
}

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const nameError = hasTriedSubmit && name.trim() === '';
  const messageError = hasTriedSubmit && message.trim() === '';

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setHasTriedSubmit(true);
    if (name.trim() === '' || message.trim() === '') {
      return;
    }
    window.open(buildWhatsAppLink(name.trim(), phone.trim(), message.trim()), '_blank', 'noopener');
    setIsSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <VStack gap={6}>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us about your project"
            body="Send a message and we'll reply within one working day with a free quote."
          />
          <VStack gap={4}>
            <ContactRow label="Call us" value={BUSINESS.phoneDisplay} href={`tel:${BUSINESS.phoneLink}`} />
            <ContactRow
              label="WhatsApp"
              value="Chat with us"
              href={`https://wa.me/${BUSINESS.whatsapp}`}
            />
            <ContactRow label="Email" value={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />
            <ContactRow label="Hours" value={BUSINESS.hours} />
          </VStack>
        </VStack>
        <Card padding={6} elevation="med">
          <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <VStack gap={4}>
              {isSent && (
                <Banner
                  status="success"
                  title="WhatsApp opened"
                  description="Press send in WhatsApp to deliver your message. We'll reply soon."
                  isDismissable
                  onDismiss={() => setIsSent(false)}
                />
              )}
              <TextInput
                label="Your name"
                value={name}
                onChange={setName}
                isRequired
                autoComplete="name"
                status={nameError ? {type: 'error', message: 'Please enter your name.'} : undefined}
              />
              <TextInput
                label="Phone number"
                type="tel"
                value={phone}
                onChange={setPhone}
                isOptional
                autoComplete="tel"
                inputMode="tel"
              />
              <TextArea
                label="What do you need?"
                value={message}
                onChange={setMessage}
                isRequired
                rows={5}
                placeholder="For example: a website for my bakery with an online menu."
                status={
                  messageError ? {type: 'error', message: 'Please describe what you need.'} : undefined
                }
              />
              <Button label="Send via WhatsApp" variant="primary" type="submit" width="100%" size="lg" />
              <Text type="supporting" color="secondary" justify="center">
                Your message opens in WhatsApp, ready to send.
              </Text>
            </VStack>
          </form>
        </Card>
      </div>
    </section>
  );
}

function ContactRow({label, value, href}: {label: string; value: string; href?: string}) {
  return (
    <div className="flex flex-col gap-0.5">
      <Text type="label" color="secondary">
        {label}
      </Text>
      {href ? (
        <a
          href={href}
          className="text-accent underline-offset-4 hover:underline"
          {...(href.startsWith('http') ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
          <Text type="large" color="inherit" weight="medium">
            {value}
          </Text>
        </a>
      ) : (
        <Text type="large">{value}</Text>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between">
        <Text type="supporting" color="secondary">
          © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.city}
        </Text>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {NAV.map(item => (
            <a key={item.href} href={item.href} className="text-secondary no-underline hover:text-primary">
              <Text type="supporting" color="inherit">
                {item.label}
              </Text>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105">
      <svg aria-hidden viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <Theme theme={stoneTheme}>
      <div className="min-h-screen bg-body">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Work />
          <About />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Theme>
  );
}
