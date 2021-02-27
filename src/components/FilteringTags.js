import React from "react";
import useFilter from "./useFilter";

function FilteringTags() {
  const { filteredTags, handleDelete } = useFilter();
  return (
    <>
      {filteredTags.length > 0 && (
        <ul>
          {filteredTags.map((tag) => {
            return (
              <li key={tag + tag.index}>
                {tag}
                <button onClick={handleDelete} value={tag}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default FilteringTags;
