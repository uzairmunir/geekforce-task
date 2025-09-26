import { Search } from 'lucide-react';


const EmptyState = () => {
  return (
    <div className="py-8 md:py-16 px-4 xl:px-0 container mx-auto flex flex-col items-center justify-center text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        <Search className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        No products found
      </h3>
      <p className="text-muted-foreground max-w-md">
        No products match". Try adjusting your search terms.
      </p>
    </div>
  );
};

export default EmptyState;