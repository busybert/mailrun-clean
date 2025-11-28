import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - MailRun-Orlando.com</title>
        <meta
          name="description"
          content="Read the terms and conditions for using MailRun's courier and delivery services."
        />
      </Helmet>

      <section className="py-24 bg-slate-900 pt-32">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* LOGO */}
            <img
              src="https://assets.zyrosite.com/AGBzeKNP14u7gny5/untitled-1-Y4LPXL9L9XCG4xao.jpg"
              alt="MailRun Logo"
              className="mx-auto mb-6 w-56 h-auto rounded-lg shadow-md"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms and{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-300">Effective Date: November 1, 2025</p>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 leading-relaxed"
          >
            <div className="prose prose-invert text-gray-300 max-w-none prose-h2:text-white prose-h3:text-cyan-400 prose-headings:font-bold prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white space-y-8">

              <h2 className="text-center text-2xl font-bold text-white mb-8">📜 MailRun Terms and Conditions</h2>
              <p>
                These Terms and Conditions (“Agreement”) govern all services provided by{' '}
                <strong>MailRun LLC or MailRun Orlando</strong> (“MailRun,” “we,” “our,” or “us”) to its customers (“Client,” “you,” or
                “your”). By booking a pickup, delivery, or related service through MailRun, you agree to be bound by
                these Terms in full.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mt-8">1. Acceptance of Terms</h3>
                <p>
                  By scheduling or using any MailRun service, you acknowledge that you have read, understood, and agree
                  to be legally bound by these Terms and Conditions. If you do not agree, please do not use our services.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">2. Scope of Service</h3>
                <p>
                  MailRun provides pickup and drop-off delivery services for sealed boxes, parcels, and other mail items.
                  We act solely as a <strong>courier agent</strong> to transport the package from your designated pickup
                  location to the delivery carrier (such as USPS, UPS) or another drop-off point.
                </p>
                <p>
                  MailRun does <strong>not</strong> open, inspect, verify, or handle the internal contents of any package.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">3. Responsibility for Package Contents</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All boxes, packages, or mail items remain the <strong>sole property and responsibility of the owner</strong> at all times.</li>
                  <li>MailRun <strong>does not assume any responsibility or liability</strong> for loss, damage, delay, theft, or refusal by the carrier related to the contents or labeling of any package.</li>
                  <li>MailRun staff will <strong>not review, open, or inspect</strong> any box or its contents under any circumstances.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8">4. Labeling and Pre-Payment</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All shipping <strong>labels must be purchased and paid for in advance</strong> of scheduling a MailRun pickup.</li>
                  <li>Packages must display a valid prepaid carrier label (e.g., USPS, UPS, FedEx) at the time of pickup.</li>
                  <li>MailRun is not responsible for invalid, expired, or incorrectly formatted labels.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8">5. Weight and Package Accuracy</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The weight declared on the shipping label must match the actual weight of the package.</li>
                  <li>If a carrier refuses or returns a package because the weight or information on the label is inaccurate, the item will be <strong>returned to the owner</strong>.</li>
                  <li>A <strong>$10 penalty fee</strong> will apply, in addition to the <strong>original service fee</strong>.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8">6. Refused or Returned Packages</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>If a package is refused or rejected by a carrier for any reason (including unpaid postage, invalid label, or excess weight), MailRun will make reasonable efforts to return the item to the owner.</li>
                  <li>A <strong>$10 return handling fee</strong> will be charged <strong>on top of the original service fee</strong>.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8">7. Liability Disclaimer</h3>
                <p>MailRun acts solely as a <strong>pickup and drop-off facilitator</strong>. We do <strong>not</strong>:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Guarantee the acceptance or delivery of any package by a third-party carrier.</li>
                  <li>Provide insurance for package contents.</li>
                  <li>Accept responsibility for loss, theft, or damage once the package leaves your premises or is accepted by the carrier.</li>
                </ul>
                <p>You, the customer, are solely responsible for ensuring:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Proper packaging and sealing.</li>
                  <li>Accuracy of the shipping label and carrier selection.</li>
                  <li>Compliance with all applicable shipping regulations.</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8">8. Fees and Payments</h3>
                <p>
                  All service fees are due at the time of booking. Any additional charges (such as return fees, weight
                  penalties, or rescheduling costs) will be billed to the customer directly and must be paid prior to
                  future service requests.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">9. Cancellation and Rescheduling</h3>
                <p>
                  Pickups may be canceled or rescheduled with reasonable notice. If a courier arrives at the pickup
                  location and the package is not available, the service fee will not be refunded.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">10. Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, MailRun’s total liability for any claim, loss, or damage arising
                  from its services shall not exceed the <strong>amount paid for the original service</strong> related to
                  that claim. In no event shall MailRun be liable for consequential, indirect, or incidental damages.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">11. Governing Law</h3>
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of the{' '}
                  <strong>State of Florida</strong>, without regard to conflict-of-law principles. Any disputes shall be
                  resolved exclusively in the courts located in <strong>Orange County, Florida</strong>.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">12. Amendments</h3>
                <p>
                  MailRun reserves the right to modify or update these Terms and Conditions at any time without prior
                  notice. The latest version will always be available on our website and shall apply to all services
                  rendered thereafter.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">13. Contact Information</h3>
                <p>For questions or concerns regarding these Terms, please contact:</p>
                <ul className="list-none space-y-1">
                  <li><strong>MailRun Orlando</strong></li>
                  <li>📧 <a href="mailto:info@mailrun-orlando.com">info@mailrun-orlando.com</a></li>
                  <li>🌐 <a href="https://www.mailrun-orlando.com">www.mailrun-orlando.com</a></li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-8">14. Prohibited Items</h3>
                <p>
                  MailRun strictly prohibits the pickup, transport, or handling of any packages containing:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Weapons or firearms of any kind.</li>
                  <li>Explosives, ammunition, or hazardous materials.</li>
                  <li>Alcohol, drugs, or controlled substances.</li>
                  <li>Living organisms, including plants, animals, or biological specimens.</li>
                </ul>
                <p>
                  Any package suspected to contain prohibited items will be immediately declined or returned to the
                  sender without refund.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">✅ Acknowledgment</h3>
                <p>
                  By scheduling a pickup or using MailRun’s services, you acknowledge that you have read, understood, and
                  agreed to these Terms and Conditions, including all disclaimers and fee policies.
                </p>
              </div>
            </div>

            {/* DOWNLOAD PDF BUTTON */}
            <div className="text-center mt-10">
              <a
                href="https://assets.zyrosite.com/AGBzeKNP14u7gny5/mailrun_llc_terms_and_conditions-MKvB6YvvlbIHyEI1.pdf"
                download
                className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-cyan-400 hover:shadow-cyan-300/50 transition-all duration-300"
              >
                📄 Download PDF Version
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;