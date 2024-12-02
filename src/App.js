import React, { useState, useEffect } from "react";
import LoginForm from "./Components/LoginForm";
import ProductList from "./Components/ProductList";
import { loadCSV } from "./util/loadCSV.js";

const App = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersData = await loadCSV("/data/users.csv"); // Fetch from public/data/users.csv
        const productsData = await loadCSV("/data/products.csv"); // Fetch from public/data/products.csv
        const purchaseHistoryData = await loadCSV("/data/purchase_history.csv"); // Fetch from public/data/purchase_history.csv

        setUsers(usersData);
        setProducts(productsData);
        setPurchaseHistory(purchaseHistoryData);
      } catch (error) {
        console.error("Error loading CSV files:", error);
      }
    };

    loadData();
  }, []);

  if (!currentUser) {
    return <LoginForm users={users} onLogin={setCurrentUser} />;
  }

  return (
    <ProductList
      user={currentUser}
      products={products}
      purchaseHistory={purchaseHistory}
    />
  );
};

export default App;
