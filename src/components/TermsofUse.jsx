import React from 'react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'acceptance', label: 'Acceptance' },
  { id: 'services', label: 'Services' },
  { id: 'registration', label: 'User Registration' },
  { id: 'responsibilities', label: 'Responsibilities' },
  { id: 'payment', label: 'Payment' },
  { id: 'ip', label: 'Intellectual Property' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'dispute', label: 'Dispute Resolution' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'changes', label: 'Changes' },
  { id: 'law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact' },
]

const TermsofUse = () => {
  return (
    <div className="bg-[#0B0B0F] text-white px-6 md:px-12 lg:px-24 py-16 scroll-smooth pt-32 lg:pt-40">
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-10 items-start">

        {/* SIDEBAR */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="fixed top-40 w-56 border-l border-gray-700 pl-4 space-y-4 text-sm text-gray-400">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-3 space-y-10">

          <div id="overview">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              TERMS & CONDITIONS — GUSTAV B. ACHU
            </h1>

            <p className="text-gray-400">Terms & Conditions of Use</p>
            <p className="text-gray-400">Last modified: 16/04/2026</p>

            <p className="text-gray-300 mt-6">
              These Terms govern your use of www.gustavachu.com and all related services. By using this Site, you agree to these Terms.
            </p>
          </div>

          <div id="acceptance">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By using our Website and services, you acknowledge that you have read, understood, and agree to comply with these Terms and any other policies or guidelines referenced herein.
            </p>
          </div>

          <div id="services">
            <h2 className="text-2xl font-semibold mb-4">2. Services Offered</h2>
            <p className="text-gray-300">
              We offer creative marketing services through our Website. The specifics of these services, including pricing and deliverables, are detailed on our Website and may be subject to change without notice.
            </p>
          </div>

          <div id="registration">
            <h2 className="text-2xl font-semibold mb-4">3. User Registration</h2>
            <p className="text-gray-300">
              Some areas of our Website may require user registration. When creating an account, you agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </div>

          <div id="responsibilities">
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <p className="text-gray-300">You agree to use our Website and services in a lawful manner and to abide by these Terms. Prohibited activities include, but are not limited to:</p>

            <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-2">
              <li>Violating any applicable laws or regulations.</li>
              <li>Infringing upon the intellectual property rights of others.</li>
              <li>Transmitting harmful software, viruses, or any other malicious code.</li>
              <li>Engaging in any form of automated data collection or scraping without our consent.</li>
            </ul>
          </div>

          <div id="payment">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="text-gray-300">
              If our services are subject to fees, you agree to pay all applicable charges as described on our Website. Payments are processed securely through our chosen payment gateway. Refund and cancellation policies, if applicable, are outlined on our Website.
            </p>
          </div>

          <div id="ip">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-300">
              All content on our Website, including graphics, designs, text, and other materials, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content without our express permission.
            </p>
          </div>

          <div id="privacy">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
            <p className="text-gray-300">
              Your use of our Website and services is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our Website, you consent to the practices described in our Privacy Policy.
            </p>
          </div>

          <div id="dispute">
            <h2 className="text-2xl font-semibold mb-4">8. Dispute Resolution</h2>
            <p className="text-gray-300">
              Any disputes arising from your use of our Website or services will be resolved according to the dispute resolution procedures outlined in our separate dispute resolution policy, if applicable.
            </p>
          </div>

          <div id="liability">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-300">
              To the fullest extent permitted by law, we disclaim all warranties, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our Website or services.
            </p>
          </div>

          <div id="termination">
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-gray-300">
              We reserve the right to terminate or suspend your access to our Website and services, with or without notice, for any violation of these Terms or for any other reason.
            </p>
          </div>

          <div id="changes">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300">
              We may update or modify these Terms at any time without prior notice. It is your responsibility to regularly review these Terms for any changes. Your continued use of our Website and services after any modifications constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div id="law">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of Miami-Dade County. Any legal action or proceeding related to these Terms shall be brought exclusively in the state or federal courts located within Miami-Dade County.
            </p>
          </div>

          <div id="contact">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="text-gray-300">For questions or concerns regarding these Terms, please contact us at :</p>
            <p className="text-gray-300 mt-4">Gustav B. Achu</p>
            <p className="text-gray-300">Email: gustav@gustavachu.com</p>
            <p className="text-gray-300">Website: www.gustavachu.com</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TermsofUse
