# AzerType

AzerType is an interactive web application designed to help users improve their typing speed. This project is based on OpenClassrooms' JavaScript course, with additional features to enhance the user experience.

## Features

### Core Features
- **Dual Training Modes**:
  - "Words" Mode: Practice with individual words
  - "Sentences" Mode: Practice with complete sentences
- **Scoring System**: Real-time tracking of correct answers
- **Smart Validation**: Input validation via button click or Enter key

### Added Features
- **Integrated Stopwatch**:
  - Automatically starts on first keystroke
  - Precise display (minutes:seconds:milliseconds)
  - Reset button
- **Score Sharing System**:
  - Customized sharing form
  - Multiple sharing options:
    - Default email client
    - Gmail
    - Copy to clipboard
  - Image inclusion in message (celebration GIF and logo)
- **Form Validation**:
  - Name verification (minimum 2 characters)
  - Email format validation
  - Error handling with explicit messages

## Installation and Setup

1. Clone the repository
2. Ensure Go is installed on your machine
3. Start the server:
```bash
go run server.go
```
4. Access the application at `http://localhost:8080`

## Project Structure

```
├── static/
│   ├── css/
│   │   └── style.css
│   └── scripts/
│       ├── config.js
│       ├── popup.js
│       ├── script.js
│       └── main.js
├── templates/
│   ├── index.html
│   └── error404.html
└── server.go
```

## Usage

1. Choose your training mode (Words or Sentences)
2. Start typing in the input field
   - Stopwatch starts automatically on first keystroke
   - Mode cannot be changed once the stopwatch starts
3. Validate your input using Enter key or "Validate" button
4. Once the exercise is completed:
   - Stopwatch stops
   - Share button becomes active
5. To share your score:
   - Click "Share"
   - Fill in the form with your name and recipient's email
   - Choose your preferred sharing method

## Customization

The `config.js` file contains word and sentence lists. You can modify these to adapt the exercise to your needs:
- `listeMots`: Word collection for "Words" mode
- `listePhrases`: Sentence collection for "Sentences" mode

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Go (for server)

## Possible Improvements

- Add difficulty levels
- Detailed statistics (WPM, accuracy)
- Multiplayer mode
- Score saving
- Additional training modes

## Features in Detail

### Stopwatch
- High-precision timing
- Automatic start on first input
- Format: MM:SS:MS
- Reset functionality to start over

### Score Sharing
- Multiple sharing options for flexibility
- Built-in email templates
- Customizable messages
- Integrated image sharing
- Clipboard support

### Form Validation
- Real-time input validation
- Comprehensive error messages
- Email format checking
- Minimum length requirements

### User Interface
- Clean and responsive design
- Intuitive controls
- Clear visual feedback
- Mobile-friendly layout

## Running in Development

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Start the Go server:
   ```bash
   go run server.go
   ```
4. The application will be available at `http://localhost:8080`
5. For development, you can modify the JavaScript files in the `static/scripts` directory
6. Refresh the browser to see your changes

## Troubleshooting

Common issues and solutions:
- If the server won't start, check if port 8080 is already in use
- If images don't load, verify the correct paths in `script.js`
- For email sharing issues, ensure proper email client configuration

## License

This project is based on the OpenClassrooms course with personal enhancements.

## Contributing

While this is a personal project, suggestions for improvements are welcome through issues or pull requests.