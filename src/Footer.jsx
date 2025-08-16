const legalParagraphs = [
  `◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
`,
  `‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
`,
  `*Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit apple.com/in-edu/store.`,
  `1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here.
`,
  `2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.`,
  `Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
`,
  `A subscription is required for Apple TV+.`,
  `Features are subject to change. Some features, applications and services may not be available in all regions or languages.`,
];

const footerSections = [
  {
    title: "Shop and Learn",
    items: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
    subSections: [{ title: "Apple Wallet", items: ["Wallet"] }],
  },
  {
    title: "Account",
    items: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
    subSections: [{
      title: "Entertainment",
      items: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"],
    }],
  },
  {
    title: "Apple Store",
    items: [
      "Find a Store", "Genius Bar", "Today at Apple", "Group Reservations",
      "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme",
      "Order Status", "Shopping Help",
    ],
  },
  {
    title: "For Business",
    items: ["Apple and Business", "Shop for Business"],
    subSections: [
      { title: "For Education", items: ["Apple and Education", "Shop for Education", "Shop for University"] },
      { title: "For Healthcare", items: ["Apple in Healthcare", "Mac in Healthcare", "Health on Apple Watch"] },
    ],
  },
  {
    title: "Apple Values",
    items: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"],
    subSections: [{
      title: "About Apple",
      items: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
    }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-10 mt-12  text-center">
      <div className="max-w-4xl mx-auto mb-8 text-xs text-gray-600 space-y-3">
        {legalParagraphs.map((para, idx) => (
          <p key={idx} className="text-center">{para}</p>
        ))}
      </div>
    <hr />
    <br />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm text-gray-700 justify-items-center">
          {footerSections.map((section, idx) => (
            <div key={idx} className="text-center">
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {section.subSections?.map((sub, j) => (
                <div key={j}>
                  <h3 className="font-semibold mt-4">{sub.title}</h3>
                  <ul className="space-y-1">
                    {sub.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
<hr />
      <div className="max-w-4xl mx-auto mt-10 text-xs text-gray-500 space-y-2 text-center">
        <p>
          More ways to shop:{" "}
          <span className="underline cursor-pointer text-bblue">Find an Apple Store</span>{" "}
          or <span className="underline cursor-pointer text-bblue">other retailer</span> near you. Or call <span className="text-bblue">000800 040 1966</span>.
        </p>
        <br />
                  <hr />
        <p className="px-10">
          Copyright © 2025 Apple Inc. All rights reserved.{" "}
          <span className="underline cursor-pointer px-1">Privacy Policy</span> |{" "}
          <span className="underline cursor-pointer px-1">Terms of Use</span> |{" "}
          <span className="underline cursor-pointer px-1">Sales Policy</span> |{" "}
          <span className="underline cursor-pointer px-1">Legal</span> |{" "}
          <span className="underline cursor-pointer px-1">Site Map</span>
          <span className="underline cursor-pointer px-20">India</span>
        </p>
      </div>
    </footer>
  );
}
