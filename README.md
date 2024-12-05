# Notes App

A web-based note-taking and password management application built with Node.js and Express. This application allows users to securely store and manage both their notes and passwords in one convenient location.

## Features

- User authentication (registration and login)
- Secure password handling and storage
- Password management system
- Note-taking functionality
- Input validation and sanitization
- EJS templating for dynamic content
- Modern and responsive user interface
- Secure data storage

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Express-validator for input validation
- HTML/CSS for frontend

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aminofabian/note_app.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
notes/
├── public/           # Static files (CSS, client-side JS)
├── validations/      # Input validation middleware
├── views/            # EJS template files
│   ├── homepage.ejs
│   └── login_page.ejs
└── server.js         # Main application file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Fabian Amino

Project Link: [https://github.com/aminofabian/notes]
