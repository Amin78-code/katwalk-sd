import React from "react";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import ShopByCategory from "../components/shop-by-category/shopByCategory";
import TextImgSection from "../components/text-img-section/textImgSection";
import katwalkBag from "../assets/images/designers/katwalk-bag.jpg";
import Features from "../components/features/features";
import HeadingAndText from "../components/heading-and-text/headingAndText";

function FAQ() {
  const FAQ_Content = [
    {
      title: "About Katwalk",
    },
    {
      title: "What’s Katwalk?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk is an elegant and sophisticated marketplace that connects creative designers with fashion-forward customers, bringing what’s new in the world of Arabian fashion.",
          ],
        },
      ],
    },
    {
      title: "What are bespoke designs?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk’s bespoke designs provide the ultimate personalised and unique pieces tailored to your tastes and exact size and fit. We complement your look with exclusive pieces and a variety of colours, cuts, and shapes to provide you with the experience and pieces you desire.",
          ],
        },
      ],
    },
    {
      title: "Is Katwalk a designer?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk is not a designer. We connect creative designers with shoppers for a convenient shopping experience.",
          ],
        },
      ],
    },
    {
      title: "How can I become a Katwalk partner?",
      content: [
        {
          type: "paragraph",
          text: [
            "If you’re passionate about becoming a part of the future of Arabian fashion, please visit",
          ],
        },
        {
          type: "anchor",
          text: "https://4v3p9b7mvnx.typeform.com/joinkatwalk",
        },
      ],
    },
    {
      title: "Delivery",
      content: [
        {
          type: "paragraph",
          text: [
            "What countries does Katwalk ship to?",
            "We currently ship to Saudi Arabia only.",
          ],
        },
      ],
    },
    {
      title: "How long will it take to deliver my order?",
      content: [
        {
          type: "paragraph",
          text: [
            "- Ready-to-wear products take 2 days to be handled to the carrier and made-to-measure and bespoke products take 10-14 days.",
            "- All orders are shipped by Aramex and it may take the following timescale:",
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
          type: "paragraph",
          text: [
            "- Above table is just an estimate delivery timescale; our sellers will do their best to deliver your orders on time.",

            "- Please note that there might be some delays during peak or sale seasons, and holidays.",
            "- Above timescales are expected after your order has been confirmed.",
            "- Any cash-on-delivery orders are anticipated to a fee of SAR 20.",
            "- When your order is put for delivery, you will be contacted by the carrier to confirm your location and time. Kindlynote that you only have 3 attempts for delivery before your order is cancelled or additional charges will apply.",
          ],
        },
      ],
    },
    {
      title: "How can I track my shipment?",
      content: [
        {
          type: "paragraph",
          text: [
            "You can track your shipment by visiting My Account > Purchase History.",
          ],
        },
      ],
    },
    {
      title: "Orders",
    },
    {
      title: "How can I contact Katwalk customer support?",
      content: [
        {
          type: "paragraph",
          text: ["We’re here to help! Please visit  for customer support."],
        },
      ],
    },
    {
      title: "Can I place an order via WhatsApp?",
      content: [
        {
          type: "paragraph",
          text: [
            "We require that all orders be placed through our website. You can reach us via WhatsApp if you need assistance!",
          ],
        },
      ],
    },
    {
      title: "How will I know if a seller has accepted my order?",
      content: [
        {
          type: "paragraph",
          text: [
            "Once the order is accepted/rejected, a confirmation will be sent by SMS, email, or WhatsApp. Kindly note that it may take up to one business day for orders to be accepted by the designer.",
          ],
        },
      ],
    },
    {
      title: "Can I change, edit, or cancel my order once it has been placed?",
      content: [
        {
          type: "paragraph",
          text: [
            "It is possible to change or cancel an order that has not yet been accepted by the seller. Once an order has been accepted, it cannot be changed or cancelled.",
            "You can check the status of your order by visiting My Account > Purchase History.",
            "If you wish to change, edit or cancel a non-approved order, please visit .",
          ],
        },
        {
          type: "paragraph_sm",
          text: [
            "Kindly note that following the Electronic Commerce Law in Saudi Arabia, made-to-measure pieces and bespoke designs cannot be returned.",
          ],
        },
      ],
    },
    {
      title: "I gave wrong measurements, what should I do?",
      content: [
        {
          type: "paragraph",
          text: [
            "It is possible to change or cancel an order that has not yet been accepted by the seller. Once an order has been accepted, it cannot be changed or cancelled.",
            "You can check the status of your order by visiting My Account > Purchase History.",
            "If you wish to change, edit or cancel a non-approved order, please visit .",
          ],
        },
        {
          type: "paragraph_sm",
          text: [
            "Kindly note that following the Electronic Commerce Law in Saudi Arabia, made-to-measure pieces and bespoke designs cannot be returned.",
          ],
        },
      ],
    },
    {
      title: "How can I share my feedback about my Katwalk experience?",
      content: [
        {
          type: "paragraph",
          text: [
            "We’re always happy to hear from you. You can share your experience via our 10-sec shopping survey  or you can reach us through  We’re all ears!",
          ],
        },
      ],
    },
    {
      title: "Bespoke and Sizing",
    },
    {
      title: "What are bespoke designs?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk’s bespoke designs provide the ultimate personalised and unique pieces tailored to your tastes and exact size and fit. We complement your look with exclusivity and a variety of colours, cuts, and shapes to provide you with the experience and pieces you desire.",
          ],
        },
      ],
    },

    {
      title: "What size should I get?",
      content: [
        {
          type: "paragraph",
          text: [
            "We have provided below Guide to help you decide which size to buy!",
          ],
        },
        {
          type: "table",
          tableHead: [
            "Size",
            "Your Height (cm)",
            "Length (in)",
            "Bust (in)",
            "Sleeve Length (in)",
          ],
          tableBody: [
            {
              rowData: ["50", "146-150", "50", "20", "25"],
            },
            {
              rowData: ["52", "152-154", "52", "22", "26"],
            },
            {
              rowData: ["54", "157-160", "54", "23", "27"],
            },
            {
              rowData: ["56", "162-165", "56", "25", "28"],
            },
            {
              rowData: ["58", "167-170", "58", "26", "29"],
            },
            {
              rowData: ["60", "172-175", "60", "28", "30"],
            },
          ],
        },
        {
          type: "paragraph",
          text: [
            "*Please note that the above measurements are for the piece itself, NOT YOUR BODY MEASUREMENTS.",
            "**Some pieces may vary from these measurements due to different fabrics, styles, cuts, and designers, but you can still use them as a reference.",
            "***Please note that if you like to wear maxi length abayas, we recommend ordering one size smaller to what has been recommended for your height.",
          ],
        },
      ],
    },
    {
      title: "How can I take my measurements?",
      content: [
        {
          type: "paragraph",
          text: ["Please check Size Guide in product page."],
        },
      ],
    },
    {
      title: "Order Issues",
    },
    {
      title: "I have not received my order. What should I do?",
      content: [
        {
          type: "paragraph",
          text: [
            "You can track your order by visiting My Account > Purchase History.",
            "If you are still experiencing issues with your order, reach out to us at , and we’ll help work everything out.",
          ],
        },
      ],
    },
    {
      title: "I received an incorrect/damaged product. What should I do?",
      content: [
        {
          type: "paragraph",
          text: [
            "We’re sorry for that! All incorrect/accidentally damaged orders are eligible for a free return.",
            "If you are experiencing any issues with your order, simply visit us at  and we’ll help work everything out.",
          ],
        },
      ],
    },
    {
      title: "I gave the wrong measurements. What should I do?",
      content: [
        {
          type: "paragraph",
          text: [
            "It is possible to change or cancel an order that has not yet been accepted by the seller. Once an order has been accepted, it cannot be changed or cancelled.",
            "You can check the status of your order by visiting My Account > Purchase History.",
            "If you wish to change, edit or cancel a non-approved order, please visit .",
            "Kindly note that following the Electronic Commerce Law in Saudi Arabia, made-to-measure pieces and bespoke designs cannot be returned.",
          ],
        },
      ],
    },
    {
      title: "Can I change, edit, or cancel my order once it has been placed?",
      content: [
        {
          type: "paragraph",
          text: [
            "It is possible to change or cancel an order that has not yet been accepted by the seller. Once an order has been accepted, it cannot be changed or cancelled.",
            "You can check the status of your order by visiting My Account > Purchase History.",
            "If you wish to change, edit or cancel a non-approved order, please visit .",
            "Kindly note that following the Electronic Commerce Law in Saudi Arabia, made-to-measure pieces and bespoke designs cannot be returned.",
          ],
        },
      ],
    },
    {
      title: "Returns and Refunds",
    },
    {
      title: "How can I return a product?",
      content: [
        {
          type: "paragraph",
          text: [
            "If you wish to return your order, please visit  and select your preferred contact method. We will get back to you as soon as possible.",
            "- Please note that ready-to-wear products are eligible for return within 7 days of delivery.",
            "- Products must be new, unused, and in their original condition with all tags attached.",
          ],
        },
      ],
    },
    {
      title: "How much does it cost to return a product?",
      content: [
        {
          type: "paragraph",
          text: [
            "If you wish to return a product, you are responsible for the carrier return costs.",
            "If you have received a damaged or incorrect order, you are eligible for a free return.",
          ],
        },
      ],
    },
    {
      title: "How long do I have to return a product?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk follows Saudi Arabian e-commerce regulations.",
            "- Ready-to-wear products are eligible for return within 7 days of delivery.",
            "- Products must be new, unused, and in their original condition with all tags attached.",
          ],
        },
      ],
    },
    {
      title: "What can I return?",
      content: [
        {
          type: "paragraph",
          text: [
            "Katwalk follows Saudi Arabian e-commerce regulations.",
            "- Non-returnable items: any customizable product that has been made or tailored especially for you (made-to-measure and bespoke designs).",
            "Returnable items:",
            "- Ready-to-wear products are eligible for return within 7 days of delivery.",
            "- Products must be new, unused, and in their original condition with all tags attached.",
          ],
        },
      ],
    },
    {
      title: "Do I get a refund or store credit for returns?",
      content: [
        {
          type: "paragraph",
          text: [
            "ou will receive a refund after the returned items have been inspected and approved.",
            "- For returned items, you will be refunded the full paid amount, including VAT (excluding cash-on-delivery fees). You are responsible for any carrier return costs.",
            "- For damaged or incorrect items, you will be refunded the full paid amount, including cash-on-delivery fees, if applicable. You are not liable for any carrier return costs for damaged or incorrect items.",
            "- You will be refunded via your original payment method. It can take up to 30 days for the amount to appear in your account.",
          ],
        },
      ],
    },
    {
      title: "Account",
    },
    {
      title: "Do I need to create an account to shop at Katwalk?",
      content: [
        {
          type: "paragraph",
          text: [
            "Yes. You can create an account within a few seconds using your mobile number.",
          ],
        },
      ],
    },
    {
      title: "How can I create an account?",
      content: [
        {
          type: "paragraph",
          text: [
            "You can create an account by clicking on the account icon at the top right corner of any page of the website.",
          ],
        },
      ],
    },
    {
      title: "How can I change account details?",
      content: [
        {
          type: "paragraph",
          text: [
            "You can change account details by simply going to My Account > Manage Profile.",
          ],
        },
      ],
    },
    {
      title: "Payments",
    },
    {
      title: "What payment methods can I use?",
      content: [
        {
          type: "paragraph",
          text: [
            "We accept payments via Mada, Visa, Mastercard, STC Pay, Apple Pay, Katwalk eGift cards, and cash on delivery. Please be aware that any cash-on-delivery orders are subject to an anticipated fee of SAR 20",
          ],
        },
      ],
    },
    {
      title: "How do I select a payment currency?",
      content: [
        {
          type: "paragraph",
          text: [
            "All our prices are listed in SAR. Kindly note that if you are shopping outside Saudi Arabia, you are responsible for knowing currency exchange rates.",
          ],
        },
      ],
    },
    {
      title: "Is VAT included in prices?",
      content: [
        {
          type: "paragraph",
          text: ["All our prices are VAT inclusive."],
        },
      ],
    },
    {
      title: "When will I be charged for my order?",
      content: [
        {
          type: "paragraph",
          text: [
            "You will be charged directly once your order has been approved.",
          ],
        },
      ],
    },
    {
      title: "Can I pay cash on delivery?",
      content: [
        {
          type: "paragraph",
          text: [
            "Yes. Please be aware that any cash-on-delivery orders are subject to an anticipated fee of SAR 20.",
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
            Frequently Asked Questions
          </h1>
          <div className="px-[20px] md:p-0">
            {FAQ_Content.map((value, index) => {
              return <HeadingAndText data={value} key={index} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default FAQ;
