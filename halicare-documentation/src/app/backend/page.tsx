"use client";
import Navbar from "../shared-components/NavBar";
import Footer from "../shared-components/Footer";
import { FaBug, FaCloudUploadAlt, FaShieldAlt, FaDatabase } from "react-icons/fa";
import Image from "next/image";

const BackendDocumentation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" id="backend">
      <Navbar />
      <div className="w-full bg-[#001F54] text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">
            Backend<span className="text-[#17DFF9] ml-2 sm:ml-3">Architecture</span>
          </h1>
          <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            A Django-powered system connecting HIV/AIDS patients with operational clinics in Kenya
            after USAID funding withdrawal built for resilience, real-time accuracy, and patient-centered care.
            Every line of code serves our mission: to save lives, prevent stigma, and ensure no patient is left behind.
          </p>
        </div>
      </div>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-4 sm:mb-6 mt-8 sm:mt-12">Project Structure</h2>
        <p className="text-black mb-3 max-w-4xl leading-relaxed text-sm sm:text-base">
          Our backend is built using Django's app-based modular architecture which organizes code into reusable components,
          promoting scalability and maintainability. Each app addresses a specific function: 
          <strong>api</strong> hosts the core REST API endpoints, <strong>appointment</strong> manages booking logic, <strong>arv</strong> handles antiretroviral availability,
          and <strong>center</strong> focuses on clinic/counseling center models. This separation allows focused development and easier debugging.
        </p>
        <div className="bg-[#D9D9D9] shadow-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-100 max-w-full overflow-x-auto">
<pre className="text-xs sm:text-sm leading-relaxed text-gray-900" style={{ whiteSpace: 'pre-wrap' }}>
  halicare/{"\n"}
  ├── api/                 # Core API endpoints{"\n"}
  ├── appointment/         # Appointment booking logic{"\n"}
  ├── arv/                 # ARV availability management{"\n"}
  ├── center/              # Clinic/Counseling Center models{"\n"}
  ├── env/                 # Environment config{"\n"}
  └── halicare/            # Main Django app
