import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
// import fs from "fs";
const EventsPage = ({ data }) => {
  // data.map((data) => console.log(data));
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {data.map((events) => {
          return (
            <div key={events.id}>
              <Link href={`events/${events.id}`}>
                <h2>{events.title}</h2>
              </Link>
              <Image
                alt={events.title}
                width={300}
                height={300}
                src={events.image}
              ></Image>
              <p>{events.description}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  // export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  // console.log("events_categories:", events_categories);

  return {
    props: {
      // title: "Sasa Nani",
      // data: jsonData, // Include the fetched JSON data in the props
      data: events_categories,
    },
  };
}
