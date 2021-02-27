// import { useState } from "react";

// const useFilter = () => {
//   const [filteredTags, setFilteredTags] = useState([]);
//   console.log(filteredTags);

//   const handleClick = (e) => {
//     const buttonValue = e.target.value;
//     if (!filteredTags.includes(buttonValue)) {
//       setFilteredTags([...filteredTags, buttonValue]);
//     }
//   };

//   const handleDelete = (e) => {
//     setFilteredTags(
//       filteredTags.filter((tag) => {
//         return tag !== e.target.value;
//       })
//     );
//   };

//   return {
//     filteredTags,
//     handleClick,
//     handleDelete,
//   };
// };

// export default useFilter;
