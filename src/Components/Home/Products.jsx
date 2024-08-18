import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Pagination from "./Pagination";
import LoadingSpinner from "../Pages/LoadingSpinner";

const Products = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [bn, setBn] = useState("");
  const [cate, setCate] = useState("");
  const [sort, setSort] = useState("");
  // const [price, setPrice] = useState(0);

  const { data: allProduct = [], isLoading } = useQuery({
    queryKey: ["allProduct", search, bn, cate],
    queryFn: async () => {
      const resp = await axiosCommon.get(
        `/products-by-search-filter-sort?search=${search}&brandName=${bn}&category=${cate}&sort=${sort}&page=${currentPage}&size=${itemPerPage}`
      );
      //   console.log(resp.data);

      return resp.data;
    },
  });
  //
  const { data: categorization = {} } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosCommon.get("/categorization");
      // console.log(res.data);
      return res.data;
    },
  });
  const { brandNames = [], categories = [] } = categorization;
  // pagination count
  const [currentPage, setCurrentPage] = useState(0);
  const itemPerPage = 9;
  const { data = {} } = useQuery({
    queryKey: ["count", bn, cate, search],
    queryFn: async () => {
      const response = await axiosCommon.get(
        `/count?search=${search}&brandName=${bn}&category=${cate}`
      );
      console.log(response.data?.count);
      return response.data?.count;
    },
  });
  const { count } = data;
  console.log(count);
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  // for search
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
    //  console.log(text)
  };
  return (
    <div>
      {/* search  */}

      <div className=" md:flex justify-evenly items-center my-10 mx-20">
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Product Name"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        {/* sorting */}
        <div className="sm:mt-4">
          <select
            className="select select-bordered w-full   "
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          >
            <option disabled value="">
              Price
            </option>
            <option value="Low to High">Low To High</option>
            <option value="High to Low">High To Low</option>
            <option value="Newest Fast">
              <span className="font-bold">Date :</span> NewestFast
            </option>
          </select>
        </div>
      </div>
      <div className=" flex justify-evenly my-10">
        <div>
          <select
            className="select select-bordered w-full   "
            onChange={(e) => setBn(e.target.value)}
            value={bn}
          >
            <option disabled value="">
              select a Brand
            </option>

            {brandNames.map((brand, index) => (
              <option key={index}>{brand.brand}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            className="select select-bordered w-full   "
            onChange={(e) => setCate(e.target.value)}
            value={cate}
          >
            <option disabled value="">
              select a Category
            </option>

            {categories.map((category, index) => (
              <option key={index}>{category.category}</option>
            ))}
          </select>
        </div>
      </div>
     {/* price range */}
     

      <div className=" grid lg:grid-cols-3 md:grid-cols-2  gap-6 my-5">
        {allProduct.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        count={count}
        itemPerPage={itemPerPage}
      ></Pagination>
    </div>
  );
};

export default Products;
