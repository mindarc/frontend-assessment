# Tabs and Accordion Component

## Overview

This project demonstrates the implementation of Tabs and Accordion components using React. The components utilize BEM (Block Element Modifier) methodology for organizing CSS classes and include responsive design features. Custom styles are applied using CSS, and Tailwind CSS is used for utility-first design.

## Project Structure

- `src/`
  - `components/`
    - `Tabs.js` - React component for the tabs.
    - `Accordion.js` - React component for the accordion.
    - `Tabs.css` - CSS specific to tabs components.
    - `Accordion.css` - CSS specific to accordion components.
  - `App.js` - Main React component integrating the `Tabs` and `Accordion` components.
  - `App.css` - Global CSS styles including base and responsive design.
  - `data/`
    - `data.json` - Static JSON data for the application.

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
1. Tabs.js
    The Tabs component displays a set of tabs where users can switch between different content sections. It uses BEM naming conventions and Tailwind CSS for styling.

    Features:
    Switch between tabs by clicking on the tab titles.
    Active tab is highlighted with a distinct style.

2. Accordion.js
    The Accordion component displays a collapsible list of items. Each item can be expanded or collapsed to reveal more content. It includes an arrow icon that rotates based on the accordion's state.

    Features:
    Toggle accordion items to expand or collapse content.
    Arrow icon rotates to indicate the state of the accordion item.

3. App.js
    The main component that integrates Tabs and Accordion components. It handles layout and ensures responsiveness.

## Styles
1. BEM Naming Conventions
    Block: tabs, accordion
    Element: tabs__titles, tabs__title, accordion__header, accordion__content
    Modifier: tabs__title--active, accordion__header--active, accordion__arrow--active

2. Tailwind CSS
    Utility classes are used for layout and responsive design. Refer to the Tailwind CSS documentation for more details.

3. Custom CSS
    Additional styling for components is defined in Tabs.css and Accordion.css to complement Tailwind CSS.

## Responsive Design
    The application adapts to different screen sizes using Tailwind CSS breakpoints and custom media queries.

    The Tabs and Accordion components adjust their layout and font sizes based on the viewport width.