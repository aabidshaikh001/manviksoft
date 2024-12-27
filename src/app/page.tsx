'use client'

import { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {  BarChart3, PieChart, TrendingUp, Shield, Zap, Globe, Users, CreditCard, Smartphone, Receipt, Send, Plane, Lock, ChevronDown, Facebook, Twitter, Linkedin, Github, Award, Users2, Building2, SmilePlus, Phone } from 'lucide-react';
import { motion } from 'framer-motion'
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Prevent default form submission
  toast.success("Your message has been sent successfully!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"dark",
  });
};
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [currentHash, setCurrentHash] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Update the current hash when the URL changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    // Set the initial hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActive = (path: string): boolean => {
    if (path.startsWith("#")) {
      return currentHash === path;
    }
    return pathname === path;
  };
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900" id='home'>
<header className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Image alt='logo1' src="/logo.png" height={1000} width={130} priority />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-gray-700">
          <a
            href="#home"
            className={`${isActive("#home") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`${isActive("#about") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
          >
            About
          </a>
          <a
            href="#solution"
            className={`${isActive("#solution") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
          >
            Solutions
          </a>
          <a
            href="#faq"
            className={`${isActive("#faq") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className={`${isActive("#contact") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
          >
            Contact
          </a>
        </nav>

        {/* Book Meeting Button */}
        <a
  href="https://wa.me/+917073964017"
  className="hidden md:block px-4 py-2 text-white border border-gray-300 rounded-xl bg-blue-800 hover:bg-blue-900 transition"
>
  <span className="flex gap-2 items-center justify-center">
    Book Meeting <Phone size={22} />
  </span>
</a>

       

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden text-gray-700 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-9 6h9"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a
              href="#home"
              className={`${isActive("#home") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${isActive("#about") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
            >
              About
            </a>
            <a
              href="#solution"
              className={`${isActive("#solution") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
            >
              Solutions
            </a>
            <a
              href="#faq"
              className={`${isActive("#faq") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className={`${isActive("#contact") ? "text-blue-900 font-bold" : "hover:text-blue-950"}`}
            >
              Contact
            </a>
         
            <a
  href="https://wa.me/+917073964017"
  className="mt-4 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-blue-800 hover:text-white transition"
>
  Book Meeting
</a>

          </nav>
        </div>
      )}
    </header>
      <main className="flex-1">
      <section className="w-full py-32 md:py-32 flex items-center justify-center text-blue-900 overflow-hidden lg:px-12 bg-blue-100 bg-opacity-30">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <motion.div 
        className="flex flex-col justify-center space-y-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div className="space-y-2" variants={fadeIn}>
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-6xl">
            Innovative Software Crafted for Business Growth
          </h1>
          <p className="max-w-[600px] text-gray-700 md:text-xl">
            We deliver customized software solutions that solve complex problems and fuel business innovation.
          </p>
        </motion.div>
        <motion.div variants={fadeIn}>
          <a href="/#features" className="bg-blue-900 text-white hover:bg-blue-800 transition-colors px-4 py-2 text-lg inline-block rounded-md">
            Explore Our Solutions
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="lg:flex items-center justify-center hidden relative"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-blue-800 rounded-full opacity-20 z-0"></div>
        </div>
        
        <Image
          alt="Software Technology"
          height="400"
          src="/hero.png"
          width="400"
          className="relative z-10 rounded-full object-cover"
        />
      </motion.div>
    </div>
  </div>
</section>

        <section id="about" className="w-full flex items-center justify-center py-12 md:py-24  bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-blue-900"
                variants={fadeIn}
              >
                About Maanvik Softech
              </motion.h2>
              <motion.p 
                className="text-gray-600 md:text-xl text-center mb-8 max-w-[800px] mx-auto"
                variants={fadeIn}
              >
                Maanvik Softech is a leading innovator in Software technology, dedicated to transforming the way businesses manage their Software operations.
              </motion.p>
              <motion.div 
                className="grid gap-6 lg:grid-cols-3"
                variants={staggerChildren}
              >
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Shield className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">To empower businesses with cutting-edge Software technology solutions that drive growth, efficiency, and security.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Users className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Our Team</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">A diverse group of experts in finance, technology, and customer service, committed to delivering excellence.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <TrendingUp className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">To be the global leader in innovative fintech solutions, shaping the future of Software operations for businesses worldwide.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="features" className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-blue-50">
  <div className="container px-4 md:px-6">
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.h2 
        className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-blue-900"
        variants={fadeIn}
      >
        Our Features
      </motion.h2>
      <motion.p 
        className="text-gray-600 md:text-xl text-center mb-8 max-w-[800px] mx-auto"
        variants={fadeIn}
      >
        Explore why our software solutions are trusted by businesses worldwide.
      </motion.p>
      <motion.div 
        className="grid gap-6 lg:grid-cols-3"
        variants={staggerChildren}
      >
        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <CreditCard className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">AEPS Software</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Fast, secure, and scalable AEPS solutions tailored for seamless transactions.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <Smartphone className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">Recharge Software</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Empowering your business with versatile and user-friendly recharge solutions.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <Receipt className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">BBPS Software</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Integrated BBPS platforms to streamline utility bill payments and collections.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <PieChart className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Gain actionable insights with intuitive and interactive data visualization tools.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <Shield className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">Security Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Robust security frameworks to protect your software and data assets.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <TrendingUp className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">Growth Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Scalable platforms designed to grow with your business and maximize efficiency.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <Zap className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">Automation Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Innovative automation tools to streamline repetitive tasks and boost productivity.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <Globe className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Expand your horizons with software solutions optimized for global markets.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
            <CardHeader>
              <Users className="h-10 w-10 mb-2 text-blue-600" />
              <CardTitle className="text-blue-900">Customer Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Tools to enhance customer interaction and build lasting relationships.</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>

        <section id="awards" className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-blue-900"
                variants={fadeIn}
              >
                Our Awards & Achievements
              </motion.h2>
              <motion.p 
                className="text-gray-600 md:text-xl text-center mb-8 max-w-[800px] mx-auto"
                variants={fadeIn}
              >
                We are proud to be recognized for our efforts and contributions.
              </motion.p>
              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={staggerChildren}
              >
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200 py-10">
                    <CardHeader>
                      <Image
                        src="/logo1.png"
                        width={100}
                        height={100}
                        alt="Best Software Development Company 2023 logo"
                        className="mx-auto mb-4"
                      />
                      <CardTitle className="text-blue-900">Best Software Development Company 2023</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 ">Awarded for excellence in software development and innovative solutions.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200 py-5">
                    <CardHeader>
                      <Image
                        src="/logo2.jpg"
                        width={100}
                        height={100}
                        alt="Innovative Startup of the Year 2022 logo"
                        className="mx-auto mb-4"
                      />
                      <CardTitle className="text-blue-900">Innovative Startup of the Year 2022</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-5">Recognized as a top innovative company in the tech industry.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200 py-5">
                    <CardHeader>
                      <Image
                        src="/logo3.png"
                        width={70}
                        height={100}
                        alt="Top IT Solutions Provider 2021 logo"
                        className="mx-auto mb-4"
                      />
                      <CardTitle className="text-blue-900">Top IT Solutions Provider 2021</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-5">Honored for providing cutting-edge IT solutions to businesses worldwide.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="technology" className="w-full flex items-center justify-center  py-12 md:py-24 lg:py-32 bg-gray-50">
  <div className="container px-4 md:px-6">
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.h2 
        className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-gray-900"
        variants={fadeIn}
      >
        Technology We Use
      </motion.h2>
      <motion.p 
        className="text-gray-600 md:text-xl text-center mb-8 max-w-[800px] mx-auto"
        variants={fadeIn}
      >
        Leveraging the latest and most trusted technologies to power our solutions.
      </motion.p>
      <motion.div 
        className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2"
        variants={staggerChildren}
      >
        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <Globe className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">React.js</h3>
            <p className="text-gray-600 text-center">Efficient and scalable front-end development.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <Zap className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Node.js</h3>
            <p className="text-gray-600 text-center">Robust back-end solutions for high-performance applications.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">AWS</h3>
            <p className="text-gray-600 text-center">Reliable cloud computing for scalability and security.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <BarChart3 className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Python</h3>
            <p className="text-gray-600 text-center">Powerful scripting for data-driven applications.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <PieChart className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Django</h3>
            <p className="text-gray-600 text-center">Versatile and secure web application framework.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <TrendingUp className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">SQL</h3>
            <p className="text-gray-600 text-center">Structured data management and querying.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <Users className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Git</h3>
            <p className="text-gray-600 text-center">Version control for collaborative development.</p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex flex-col items-center p-4 border hover:shadow-lg transition-shadow duration-300 bg-white">
            <Award className="h-12 w-12 text-teal-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Kubernetes</h3>
            <p className="text-gray-600 text-center">Efficient container orchestration and deployment.</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>

        <section id="stats" className="w-full py-12 flex items-center justify-center md:py-24 lg:py-32 bg-blue-900 text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.div 
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                variants={staggerChildren}
              >
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 bg-blue-800 border-blue-700">
                    <CardHeader>
                      <Users2 className="h-10 w-10 mb-2 text-blue-300" />
                      <CardTitle className="text-4xl font-bold text-white">300K+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100">Retail Merchants</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 bg-blue-800 border-blue-700">
                    <CardHeader>
                      <Building2 className="h-10 w-10 mb-2 text-blue-300" />
                      <CardTitle className="text-4xl font-bold text-white">10+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100">Partners</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 bg-blue-800 border-blue-700">
                    <CardHeader>
                      <Users className="h-10 w-10 mb-2 text-blue-300" />
                      <CardTitle className="text-4xl font-bold text-white">120+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100">Team of Employees</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 bg-blue-800 border-blue-700">
                    <CardHeader>
                      <SmilePlus className="h-10 w-10 mb-2 text-blue-300" />
                      <CardTitle className="text-4xl font-bold text-white">90M+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-100">Happy Customers</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="solutions" className="w-full py-12 md:py-24 flex items-center justify-center lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-blue-900"
                variants={fadeIn}
              >
                Our Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-600 md:text-xl text-center mb-8 max-w-[800px] mx-auto"
                variants={fadeIn}
              >
                Tailored Software technology solutions to meet the complex needs of modern businesses.
              </motion.p>
              <motion.div 
                className="grid gap-6 lg:grid-cols-3"
                variants={staggerChildren}
              >
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Zap className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Intelligent Payments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Streamline your payment processes with our AI-powered system. Automate reconciliations, reduce errors, and improve cash flow management.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Globe className="h-16 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Global Treasury Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Optimize your global treasury operations with real-time visibility, automated FX hedging, and integrated risk management tools.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Users className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Corporate Software Platform</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">A comprehensive digital software solution for corporates, offering seamless integration with ERPs, advanced analytics, and personalized services.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="solution" className="w-full py-12 flex items-center justify-center md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-blue-900"
                variants={fadeIn}
              >
                Our Software Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-600 md:text-xl text-center mb-8 max-w-[800px] mx-auto"
                variants={fadeIn}
              >
                Providing innovative software solutions to meet your business needs.
              </motion.p>
              <motion.div 
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerChildren}
              >
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <CreditCard className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">AEPS Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Enable seamless Aadhaar-based transactions for your customers.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Smartphone className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Recharge Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Easy and quick mobile and DTH recharge solutions.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Receipt className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">BBPS Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Bill payment services through the Bharat Bill Payment System.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Send className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">DMT Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Direct Money Transfer solutions for quick transactions.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Plane className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Travel Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Comprehensive travel management solutions for businesses and individuals.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                    <CardHeader>
                      <Lock className="h-10 w-10 mb-2 text-blue-600" />
                      <CardTitle className="text-blue-900">Payment Gateway</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Secure payment processing solutions for your business.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="faq" className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-blue-900"
                variants={fadeIn}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                className="text-gray-600 md:text-xl text-center mb-8 max-w-[800px] mx-auto"
                variants={fadeIn}
              >
                Find answers to common questions about our services and solutions.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-blue-900">What is Maanvik Softech?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Maanvik Softech is a leading provider of innovative Software technology solutions for businesses worldwide. We offer a range of services including intelligent payments, global treasury management, and corporate software platforms.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-blue-900">How secure are your payment solutions?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Our payment solutions employ state-of-the-art security measures, including blockchain technology and biometric authentication. We prioritize the safety and confidentiality of all Software transactions and data.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-blue-900">Can your solutions integrate with existing systems?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Yes, our solutions are designed to seamlessly integrate with a wide range of existing systems and ERPs. We offer customized integration services to ensure smooth implementation and operation within your current infrastructure.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-blue-900">What kind of support do you offer?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      We provide comprehensive support including 24/7 technical assistance, regular software updates, and dedicated account managers for our enterprise clients. Our team is always ready to address any concerns or questions you may have.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 flex items-center justify-center text-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.div 
                className="flex flex-col items-center justify-center space-y-4 text-center"
                variants={staggerChildren}
              >
                <motion.div className="space-y-2" variants={fadeIn}>
                  <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" variants={fadeIn}>Ready to Transform Your Software Operations?</motion.h2>
                  <motion.p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" variants={fadeIn}>
                    Join the ranks of industry leaders who have revolutionized their Software processes with Maanvik Softech.
                  </motion.p>
                </motion.div>
                <motion.div className="w-full max-w-sm space-y-2" variants={fadeIn}>
                <a
  href="https://wa.me/+917073964017"
  className="w-full bg-white text-blue-900 hover:bg-blue-100 transition-colors text-lg py-2 px-4 rounded flex justify-center items-center"
>
  Request a Demo
</a>

                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Contact Us</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    For more information about our software solutions, feel free to reach out!
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-900">Get in Touch</h3>
                  <p className="text-gray-600">Email: maanviksoftech@gmail.com</p>
                  <p className="text-gray-600">Phone: +91 7073964017</p>
                  <p className="text-gray-600">Address: Jaipur Rajasthan</p>
                </div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
  <a href="mailto:maanviksoftech@gmail.com" className="bg-blue-900 text-white hover:bg-blue-800 transition-colors px-4 py-2 rounded-md inline-block text-center">
    Email Us
  </a>
  <a href="https://wa.me/+917073964017" className="text-blue-900 border-blue-900 hover:bg-blue-100 transition-colors border px-4 py-2 rounded-md inline-block text-center">
    Book Meeting
  </a>
</div>

              </div>
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we&apos;ll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSendMessage}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First name</label>
                        <Input id="first-name" placeholder="Enter your first name" className="border-blue-200 focus:border-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last name</label>
                        <Input id="last-name" placeholder="Enter your last name" className="border-blue-200 focus:border-blue-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input id="email" placeholder="Enter your email" type="email" className="border-blue-200 focus:border-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                      <Input id="company" placeholder="Enter your company name" className="border-blue-200 focus:border-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        className="min-h-[100px] w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="message"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800 transition-colors">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-900 border-t border-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Maanvik Softech</h3>
              <p className="text-sm text-blue-100">
                Maanvik Softech is a leading provider of innovative Software technology solutions for businesses worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#technology" className="hover:text-white transition-colors">Software</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect with Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com" className="text-blue-100 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://www.x.com/" className="text-blue-100 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/" className="text-blue-100 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://www.github.com/" className="text-blue-100 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-t border-blue-800 py-8 md:flex-row md:justify-between">
            <p className="text-xs text-blue-100">© 2024 Maanvik Softech. All rights reserved.</p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <a className="text-xs text-blue-100 hover:text-white transition-colors" >
                Terms
              </a>
              <a className="text-xs text-blue-100 hover:text-white transition-colors" >
                Privacy
              </a>
              <a className="text-xs text-blue-100 hover:text-white transition-colors" >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

