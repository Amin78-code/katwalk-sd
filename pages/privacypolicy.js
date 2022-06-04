import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import Features from "../components/features/features";
import HeadingAndText from "../components/heading-and-text/headingAndText";

function PrivacyPolicy() {
  const privacyPolicyContent = [
    {
      title: "1. Introduction",
      content: [
        {
          type: "paragraph",
          // text: [
          //   "Welcome to Katwalk, an online shopping marketplace that connects sellers with buyers and provides marketing services to create added value for designers in Saudi Arabia particular and in wider GCC. Katwalk provides an unmatched shopping experience for modern Arab women through its website (&quot;Platform&quot;, &quot;katwalk&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)",
          //   "&quot;Katwalk&quot; is a registered trademark owned by Fashion Platform Est., commercial registration number: 2062617591, and VAT registration number: 310401691200003",
          //   "- These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website/app located at  (together or individually “Service”) operated by Katwalk.",
          //   "- Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our website",
          //   "- Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood the Agreements and agreed to be bound of them.",
          //   "-If you do not agree with (or cannot comply with) the Agreements, then you may not use the Service. In order to find a solution, please let us know by emailing us at customercare@katwalk.sa. These Terms apply to all visitors, users and others who wish to access or use the Service.",
          // ],
          text: [
            "Welcome to Katwalk, an online shopping marketplace that connects sellers with buyers and provides marketing services to create added value for designers in Saudi Arabia particular and in wider GCC. Katwalk provides an unmatched shopping experience for modern Arab women through its website ('Platform', 'katwalk', 'we', 'our', 'us')",
            "'Katwalk' is a registered trademark owned by Fashion Platform Est., commercial registration number: 2062617591, and VAT registration number: 310401691200003",
            "- These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website/app located at  (together or individually “Service”) operated by Katwalk.",
            "- Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our website",
            "- Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood the Agreements and agreed to be bound of them.",
            "-If you do not agree with (or cannot comply with) the Agreements, then you may not use the Service. In order to find a solution, please let us know by emailing us at customercare@katwalk.sa. These Terms apply to all visitors, users and others who wish to access or use the Service.",
          ],
        },
      ],
    },

    {
      title: "2. Communications",
      content: [
        {
          type: "paragraph",
          text: [
            "By using our Service, you agree to subscribe to our newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing us at customercare@katwalk.sa",
          ],
        },
      ],
    },
    {
      title: "3. Purchases",
      content: [
        {
          type: "paragraph",
          text: [
            "If you wish to purchase any product made available through the Service (“Purchase”), you may be asked to provide certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address and your shipping information.",
            "You represent and warrant that: (i) you have the legal right to use any card (s) or other payment method(s) in connection with any Purchase; and that (ii) information such as mobile number, name email address, payment details and shipping address you provide to us are all valid, correct and complete.",
            "We may employ the use of third-party services for the purpose of facilitating the payment and the completion of your Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.",
          ],
        },
        {
          type: "paragraph_sm",
          text: [
            "We reserve the right to refuse or cancel your order at any time for reasons including but not limited to product or service unavailability, errors in the description or the price of the product or service, errors in your order or other reasons.",
          ],
        },
        {
          type: "paragraph",
          text: [
            "We reserve the right to refuse or cancel your order if fraud, unauthorized or illegal transaction is suspected.",
          ],
        },
      ],
    },
    {
      title: "4. Contests, Offers and Discount Coupons",
      content: [
        {
          type: "paragraph",
          text: [
            "Any contests or other promotions (collectively, “Promotions”) made available through the Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. We may use data for any contests or competitions to announce the winners. Offers cannot be used, transferred, or sold to any third party for commercial purposes. You may use one offer or discount per order.",
          ],
        },
      ],
    },
    {
      title: "5. Orders (Process, Availability, Confirmation)",
      content: [
        {
          type: "bulletList",
          text: [
            "Placing order: all orders are owned, managed, and sold by our sellers.",
            "Availability and order confirmation: orders will take up to one business day to be accepted by sellers. Once the order is approved/rejected, a confirmation will be sent by SMS, email, or WhatsApp.",
            "Payment: your card will be charged once your order has been approved. By placing an order, you authorize our third party, to process your chosen payment details for the order.",
            "Cancellation: orders can be cancelled only if they have not been approved and payment has not been processed.",
            "You authorize us to save your details for your next orders including but not limited to your name, addresses and sizes. However, Katwalk will not save any payment details.",
          ],
        },
      ],
    },
    {
      title: "6. Returns and Refunds",
      content: [
        {
          type: "paragraph",
          text: ["A. Return process"],
        },
        {
          type: "bulletList",
          text: [
            "Katwalk follows the Regulations of E-commerce in Saudi Arabia,",
            "Ready-to-wear products are eligible for return within 7 days from receiving the order.",
            "Products must be new, unused, in their original condition as received and all tags attached if any.",
            "The customer is responsible for carrier return cost (except for damaged/incorrect orders.)",
            "Katwalk will facilitate the return process between the customer and the sellers.",
            "If you wish to return your order, please visit katwalk.sa/contact and choose your preferred contacting method and we will get back to you as soon as possible.",
            "Any customizable product that has been made or tailored especially for you is not eligible for a return (Made-to-measure and Bespoke products are unreturnable).",
          ],
        },
      ],
    },
    {
      title: "B. Damaged/Incorrect orders",
      content: [
        {
          type: "bulletList",
          text: [
            "If you have received damaged or incorrect items, you will be eligible for a free return. Please visit katwalk.sa/contact to arrange pick up and we will get back to you as soon as possible.",
          ],
        },
      ],
    },
    {
      title: "C. Refund process",
      content: [
        {
          type: "bulletList",
          text: [
            "Refund will only be processed after inspecting and approving the returned item(s).",
            "For returned items, you will be refunded the product amount including VAT (excluding cash-on-delivery fees). Customer will be responsible for carrier return costs.",
            "For damaged or incorrect items, you will be refunded the full paid amount. Including, if applicable, cash-on-delivery fees and customer will not be liable for carrier return cost.",
            "You will be refunded to your original payment method and it can take up to 30 days for the amount to be show on your account.",
          ],
        },
      ],
    },

    {
      title: "D. Non-returnable items",
      content: [
        {
          type: "bulletList",
          text: [
            "Any customizable product that has been made or tailored especially for you (Made-to-measure and Bespoke products are unreturnable).",
          ],
        },
      ],
    },
    {
      title: "7. Content",
      content: [
        {
          type: "paragraph",
          text: [
            "Content found on or through this Service is the property of Katwalk. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without obtaining advance written permission from us.",
          ],
        },
      ],
    },
    {
      title: "8. Prohibited Uses",
      content: [
        {
          type: "paragraph",
          text: [
            "You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:",
          ],
        },
        {
          type: "bulletList",
          text: [
            "In any way that violates any applicable national or international law or regulation.",
            "For the purpose of exploiting, harming or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.",
            "To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.",
            "To impersonate or attempt to impersonate Katwalk, Katwalk’s employee, another user, or any other person or entity.",
            "In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.",
            "To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Service, or which, as determined by us, may harm or offend Katwalk or users of the Service or expose them to liability.",
          ],
        },
      ],
    },
    {
      title: "9. Analytics",
      content: [
        {
          type: "paragraph",
          text: [
            "We may use third-party service providers to monitor and analyse the use of our Service",
          ],
        },
      ],
    },

    {
      title: "10. No Use By Minors",
      content: [
        {
          type: "paragraph",
          text: [
            "The Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using the Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all the Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of the Service.",
          ],
        },
      ],
    },
    {
      title: "11. Intellectual Property",
      content: [
        {
          type: "paragraph",
          text: [
            "The Service and its original content (excluding content provided by users), features and functionality are and will remain exclusive property of Katwalk and its licensors and sellers. The Service is protected by copyright, trademark, and other laws. Our trademarks may not be used in connection with any product or service without the prior written consent of Katwalk. We, or our sellers, have right and interest to all or some of our website and any information or materials in connection to the use of our website. You agree that you have no right to use, reproduce, or redistribute any of our property without a written consent from us.",
          ],
        },
      ],
    },
    {
      title: "12. Liability",
      content: [
        {
          type: "paragraph",
          text: [
            "No liability of any nature shall be incurred or accepted by the seller in respect of any representation made by the seller, or on its behalf, to the buyer, or to any party acting on its behalf, prior to the making of these Agreements where such representations were made or given in relation to:",
          ],
        },
        {
          type: "bulletList",
          text: [
            "the correspondence of the goods with any description or sample;",
            "the quality of the goods; or",
            "the quality of the goods for any purpose whatsoever",
          ],
        },
        {
          type: "paragraph",
          text: [
            "No liability of any nature shall be accepted by the seller to the buyer in respect of any express term of these Agreements where such term relates in any way to the correspondence of the goods with any description.",
            "Except where the buyer deals as a consumer all other warranties, conditions or terms relating to quality for purpose, quality or condition of the goods, whether express or implied by statute or common law or otherwise are hereby excluded from the Agreements to the fullest extent permitted by law.",
            "For the avoidance of doubt, the seller will not accept any claim for consequential or financial loss of any kind however caused.",
          ],
        },
      ],
    },
    {
      title: "13. Termination",
      content: [
        {
          type: "bulletList",
          text: [
            "We may terminate or suspend your account and block you access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.",
            "If you wish to terminate your account, you may simply discontinue using the Service by accessing your profile page in the website.",
          ],
        },
      ],
    },
    {
      title: "14. Governing law",
      content: [
        {
          type: "paragraph",
          text: [
            "This Agreement shall be governed by and construed in accordance with the law of Saudi Arabia and the parties hereby submit to the exclusion jurisdiction of the Saudi Arabian courts.",
          ],
        },
      ],
    },
    {
      title: "15. Changes to the Service",
      content: [
        {
          type: "paragraph",
          text: [
            "We reserve the right to withdraw or amend our Service, and any service or material we provide via the Platform, in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Service, or the entire Service, to users, including registered users.",
          ],
        },
      ],
    },
    {
      title: "16. Amendments to Terms",
      content: [
        {
          type: "paragraph",
          text: [
            "We may amend the Terms at any time by posting the amended terms on our website and sending an email to our users one week prior to their application. It is your responsibility to review these Terms periodically.",
            "Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently to be aware of any changes as they are binding on you.",
          ],
        },
      ],
    },
    {
      // title: "17. Shipping and Delivery (Shipping methods, timescales, delays)",
      title: "rtr",
      content: [
        {
          type: "paragraph",
          text: [
            "A. Ready-to-wear products take up to 2 days to be handled to the carrier and made-to-measure and bespoke products take 10-14 days.",
            ,
            "B. All orders are shipped by Aramex and it may take the following timescale:",
          ],
        },
        {
          type: "table",
          tableHead: ["Shipping Costs", "Delivery Timescales	", "Location"],
          tableBody: [
            {
              rowData: [
                "Free",
                "2-5 Business Days",
                "	Seller and customer in the same country",
              ],
            },

            {
              rowData: [
                "Customer is responsible for shipping costs",
                "6-10 Business Days",
                "Seller and customer in different countries",
              ],
            },
          ],
        },
        {
          type: "bulletList",
          text: [
            "Above table is just an estimate delivery timescale; our sellers will do their best to deliver your order on time.",
            "Please note that there might be some delays during peak or sale seasons, and holidays.",
            "Above timescales are expected after your order has been confirmed.",
            "Any cash-on-delivery orders are anticipated to a fee of SAR 20.",
            "When your order is put for delivery you will be contacted by the carrier to confirm your location and time. Kindly note that you only have 3 attempts for delivery before your order is cancelled or additional charges will apply.",
          ],
        },
      ],
    },
    {
      title: "18. Prices and Value Added Tax",
    },

    {
      title: "A. Payment methods",
      content: [
        {
          type: "paragraph",
          text: [
            "A. Ready-to-wear products take up to 2 days to be handled to the carrier and made-to-measure and bespoke products take 10-14 days.",
          ],
        },
        {
          type: "bulletList",
          text: [
            "Visa, Master Card, Mada, Apple Pay, STC Pay",
            "Cash-on-delivery (fees apply)",
          ],
        },
      ],
    },
    {
      title: "B. Prices",
      content: [
        {
          type: "bulletList",
          text: [
            "All our prices are inclusive of VAT applied in Saudi Arabia.",
            "All our prices are displayed on Saudi Arabian Riyals.",
            "If you are shopping outside Saudi Arabia, you are responsible to know currency exchange rates.",
            "Kindly note that we do our best to provide a convenient checkout experience, if you encounter any errors in your order, please visit katwalk.sa/contact",
          ],
        },
      ],
    },
    {
      title: "C. VAT",
      content: [
        {
          type: "bulletList",
          text: [
            "All our prices are inclusive of VAT applied in Saudi Arabia. Any changes in the VAT will be immediately reflected on our prices.",
          ],
        },
      ],
    },
    {
      title: "19. Privacy Policy",
    },
    {
      title: "A. Data",
      content: [
        {
          type: "paragraph",
          text: [
            "When you register to our website, you accept our Privacy Policy, Terms and Conditions, and you agree to keep your details and information saved to your account for easier checkout experience and for research, marketing, improvement, and development purposes. You have the option to close your account at any time for any reason by clicking 'Close My Account' on your account page.",
          ],
        },
      ],
    },
    {
      title: "B. Storing information",
      content: [
        {
          type: "paragraph",
          text: [
            "Although we do our best to secure and protect all your data and information by preventing any unauthorized attempts, we cannot guarantee full security. We are not responsible for any unauthorized accesses, uses or disclosures to our servers. However, we apply strict procedures and security features to prevent any unauthorized accesses. We will not store any payment information.",
          ],
        },
      ],
    },
    {
      title: "C. E-mail",
      content: [
        {
          type: "paragraph",
          text: [
            "We may send e-mails to customers regarding any news, offers or events. You have the option to stop receiving emails from us at any time by clicking unsubscribe at the end of any email or contacting us at ",
          ],
        },
      ],
    },

    {
      title: "D. Cookies",
      content: [
        {
          type: "paragraph",
          text: ["We use cookies to improve your shopping experience."],
        },
        {
          type: "bulletList",
          text: [
            "Website functionality cookies: browse our website and use our features",
            "Website Analytics cookies: analyse how you use our website",
            "Customer preference cookies: memorize your preference, such as language, full name, email address, delivery details.",
          ],
        },
      ],
    },
    {
      title: "20. Links to Other Websites",
      content: [
        {
          type: "paragraph",
          text: [
            "Our Service may contain links to third party websites or services that are not owned or controlled by Katwalk. Katwalk has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites. You acknowledge and agree that Katwalk shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any third-party websites or services. We strongly advise you to read the terms of service and privacy policies of any third-party websites or services that you visit.",
          ],
        },
      ],
    },
    {
      title: "21. Third party rights",
      content: [
        {
          type: "paragraph",
          text: ["A. Third party, may use information for:"],
        },
        {
          type: "bulletList",
          text: [
            "execution of orders or any requested services",
            "Verifying and completing financial transactions",
            "Managing your account",
            "Confirmation, invoice or marketing e-mails",
            "Personalizing shopping experience",
            "Analytical or statistical purposes",
            "Research, development, marketing, or improvement purposes",
            "the prevent of unauthorized accesses and for the protection of your rights and safety including fraud.",
            "Any law or regulation purposes",
          ],
        },
        {
          type: "paragraph",
          text: ["B. Who we may share information with:"],
        },
        {
          type: "bulletList",
          text: [
            "Selected authorized third parties,",
            "Representatives, assignees,",
            "Service providers such as payment integration companies, carrier services, website developers, information technology companies, marketing companies.",
            "Professional service providers, auditors, financial advisors, lawyers, government, or municipal bodies, legal or regulatory enforcement",
            "e-gift recipients",
          ],
        },
      ],
    },
    {
      title: "22. Relationship of the parties",
      content: [
        {
          type: "paragraph",
          text: [
            "Nothing contained in these Agreements shall be construed as establishing or implying any partnership or joint venture between the parties and nothing in these Agreements shall be deemed to construe either of the parties as the agent of the other.",
          ],
        },
      ],
    },
    {
      title: "23. Force Majeure",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk shall not be liable for any delay or failure to perform any of its obligations if the delay or failure results from events or circumstances outside its reasonable control, including but not limited to, strikes, lock outs, accidents, war, fire, breakdown of plant or machinery or shortage or unavailability of raw materials from a natural source of supply, and Katwalk shall be entitled to a reasonable extension of its obligations. If the delay persists for such time as Katwalk considers unreasonable, it may without liability on its part, terminate the Agreements or any part of it.",
          ],
        },
      ],
    },
    {
      title: "24. No waiver",
      content: [
        {
          type: "paragraph",
          text: [
            "The failure by either party to enforce at any time or for any period any one or more of the terms or provisions of the Agreements herein shall not be a waiver of them or of the right at any time subsequently to enforce all conditions of the Agreements.",
          ],
        },
      ],
    },
    {
      title: "25. Language.",
      content: [
        {
          type: "paragraph",
          text: [
            "The Agreements and all related documents are drafted in the English and Arabic languages.",
          ],
        },
      ],
    },
    {
      title: "26. Severability",
      content: [
        {
          type: "paragraph",
          text: [
            "If any term or provision of these Agreements is held invalid, illegal or unenforceable for any reason by any court of competent jurisdiction such provision shall be severed and the remainder of the provisions hereof shall continue in full force and effect as if these Agreements had been agreed with the invalid, illegal or unenforceable provision eliminated.",
          ],
        },
      ],
    },
    {
      title: "27. Dispute Resolution:",
      content: [
        {
          type: "bulletList",
          text: [
            "Any dispute arising out of or in connection with these Agreements, including any disputes regarding the existence, validity or termination thereof, shall be settled by the Saudi Arabian Court in accordance with the rules and laws of Saudi Arabia.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Layout>
        <div className="container-for-content-pages border-[1px] border-[#f9f9f9]">
          <h1 className=" fahkwang-light text-[28px] text-center leading-[1.5] tracking-[0.5] mb-[23px]">
            Privacy Policy, Terms and Conditions
          </h1>
          <div className="px-[20px] md:p-0">
            {privacyPolicyContent.map((value, index) => {
              return <HeadingAndText data={value} key={index} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PrivacyPolicy;
