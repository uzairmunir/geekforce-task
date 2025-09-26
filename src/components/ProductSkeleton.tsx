

const ProductSkeleton: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg animate-pulse">
      <div className="w-full h-40 bg-gray-200 rounded-md mb-3" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/4 mt-2" />
    </div>
  );
};

export default ProductSkeleton;
