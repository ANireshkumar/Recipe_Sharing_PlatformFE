// Dashboard.js
import React from "react";
const Dashboard = () => {
    const recipes = [
      {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        image: "https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=1024x1024&w=is&k=20&c=zYqC1qqE1U_kxMzu8PW_07zYP4dUcQeuivkSHX4pnH4=",
      },
      {
        title: "Chicken Tikka Masala",
        description: "A popular Indian dish made with marinated chicken in a spiced curry sauce.",
        image: "https://www.shutterstock.com/shutterstock/photos/2502136341/display_1500/stock-photo-chicken-tikka-masala-served-in-a-bowl-featuring-tender-chunks-of-chicken-in-rich-orange-sauce-2502136341.jpg",
      },
      {
        title: "Beef Tacos",
        description: "Delicious tacos filled with seasoned beef, fresh vegetables, and cheese.",
        image: "https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos.jpg",
      },
      {
        title: "Vegetable Stir Fry",
        description: "A quick and healthy stir fry with a mix of colorful vegetables.",
        image: "https://i0.wp.com/www.thesmalltownfoodie.com/wp-content/uploads/2018/05/Vegetable-Stir-Fry4.png",
      },
      {
        title: "Chocolate Cake",
        description: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
        image: "https://chelsweets.com/wp-content/uploads/2021/10/death-by-chocolate-cake-cut-open-vert-edited-720x960.jpg.webp",
      },
      {
        title: "Caesar Salad",
        description: "A fresh salad with romaine lettuce, croutons, and Caesar dressing.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OIhkHRLfiWPtcDsaXkAfaiPbNhsX8nHnY_snFdZzTlbGrpCnTpxKTSk&s",
      },
    ];
  
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Main Content */}
        <main className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Dashboard</h2>
            
          </header>
  
          {/* Recipe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{recipe.title}</h3>
                  <p className="text-gray-600">{recipe.description}</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md">View Recipe</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };
  
  export default Dashboard;