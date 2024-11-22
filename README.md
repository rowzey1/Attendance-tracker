
![Screenshot 2024-11-22 at 3 09 54 PM](https://github.com/user-attachments/assets/67487964-abc5-4d48-970d-00750d32e1b3)

# Student Attendance Tracker

A web application for tracking student attendance using a simple thumbs up/down system.

## Description

This application allows teachers or administrators to:
- Add new students with their names and student IDs
- Track daily attendance using thumbs up (present) and thumbs down (absent) buttons
- View attendance counts for each student
- Remove students from the system(trash)
- View students sorted by attendance (highest attendance first)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript templates)
- Font Awesome
- HTML/CSS

## Installation

1. Clone the repository
2. Install dependencies
3. Create a `.env` file in the root directory and add your MongoDB connection string:
4. Start the server

## Usage

1. Access the application at `http://localhost:4000`
2. Add students using the form at the bottom of the page
3. Track attendance:
   - Click 👍 to mark a student present
   - Click 👎 to mark a student absent
4. Delete students using the trash icon

## API Endpoints

- `GET /` - Display the main attendance page
- `POST /addStudent` - Add a new student
- `PUT /addStudent` - Update attendance counts
- `DELETE /addStudent` - Remove a student
