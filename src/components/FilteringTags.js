// import { React, useState } from "react";

// export function FilteringTags() {
//   const [filteredTags, setFilteredTags] = useState([]);
//   console.log(filteredTags);

//   // const handleClick = (e) => {
//   //   const buttonValue = e.target.value;
//   //   if (!filteredTags.includes(buttonValue)) {
//   //     setFilteredTags([...filteredTags, buttonValue]);
//   //   }
//   // };

//   const handleDelete = (e) => {
//     setFilteredTags(
//       filteredTags.filter((tag) => {
//         return tag !== e.target.value;
//       })
//     );
//   };

//   return (
//     <ul>
//       {filteredTags.map((tag) => {
//         return (
//           <li key={tag + tag.index}>
//             {tag}
//             <button onClick={handleDelete} value={tag}>
//               X
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// // export default FilteringTags;
