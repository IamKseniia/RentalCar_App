# RentalCar Frontend

**Find your perfect rental car** Reliable and budget-friendly rentals for any
journey.

## 📝 Project Description

This project is the **frontend part** of a web application for the company
**"RentalCar"**, which specializes in car rentals. The application includes
several key pages such as the homepage, a catalog of cars, a detailed page for
each car including a rental form, and a favorites page where users can view and
manage their saved cars.

## 🚀 Technologies Used

- **Vite** bundler
- **React** framework
- **Redux** for state management
- **React Router** for routing
- **Axios** for HTTP requests
- **CSS Modules**

## 📄 Pages Overview

1. **Homepage** – includes a promotional banner and a call to action.
2. **Catalog Page** – displays available vehicles with filter options:

   - Brand
   - Price
   - Mileage (`from`/`to`)
   - Favorite.

3. **Car Details Page** – provides detailed info, images, and a rental form.
4. **Favorites Page** – displays a list of vehicles the user has marked as
   favorites. Users can remove cars from the list or navigate to their detailed
   view.

## 🧭 Routing

- `/` – Homepage
- `/catalog` – Car catalog
- `/catalog/:id` – Car detail page

## 🧠 State Management

- Global state with Redux:

  - List of vehicles
  - Active filters

- Previous search results should be cleared before sending new filter queries to
  ensure data accuracy.

## ⚙️ Features

- View car list
- Detailed information about each car
- Filter by brand, price and mileage
- Booking form
- Save to favorites

## 🌐 Deployment

The project is deployed using [Vercel](https://vercel.com) .

## 👤 Author

Developed by Safronova Kseniia

- GitHub: https://github.com/IamKseniia
- LinkedIn: https://www.linkedin.com/in/kseniia-safronova-fullstack/
