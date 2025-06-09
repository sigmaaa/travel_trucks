# Travel Trucks

**Travel Trucks** is a modern, responsive web application built with React that allows users to browse and filter a curated catalog of camper vans. Users can refine their search based on vehicle type, location, and various features such as AC, kitchen, gas, and transmission type. The interface is designed to be intuitive, clean, and accessible across all devices.

---

## Technology Stack

* React (with Vite for fast development)
* Redux Toolkit for state management
* Redux Persist for local storage integration
* CSS Modules for scoped and maintainable styling
* React Router for client-side routing
* ESLint & Prettier for code quality and formatting

---

## Installation

To get started locally:

```bash
git clone https://github.com/sigmaaa/travel_trucks.git
cd travel_trucks
npm install
```

---

## Running the Application

To launch the development server:

```bash
npm run dev
```

Open your browser and navigate to: [http://localhost:5173](http://localhost:5173)

---

## Project Structure Overview

```
src/
├── components/       # Reusable UI components
├── layouts/          # Common layout wrappers
├── pages/            # Route-level components (e.g., HomePage, CatalogPage)
├── redux/            # Redux slices and store configuration
├── assets/           # Static files: icons, images, SVGs
├── styles/           # Shared and global styles
└── App.jsx           # Application root with routing configuration
```

---

## Key Features

* Browse and explore a detailed camper van catalog
* Advanced filtering by:

  * Vehicle type (e.g., Alcove, Panel Truck)
  * Location (searchable text input)
  * Equipment (AC, kitchen, gas, microwave, etc.)
* Display of camper specifications and visual previews
* Fully responsive design with accessibility best practices

---

## License

This project is licensed under the [MIT License](LICENSE).

---
