import React from "react";

function CategoryCard({ category }) {
  const { title, imageUrl } = category;

  return (
    <div
      className={`${
        title.includes("mens") || title.includes("women")
          ? "col-span-6"
          : "col-span-4"
      } h-72 border-2 border-neutral-950 shadow-lg group overflow-hidden`}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "transform 200ms cubic-bezier(0.25, 0.45, 0.45, 0.95)",
        }}
        className="h-full flex flex-col justify-center items-center group-hover:scale-110 duration-300"
      >
        <div className="border-2 border-neutral-950 w-40 h-40 flex flex-col justify-center items-center bg-slate-200 opacity-70 group-hover:opacity-80 transition-all duration-300 shadow-md">
          <h1 className="text-2xl font-bold py-2">{title}</h1>
          <p className="font-light text-sm">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
