import React from "react";
import Link from "next/link";
import Image from "next/image";
const Home = ({ data }) => {
  return (
    <main>
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
  );
};

export default Home;

// export async function getStaticPaths() {
//   const { events_categories } = await import("/data/data.json");
//   const allPaths = events_categories.map((event) => {
//     return (
//       // {
//       // paths: [
//       {
//         params: {
//           categories: event.id.toString(),
//         },
//       }
//       // ],
//       // };
//     );
//   });
//   // console.log("allPaths:", allPaths);
//   return {
//     paths: allPaths,
//     // paths: [
//     //   { params: { categories: events_categories[0].id } },
//     //   { params: { categories: events_categories[1].id } },
//     //   { params: { categories: events_categories[2].id } },
//     // ],
//     fallback: false,
//   };
// }

export async function getStaticProps() {
  // export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  console.log("events_categories:", events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
