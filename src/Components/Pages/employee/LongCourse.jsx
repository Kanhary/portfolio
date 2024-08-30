// import React from 'react';

// const LongCourseForm = ({ newCourse, setNewCourse, handleFormSubmit, setShowForm }) => {
//   return (
//     <form onSubmit={handleFormSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* From Date Input */}
//         <div>
//           <label htmlFor="from" className="block text-sm font-semibold text-gray-800">From</label>
//           <input
//             type="date"
//             id="from"
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             value={newCourse.from}
//             onChange={(e) => setNewCourse((prev) => ({ ...prev, from: e.target.value }))}
//             required
//           />
//         </div>

//         {/* To Date Input */}
//         <div>
//           <label htmlFor="to" className="block text-sm font-semibold text-gray-800">To</label>
//           <input
//             type="date"
//             id="to"
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             value={newCourse.to}
//             onChange={(e) => setNewCourse((prev) => ({ ...prev, to: e.target.value }))}
//             required
//           />
//         </div>

//         {/* Course Input */}
//         <div>
//           <label htmlFor="course" className="block text-sm font-semibold text-gray-800">Course</label>
//           <input
//             type="text"
//             id="course"
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             value={newCourse.course}
//             onChange={(e) => setNewCourse((prev) => ({ ...prev, course: e.target.value }))}
//             required
//           />
//         </div>

//         {/* Organize Input */}
//         <div>
//           <label htmlFor="organize" className="block text-sm font-semibold text-gray-800">Organize</label>
//           <input
//             type="text"
//             id="organize"
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             value={newCourse.organize}
//             onChange={(e) => setNewCourse((prev) => ({ ...prev, organize: e.target.value }))}
//             required
//           />
//         </div>

//         {/* Location Radio Buttons */}
//         <div className="md:col-span-2">
//           <label className="block text-sm font-semibold text-gray-800">Location</label>
//           <div className="mt-2 flex items-center space-x-6">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="location"
//                 checked={newCourse.inCountry}
//                 onChange={() => setNewCourse((prev) => ({ ...prev, inCountry: true }))}
//                 className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//               />
//               <span className="ml-2 text-sm text-gray-800">In Country</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="location"
//                 checked={!newCourse.inCountry}
//                 onChange={() => setNewCourse((prev) => ({ ...prev, inCountry: false }))}
//                 className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//               />
//               <span className="ml-2 text-sm text-gray-800">Out of Country</span>
//             </label>
//           </div>
//         </div>

//         {/* Last Modified By Input */}
//         <div className="md:col-span-2">
//           <label htmlFor="lastBy" className="block text-sm font-semibold text-gray-800">Last Modified By</label>
//           <input
//             type="text"
//             id="lastBy"
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             value={newCourse.lastBy}
//             onChange={(e) => setNewCourse((prev) => ({ ...prev, lastBy: e.target.value }))}
//             required
//           />
//         </div>
//       </div>

//       {/* Form Actions */}
//       <div className="flex justify-end space-x-4">
//         <button
//           type="button"
//           className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200"
//           onClick={() => setShowForm('tab1')} // Updated to navigate to Tab 1
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   );
// };

// export default LongCourseForm;
