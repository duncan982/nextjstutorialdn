import React from "react";
import Link from "next/link";
import Image from "next/image";

const eventsCategoriesPage = ({ title, data }) => {
  return (
    <div>
      <h1>Events in {title}</h1>
      {data.map((ev) => {
        return (
          <div key={ev.id}>
            <Link href={`/events/${ev.city}/${ev.id}`} passHref>
              <h2>{ev.title}</h2>
            </Link>
            <Image
              width={400}
              height={300}
              alt={ev.title}
              src={ev.image}
            ></Image>
            <p>{ev.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default eventsCategoriesPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    return (
      // {
      // paths: [
      {
        params: {
          categories: event.id.toString(),
        },
      }
      // ],
      // };
    );
  });
  // console.log("allPaths:", allPaths);
  return {
    paths: allPaths,
    // paths: [
    //   { params: { categories: events_categories[0].id } },
    //   { params: { categories: events_categories[1].id } },
    //   { params: { categories: events_categories[2].id } },
    // ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);

  const id = context?.params.categories;
  // console.log(id);

  const { allEvents } = await import("/data/data.json");
  // console.log("allEvents:", allEvents);

  const data = allEvents.filter((ev) => ev.city === id);
  // console.log(data);

  return {
    props: {
      title: id,
      data: data,
    },
  };
}
