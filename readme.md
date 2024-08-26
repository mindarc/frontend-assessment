# Ecommify

A blueprint for the layout of an e-commerce website.

## Technologies

| Technology        | Description                                      |
| ----------------- | ------------------------------------------------ |
| React             | JavaScript library for building user interfaces  |
| TypeScript        | Primary language for programming                 |
| Vite              | Build tool                                       |
| Vitest/Jest DOM   | Unit testing                                     |
| Tailwind CSS      | CSS framework for styling                        |
| Frame motion      | Animation                        |
| Vercel            | Live web deployment                              |

## Running the app

### Production

[Landing Page](https://ecommify-blueprint.vercel.app/)
[Dynamic Content](https://ecommify-blueprint.vercel.app/dynamic-content)

### Local

**Pre-requisites:**

- Node.js and npm - [download](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Git - [download](https://git-scm.com/downloads)

To run the application locally, follow these steps:

1. Download the zip file and open the project in VS code or clone the repository via terminal: `git clone https://github.com/basinghse/ecommify.git`
2. Navigate from the root folder to the web folder: `cd web`
3. Install dependencies: `npm install`
4. Run the application: `npm run dev`
5. Navigate to the URL i.e. `http://localhost:5173/`
6. (Optional) Run unit tests: `npm run test`

## Questions

**Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.**

- When you add two strings, they combine. The first operation 'b' + 'a' becomes `ba`.
- The middle operation has two + symbols. The first one is treated as a plus, so the second becomes an unary operator trying to convert the next character to a number
- 'a' can't be converted to a number, so it becomes NaN (Not a Number)
- 'ba' + (+a) becomes `baNaN`
- Adding the final 'a' we get 'baNaNa', which is converted to lowercase to give a final result of `banana`

## References

[BEM and SASS](https://andrew-barnes.medium.com/bem-and-sass-a-perfect-match-5e48d9bc3894)
[SASS parent selectors](https://sass-lang.com/documentation/style-rules/parent-selector/)
[Responsive design](https://tailwindcss.com/docs/responsive-design)

## Ideas

- Stylistic choices for alignment of section data to the left or centre,  currently centred.
- Slight repetition in [Hero](/web/src/components/Hero.tsx), however it is a small component. Consider refactoring if it gets larger.
- The nav bar could be improved to include a transparent darker background
- Expandable cards/redirections from users clicking on read more
- A home page displaying a demo of both pages (exercises) before viewing a single page
- A footer with social media links/copyright
- Establish eslint rules
- More extensive unit testing
- Skeleton loading: when using more complex data i.e. fetching from an API this would improve user experience while the data is loaded
- Creation of more common constants, themes for sharing
- Introducing a logger service such as Winston to receive errors
- Introduce a snackbar for user feedback - ideally for errors and especially when adding more complex interactions such as form submissions
