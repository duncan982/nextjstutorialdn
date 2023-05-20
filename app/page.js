import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div>
          <Link href="/events/london">
            <Image />
            <h2>Events in london</h2>
          </Link>
          <p>
            Sint tempor ullamco exercitation esse incididunt quis aliquip
            officia amet reprehenderit quis officia magna est. Do culpa Lorem
            laboris nulla dolore adipisicing non cupidatat minim ea excepteur
            reprehenderit amet. Consectetur consectetur ut ex dolor labore ad et
            sit mollit et et cupidatat dolor. Tempor cillum duis consectetur et
            nisi ad qui mollit consequat labore nulla labore et nisi.
          </p>
          <Link href="/events/san-francisco">
            <Image />
            <h2>Events in san-francisco</h2>
          </Link>
          <p>
            Proident minim pariatur culpa eiusmod tempor tempor dolore. Fugiat
            fugiat et mollit quis duis mollit veniam ad. Duis ex incididunt
            laboris ut do exercitation anim eu sint amet duis consectetur
            exercitation irure. Nostrud eu ipsum ipsum velit commodo cillum.
          </p>
          <Link href="/events/barcelona">
            <Image />
            <h2>Events in barcelona</h2>
          </Link>
          <p>
            In ad magna esse quis deserunt qui esse cillum nostrud ad excepteur
            minim consectetur. Deserunt duis esse eiusmod cillum anim anim
            deserunt id ad. Tempor nulla id occaecat proident voluptate do elit
            in enim consequat. Non qui laboris magna minim mollit velit in qui
            culpa commodo id ipsum qui cupidatat. Sit nulla in irure non esse
            pariatur non eu exercitation nisi veniam veniam ullamco nostrud.
            Minim esse sint minim irure elit esse id velit eu deserunt pariatur
            anim Lorem. Labore dolor culpa laboris dolor consectetur deserunt
            officia cupidatat nostrud commodo laboris.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <> copyright</>
      </footer>
    </div>
  );
}
