import LegalLayout from "../legal-layout";

export default function TermsOfServicePage() {
  return (
    <LegalLayout>
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>
        Please read these Terms of Service ("Terms", "Terms of Service")
        carefully before using the Rocket Signals website (the "Service")
        operated by Rocket Signals ("us", "we", or "our").
      </p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By using our Service, you agree to be bound by these Terms. If you
        disagree with any part of the terms, then you may not access the
        Service.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality are
        and will remain the exclusive property of Rocket Signals and its
        licensors. The Service is protected by copyright, trademark, and other
        laws of both the foreign countries. Our trademarks and trade dress may
        not be used in connection with any product or service without the
        prior written consent of Rocket Signals.
      </p>

      <h2>3. Links to Other Web Sites</h2>
      <p>
        Our Service may contain links to third-party web sites or services
        that are not owned or controlled by Rocket Signals. Rocket Signals has
        no control over, and assumes no responsibility for, the content,
        privacy policies, or practices of any third-party web sites or
        services. You further acknowledge and agree that Rocket Signals shall
        not be responsible or liable, directly or indirectly, for any damage
        or loss caused or alleged to be caused by or in connection with use of
        or reliance on any such content, goods or services available on or
        through any such web sites or services.
      </p>

      <h2>4. Termination</h2>
      <p>
        We may terminate or suspend your account immediately, without prior
        notice or liability, for any reason whatsoever, including without
        limitation if you breach the Terms.
      </p>
      
      <h2>5. Limitation of Liability</h2>
      <p>
        In no event shall Rocket Signals, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
      </p>


      <h2>6. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the
        laws of our jurisdiction, without regard to its conflict of law
        provisions.
      </p>

      <h2>7. Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace
        these Terms at any time. If a revision is material we will try to
        provide at least 30 days notice prior to any new terms taking effect.
        What constitutes a material change will be determined at our sole
        discretion.
      </p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us.</p>
    </LegalLayout>
  );
}
