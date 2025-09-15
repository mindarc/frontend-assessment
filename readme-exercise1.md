# Responsive Design with Cards

## Overview

This project demonstrates a responsive design featuring card components. It uses Tailwind CSS for utility-first styling, BEM (Block Element Modifier) methodology for organizing CSS classes, and traditional CSS for custom styles. 

## Project Structure

- `src/`
    - `Card.js` - React component for the card.
    - `Header.js` - React component for the header.
    - `App.js` - Main React component integrating the `Card` and `Header` components.
    - `App.css` - Global CSS styles including base and responsive design.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **CSS**: Traditional styling for custom design and layout.
- **BEM**: Methodology for naming CSS classes to create reusable and maintainable styles.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
   cd <project-directory>
3. Install dependencies:
   npm install

## Usage

1. Start the development server:
    npm start
2. Open your browser and go to http://localhost:3000 to view the application.


## Components
1. Card.js
    The Card component displays a card with an image, text, and a button. It uses Tailwind CSS classes for layout and styling, with BEM naming conventions for custom CSS.

2. Header.js
    The Header component is a full-width header with a background image, title, and subtitle. It is styled using Tailwind CSS and custom CSS.

3. App.js
    The main component that integrates Card and Header. It handles layout and responsiveness.

## Styles
1. BEM Naming Conventions
    Block: card, header
    Element: card__image, card__content, header__title
    Modifier: card--featured, header--large
2. Tailwind CSS
    Utility classes are used for layout and responsive design. Refer to the Tailwind CSS documentation for more details.
3. Custom CSS
    Additional styling is defined in App.css and Card.css to complement Tailwind CSS.

## Responsive Design
    The application is responsive and adjusts card sizes, font sizes, and layout based on screen width using Tailwind CSS breakpoints and custom media queries.