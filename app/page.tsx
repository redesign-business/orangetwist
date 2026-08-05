const CTA = "Book a You Review";

const treatments = [
  {
    title: "Injectables",
    copy: "Natural-looking Botox, dermal fillers, and collagen support planned around your features.",
    image: "/images/pexels-sam2piccs-13720207-533x800-c747b31cf0.jpg",
    alt: "Woman in warm natural light",
  },
  {
    title: "Skin",
    copy: "Hydrafacial, microneedling, peels, and light-based treatments for real, visible progress.",
    image: "/images/pexels-orlovamaria-4906289-601x800-a9b51ce464.jpg",
    alt: "Smiling woman with radiant skin",
  },
  {
    title: "Body",
    copy: "Non-surgical contouring and hair removal designed to fit into your actual schedule.",
    image: "/images/pexels-karola-g-8363692-800x533-2d7d5babe7.jpg",
    alt: "Woman showing her midsection",
  },
];

const faqs = [
  ["What happens at a You Review?", "We listen to your goals, assess what will genuinely help, and explain your options, timing, and pricing. It is complimentary, with no obligation to book."],
  ["Who performs treatments?", "Licensed, continuously trained providers perform treatments under medical supervision. Your Reno team includes a nurse practitioner, registered nurse, esthetician, and treatment specialists."],
  ["Do you offer same-day appointments?", "Often, yes. Many appointments, including Botox, Hydrafacial, and filler top-ups, can also fit inside a lunch hour."],
  ["Where is the Reno center?", "Find us on South Virginia Street at Commons Shopping Center, with free parking available."],
];

