import Link from "next/link";
import { LegalPage } from "../components/LegalPage";

export const metadata = {
  title: "Privacy Policy — E7 Entertainments Group",
  description:
    "What information E7 Entertainments collects through this website, how it is used, who it is shared with, and the choices you have.",
};

const SUPPORT_EMAIL = "support@e7entertainments.com";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="29 October 2026"
      intro={
        <p>
          This policy explains what E7 Entertainments Group (&ldquo;E7&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) collects when you use e7entertainments.com, why we collect it, and the
          choices you have. We keep it short because we collect very little.
        </p>
      }
    >
      <h2>The short version</h2>
      <ul>
        <li>We only collect what you choose to send us, such as a park request or an email.</li>
        <li>This website uses no cookies, no analytics, no advertising and no tracking.</li>
        <li>We never sell your information or use it for advertising.</li>
        <li>
          You can ask us for a copy of your information, or ask us to correct or delete it, at any
          time.
        </li>
      </ul>

      <h2>What this policy covers</h2>
      <p>
        This policy covers this website. The E7 Parks mobile app has its own{" "}
        <a href="https://api.e7entertainments.com/privacy">privacy policy</a>, which also explains
        how to delete an app account.
      </p>

      <h2>What we collect</h2>

      <h3>When you request a park</h3>
      <p>
        The <Link href="/park-request">Request a park</Link> form asks for your name, email address
        and phone number, along with details of the project: park type, budget and currency,
        location, site area, expected daily visitors, timeline, how you would like us to contact
        you, and anything you add under additional information. We save this as a request with a
        reference number and email you a copy.
      </p>

      <h3>When you check your status</h3>
      <p>
        The <Link href="/request-status">Check your status</Link>{" "}
        page sends the reference you enter
        to our servers. It shows only the request&apos;s status, park type and dates, never your
        budget, location, notes or contact details. Anyone who has your reference can see that
        status, so keep it to yourself.
      </p>

      <h3>When you email, message or apply</h3>
      <p>
        The contact, partnership and careers forms on this site open your own email app with a
        message already filled in. Nothing is sent until you press send there, and we then receive
        it like any other email. The same goes for anything you send us directly, such as a job
        application or an expression of interest. If you message us on WhatsApp, that conversation
        is also handled under WhatsApp&apos;s own privacy policy.
      </p>

      <h3>When you browse</h3>
      <p>
        Like any website, our hosting provider automatically records basic technical information
        when pages are requested, such as your IP address, browser type and the pages visited. It
        is used to run the site and keep it secure, and is kept only for a short time. We do not use
        it to build a profile of you.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To review your request, prepare a plan or quote, and contact you about it.</li>
        <li>To reply to your emails and messages, and to consider job applications.</li>
        <li>To email you a copy of what you sent us.</li>
        <li>To keep the website and our systems secure, for example by limiting repeated requests.</li>
        <li>To keep the business records we are required to keep by law.</li>
      </ul>

      <h2>Who sees it</h2>
      <p>
        Your information is seen by E7 staff who handle enquiries, and may be copied into our
        internal sales and project systems. Some companies process it on our behalf: Vercel and
        Railway host the website and its services, and Resend delivers our email. They may only use
        it to provide those services to us. We may also share information where the law requires it,
        or to protect our rights or the safety of others.
      </p>
      <p>
        Our providers&apos; servers may be in a different country from yours, including the United
        States. Wherever your information is processed, we protect it as this policy describes.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep park requests and correspondence for as long as we need them to handle your enquiry
        and any project that follows, and afterwards for as long as our legal and accounting
        obligations require. If you ask us to delete your information, we will do so unless we have
        to keep it by law.
      </p>

      <h2>Keeping it safe</h2>
      <p>
        Information is sent over encrypted connections (HTTPS), and access is limited to the staff
        who need it. No system is perfectly secure, but we take reasonable steps to protect what you
        share with us.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us for a copy of the information we hold about you, or ask us to correct or
        delete it. You can also withdraw your consent to us contacting you. Depending on where you
        live, you may have further rights under local data protection law, such as Hong Kong&apos;s
        Personal Data (Privacy) Ordinance or India&apos;s Digital Personal Data Protection Act. To make
        a request, email us from the address you used with us so we can confirm it is you.
      </p>

      <h2>Children</h2>
      <p>
        This website is for businesses and adults planning projects. It is not directed at children,
        and we do not knowingly collect information from them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, we will update this page and the date at the top. If a change
        significantly affects information you have already given us, we will tell you by email.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy or your information: email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, or write to E7 Entertainments Group,
        Flat 721, 7/F, Liven House, 61–63 King Yip Street, Kwun Tong, Kowloon, Hong Kong.
      </p>
    </LegalPage>
  );
}
