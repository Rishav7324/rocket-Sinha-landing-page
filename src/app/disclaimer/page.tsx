import LegalLayout from "../legal-layout";

export default function DisclaimerPage() {
  return (
    <LegalLayout>
      <h1>Disclaimer</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>
        The information provided by Rocket Signals ("we," "us," or "our") on
        our website (the "Site") and our mobile application is for general
        informational purposes only. All information on the Site and our
        mobile application is provided in good faith, however, we make no
        representation or warranty of any kind, express or implied, regarding
        the accuracy, adequacy, validity, reliability, availability, or
        completeness of any information on the Site or our mobile
        application.
      </p>

      <h2>1. Financial Disclaimer</h2>
      <p>
        The Site cannot and does not contain financial advice. The financial
        information is provided for general informational and educational
        purposes only and is not a substitute for professional advice.
        Accordingly, before taking any actions based upon such information, we
        encourage you to consult with the appropriate professionals. We do not
        provide any kind of financial advice. The use or reliance of any
        information contained on this site is solely at your own risk.
      </p>
      <p>
        Trading in financial markets, including binary options, involves a
        high level of risk and is not suitable for all investors. The high
        degree of leverage can work against you as well as for you. Before
        deciding to trade, you should carefully consider your investment
        objectives, level of experience, and risk appetite. The possibility
        exists that you could sustain a loss of some or all of your initial
        investment and therefore you should not invest money that you cannot
        afford to lose.
      </p>

      <h2>2. Testimonials Disclaimer</h2>
      <p>
        The Site may contain testimonials by users of our products and/or
        services. These testimonials reflect the real-life experiences and
        opinions of such users. However, the experiences are personal to those
        particular users, and may not necessarily be representative of all
        users of our products and/or services. We do not claim, and you should
        not assume, that all users will have the same experiences. Your
        individual results may vary.
      </p>

      <h2>3. External Links Disclaimer</h2>
      <p>
        The Site may contain (or you may be sent through the Site) links to
        other websites or content belonging to or originating from third
        parties or links to websites and features in banners or other
        advertising. Such external links are not investigated, monitored, or
        checked for accuracy, adequacy, validity, reliability, availability or
        completeness by us.
      </p>
    </LegalLayout>
  );
}
