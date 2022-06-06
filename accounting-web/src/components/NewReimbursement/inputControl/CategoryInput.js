import React from "react";

const CategoryOptions = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

function CategoryInput() {
  return (
    <div>
      <select>
        <option value="">Grapefruit</option>;
        <option value="coconut">Coconut</option>;
        <option value="mango">Mango</option>;
      </select>
    </div>
  );
}

export default CategoryInput;
