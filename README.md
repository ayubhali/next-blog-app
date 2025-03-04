# Modern Blog Platform (🚧 WIP - Deployment Stage)

A full-stack blog platform built with Next.js, featuring a clean user interface and a powerful admin dashboard for content management.

![Blog Homepage](./Blogger1.png)
*Homepage with latest blog posts*

![Admin Dashboard](./Blogger2.png)
*Admin dashboard for content management*

## Tech Stack

- **Frontend**
  - [Next.js 14](https://nextjs.org/) - React framework for production
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
  - [Axios](https://axios-http.com/) - HTTP client

- **Backend**
  - [MongoDB](https://www.mongodb.com/) - NoSQL database
  - [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Backend API

## Features

- Responsive design for all devices
- Modern and clean UI
- Rich text blog editor
- Admin dashboard
- Blog analytics
- Newsletter subscription
- Category-based blog organization

## Quick Start

1. Clone the repository
```bash
git clone <https://github.com/ayubhali/next-blog-app>
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```env
MONGODB_URI=your_mongodb_uri
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── admin/         # Admin dashboard
│   ├── api/          # API routes
│   ├── components/   # Reusable components
│   └── public/       # Static assets
```

## Admin Access

The admin dashboard is accessible at `/admin` with the following features:
- Blog post management
- Subscriber management
- Analytics dashboard
- Media management

## License

MIT License - feel free to use this project for your own purposes.