export default function Page() {
  return (
    <main>
      <div className="notice">Reno, Nevada · Same-day appointments often available</div>

      <nav aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Orange Twist Reno home">
          <span>orange</span>twist
        </a>
        <div className="navLinks">
          <a href="#treatments">Treatments</a>
          <a href="#team">Our team</a>
          <a href="#reviews">Reviews</a>
        </div>
        <a className="button small" href="#book">{CTA}</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Orange Twist Reno</p>
          <h1>Your goals.<br /><em>Your glow.</em><br />Your way.</h1>
          <p className="lede">Elevated, results-driven aesthetics without the pressure. Our Reno providers build a thoughtful plan around you, using clinically backed treatments and honest guidance.</p>
          <a className="button" href="#book">{CTA}</a>
          <p className="micro">Complimentary · No pressure · No obligation</p>
        </div>
        <div className="heroVisual">
          <img src="/images/outside-center-3-1152x1536-7e4208d4fc.jpeg" alt="Orange Twist Reno storefront" />
          <div className="ratingCard">
            <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
            <strong>5.0 in Reno</strong>
            <small>Welcoming, knowledgeable, never pushy</small>
          </div>
        </div>
      </section>

      <section className="proofBar" aria-label="Orange Twist statistics">
        <div><strong>5M+</strong><span>Treatments annually</span></div>
        <div><strong>24</strong><span>Centers nationwide</span></div>
        <div><strong>50+</strong><span>Treatments</span></div>
        <div><strong>5.0</strong><span>Reno rating</span></div>
      </section>

      <section className="treatmentSection" id="treatments">
        <div className="sectionHead">
          <p className="eyebrow">The treatment menu</p>
          <h2>Science meets<br /><em>self-care.</em></h2>
          <p>From quick refreshes to longer-term plans, every recommendation begins with your skin, body, and goals, not a template.</p>
        </div>
        <div className="treatmentGrid">
          {treatments.map((treatment, index) => (
            <article className={`treatmentCard card${index + 1}`} key={treatment.title}>
              <img src={treatment.image} alt={treatment.alt} />
              <div>
                <span>0{index + 1}</span>
                <h3>{treatment.title}</h3>
                <p>{treatment.copy}</p>
                <a href="#book">{CTA} <b>↗</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="careSection" id="team">
        <div className="careImage">
          <img src="/images/team-shot-9-1-1050x1400-8c4a999983.jpg" alt="Orange Twist care team smiling together" />
          <div className="stamp"><span>Medical</span><strong>grade</strong><span>Human first</span></div>
        </div>
        <div className="careCopy">
          <p className="eyebrow">The people behind your plan</p>
          <h2>Expert hands.<br /><em>Zero hard sell.</em></h2>
          <p className="intro">Reno clients describe our team as welcoming, knowledgeable, and honest. That is exactly how aesthetic care should feel.</p>
          <div className="teamList">
            <div><strong>Janette McDougall, NP</strong><span>Injectables</span></div>
            <div><strong>Jacqueline Hernandez, RN</strong><span>Laser & body</span></div>
            <div><strong>Sophia Hill</strong><span>Facials & skin</span></div>
            <div><strong>Amanda Baker</strong><span>Center manager</span></div>
          </div>
          <p className="credential">All medical treatments are performed under medical supervision by licensed providers continuously trained in the latest techniques and technologies.</p>
          <a className="button dark" href="#book">{CTA}</a>
        </div>
      </section>

      <section className="reviewsSection" id="reviews">
        <div className="reviewImage">
          <img src="/images/pexels-vito-2005005-1400x933-11e35689ff.jpg" alt="Woman relaxing outdoors in dappled light" />
          <div className="reviewScore"><strong>5.0</strong><span>★★★★★</span><small>Reno clients</small></div>
        </div>
        <div className="reviewCopy">
          <p className="eyebrow">The Reno word on the street</p>
          <blockquote>“I felt welcome as soon as I walked in the door. Everyone was very helpful. Their enthusiasm and knowledge was refreshing.”</blockquote>
          <p className="byline">Kyote · First-time Orange Twist client</p>
          <div className="miniReviews">
            <p>“There was absolutely no pressure to commit.” <b>Bonnie</b></p>
            <p>“They explain procedures thoroughly and are never pushy.” <b>Shawna</b></p>
          </div>
        </div>
      </section>

      <section className="membershipSection">
        <div className="membershipCopy">
          <p className="eyebrow">Twist Up membership</p>
          <h2>More glow.<br /><em>More perks.</em></h2>
          <p>Your monthly credit grows in your Beauty Bank, ready for treatments or products whenever you are.</p>
          <ul>
            <li><b>$99 monthly credit</b> added to your Beauty Bank</li>
            <li><b>15% off</b> services and products</li>
            <li><b>An extra 5% off</b> treatment packages</li>
          </ul>
          <a className="button" href="#book">{CTA}</a>
        </div>
        <div className="membershipVisual">
          <img className="member" src="/images/orange-twist-member2-90de8ff811.png" alt="Orange Twist member enjoying glowing skin" />
          <img className="phone" src="/images/orangetwist-app-942af0c552.png" alt="Orange Twist mobile app" />
        </div>
      </section>

      <section className="faqSection">
        <div className="faqVisual">
          <img src="/images/tustin-skinvive-treatment-on-client-1-1400x1050-9aadf65697.jpeg" alt="Provider consulting with a client during treatment" />
          <p>Good questions are always welcome.</p>
        </div>
        <div className="faqCopy">
          <p className="eyebrow">Before you visit</p>
          <h2>Questions,<br /><em>answered.</em></h2>
          <div className="faqList">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta" id="book">
        <img src="/images/footer-intro-6656c628a6.png" alt="Two women sharing a joyful moment" />
        <div>
          <p className="eyebrow">No pressure. Just possibilities.</p>
          <h2>Got goals?<br /><em>We’re listening.</em></h2>
          <p>Start with a complimentary conversation about your vision. There is no obligation to book, ever.</p>
          <a className="button light" href="https://orangetwist.com/center/reno/">{CTA}</a>
        </div>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top"><span>orange</span>twist</a>
        <p>Reno · South Virginia Street<br />Commons Shopping Center · Free parking</p>
        <p>Medical-grade aesthetics.<br />Warm, human care.</p>
        <p>© 2026 Orange Twist</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        :root{--orange:#f15a24;--ink:#1d1b18;--cream:#f4efe6;--peach:#f2b19b;--lime:#d9e58c;--white:#fffdf8}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}img{display:block;width:100%;height:100%;object-fit:cover}.notice{background:var(--ink);color:white;text-align:center;padding:9px 20px;font-size:11px;letter-spacing:.18em;text-transform:uppercase}nav{height:78px;padding:0 4vw;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(29,27,24,.18);background:var(--cream)}.brand{font-size:25px;font-weight:900;letter-spacing:-.07em}.brand span{color:var(--orange)}.navLinks{display:flex;gap:34px;font-size:12px;text-transform:uppercase;letter-spacing:.12em}.button{display:inline-flex;align-items:center;justify-content:center;background:var(--orange);color:white;border-radius:999px;padding:17px 26px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:.2s transform,.2s background}.button:hover{transform:translateY(-2px);background:#d84918}.button.small{padding:12px 18px;font-size:10px}.hero{min-height:700px;display:grid;grid-template-columns:48% 52%;padding:38px 4vw 56px;gap:4vw}.heroCopy{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-left:4vw}.eyebrow{font-size:11px;font-weight:700;letter-spacing:.19em;text-transform:uppercase;margin:0 0 24px}.hero h1,.sectionHead h2,.careCopy h2,.membershipCopy h2,.faqCopy h2,.finalCta h2{font-family:Georgia,'Times New Roman',serif;font-weight:400;letter-spacing:-.055em;line-height:.87;margin:0}.hero h1{font-size:clamp(62px,7vw,112px)}em{color:var(--orange);font-weight:400}.lede{max-width:510px;font-size:18px;line-height:1.55;margin:32px 0}.micro{font-size:10px;text-transform:uppercase;letter-spacing:.13em;margin:14px 0 0}.heroVisual{position:relative;min-height:600px;border-radius:180px 180px 12px 12px;overflow:hidden}.heroVisual:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 70%,rgba(0,0,0,.25))}.ratingCard{position:absolute;z-index:2;right:18px;bottom:18px;width:205px;background:var(--white);padding:20px;border-radius:4px;display:flex;flex-direction:column;gap:5px}.stars{color:var(--orange);font-size:12px;letter-spacing:.12em}.ratingCard strong{font-family:Georgia,serif;font-size:26px}.ratingCard small{line-height:1.35}.proofBar{background:var(--lime);display:grid;grid-template-columns:repeat(4,1fr);padding:30px 4vw}.proofBar div{display:flex;gap:12px;align-items:baseline;justify-content:center;border-right:1px solid rgba(29,27,24,.25)}.proofBar div:last-child{border:0}.proofBar strong{font-family:Georgia,serif;font-size:38px}.proofBar span{font-size:10px;text-transform:uppercase;letter-spacing:.12em}.treatmentSection{padding:120px 4vw}.sectionHead{display:grid;grid-template-columns:1fr 1fr;column-gap:5vw;align-items:end;margin-bottom:60px}.sectionHead .eyebrow{grid-column:1/-1}.sectionHead h2,.careCopy h2,.membershipCopy h2,.faqCopy h2{font-size:clamp(52px,6vw,88px)}.sectionHead>p:last-child{font-size:17px;line-height:1.6;max-width:440px}.treatmentGrid{display:grid;grid-template-columns:repeat(12,1fr);gap:18px;align-items:start}.treatmentCard{background:var(--white);border-radius:4px;overflow:hidden}.treatmentCard img{aspect-ratio:4/5}.treatmentCard>div{padding:24px}.treatmentCard span{font-size:10px;color:var(--orange)}.treatmentCard h3{font-family:Georgia,serif;font-size:32px;font-weight:400;margin:8px 0}.treatmentCard p{font-size:14px;line-height:1.55}.treatmentCard a{display:inline-block;margin-top:12px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;border-bottom:1px solid}.treatmentCard b{color:var(--orange)}.card1{grid-column:1/5}.card2{grid-column:5/9;margin-top:75px}.card3{grid-column:9/13}.careSection{display:grid;grid-template-columns:1fr 1fr;background:var(--peach);min-height:800px}.careImage{position:relative;margin:55px;border-radius:240px 240px 8px 8px;overflow:hidden}.stamp{position:absolute;right:20px;bottom:20px;width:128px;height:128px;border-radius:50%;background:var(--lime);display:flex;flex-direction:column;align-items:center;justify-content:center;transform:rotate(-8deg);text-transform:uppercase;font-size:9px;letter-spacing:.12em}.stamp strong{font-family:Georgia,serif;font-size:28px;text-transform:lowercase;letter-spacing:-.04em}.careCopy{padding:90px 8vw 80px 3vw;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.careCopy em{color:var(--white)}.intro{font-size:18px;line-height:1.55;margin:30px 0}.teamList{width:100%;border-top:1px solid rgba(29,27,24,.25)}.teamList div{display:flex;justify-content:space-between;padding:15px 0;border-bottom:1px solid rgba(29,27,24,.25);font-size:13px}.teamList span{text-transform:uppercase;font-size:9px;letter-spacing:.12em}.credential{font-size:12px;line-height:1.5;margin:24px 0}.button.dark{background:var(--ink)}.reviewsSection{padding:120px 8vw;display:grid;grid-template-columns:43% 57%;align-items:center}.reviewImage{height:620px;position:relative}.reviewImage img{border-radius:8px 190px 8px 8px}.reviewScore{position:absolute;left:-40px;bottom:35px;width:150px;height:150px;border-radius:50%;background:var(--orange);color:white;display:flex;flex-direction:column;align-items:center;justify-content:center}.reviewScore strong{font-family:Georgia,serif;font-size:45px}.reviewScore span{font-size:10px;letter-spacing:.1em}.reviewScore small{margin-top:5px;text-transform:uppercase;font-size:8px;letter-spacing:.15em}.reviewCopy{padding-left:8vw}.reviewCopy blockquote{font-family:Georgia,serif;font-size:clamp(32px,4vw,56px);line-height:1.05;letter-spacing:-.035em;margin:0}.byline{text-transform:uppercase;letter-spacing:.13em;font-size:9px;margin:22px 0 50px}.miniReviews{display:grid;grid-template-columns:1fr 1fr;gap:25px;border-top:1px solid rgba(29,27,24,.25);padding-top:20px}.miniReviews p{font-family:Georgia,serif;font-size:17px;line-height:1.4}.miniReviews b{display:block;font-family:Arial,sans-serif;font-size:9px;text-transform:uppercase;letter-spacing:.13em;margin-top:10px}.membershipSection{background:var(--lime);display:grid;grid-template-columns:48% 52%;min-height:720px;overflow:hidden}.membershipCopy{padding:100px 5vw 90px 10vw;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.membershipCopy>p:not(.eyebrow){font-size:17px;line-height:1.55;max-width:470px;margin:28px 0 14px}.membershipCopy ul{padding:0;list-style:none;width:100%;margin:10px 0 30px}.membershipCopy li{border-bottom:1px solid rgba(29,27,24,.25);padding:13px 0;font-size:13px}.membershipVisual{position:relative;min-height:660px}.member{position:absolute;left:8%;bottom:0;width:78%;height:90%;object-fit:contain;object-position:bottom}.phone{position:absolute;right:3%;bottom:7%;width:33%;height:65%;object-fit:contain;filter:drop-shadow(0 18px 18px rgba(0,0,0,.18));transform:rotate(4deg)}.faqSection{padding:120px 8vw;display:grid;grid-template-columns:42% 58%;gap:8vw}.faqVisual{position:relative;height:670px}.faqVisual img{border-radius:190px 8px 8px 8px}.faqVisual p{position:absolute;bottom:22px;left:22px;background:var(--orange);color:white;padding:15px 18px;margin:0;font-family:Georgia,serif;font-style:italic}.faqCopy{padding-top:40px}.faqList{margin-top:40px}.faqList details{border-top:1px solid rgba(29,27,24,.3);padding:20px 0}.faqList details:last-child{border-bottom:1px solid rgba(29,27,24,.3)}summary{cursor:pointer;list-style:none;font-family:Georgia,serif;font-size:20px;display:flex;justify-content:space-between}summary::-webkit-details-marker{display:none}summary span{color:var(--orange)}details p{font-size:14px;line-height:1.6;max-width:550px;margin:16px 35px 0 0}.finalCta{min-height:660px;position:relative;display:flex;align-items:center;justify-content:flex-end;overflow:hidden;background:var(--orange);color:white}.finalCta>img{position:absolute;inset:0}.finalCta:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.05),rgba(0,0,0,.7))}.finalCta>div{position:relative;z-index:2;width:52%;padding:80px 8vw 80px 4vw}.finalCta h2{font-size:clamp(54px,6vw,92px)}.finalCta em{color:var(--lime)}.finalCta>div>p:not(.eyebrow){font-size:17px;line-height:1.55;max-width:480px;margin:28px 0}.button.light{background:var(--white);color:var(--ink)}footer{background:var(--ink);color:white;padding:48px 4vw;display:grid;grid-template-columns:2fr 1.4fr 1.4fr 1fr;align-items:end;gap:30px}.footerBrand{font-size:38px}footer p{font-size:10px;line-height:1.6;letter-spacing:.08em;text-transform:uppercase;margin:0}
        @media(max-width:800px){nav{height:66px}.navLinks{display:none}.hero{grid-template-columns:1fr;padding:50px 20px 30px}.heroCopy{padding:0}.heroVisual{min-height:500px;margin-top:30px;border-radius:110px 110px 8px 8px}.proofBar{grid-template-columns:1fr 1fr;gap:22px 0}.proofBar div:nth-child(2){border-right:0}.proofBar strong{font-size:28px}.proofBar span{font-size:8px}.treatmentSection{padding:80px 20px}.sectionHead{display:block}.sectionHead>p:last-child{margin-top:25px}.treatmentGrid{display:block}.treatmentCard{margin:0 0 18px!important}.treatmentCard img{aspect-ratio:5/4}.careSection{grid-template-columns:1fr}.careImage{height:520px;margin:25px}.careCopy{padding:70px 25px}.reviewsSection{padding:80px 25px;grid-template-columns:1fr}.reviewImage{height:500px}.reviewScore{left:-8px}.reviewCopy{padding:60px 0 0}.miniReviews{grid-template-columns:1fr}.membershipSection{grid-template-columns:1fr}.membershipCopy{padding:80px 25px}.membershipVisual{min-height:520px}.faqSection{padding:80px 25px;grid-template-columns:1fr}.faqVisual{height:480px}.faqCopy{padding:20px 0 0}.finalCta{justify-content:center;min-height:700px}.finalCta:after{background:rgba(0,0,0,.52)}.finalCta>div{width:100%;padding:80px 25px}footer{grid-template-columns:1fr 1fr}.footerBrand{grid-column:1/-1}.hero h1{font-size:58px}}
      ` }} />
    </main>
  );
}
