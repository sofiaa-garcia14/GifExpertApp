import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // método TRIM elimina espacios de la izq y der
    /* setCategories( categories => [inputValue, ...categories] ); */
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    // se puede tener la cantidad de inputs que yo quiera, lo importante es que esten dentro del mismo form
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        //property
        type="Text"
        placeholder="Buscar gifs"
        value={inputValue} //si quiero que tenga por defecto este valor
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
