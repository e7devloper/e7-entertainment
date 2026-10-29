import Link from "next/link";
import { LegalPage } from "../components/LegalPage";

export const metadata = {
  title: "Terms of Use — E7 Entertainments Group",
  description:
    "The terms that apply when you use e7entertainments.com, request a park or check the status of a request.",
};

const SUPPORT_EMAIL = "support@e7entertainments.com";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of use"
      updated="29 October 2026"
      intro={
        <p>
          These terms apply when you use e7entertainments.com, which is run by E7 Entertainments
          Group (&ldquo;E7&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the site you agree to
          them. If you do not agree, please do not use the site.
        </p>
      }
    >
      <h2>About this website</h2>
      <p>
        This site introduces E7&apos;s businesses, products and services, and lets you contact us,
        request a park project and check the status of a request. Our{" "}
        <Link href="/privacy">privacy policy</Link> explains how we handle the information you send
        us.
      </p>

      <h2>Products, prices and project information</h2>
      <p>
        Product descriptions, photos, specifications and project examples are for general
        information. Photos may be illustrative, and specifications, availability and prices can
        change without notice. Nothing on this site is an offer to sell. Products, prices and project
        scope are only binding once they are set out in a written quotation or agreement signed by
        E7, and that document&apos;s terms then apply.
      </p>

      <h2>Requesting a park</h2>
      <ul>
        <li>
          Sending a request through the <Link href="/park-request">Request a park</Link> form is an
          enquiry. It does not create a contract or commit you or E7 to anything.
        </li>
        <li>
          Please give accurate information. Any plan or quote we prepare relies on what you tell us.
        </li>
        <li>
          We aim to respond to every request, but we may decline one, or ask for more information
          first.
        </li>
        <li>
          Your reference lets anyone who has it see your request&apos;s status on the{" "}
          <Link href="/request-status">Check your status</Link> page, so keep it private.
        </li>
      </ul>

      <h2>Using the site</h2>
      <p>You agree not to:</p>
      <ul>
        <li>send false, misleading or unlawful information, or pretend to be someone else;</li>
        <li>
          try to get into parts of the site or our systems that are not meant for you, or to look up
          requests that are not yours;
        </li>
        <li>
          overload, disrupt or scrape the site, including with automated tools or repeated requests;
        </li>
        <li>use the site to send spam or anything harmful, such as malware.</li>
      </ul>
      <p>We may limit or block access to anyone who breaks these rules.</p>

      <h2>Our content</h2>
      <p>
        The E7 name and logo, and the text, images, videos, catalogues and design of this site, belong
        to E7 or the people who license them to us. You may view and share pages for your own
        reference, or to consider working with E7. You may not copy, republish or sell our content, or
        use our name or logo, without our written permission.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The site links to services we do not control, such as WhatsApp and our social media pages.
        Their own terms and privacy policies apply, and we are not responsible for their content.
      </p>

      <h2>No warranty</h2>
      <p>
        We work to keep the site accurate and available, but we provide it &ldquo;as is&rdquo;. We do
        not promise that it will always be available, error-free or up to date, and we may change or
        remove any part of it at any time.
      </p>

      <h2>Our liability</h2>
      <p>
        To the extent the law allows, E7 is not liable for any indirect or consequential loss, or for
        any loss of profit, business or data, arising from your use of this site or reliance on its
        content. Nothing in these terms limits liability that cannot be limited by law. Any project
        or purchase is governed by the liability terms in its own written agreement.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top shows when they last
        changed, and the version on this page applies each time you use the site.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Hong Kong Special Administrative Region, and the
        courts of Hong Kong have jurisdiction over any dispute about them. This does not take away
        any rights you have under the laws of the place where you live.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms: email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>,
        or write to E7 Entertainments Group, Flat 721, 7/F, Liven House, 61–63 King Yip Street, Kwun
        Tong, Kowloon, Hong Kong.
      </p>
    </LegalPage>
  );
}