</pre>
       </div>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-4 sm:mb-6">Technology Stack</h2>
        <p className="text-black mb-4 max-w-4xl leading-relaxed text-sm sm:text-base">
          Our technology choices ensure security, reliability, and speed in delivering healthcare services. 
          <strong>Django 4.2</strong> provides a secure, all-in-one framework for rapid backend development.
          <strong>Django REST Framework</strong> builds a powerful API layer with easy serialization,
          <strong>PostgreSQL</strong> offers a dependable database ensuring data integrity,
          and <strong>Heroku</strong> enables seamless cloud deployment and scaling.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl">
          {[
            { name: "Django 4.2", desc: "Secure, batteries-included framework" },
            { name: "Django REST Framework", desc: "Robust API layer with serialization" },
            { name: "PostgreSQL", desc: "Reliable, ACID-compliant database" },
            { name: "Heroku", desc: "Managed PaaS for rapid deployment" }
          ].map((tech, idx) => (
            <div
              key={idx}
              className="group bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:border-[#597DD8] hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-3xl sm:text-4xl mb-3 text-[#193479]">
                {idx < 3 ? <FaDatabase /> : <FaCloudUploadAlt />}
              </div>
              <h3 className="font-bold text-base sm:text-lg text-[#193479] mb-2">{tech.name}</h3>
              <p className="text-xs sm:text-sm text-black">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-4 sm:mb-6"> Core Data Models </h2>
        <p className="text-black mb-4 sm:mb-6 max-w-4xl leading-relaxed text-sm sm:text-base">
          Designed with patient privacy and real-time accuracy in mind every model reflects the urgency of HIV/AIDS care continuity.
        </p>
        <div className="bg-[#D9D9D9] rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-gray-100 max-w-4xl">
          <div className="bg-gray-300 px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center border-b border-gray-400">
            <span className="text-gray-700 text-xs sm:text-sm font-mono">models.py</span>
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full"></div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <pre className="text-gray-900 p-4 sm:p-6 text-xs sm:text-sm font-mono whitespace-pre-wrap">
{`# Custom User Model
class CustomUser(models.Model):
    user_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    phone_number = models.CharField(max_length=15, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    USER_TYPES = [('PATIENT', 'Patient'), ('CLINICIAN', 'Clinician')]
    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    date_joined = models.DateTimeField(auto_now_add=True)

# Counseling Center / Clinic
class CounselingCenter(models.Model):
    center_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    center_name = models.CharField(max_length=100)
    center_type = models.CharField(max_length=50)  # e.g., "counseling_center"
    address = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    contact_number = models.CharField(max_length=20)
    operational_status = models.CharField(max_length=20)  # "active", "closed"
    updated_at = models.DateTimeField(auto_now=True)

# Real-time Service Status
class Service(models.Model):
    service_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    center = models.ForeignKey(CounselingCenter, on_delete=models.CASCADE)
    service_name = models.CharField(max_length=100)  # "ARV Refills", "HIV Screening"
    status = models.CharField(max_length=20)         # "Available", "Not Available"
    last_updated = models.DateTimeField(auto_now=True)

# Appointment Booking
class Appointment(models.Model):
    appointment_id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    center = models.ForeignKey(CounselingCenter, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    appointment_date = models.DateTimeField()
    booking_status = models.CharField(max_length=20)  # "confirmed", "cancelled"
`}
            </pre>
          </div>
        </div>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-4 sm:mb-6">API Endpoints</h2>
        <p className="text-black mb-4 sm:mb-6 max-w-4xl leading-relaxed text-sm sm:text-base">
          RESTful, secure, and optimized for low-bandwidth environments ensuring patients in remote areas can still access real-time clinic data.
        </p>
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          {[
            { method: "GET", path: "/api/counseling-centers/", desc: "List all clinics with geolocation & status" },
            { method: "GET", path: "/api/services/", desc: "Real-time service availability (ARV, HIV testing, etc.)" },
            { method: "GET", path: "/api/arvavailability/", desc: "Dedicated ARV stock status per clinic" },
            { method: "GET", path: "/api/nearby-centers/", desc: "Find clinics near user (uses Haversine formula)" },
            { method: "GET", path: "/api/appointment/", desc: "View/manage patient appointments" },
            { method: "GET", path: "/api/users/", desc: "Patient & clinician profiles (role-based)" }
          ].map((ep, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-[#597DD8] hover:shadow-lg transition-all duration-300 group"
            >
              <span className="font-mono font-bold text-[#597DD8] w-20 sm:w-24 mb-2 sm:mb-0 text-xs sm:text-sm group-hover:text-[#001F54] transition-colors">{ep.method}</span>
              <span className="font-mono text-gray-800 flex-grow text-xs sm:text-sm group-hover:text-[#001F54] transition-colors break-all">{ep.path}</span>
              <span className="text-gray-600 mt-2 sm:mt-0 sm:ml-4 text-xs sm:text-sm group-hover:text-[#001F54] transition-colors">{ep.desc}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-6 sm:mb-8">User Workflows</h2>
        <p className="text-black mb-6 sm:mb-8 max-w-4xl leading-relaxed text-sm sm:text-base">
          Designed around real patient and clinician needs because seamless access to care can mean the difference between life and death.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:border-[#597DD8] hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-base sm:text-lg text-[#193479] mb-3">Patient Journey</h3>
            <ul className="list-disc pl-5 space-y-1 text-black text-sm sm:text-base">
              <li>Search nearby clinics using geolocation</li>
              <li>View real-time ARV & service availability</li>
              <li>Book appointment for counseling or ARV refill</li>
              <li>Receive confirmation via SMS/app</li>
            </ul>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 hover:border-[#597DD8] hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-base sm:text-lg text-[#193479] mb-3">Clinician Workflow</h3>
            <ul className="list-disc pl-5 space-y-1 text-black text-sm sm:text-base">
              <li>Log in to dashboard</li>
              <li>Update clinic status (open/closed)</li>
              <li>Mark ARV/services as available/unavailable</li>
              <li>Manage incoming appointments</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <FaShieldAlt className="text-[#193479]" /> Security & Data Sensitivity
        </h2>
        <p className="text-black mb-4 max-w-4xl leading-relaxed text-sm sm:text-base">
          Healthcare Data Protection: HaliCare handles sensitive HIV/AIDS-related information with the highest ethical and technical standards.
        </p>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-black max-w-4xl text-sm sm:text-base">
          <li>Data encrypted in transit (HTTPS) and at rest (Heroku PostgreSQL)</li>
          <li>Access controlled with role-based permissions distinguishing PATIENT and CLINICIAN</li>
          <li>Full phone numbers and sensitive health details are never logged in plaintext</li>
          <li>Compliance with Kenya's Data Protection Act (2019) ensures legal and ethical handling</li>
        </ul>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-4 sm:mb-6">
          Entity Relationship Overview
        </h2>
        <p className="text-black mb-4 sm:mb-6 max-w-4xl leading-relaxed text-sm sm:text-base">
          The backend database schema models the core entities and their relationships to ensure data consistency:
        </p>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-black max-w-4xl text-sm sm:text-base">
          <li><strong>Users and Clinics:</strong> A single user can be associated with many clinics (one-to-many).</li>
          <li><strong>Clinics and Services:</strong> Clinics offer multiple services and each service can belong to multiple clinics (many-to-many).</li>
          <li><strong>User and Appointment:</strong> Each user has one unique appointment at a given time (one-to-one).</li>
          <li><strong>Clinic and Appointment:</strong> Clinics can have many appointments booked (one-to-many).</li>
          <li><strong>Service and Appointment:</strong> Each appointment relates to exactly one service (one-to-one).</li>
        </ul>
        <p className="text-black max-w-4xl mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          These relationships are implemented and visualized in tools like DBeaver, synchronized with a visual ER diagram below.
          The schema prioritizes relational integrity, scalability, and clarity of purpose.
        </p>
        <div className="relative inline-block mx-auto max-w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-gray-200">
          <Image src="/images/erddiagram.png" alt="Entity Relationship Diagram" height={400} width={700} className="mx-auto rounded-xl sm:rounded-2xl max-w-full h-auto"
            priority
          />
        </div>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6 bg-gray-50 py-8 sm:py-12 rounded-2xl sm:rounded-3xl">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <FaBug className="text-[#001F54] text-2xl sm:text-3xl mr-3 sm:mr-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001F54]">Testing & Quality Assurance</h2>
        </div>
        <p className="text-black mb-4 sm:mb-6 text-center max-w-4xl leading-relaxed text-sm sm:text-base">
          We use <strong>Pytest</strong>, a simple and scalable Python testing framework, to validate backend functionality, data integrity, and security.
        </p>
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-[#001F54] mb-3 sm:mb-4">Testing Scope</h3>
            <ul className="list-disc pl-5 text-black space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>Unit tests for models, serializers, and utilities.</li>
              <li>Integration tests for API endpoints and authentication workflows.</li>
              <li>Database migrations and schema validation ensure data consistency.</li>
              <li>Error handling and permission enforcement tested thoroughly.</li>
            </ul>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-[#001F54] mb-3 sm:mb-4">Automated API Testing</h3>
            <ul className="list-disc pl-5 text-black space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>Postman CLI automates API testing, integrated with GitHub Actions for continuous coverage.</li>
              <li>Postman collections and environment variables securely stored in GitHub Secrets.</li>
              <li>Workflow exports collections, runs tests, and reports results on each GitHub push.</li>
              <li>This pipeline ensures backend updates are validated continuously and regressions caught early.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#193479] mb-4 sm:mb-6">Setup Instructions</h2>
        <div className="bg-[#F3F4F6] p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md max-w-4xl">
          <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap text-gray-800">
            {`git clone https://github.com/yourusername/halicare-backend.git
cd halicare-backend
python3 -m venv venv
source venv/bin/activate  # For Windows use 'venv\\Scripts\\activate'
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your environment variables
python manage.py migrate
python manage.py createsuperuser
python manage.py collectstatic --noinput
python manage.py runserver`}
          </pre>
        </div>
      </section>
      <section className="mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-6">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <FaCloudUploadAlt className="text-[#001F54] text-2xl sm:text-3xl mr-3 sm:mr-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001F54]">Deployment</h2>
        </div>
        <p className="text-black mb-6 sm:mb-8 text-center max-w-4xl leading-relaxed text-sm sm:text-base">
          HaliCare is deployed through a secure, automated pipeline that ensures clinics remain visible and patients never lose access to life-saving services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl">
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center border border-gray-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#001F54] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold text-sm sm:text-base">1</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2 text-sm sm:text-base">Platform</h3>
            <p className="text-xs sm:text-sm text-gray-600">Heroku Dyno + Heroku Postgres (Hobby tier)</p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center border border-gray-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#001F54] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold text-sm sm:text-base">2</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2 text-sm sm:text-base">Build</h3>
            <p className="text-xs sm:text-sm text-gray-600">Gunicorn + Whitenoise for static files</p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center border border-gray-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#001F54] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold text-sm sm:text-base">3</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2 text-sm sm:text-base">Config</h3>
            <p className="text-xs sm:text-sm text-gray-600">Managed via <code>django-environ</code> and <code>.env</code></p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl text-center border border-gray-200">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#001F54] text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold text-sm sm:text-base">4</span>
            </div>
            <h3 className="font-semibold text-[#001F54] mb-2 text-sm sm:text-base">Release</h3>
            <p className="text-xs sm:text-sm text-gray-600">Git push → Heroku auto-deploys (with rollback)</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BackendDocumentation;