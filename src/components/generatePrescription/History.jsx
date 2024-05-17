import React from "react";

import history from "../../array/history";
import CommonSection from "../common/CommonSection";
const History = ({ closeModal }) => {
  return (
    <>
      <CommonSection
        closeModal={closeModal}
        title="History"
        placeholder="History"
        data={history}
      />
    </>
  );
};

export default History;

// <div>

//       <Favorites />
//     </div>

//     <div>
//       <div className="border p-6">

//         <div className="flex justify-between">
//           <div className="flex flex-col mx-2">
//             <p>Name</p>
//             <div className="flex flex-row">
//               {isEditing ? (
//                 <IoSearchOutline
//                   size={30}
//                   className="my-auto text-bg-color cursor-pointer"
//                   onClick={handleIconClick}
//                 />
//               ) : (
//                 <CiEdit
//                   size={30}
//                   className="my-auto text-red cursor-pointer"
//                   onClick={handleIconClick}
//                 />
//               )}
//               <div className=" ">
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     className="border-b border-[#D9D9D9] h-7 w-full px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
//                     placeholder="Search History"
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     className="border-b border-[#BCBDBE] h-7 w-full px-2 -mt-1 focus:outline-none hover:cursor-pointer bg-white"
//                     placeholder="Type History"
//                   />
//                 )}
//               </div>
//             </div>

//             {isEditing && (
//               <div className="relative w-full">
//                 <div className="search-results absolute bg-white w-full border border-[#BCBDBE] rounded-md p-2">
//                   <div className="custom-scrollbar max-h-20 overflow-y-auto">
//                     {searchResults.length > 0 ? (
//                       searchResults.map((result, index) => (
//                         <div
//                           key={index}
//                           className="cursor-pointer border-b border-[#BCBDBE] pb-1"
//                         >
//                           <p>
//                             <span>? genericName : company</span> || name ||
//                             <span className="text-xs">company</span>
//                           </p>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="text-gray-500">No results found</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="flex flex-col mx-2">
//             <p>Note</p>
//             <input
//               type="text"
//               className="border-b border-[#D9D9D9] h-[26px] w-full px-2  focus:outline-none hover:cursor-pointer bg-white"
//               placeholder="Write note"
//             />
//           </div>
//           <div>
//             <button className="border mb-0  mt-4 p-1">Add to List</button>
//           </div>
//         </div>

//         <div className="mt-6">
//           <table class="table-auto">
//             <tbody>
//               <tr className="border-b border-[#D9D9D9]">
//                 <td className=" w-5/12 px-5">Chronic Kidney Disease (CKD)</td>
//                 <td className=" w-6/12 px-5">
//                   Family member has this issue for a long time
//                 </td>
//                 <td className=" w-1">
//                   <RxCross1 className="text-red" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="flex justify-between">

//         <div className="flex flex-row">
//           <BiReset />
//           <p>Reset</p>
//         </div>
//         <div className="flex flex-row">
//           <button className="border mx-5" onClick={handleSubmit}>
//             Cancel
//           </button>
//           <button className="border"> Submit</button>
//         </div>
//       </div>
//     </div>
