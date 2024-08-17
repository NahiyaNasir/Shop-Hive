

// eslint-disable-next-line react/prop-types
const ProductCard = ({product}) => {
//   console.log(product);
   // eslint-disable-next-line react/prop-types
   const { ProductName,ProductImage,Description,Price,Category,Ratings,ProductCreationDate,BrandName}=product
    return (
        <div>
              <div className="card max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
                <img src={ProductImage} alt={`${ProductName} Image`} className=" w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h4 className="text-xl font-bold">{ProductName}</h4>
                <p className="text-gray-600 mt-2">{Description}</p>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-900 font-bold">${Price}</span>
                    <span className="text-gray-600 text-sm">Category: {Category}</span>
                </div>
                <div className="flex items-center mt-2">
                   
                    <span className="text-gray-600">Rating: ({Ratings})</span>
                </div>
                <div className="flex items-center mt-2">
                   
                    <span className="text-gray-800 font-serif">Brand: {BrandName}</span>
                </div>

                <div className="text-sm text-gray-500 mt-2">Created on: {new Date(ProductCreationDate).toLocaleDateString()}</div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;