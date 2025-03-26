# InjectAI App V2

## Overview
InjectAI App V2 is a web application built with modern technologies,  an AI-powered platform that simplifies web app development.

## Features
- **AI-Powered UI/UX:** Generates clean and user-friendly designs.
- **Backend Support:** Integrates with databases and APIs for dynamic content.
- **GitHub Sync:** Allows seamless version control with GitHub.
- **Customizable Elements:** Edit UI components through simple descriptions.

## Installation & Setup

### Prerequisites
- Node.js (Latest LTS version recommended)
- Package Manager (npm, yarn, or bun)
- Git

### Steps to Run the Project Locally

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/injectai-app-v2.git
   cd injectai-app-v2
   ```

2. **Install dependencies**
   ```sh
   npm install  # or yarn install / bun install
   ```

3. **Start the development server**
   ```sh
   npm run dev  # or yarn dev / bun dev
   ```

4. **Access the application**
   Open your browser and visit: `http://localhost:3000`

## Deployment on Netlify

If you're deploying on Netlify but your **logo/favicon isn't updating**, try:

1. **Hard Refresh the Browser:** `Ctrl + Shift + R` (Windows) / `Cmd + Shift + R` (Mac).
2. **Clear Netlify Cache:** Go to "Deploys" → "Trigger deploy" → Select "Clear cache and deploy site."
3. **Check File Paths:** Ensure favicon and logo are correctly linked in `index.html`.
4. **Ensure Proper Public Directory:** If using Next.js, check that assets are inside `/public/`.

## Technologies Used
- **Frontend:** HTML, Tailwind CSS, JavaScript/TypeScript
- **Backend:** Node.js (if applicable)
- **AI Integration:** 
Mock (without API)

## License
This project is open-source and available under the MIT License.

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

