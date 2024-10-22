import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const handleAddProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    let result = await fetch("e-commerce-mern-project-backend.vercel.app/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    // console.warn(result);
     // Reset the form fields
     setName("");
     setPrice("");
     setCategory("");
     setCompany("");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col md:w-[30%] w-[70%]">
        <h1 className="text-2xl font-semibold mb-4 ">Add product</h1>
        <input
          type="text"
          placeholder="Enter name of the product"
          className="p-2 my-3 border-slate-400 border-[2px] rounded-lg "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {error && !name && (
          <span className="invalid-input">Enter valid name</span>
        )}
        <input
          type="text"
          placeholder="Enter price of the product"
          className="p-2 my-3 border-slate-400 border-[2px] rounded-lg "
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        {error && !price && (
          <span className="invalid-input">Enter valid price</span>
        )}

        <input
          type="text"
          placeholder="Enter category of the product"
          className="p-2 my-3 border-slate-400 border-[2px] rounded-lg "
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        {error && !category && (
          <span className="invalid-input">Enter valid category</span>
        )}

        <input
          type="text"
          placeholder="Enter company of the product"
          className="p-2 my-3  border-slate-400 border-[2px] rounded-lg "
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        {error && !company && (
          <span className="invalid-input">Enter valid company</span>
        )}

        <button
          onClick={handleAddProduct}
          className="p-2 mt-6 bg-slate-400 rounded-lg font-medium text-white"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
