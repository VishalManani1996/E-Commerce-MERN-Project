import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5001/product/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const handleUpdateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5001/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    // Reset the form fields
    setName("");
    setPrice("");
    setCategory("");
    setCompany("");
    // console.log(result);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col md:w-[30%] w-[70%]">
        <h1 className="text-2xl font-semibold mb-4">Update product</h1>
        <input
          type="text"
          placeholder="Enter name of the product"
          className="p-2 my-3 border-slate-400 border-[2px] rounded-lg "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter price of the product"
          className="p-2 my-3 border-slate-400 border-[2px] rounded-lg "
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter category of the product"
          className="p-2 my-3 border-slate-400 border-[2px] rounded-lg "
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter company of the product"
          className="p-2 my-3 border-slate-400 border-[2px] rounded-lg "
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <button
          onClick={handleUpdateProduct}
          className="p-2 mt-6 bg-slate-400 rounded-lg font-medium text-white"
        >
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
