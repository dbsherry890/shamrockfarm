// pages/about.js

import Head from 'next/head';
import styles from './about.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export default function About() {
  return (
    <div className={poppins.className}>
      <div className={styles.container}>
        <Head>
          <title>About Me</title>
          <meta name="description" content="About Me page" />
        </Head>
        <main className={styles.main}>
          <section className={styles.section}>
            <p>
              <span STYLE="font-weight:bold; font-size: 2rem">Welcome to Shamrock Farm,</span> a
              spectacularly scenic, secluded, and storied property 30 minutes from Saint Paul or the
              Minneapolis-St.Paul Airport. You now have a rare opportunity to acquire a curated{' '}
              <span STYLE="text-decoration:underline">20 acres,</span> 1/2 mile off a quiet road
              surrounded by hundreds of acres of Kinnickinnic river conserved land.
            </p>
            <br />
            <h1>Restored Foursquare farmhouse</h1>
            <ul>
              <li>3 bedrooms</li>
              <li>Wrap-around porches with amazing views</li>
              <li>2 remarkable baths, laundry, storage</li>
              <li>large living room, dining room</li>
              <li>3 refrigerator/freezers</li>
              <li>Restored four square farmhouse</li>
            </ul>
            <h2>Restored log cabin:</h2>
            <ul>
              <li>one bedroom</li>
              <li>kitchenette</li>
              <li>fireplace</li>
              <li>one bath with Toto washlet</li>
              <li>
                front porch large enough to host gatherings overlooking the koi pond and property
              </li>
            </ul>
            <h2>Restored "gothic style" barn</h2>
            <ul>
              <li>seats up to 80</li>
              <li>stage, lighting, great acoustics, disco ball</li>
              <li>cement floor, high ceilings, workshop</li>
              <li>refrigerator, freezer, wine refrigerator</li>
              <li>remarkable storage space</li>
            </ul>
            Koi pond with fish and frogs, beautifully landscaped Bocce ball court with water,
            electricity Large, restored oak savannah (extending at least 1/2 mile) dating back over
            150 years Restored pollinator prairie that invites beautiful birds, bees, and
            butterflies.
            <h2>Additional Details</h2>
            <ul>
              <li>Deep well with full aquifer, water filtering system, irrigation and lighting</li>
              <li>John Deere front-loader tractor; John Deere riding mowers</li>
              <li>2 Kayaks</li>
              <li>6 Tables and chairs to seat 80</li>
              <li>Recreational games (corn hole, croquet, bocce, etc)</li>
            </ul>
            <br />
            <p>
              Over the past 16 years, the current owners have devoted significant time and resources
              to make Shamrock Farm a destination that delights. Shamrock Farm has been the site of
              numerous weddings, charity events, and parties for up to 300 people.{' '}
            </p>
            <br />
            <p>
              Come visit this exceptional property and experience the heavenly magic of Shamrock
              Farm
            </p>
            <br />
            <p>Price upon request</p>
            <br />
            <section className={styles.contact}>
              <p>Gregory A. Plotnikoff</p>
              <p>612.345.5029</p>
            </section>
          </section>
          {/* <section className={styles.section}>
            <h2>Professional Background</h2>
            <p>I have worked at [Company Names] and have experience in [Your Skills].</p>
          </section> */}
        </main>
      </div>
    </div>
  );
}
