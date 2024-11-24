import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Zap, Shield, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Modern Web Platform - Build Better Apps Faster',
  description: 'A powerful platform for building modern web applications with Next.js 14, React, and TypeScript.',
  openGraph: {
    title: 'Modern Web Platform - Build Better Apps Faster',
    description: 'A powerful platform for building modern web applications with Next.js 14, React, and TypeScript.',
    type: 'website',
    url: 'https://your-domain.com',
    images: [{ url: 'https://your-domain.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Web Platform - Build Better Apps Faster',
    description: 'A powerful platform for building modern web applications with Next.js 14, React, and TypeScript.',
    images: ['https://your-domain.com/og-image.jpg'],
  },
};

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built on Next.js 14 for optimal performance and instant page loads.',
    icon: Zap,
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security with built-in protection and best practices.',
    icon: Shield,
  },
  {
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on any device.',
    icon: Smartphone,
  },
  {
    title: 'Global Scale',
    description: 'Deploy worldwide with edge computing and automatic scaling.',
    icon: Globe,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Build Better Apps{' '}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Faster
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A modern platform for creating powerful web applications. Built with Next.js 14, React, and TypeScript.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="px-8">
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Link href="/demo">Live Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:gap-16">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Powerful Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
                Everything you need to build modern web applications at scale.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card key={feature.title} className="relative overflow-hidden">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-lg bg-slate-900 px-6 py-16 sm:px-12 sm:py-24 md:px-16 md:py-32">
            <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-gray-300 md:text-xl">
                Join thousands of developers building better apps with our platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Start Building
                </Button>
                <Button variant="outline" size="lg" className="px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          </div>
        </div>
      </section>
    </div>
  );
}