"use client";
import Navbar from "../shared-components/NavBar";
import Footer from "../shared-components/Footer";

export default function Docs() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="text-center py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#001F54] text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">Frontend-Web <span className="text-[#17DFF9] ml-2 sm:ml-3">Architecture</span></h1> 
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto">
              This page documents the frontend architecture, technology stack, testing strategy, code structure, routes, and deployment details of the clinician dashboard, providing insights about the technologies and workflows that power the system.
            </p>
          </div>
        </div>
        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 space-y-12 sm:space-y-16 md:space-y-20 bg-white text-gray-800 font-sans">
          <section className="max-w-4xl mx-auto px-4 sm:px-6 border-l-4 border-[#001F54] pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Technology Stack</h2>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              Our frontend leverages modern, efficient technologies to ensure a responsive, maintainable, and scalable user experience. Next.js remains a leading framework for React applications in 2025, providing powerful features like hybrid rendering, optimized performance, and seamless routing.
            </p>
            <ul className="list-disc ml-4 sm:ml-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
              <li><strong>Next.js:</strong> Enables server-side rendering and static site generation, enhancing SEO and speed.</li>
              <li><strong>React 18:</strong> Core UI foundation with concurrent rendering for responsive interfaces.</li>
              <li><strong>Tailwind CSS:</strong> Utility-first CSS for rapid styling and consistent design.</li>
              <li><strong>Jest & React Testing Library:</strong> Robust testing tools ensuring UI and interaction reliability.</li>
              <li><strong>React Icons:</strong> Provides scalable icons for consistent UI elements.</li>
            </ul>
          </section>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 border-l-4 border-[#17DFF9] pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Code Structure</h2>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              The project is organized to promote modularity and efficient development. Key folders separate concerns such as user interface components, API routes, hooks, and utilities:
            </p>
<div className="bg-[#D9D9D9] shadow-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-100 max-w-full overflow-x-auto">
  <pre className="text-xs sm:text-sm leading-relaxed text-gray-900" style={{ whiteSpace: 'pre-wrap' }}>
    halicare/src/app             # Main application entry with pages and components{"\n"}
    ├── /public                  # Static assets like images and icons{"\n"}
    ├── /api                     # API routes and backend logic{"\n"}
    ├── /appointment             # Appointment management features{"\n"}
    ├── /clinicregistration      # Clinic registration forms and logic{"\n"}
    ├── /components/TeaserScreen # Welcome and marketing components{"\n"}
    ├── /dashboard               # Main dashboard components and pages{"\n"}
    ├── /hooks                   # Custom React hooks for shared state and logic{"\n"}
    ├── /login                   # Login flow pages and components{"\n"}
    ├── /services                # Clinic clinic management pages and components{"\n"}
    ├── /shared-components       # UI components shared across the app (Navbar, Footer){"\n"}
    ├── /signup                  # Signup workflow{"\n"}
    └── /utils                   # Utility functions and API helpers
  </pre>
</div>

          </section>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 border-l-4 border-[#001F54] pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Routes Overview</h2>
            <p className="mb-4 leading-relaxed text-sm sm:text-base">
              The following routes structure the user experience guiding them through signup, clinic management, and daily operations.
            </p>
            <ul className="list-disc ml-4 sm:ml-6 space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
              <li><strong>/signup:</strong> A secure form for new users to create accounts by entering a phone number, full name, and password.</li>
              <li><strong>/login:</strong> Authentication page for returning users to access their personalized dashboard and features.</li>
              <li><strong>/clinic_registration:</strong> Page where clinicians provide essential clinic details like name, contact info, and operating hours.</li>
              <li><strong>/dashboard:</strong> Central hub post-login displaying key clinic performance metrics, recent activities, and upcoming appointments.</li>
              <li><strong>/appointment:</strong> Interface for managing patient appointments, including search, filtering by status or date, and status updates.</li>
              <li><strong>/services:</strong> Management interface to add new services, edit existing ones, or remove outdated offerings with search and pagination features.</li>
            </ul>
          </section>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-t-4 border-[#001F54] pt-4">Testing & Quality Assurance</h2>
            <p className="leading-relaxed text-sm sm:text-base mb-4">
              Our testing strategy centers on frontend stability and user interface correctness using Jest with React Testing Library. Tests are executed automatically with each code change through continuous integration.
            </p>
            <p className="leading-relaxed text-sm sm:text-base">
              Complementary manual testing focuses on device responsiveness, accessibility standards, and handling of edge cases to ensure quality before deployment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
              <div className="bg-[#001F54] p-4 sm:p-6 rounded-xl text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Frontend (Jest)</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>Unit tests of UI components such as Navbar, Footer, and Documentation sections.</li>
                  <li>Snapshot tests to identify unintended UI changes.</li>
                  <li>Integration tests to simulate user interactions and flows.</li>
                  <li>Mocks for API calls and React hooks ensure isolated testing environments.</li>
                </ul>
              </div>
              <div className="bg-[#17DFF9] p-4 sm:p-6 rounded-xl text-[#001F54]">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Automation</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>Continuous testing on GitHub Actions integrates quality checks automatically.</li>
                  <li>Accessibility tests with Axe-core improve inclusiveness and compliance.</li>
                  <li>Aim for over 85% test coverage in core UI logic and workflows.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-t-4 border-[#17DFF9] pt-4">Deployment</h2>
            <p className="leading-relaxed text-sm sm:text-base mb-4">
              Deployment to production is streamlined via Vercel, allowing rapid and reliable delivery of new features and fixes with minimal manual intervention.
            </p>
            <p className="leading-relaxed text-sm sm:text-base">
              Environment variables are centrally managed and build pipelines verify code integrity before any update reaches users, with preview deployments aiding code review.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
              <div className="bg-[#001F54] text-white p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">01. Prepare App</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm space-y-1">
                  <li>Update and audit project dependencies in <code>package.json</code> regularly.</li>
                  <li>Define environment variables needed for API and other integrations.</li>
                  <li>Perform local production builds to detect errors early.</li>
                </ul>
              </div>
              <div className="bg-[#17DFF9] text-[#001F54] p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">02. Connect to Vercel</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm space-y-1">
                  <li>Set up Vercel project linked to the GitHub repository.</li>
                  <li>Manage environment variables for production, preview, and development.</li>
                  <li>Configure build commands and output directories aligned with Next.js standards.</li>
                </ul>
              </div>
              <div className="bg-[#001F54] text-white p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">03. Configure CI Pipeline</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm space-y-1">
                  <li>Trigger tests and builds automatically on every main branch push.</li>
                  <li>Deploy updates securely using Vercel CLI and authentication tokens.</li>
                  <li>Enable preview deployments for pull request review workflows.</li>
                </ul>
              </div>
              <div className="bg-[#17DFF9] text-[#001F54] p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">04. Monitor & Rollback</h3>
                <ul className="list-disc ml-4 sm:ml-6 text-xs sm:text-sm space-y-1">
                  <li>Monitor deployments and build health within the Vercel dashboard.</li>
                  <li>Rollback to prior stable versions if issues occur swiftly.</li>
                  <li>Benefit from auto SSL certificates, CDN caching, and efficient global edge delivery to optimize user experience.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}