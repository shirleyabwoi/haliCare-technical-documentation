"use client";
import Image from "next/image";
import Navbar from "../shared-components/NavBar";
import Footer from "../shared-components/Footer";
import { FaBug, FaCloudUploadAlt } from "react-icons/fa";

export default function MobileDocumentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-[#001F54] text-white py-16 px-4 sm:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4"> Mobile App <span className="text-[#17DFF9] ml-2 sm:ml-3">Documentation</span></h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90 px-2 sm:px-0">
          Built with Kotlin for Android, the HaliCare Patient Mobile App empowers users to locate clinics, book appointments, and receive real-time updates all through an intuitive, secure, and stigma-free interface designed to save lives and provide continuous care.
        </p>
      </section>
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#001F54] mb-6 text-center px-2 sm:px-0">Overview</h2>
        <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto px-2 sm:px-0">
          In the wake of USAID clinic closures, HaliCare ensures patients living with HIV/AIDS can still access operational clinics without delay or discrimination. The mobile app serves as a lifeline connecting users to verified, real-time clinic data so they can book appointments, receive care, and stay on treatment with dignity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-2 sm:px-0">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#001F54"className="w-10 h-10" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#001F54]">Core Functionality</h3>
            <p className="text-gray-700">
              Locate nearby operational clinics, view real-time availability, book appointments, and access essential health services all designed to prevent treatment interruption and reduce stigma.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="#001F54" className="w-10 h-10" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M9 9M15 19v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9M15 9M12 12h.01M12 18h.01M12 6h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#001F54]">Tech Stack</h3>
            <p className="text-gray-700">
              Built with Kotlin and Jetpack Compose for a modern, responsive UI. Uses Retrofit for secure API communication, Room for offline caching, and Coroutines for smooth performance even on low-end devices.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#001F54" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round"strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#001F54]">Integration</h3>
            <p className="text-gray-700">
              Securely connects to the Django REST backend using JWT authentication. All data is encrypted in transit and at rest, ensuring patient privacy and trust in every interaction.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#001F54] mb-6 text-center px-2 sm:px-0">Code Structure</h2>
        <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
          The app’s architecture follows the Kotlin Compose best practices with modular, maintainable components supporting offline and online functionality:
        </p>
        <pre className="bg-gray-100 rounded-lg p-6 overflow-x-auto text-sm font-mono text-gray-800 max-w-4xl mx-auto px-2 sm:px-0">
          {`halicare/
├── api/           # API service definitions and networking
├── components/    # Reusable Compose UI components
├── data/          # Data sources, including local database and remote APIs
├── di/            # Dependency Injection with Hilt modules
├── model/         # Data models and domain entities
├── repository/    # Business logic and data handling
├── screens/       # Compose UI screens for user flows
├── ui/theme/      # Theming, colors, fonts, and typography
├── utils/         # Utility functions and Kotlin extensions
└── viewModel/     # ViewModels handling state and business logic`}
        </pre>
      </section>
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#001F54] mb-6 text-center px-2 sm:px-0">UI/UX Implementation</h2>
        <p className="text-gray-700 mb-12 text-center max-w-4xl mx-auto px-2 sm:px-0">
          Every screen in the HaliCare mobile app is designed with empathy, accessibility, and urgency in mind. We prioritize clarity over complexity because when a patient is seeking care, every second counts.
        </p>
        <div className="max-w-6xl mx-auto mb-16 px-2 sm:px-0">
          <h3 className="text-2xl font-semibold text-[#001F54] mb-8 text-center">Onboarding & Authentication</h3>
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image src="/images/teaser-1.png"  alt="Welcome Screen - Onboarding Step 1"  width={300} height={550}
                  className="rounded-xl shadow-lg border border-gray-200"
                />
                <div className="absolute -top-3 -left-3 bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 1
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Welcome Screen</h4>
              <p className="text-gray-600 leading-relaxed">
                The app opens with a clear, hopeful message: “Welcome to HaliCare, Your Ally in Digital Health Solutions.” This screen reassures users they’ve found a safe, stigma-free space to access care.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-6 lg:gap-12 mb-8">
            <div className="transform -rotate-3">
              <div className="w-[280px] relative">
                <Image src="/images/sign-up.png" alt="Sign Up Form" width={280} height={500} className="rounded-xl shadow-xl border border-gray-300" />
                <div className="absolute -top-3 -left-3 bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Sign Up
                </div>
              </div>
            </div>
            <div className="transform rotate-3">
              <div className="w-[280px] relative">
                <Image src="/images/sign-in.png" alt="Sign In Form"  width={280} height={500} className="rounded-xl shadow-xl border border-gray-300"/>
                <div className="absolute -top-3 -right-3 bg-cyan-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Sign In
                </div>
              </div>
            </div>
        </div>
        <div className="text-center lg:text-left max-w-4xl mx-auto px-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Authentication Flow</h4>
            <p className="text-gray-600 leading-relaxed">
              Designed for privacy and ease: users sign up with only a phone number and password. No unnecessary personal data is collected. All credentials are protected with end-to-end encryption and secure token storage.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mb-16 px-2 sm:px-0">
          <h3 className="text-2xl font-semibold text-[#001F54] mb-8 text-center">Clinic Discovery</h3>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image src="/images/Find-clinics.png" alt="Location Permission Request" width={300} height={550}/>
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 4
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Location Permission</h4>
              <p className="text-gray-600 leading-relaxed">
                The app gently requests location access to show nearby clinics but never forces it. If denied, users can search by city or region, ensuring no one is excluded due to privacy preferences.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image src="/images/counseling.png" alt="Find Clinics List" width={300} height={550} className="rounded-xl shadow-lg border border-gray-200"/>
                <div className="absolute -top-3 -left-3 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 5
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Clinics List</h4>
              <p className="text-gray-600 leading-relaxed">
                Clinics are displayed with clear operating status, services offered, and distance. This transparency helps patients make informed decisions quickly reducing anxiety and travel time.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image src="/images/clinic-detail.png" alt="Clinic Detail Page" width={300} height={550} className="rounded-xl shadow-lg border border-gray-200"/>
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 6
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Clinic Detail</h4>
              <p className="text-gray-600 leading-relaxed">
                Each clinic profile includes verified hours, available services, and contact info. A prominent “Book Appointment” button enables immediate action because timely care saves lives.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-2 sm:px-0">
          <h3 className="text-2xl font-semibold text-[#001F54] mb-8 text-center">Appointment Booking Flow</h3>
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image src="/images/appointment.png" alt="Book Appointment Calendar" width={300} height={550} className="rounded-xl shadow-lg border border-gray-200"/>
                <div className="absolute -top-3 -left-3 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step 7
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Calendar View</h4>
              <p className="text-gray-600 leading-relaxed">
                The booking calendar shows only available slots in real time preventing double bookings and patient frustration. It’s designed for simplicity, even for first-time smartphone users.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#001F54] mb-6 text-center px-2 sm:px-0">Mobile Architecture</h2>
        <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto px-2 sm:px-0">
          The app follows a clean, maintainable architecture that prioritizes reliability and offline resilience because patients in remote or low-connectivity areas deserve uninterrupted access to care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-2 sm:px-0">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Data Flow</h3>
            <ul className="space-y-2 text-gray-700">
              <li>UI (Jetpack Compose) → ViewModel → Repository → API/Room</li>
              <li>Real-time data syncs with the Django backend</li>
              <li>Offline-first design: clinic data is cached locally</li>
              <li>State updates are reactive and lifecycle-aware</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Key Libraries</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Jetpack Compose</strong> – Modern, declarative UI</li>
              <li><strong>Retrofit + OkHttp</strong> – Secure, efficient networking</li>
              <li><strong>Room</strong> – Local persistence for offline access</li>
              <li><strong>Hilt</strong> – Dependency injection for testability</li>
              <li><strong>Coroutines + Flow</strong> – Smooth async operations</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-0">
          <div className="flex items-center justify-center mb-8">
            <FaBug className="text-[#001F54] text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-[#001F54]">Testing & Quality Assurance</h2>
          </div>
          <p className="text-gray-700 mb-10 text-center max-w-4xl mx-auto px-2 sm:px-0">
            At HaliCare, quality isn’t optional it’s essential to saving lives and preventing stigma. Every feature undergoes rigorous validation to ensure the app remains reliable, secure, and accessible for all users, especially those in vulnerable situations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-0">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#001F54] mb-4">Automated Testing</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Unit tests for business logic (ViewModels, Repositories)</li>
                <li>Integration tests with mocked API responses</li>
                <li>UI tests (Espresso) for critical user journeys</li>
                <li>CI pipeline runs on every pull request</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#001F54] mb-4">Manual & Device Testing</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Tested on Android 8–14 across 15+ device models</li>
                <li>Verified offline behavior and low-network resilience</li>
                <li>Accessibility compliance (screen reader, contrast, touch targets)</li>
                <li>Security audit: no logs, encrypted storage, certificate pinning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto px-2 sm:px-0">
        <div className="flex items-center justify-center mb-8">
          <FaCloudUploadAlt className="text-[#001F54] text-3xl mr-4" />
          <h2 className="text-3xl font-bold text-[#001F54]">Deployment</h2>
        </div>
        <p className="text-gray-700 mb-10 text-center max-w-4xl mx-auto px-2 sm:px-0">
          The HaliCare Mobile App is actively published on the Google Play Store, making it accessible to a broad user base. Deployment is managed through secure, automated pipelines that streamline updates and maintain app quality.
        </p>
        <p className="text-gray-700 mb-10 text-center max-w-4xl mx-auto px-2 sm:px-0">
          Crashlytics is used for real-time crash reporting and performance monitoring, giving developers rapid feedback to enhance app stability and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-2 sm:px-0">
          <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-200">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2">Build</h3>
            <p className="text-sm text-gray-600">Generate a signed Android App Bundle (AAB) using release keys and ProGuard for code obfuscation and optimization.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-200">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2">Test</h3>
            <p className="text-sm text-gray-600">Conduct internal testing and beta releases with feedback from real users to ensure quality before wider rollout.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-200">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2">Rollout</h3>
            <p className="text-sm text-gray-600">Deploy a staged rollout on Google Play Store, increasing availability gradually and monitoring app stability closely.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl text-center border border-gray-200">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">4</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2">Monitor</h3>
            <p className="text-sm text-gray-600">Utilize Crashlytics for real-time performance and crash monitoring, supporting fast incident response and quality improvements.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
