-- Table for Spaces (the main workbooks)
CREATE TABLE spaces (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for Sections (inside spaces)
CREATE TABLE sections (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    space_id INTEGER NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for Tasks (inside sections)
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    section_id INTEGER NOT NULL REFERENCES sections(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table for Sub-tasks (inside tasks)
CREATE TABLE subtasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    task_id INTEGER NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);