import React from "react";
import Image from "next/image";
const eventPage = ({ title, data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <Image src={data.image} alt={data.title} width={600} height={300}></Image>
      <p>{data.description}</p>
    </div>
  );
};

export default eventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        categories: path.city,
        id: path.id,
      },
    };
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

  // const id = context?.params.categories;
  const id = context?.params.id;
  // console.log(id);

  const { allEvents } = await import("/data/data.json");
  // console.log("allEvents:", allEvents);

  const data = allEvents.find((ev) => ev.id === id);
  // console.log(data);

  return {
    props: {
      title: id,
      data: data,
    },
  };
}
