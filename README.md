# 🧴Fragrance App by Muhammad Semab (Assignment 2)

---
### Table of Contents
- [Description](#description)
- [Features Implemented](#features-implemented)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Conclusion](#conclusion)
---

### Description
- This web application serves as a fragrance guide, allowing users to explore different fragrances from various brands. It provides an interactive interface with filtering and search functionalities, allowing users to easily find and compare fragrances. The project leverages Laravel for the backend and React for the frontend, with Inertia.js to integrate both seamlessly.

### Features Implemented
- **Authentication and Authorization**:
    - Users can sign up, log in, and manage their accounts with proper authentication and authorization mechanisms in place.
    - Users can create, edit, and delete fragrances, ensuring a dynamic and interactive experience.

- **Dynamic Frontend with React and Inertia.js**: 
    - The front-end is powered by React, with Inertia.js bridging it with Laravel. This setup eliminates the need for separate APIs, allowing Laravel to handle routing and backend logic while React handles the user interface.

- **CRUD Functionality**: 
    - Users can add, update, and delete fragrances from the application, making it a full-featured fragrance guide.
    - Role based CRUD functionality.
    - Users can only view or show fragrances.
    - Sellers can create, update, and delete fragrances **only** they have listed.
    - Admins can create, update, and delete **all** fragrances.
    - Implemented Polcies for the fragrance model to ensure that only the appropriate users can perform CRUD operations on fragrances.
    - Registered policy in the `AuthServiceProvider`.
    ```php
        protected $policies = [
        Fragrance::class => FragrancePolicy::class,
    ];
    ```
    - Registered the policy in app.php using `AuthServiceProvider`.
    ```php
        ->withProviders([
        App\Providers\AuthServiceProvider::class,
    ])
    ```
    - Implement `CheckRole` middleware to check if the user has the required role before allowing access to certain routes.
    - Registered the middleware in `\bootstrap\app.php`.
    ```php
        $middleware->alias([
            'auth' => \App\Http\Middleware\Authenticate::class,
            'role' => \App\Http\Middleware\CheckRole::class,
        ]);
    ```


- **Responsive Design**: 
    - The application is fully responsive, ensuring it works on desktops, tablets, and mobile devices.
    - Implement role based design with different layouts for different roles.
    - Attempted to implement different dashboards for different roles.
    - Consistent and intuitive user interface for all roles.



- **Version Control with GitHub**: 
    - The project utilizes GitHub for version control, with separate branches for different features, and pull requests for code review and integration.
    - Branches names include `auth-and-authorisation`, `index-page-features`, `updated-looks`, `working-pages`.

- **Improved Pagination and Search**:
    - Improved pagination and search functionality for a more user-friendly experience.
    - Search functionality shows the number of results found.
    - More seeds to demonstrate the pagination and search functionality.
    - Simplified min and max price filters for easier filtering.
    - Implemented a `reset` button to clear all filters.
    ```
        const handleReset = () => {
        reset({ search: '', min_price: '', max_price: '' }); 
        get(route('fragrances.index'), { replace: true }); 
    };
    ```
- **Pivot Table**:
    - Attempted to implement a pivot table for roles.

### Technologies Used
- **Backend**: Laravel 11.x
- **Frontend**: React, Inertia.js
- **Styling**: Tailwind CSS for modern and responsive design
- **Database**: MySQL (Laravel's Eloquent ORM is used for database interactions)
- **Version Control**: GitHub for managing codebase and collaboration 
    - This might not be on the submission repository, but I'll provide the link to the repository where I've pushed the code.
- **Authentication**: Laravel's built-in authentication system.

### Installation
To run this project locally, follow these steps:
#### Prerequisites
Make sure you have the following installed on your machine:
- PHP 8.0 or higher
- Composer
- Node.js and npm
- MySQL (or any other compatible database)

#### Installation Steps
1. **Clone the repository**:
```bash
git clone https://github.com/mhdsemab/fragrance-app.git
```
2. **Install Backend Dependencies**: Navigate to the backend directory and install the required PHP dependencies using Composer:
```bash
cd fragrance-app
composer install
```
3. **Install Frontend Dependencies**: Install the required JavaScript dependencies using npm:
```bash
npm install
```
4. **Setup Environment File**: Copy `.env.example`` to ``.env`` and configure the database settings.
```bash
cp .env.example .env
```
5. **Generate Application Key**: Generate a new application key for Laravel:
```bash
php artisan key:generate
```
6. **Run Migrations**: Run the database migrations to create the necessary tables:
```bash
php artisan migrate
```
7. **Run Development Server**: Start both the backend and frontend servers:
```bash
php artisan serve #for backend
npm run #for frontend
```
8. **Access the Application**: Open your web browser and visit `http://localhost:8000` to access the application.
---
### Conclusion
Setting up this project was challenging due to missing files, constant errors, and the integration of various libraries. Despite these hurdles, I am satisfied with the outcome. The website demonstrates key features such as Laravel, React, and Inertia, fulfilling the requirements of the assignment, even if some aspects aren't extensively detailed. This project reflects my ability to tackle complex technologies and create a functional web application.

By Muhammad Semab


