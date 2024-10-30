// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     let result = await fetch("http://localhost:5001/products", {
//       headers: {
//         authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
//       },
//     });
//     result = await result.json();
//     setProducts(result);
//   };

//   const deleteProduct = async (id) => {
//     let result = await fetch(`http://localhost:5001/product/${id}`, {
//       method: "Delete",
//       headers: {
//         authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
//       },
//     });
//     result = await result.json();
//     if (result) {
//       getProducts();
//     }
//   };

//   const handleSearchProduct = async (event) => {
//     let key = event.target.value;
//     if (key) {
//       let result = await fetch(`http://localhost:5001/search/${key}`, {
//         headers: {
//           authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
//         },
//       });

//       result = await result.json();
//       setProducts(result);
//     } else {
//       getProducts();
//     }
//   };

//   return (
//     <div className="text-center mt-5">
//       <h1 className="text-2xl font-bold">Product List</h1>
//       <input
//         type="text"
//         className="search-product-box"
//         placeholder="Serach product"
//         onChange={handleSearchProduct}
//       />
//       <div className="flex justify-center">
//         {products?.length > 0 ? (
//           <table className="w-[80%] text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400 ">
//             <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
//               <tr>
//                 <th scope="col" className="px-6 py-3">
//                   S. no
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Category
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Company
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Delete
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Update
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {products?.map((item, index) => (
//                 <tr className="bg-white border-b dark:bg-slate-800 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{item.name}</td>
//                   <td className="px-6 py-4">{item.price}Cr</td>
//                   <td className="px-6 py-4">{item.category}</td>
//                   <td className="px-6 py-4">{item.company}</td>
//                   <td className="px-6 py-4">
//                     <button onClick={() => deleteProduct(item._id)}>
//                       Delete
//                     </button>
//                   </td>
//                   <td className="px-6 py-4">
//                     <Link to={`/update/${item._id}`}>Update</Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div className="flex justify-center items-center">
//             <h3 className="font-semibold text-xl">No products found</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helper/BaseUrl";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`${BASE_URL}/products`, {
    // let result = await fetch("http://localhost:5001/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`${BASE_URL}/product/${id}`, {
    // let result = await fetch(`http://localhost:5001/product/${id}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const handleSearchProduct = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`${BASE_URL}/search/${key}`, {
      // let result = await fetch(`http://localhost:5001/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      result = await result.json();
      setProducts(result);
    } else {
      getProducts();
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-5">
      <h1 className="text-2xl font-bold text-center">Product List</h1>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Search product"
          onChange={handleSearchProduct}
        />
      </div>
      <div className="mt-6 flex justify-center">
        {products?.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    S. no
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Name
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Price
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Category
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Company
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Delete
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr
                    key={item._id}
                    className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm">
                      {item.price} Cr
                    </td>
                    <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm">
                      {item.category}
                    </td>
                    <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm">
                      {item.company}
                    </td>
                    <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteProduct(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm">
                      <Link to={`/update/${item._id}`} className="text-blue-500 hover:text-blue-700">
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold">No products found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
