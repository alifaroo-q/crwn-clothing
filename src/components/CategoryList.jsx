import CategoryCard from "./CategoryCard";

const CategoryList = ({categories}) => {
  return (
    <div className="grid grid-cols-12 gap-5 cursor-pointer">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
