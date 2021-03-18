import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const desc = data.site.siteMetadata;
  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={desc.description} />
        <meta name="keywords" content={desc.keywords} />
        <meta property="og:title" content={desc.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={desc.description} />
        <meta property="og:image" content="/www/img/smsfinance-social-cover.jpg" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:url" content={desc.url} />
      </Helmet>
      <main>
        <h1>Komplexní finanční poradenství</h1>
        <div>dělat věci správně se vyplácí</div>
        <h2>
          Jsme českou nezávislou poradenskou společností s&nbsp;celorepublikovou působností
  </h2>
        <p>
          Od roku 2001 poskytujeme služby převážně v oblasti <strong>osobních financí</strong> a&nbsp;při zavádění
    zaměstnaneckých
    benefitů.
  </p>
        <p>
          Naše finanční poradce vedeme k&nbsp;<strong>zabezpečování komplexních finančních služeb</strong> a&nbsp;vytváření
    dlouhodobých
    rovnovážných
    partnerských vztahů s&nbsp;klientem na bázi vzájemné výhodnosti.
  </p>
        <article>
          <h2>Co pro vás můžeme udělat?</h2>
          <ul>
            <li>
              <a href="tel:0420605249388">+420 605 249 388</a>
            </li>
            <li>
              <a href="mailto:info@smsfinance.cz">info@smsfinance.cz</a>
            </li>
          </ul>
        </article>
        <div>
          <h2>Poradenství pro lidi jako jste vy <span>od roku 2001</span></h2>
          <p>Klíčovou oblastí našeho podnikání je finanční poradenství a&nbsp;zavádění firemních benefitů. Radíme svým
          klientům,
          jak nejlépe nakládat s jejich zdroji. Je to dynamické, neustále se vyvíjející odvětví, a&nbsp;proto se stále
          a&nbsp;rádi
      učíme novým věcem. Nikdy neusínáme na vavřínech.</p>
          <p>
            „dělat věci <span>správně</span> se vyplácí“
    </p>
          <a href="#">O nás</a>
        </div>
        <div>
          <h2>Buďte součástí týmu</h2>
          <div>Další informace o kariéře najdete zde:</div>
          <a href="#">Kariéra v SMS</a>
        </div>
        <div>
          <h2>Novinky</h2>
          <a href="#">
            <article>
              <time datetime="2020-09-29">29.09.2020</time>
              <h3>Pomozte nám podpořit dobrou věc &#8230;</h3>
              <p>
                Každoročně máme předvánoční večer SMS spojený s dobročinností.
                Také letos se nabízí možnost pomoci smysluplným krokům neziskové organizaci Celé Česko čte dětem. Podaří se
                někomu z nás vydražit grafiku (70x100cm) autora L. Szpyrce? Výtěžek z této akce půjde na zakoupení knih a
                audioknih pro dětská oddělení nemocnic.
        </p>
            </article>
          </a>
          <a href="#">
            <article>
              <time datetime="2020-07-20">20.07.2020</time>
              <h3>Nastartujte své podnikání po ukončení krize &#8230;</h3>
            </article>
          </a>
          <a href="#">
            <article>
              <time datetime="2020-07-14">14.07.2020</time>
              <h3>Práce finančního poradce v době krize &#8230;</h3>
            </article>
          </a>
          <div aria-hidden="true">SMS novinky</div>
        </div>

      </main>

    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    site(siteMetadata: {}) {
      siteMetadata {
        title
        description
        keywords
        url
      }
    }
  }
`;