import React from 'react'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'personal-info', label: 'Personal Information' },
  { id: 'how-we-use', label: 'How We Use Info' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'rights', label: 'Rights' },
  { id: 'contact', label: 'Contact' }
]

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0B0B0F] text-white px-6 md:px-12 lg:px-24 py-16 scroll-smooth pt-32 lg:pt-40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-10 items-start">

        {/* LEFT SIDEBAR */}
      <div className="hidden lg:block lg:col-span-1">
  <div className="fixed top-32 left-[max(2rem,calc((100vw-72rem)/2))] w-56 pt-10">
    <div className="border-l border-gray-700 pl-4 space-y-4 text-sm text-gray-400">
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
</div>

        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-10">

          <div id="overview">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">PRIVACY POLICY — GUSTAV B. ACHU</h1>
            <p className="text-gray-400">Gustav B. Achu Privacy Policy</p>
            <p className="text-gray-400">Last modified: 16/04/2026</p>
          </div>

          <p className="text-md lg:text-lg text-gray-300 leading-relaxed">
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from 
            <a href="https://www.gustavachu.com" className="underline ml-1">www.gustavachu.com</a> (the “Site”).
          </p>

          <div id="personal-info">
            <h2 className="text-2xl font-semibold mb-4">PERSONAL INFORMATION WE COLLECT</h2>
            <p className="text-gray-300">When you visit the Site, we automatically collect certain information about your device, including:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-3 space-y-1">
              <li>Web browser</li>
              <li>IP address</li>
              <li>Time zone</li>
              <li>Cookies installed on your device</li>
            </ul>

            <p className="text-gray-300 mt-4">Additionally, we collect information about:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li>Pages you view</li>
              <li>Links you click</li>
              <li>How you interact with the Site</li>
              <li>Referring websites or search terms</li>
            </ul>

            <p className="text-gray-300 mt-4">We refer to this as “Device Information.”</p>

            <p className="text-gray-300 mt-4 font-medium">Technologies We Use:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li>Cookies – data files stored on your device</li>
              <li>Log files – track activity and collect IP address, browser type, timestamps</li>
              <li>Pixels & Tags (Meta Pixel) – track behavior for advertising and analytics</li>
              <li>Google Analytics – helps us understand how users interact with our site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Information You Provide</h2>
            <p className="text-gray-300">When you:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li>Register for a webinar</li>
              <li>Make a purchase</li>
              <li>Fill out a form</li>
            </ul>

            <p className="text-gray-300 mt-4">We collect:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information (processed securely via third-party providers like Stripe)</li>
            </ul>

            <p className="text-gray-300 mt-4">We refer to this as “Personal Information.”</p>

            <p className="text-gray-300 mt-4">
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as “Order Information”.
            </p>

            <p className="text-gray-300 mt-4">When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
          </div>

          <div id="how-we-use">
            <h2 className="text-2xl font-semibold mb-4">HOW WE USE YOUR INFORMATION</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Process transactions and deliver products/services</li>
              <li>Send confirmations, reminders, and important updates</li>
              <li>Provide customer support</li>
              <li>Send marketing emails and offers (you can unsubscribe anytime)</li>
              <li>Run advertising campaigns (Meta, Google)</li>
              <li>Improve website performance and user experience</li>
            </ul>

            <p className="text-gray-300 mt-4">
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>
          </div>

          <div id="sharing">
            <h2 className="text-2xl font-semibold mb-4">SHARING YOUR INFORMATION</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Stripe (payment processing)</li>
              <li>Email marketing platforms</li>
              <li>Google Analytics</li>
              <li>Meta (Facebook/Instagram Ads)</li>
            </ul>

            <p className="text-gray-300 mt-4">We only share data necessary to operate our business and deliver services.</p>
            <p className="text-gray-300 mt-2">We may also disclose information if required by law.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">DO NOT TRACK</h2>
            <p className="text-gray-300">Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">BEHAVIORAL ADVERTISING</h2>
            <p className="text-gray-300">We use your data to provide relevant ads and marketing.</p>
            <p className="text-gray-300 mt-2">You can opt out here:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-1">
              <li><a href="https://www.facebook.com/settings/?tab=ads" className="underline">Facebook</a></li>
              <li><a href="https://www.google.com/settings/ads" className="underline">Google</a></li>
            </ul>
          </div>

          <div id="rights">
            <h2 className="text-2xl font-semibold mb-4">YOUR RIGHTS (FOR EU & INTERNATIONAL USERS)</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or updates to your information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict certain types of processing</li>
            </ul>

            <p className="text-gray-300 mt-4">To exercise any of these rights, please contact us at:</p>
            <p className="text-gray-300 mt-2">gustav@gustavachu.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">LEGAL BASIS FOR PROCESSING</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Fulfill contracts with you (e.g., when you register or make a purchase)</li>
              <li>Provide access to our products and services</li>
              <li>Communicate with you</li>
              <li>Improve our website and marketing efforts</li>
              <li>Pursue legitimate business interests such as growth, analytics, and customer experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">INTERNATIONAL DATA TRANSFERS</h2>
            <p className="text-gray-300">Your information may be transferred and processed outside of your country of residence, including in countries such as:</p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>United States</li>
              <li>Canada</li>
            </ul>

            <p className="text-gray-300 mt-4">
              This is necessary to operate our business using trusted third-party platforms such as payment processors, analytics tools, and advertising services.
              We take reasonable steps to ensure your data is handled securely and in accordance with this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">DATA RETENTION</h2>
            <p className="text-gray-300">We retain your information for our records unless you request deletion.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">MINORS</h2>
            <p className="text-gray-300">This site is not intended for individuals under the age of 18.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">CHANGES</h2>
            <p className="text-gray-300">We may update this policy periodically. Changes will be reflected on this page.</p>
          </div>

          <div id="contact">
            <h2 className="text-2xl font-semibold mb-4">CONTACT</h2>
            <p className="text-gray-300">For questions:</p>
            <p className="text-gray-300 mt-2">Gustav B. Achu</p>
            <p className="text-gray-300">Email: gustav@gustavachu.com</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
