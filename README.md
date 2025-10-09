# Personal To-Do List

A hierarchical to-do list application with a RESTful API backend built using Node.js, Express, and PostgreSQL. This project allows you to organize your tasks in a structured way using Spaces, Sections, Tasks, and Subtasks.

## Features

- **Hierarchical Organization**: Organize your tasks with a 4-level structure
  - **Spaces**: Top-level workbooks for different areas of your life
  - **Sections**: Categories within each space
  - **Tasks**: Individual tasks within sections
  - **Subtasks**: Breakdown tasks into smaller actionable items
- **Full CRUD Operations**: Create, Read, Update, and Delete functionality for all levels
- **RESTful API**: Clean API endpoints for easy integration
- **PostgreSQL Database**: Reliable data persistence with referential integrity

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Development**: Nodemon for hot reloading
- **Environment**: dotenv for configuration management

## Project Structure

```
to-do-personal/
├── backend/
│   ├── routes/
│   │   ├── spaces.js      # Space-related endpoints
│   │   ├── sections.js    # Section-related endpoints
│   │   ├── tasks.js       # Task-related endpoints
│   │   └── subtasks.js    # Subtask-related endpoints
│   ├── db.js              # Database connection
│   ├── index.js           # Main server file
│   ├── schema.sql         # Database schema
│   ├── package.json       # Dependencies and scripts
│   └── .env               # Environment variables
├── frontend/              # Frontend (placeholder)
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd to-do-personal
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the database**
   - Create a PostgreSQL database
   - Run the schema.sql file to create the required tables:
   ```bash
   psql -d your_database_name -f schema.sql
   ```

4. **Configure environment variables**
   Create a `.env` file in the backend directory with your database configuration:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=your_database_name
   DB_USER=your_username
   DB_PASSWORD=your_password
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

The server will start on port 3000 at `http://localhost:3000`

## API Endpoints

### Spaces
- `GET /spaces` - Get all spaces
- `POST /spaces` - Create a new space
- `PUT /spaces/:id` - Update a space
- `DELETE /spaces/:id` - Delete a space

### Sections
- `GET /sections` - Get all sections
- `POST /sections` - Create a new section
- `PUT /sections/:id` - Update a section
- `DELETE /sections/:id` - Delete a section

### Tasks
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

### Subtasks
- `GET /subtasks` - Get all subtasks
- `POST /subtasks` - Create a new subtask
- `PUT /subtasks/:id` - Update a subtask
- `DELETE /subtasks/:id` - Delete a subtask

## Database Schema

The application uses a relational database structure with the following tables:

- **spaces**: Main workbooks (id, name, created_at)
- **sections**: Categories within spaces (id, name, space_id, created_at)
- **tasks**: Individual tasks (id, title, description, completed, section_id, created_at)
- **subtasks**: Task breakdowns (id, title, completed, task_id, created_at)

All relationships include CASCADE DELETE to maintain data integrity.

## Development

### Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm test` - Run tests (not implemented yet)

### Adding Features

1. **Frontend**: The frontend directory is currently a placeholder. You can add your preferred frontend framework (React, Vue, Angular, etc.)
2. **Authentication**: Consider adding user authentication for multi-user support
3. **Due Dates**: Add due date functionality to tasks and subtasks
4. **Priorities**: Implement priority levels for better task management
5. **Tags**: Add tagging system for better organization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Future Enhancements

- [ ] Frontend implementation
- [ ] User authentication and authorization
- [ ] Due dates and reminders
- [ ] Priority levels
- [ ] Tags and labels
- [ ] Search functionality
- [ ] Data export/import
- [ ] Mobile responsiveness
- [ ] Dark mode support