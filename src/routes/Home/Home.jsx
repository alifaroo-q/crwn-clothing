import CategoryList from "../../components/CategoryList";

function Home() {
  const categories = [
    {
      id: crypto.randomUUID(),
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: crypto.randomUUID(),
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: crypto.randomUUID(),
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: crypto.randomUUID(),
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
    {
      id: crypto.randomUUID(),
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
  ];

  return (
    <>
      <CategoryList categories={categories} />
    </>
  );
}

export default Home;
