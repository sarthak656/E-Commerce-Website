import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ user, products, purchaseHistory }) => {
  const purchasedCategories = purchaseHistory
    .filter((ph) => ph.UserID === user.UserID);
    //console.log(purchasedCategories)

    const [notPurchased, purchased] = products.reduce(
        ([notPurchased, purchased], product) => {
          const isPurchased = purchasedCategories.some(
            category => category.ProductID === product.ProductID
          );
          
          if (isPurchased) {
            purchased.push(product);  
          } else {
            notPurchased.push(product);  
          }
      
          return [notPurchased, purchased];
        },
        [[], []]  
      );
      
  console.log(notPurchased)
  console.log(purchased)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Personalized Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {[...notPurchased, ...purchased]
    .sort((a, b) => {
      const nameA = a.ProductName || "";  // Default to an empty string if ProductName is undefined
      const nameB = b.ProductName || "";  // Default to an empty string if ProductName is undefined
      return nameA.localeCompare(nameB);
    })
    .map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
</div>

    </div>
  );
};

export default ProductList;
