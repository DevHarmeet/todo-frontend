# Todo List Application

A modern task management application built with Next.js and TypeScript, featuring a clean UI and comprehensive task management capabilities.

## Features

- Create, edit and delete tasks
- Color code tasks for better organization
- Mark tasks as complete/incomplete
- Responsive design for all devices
- Clean and intuitive interface

## Tech Stack

### Frontend

- Next.js 13+ (App Router)
- TypeScript
- TailwindCSS
- React Icons
- Axios

### Testing

- Jest
- React Testing Library
- Mock Service Worker

## Prerequisites

- Node.js 18+
- npm/yarn
- Running backend server (port 5000)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/username/todo-frontend.git
```

2. Install dependencies:

```bash
npm install
```

- Copy `.env.example` to `.env` and update the database URL:

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Testing

To run the tests:

```bash
npm test
```

## API Integration

The application is designed to work with a backend server running on port 5000. Ensure the server is running before starting the application.

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Key Components

### TaskForm

- Handles task creation and editing
- Color selection functionality
- Form validation
- Responsive design

### TaskCard

- Displays individual tasks
- Toggle completion status
- Delete functionality

## Error Handling

- Comprehensive error handling for API calls
- User-friendly error messages
- Loading states for better UX
- Form validation feedback
