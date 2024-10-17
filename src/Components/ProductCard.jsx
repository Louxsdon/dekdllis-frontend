function Product({
  id,
  name,
  slug,
  attachments,
  category,
  price,
  sale_price,
  seller,
  discounted,
}) {
  return (
    <>
      <a href={`/#details/`} className="card hover:shadow-lg relative">
        {sale_price && (
          <div className="bg-red-200 pl-4 pr-2 py-1 absolute right-0 top-0 z-10 rounded-bl-3xl">
            <h4 className="text-xs text-red-500 font-semibold">
              {(100 - (sale_price / price) * 100).toFixed()}%
            </h4>
          </div>
        )}
        <div className=" overflow-hidden w-full card-header h-32 lg:h-64 bg-white">
          <img
            className="w-auto m-auto h-full"
            // src={attachments ? "/storage/" + attachments[0] : ""}
            src="/assets/images/iphone14.webp"
            alt=""
          />
        </div>
        <div className="card-body text-sm">
          <div className="w-full flex justify-between items-center">
            <h4 className="inline-block text-gray-500 font-bold">
              GH&#x20B5;{price}
            </h4>
            {sale_price && (
              <p className="pl-5 line-through text-gray-400 text-xs">
                GH&#x20B5;{sale_price}
              </p>
            )}
          </div>
          <h4 className="line-clamp-2">{name}</h4>
        </div>
      </a>
    </>
  );
}
export default Product;
