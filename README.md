# Approach

Approach
Login Page:

The project was developed in React with Tailwind CSS for styling. I first decided on the structure and approach for implementing the login page.
The login page was designed to authenticate users based on data from the users.csv file. I created a folder structure where the provided CSV files (users.csv, products.csv, purchase_history.csv) were stored under the public/data directory for easy access.

State Management:
The login form uses React's useState hook to manage the state of the username and password fields. The initial values are set to empty strings, and the values are updated via the onChange event handler as the user types in the input fields.

Login Logic:
The handleLogin function is called when the user clicks the "Login" button. It checks if the entered username and password match any user in the users array (loaded from the CSV file).
The find method is used to search the array for a matching user. If a match is found, the onLogin callback function is called with the authenticated user. If no match is found, an alert is shown indicating "Invalid credentials."

Styling:
The UI components are styled using Tailwind CSS. The login form is centered on the screen using Tailwind’s flex utilities. The form, input fields, and button are styled for a clean and responsive design.
Tailwind CSS is also used to make the layout responsive, ensuring that the form adapts well across different screen sizes.

Error Handling:
If the login attempt fails, an error alert is displayed, notifying the user that the credentials are invalid.

Additional Features:
Responsive Design: The login form uses Tailwind CSS classes to adapt the layout to different screen sizes, providing a mobile-friendly user interface.
User Authentication: The user is authenticated by matching the entered username and password with the data provided in the users.csv file.


Product Display Logic

Product Categorization:
The product list is divided into two categories: purchased and notPurchased. This categorization is done based on whether the ProductID of a product is present in the purchasedCategories array.
The data is processed using the reduce function, which categorizes the products into two separate arrays: notPurchased and purchased.

const [notPurchased, purchased] = products.reduce(
  ([notPurchased, purchased], product) => {
    if (purchasedCategories.includes(product.ProductID)) {
      purchased.push(product);
    } else {
      notPurchased.push(product);
    }
    return [notPurchased, purchased];
  },
  [[], []]
);

Sorting:
After categorization, the products are merged into a single array and sorted by their ProductName in ascending order using localeCompare.
To prevent errors if ProductName is undefined or null, a fallback value of an empty string is provided.

.sort((a, b) => {
  const nameA = a.ProductName || "";
  const nameB = b.ProductName || "";
  return nameA.localeCompare(nameB);
})

Rendering:
The sorted and categorized products are rendered inside a responsive grid using Tailwind CSS. The grid layout adapts to different screen sizes using the classes grid-cols-1, md:grid-cols-3, and lg:grid-cols-4.

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {[...notPurchased, ...purchased]
    .sort((a, b) => a.ProductName.localeCompare(b.ProductName))
    .map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
</div>

Additional Features:
Responsive Layout: The grid layout adapts to different screen sizes, ensuring the product list is displayed optimally across devices.

Error Handling: The code includes checks to prevent runtime errors when sorting products with missing or undefined ProductName values.
Dynamic Product Categorization: The product categorization dynamically separates purchased and not purchased products, providing a flexible display for varying data.