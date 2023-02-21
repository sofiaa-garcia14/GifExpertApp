import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Footer } from "./components/Footer";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // categories.push('Valorant');
    if (categories.includes(newCategory)) {
      return;
    }

    // Mejor forma para agregar categorías:

    /* categories.push(newCategory); */
    setCategories([newCategory, ...categories]);
    /// setcategories(cat => [...cat, 'Valorant']);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      {/* 
    /// para mandar property 
     */}

      <AddCategory
        // setCategories={ setCategories }
        // coloco "ON" para saber diferenciar de que es un evento
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}


      <Footer />
    </>
  );
};

export default GifExpertApp;
