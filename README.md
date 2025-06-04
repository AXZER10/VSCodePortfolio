# VSCode-Portfolio

## Description
A personal portfolio website designed to mimic the user interface of Visual Studio Code (VSCode). Built with React, Tailwind CSS, and other modern web technologies, this project showcases my skills, projects, and experiences in a unique and engaging way.

## Features

-   **VSCode Themed UI:** A distinctive portfolio design inspired by the look and feel of VSCode.
-   **Responsive Layout:** Fully responsive design ensuring optimal viewing experience across various devices.
-   **Dynamic Content:** Utilizes React to dynamically render project information, work experience, and contact details.
-   **Theming Support:** Implements custom theming using `tw-colors`, allowing users to switch between different VSCode-inspired color schemes (Github, Dracula, Ayu Dark, Ayu Mirage, Nord, Night Owl).
-   **Project Showcase:** Displays a selection of projects with descriptions, technologies used, source code links, and live demos.
-   **Experience Timeline:** Highlights work experience in a clear and concise timeline format.
-   **Contact Form:** Includes a contact form powered by EmailJS for easy communication.
-   **GitHub Integration:** Fetches and displays GitHub repositories and contributions using the GitHub API and `react-github-calendar`.
-   **Error Handling**: Displays a user-friendly error message when API limits are reached.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **Vite:** A fast build tool for modern web development.
-   **tw-colors:** A Tailwind CSS plugin for creating custom color themes.
-   **React Router DOM:** A library for dynamic routing in React applications.
-   **React Hook Form:** For handling form state and validation.
-   **EmailJS:** A service to send emails directly from the client-side.
-   **Axios:** A promise-based HTTP client for making API requests.
-   **React Github Calendar:** A component to display a GitHub contribution calendar.
-   **React Helmet Async:** Provides asynchronous support for managing document head elements (title, meta tags, etc.).
-   **ESLint and Prettier:** For code linting and formatting.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/vscode-portfolio.git
    cd vscode-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    - Create a `.env` file in the root directory.
    - Add the following variables, replacing the placeholder values with your actual credentials:

    ```
    VITE_SERVICE_ID=your_emailjs_service_id
    VITE_TEMPLATE_ID=your_emailjs_template_id
    VITE_EMAILJS_KEY=your_emailjs_user_id
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the application in development mode. Open your browser and navigate to the address provided in the console (usually `http://localhost:5173`).

## Usage

The application is designed to be a personal portfolio. To customize it:

1.  **Update Project Data:**
    - Modify the `src/features/projects/project.js` file to reflect your own projects, including titles, descriptions, image paths, tag technologies used, source code URLs, and live demo links.

2.  **Update About Information:**
    - Edit the `src/features/about/About.jsx` component to customize the "About Me" section with your details. Also, update the paths to your Tech Stack icons if necessary.

3.  **Customize Contact Information:**
    - Verify the accuracy of the EmailJS configuration in the `.env` and update the `src/features/contact/ContactSocials.jsx` component to personalize social media links.

4.  **Theming:**
    - Explore and set different themes using the settings page (`/settings`). The configuration for themes is in `tailwind.config.js`.

## License

MIT License

Copyright (c) 2024 Pranjal Snehi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
