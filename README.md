## Introduction

This app is a simple listing page for the top 500 hacker news stories as taken from the Hacker News API.

It uses server-side rendering using Next.js v13 (beta) in order to optimize first page load time.

## Next.js v13 features used

In this project, the `app` directory is used instead of the `pages` directory (this feature is currently in a beta state).

The `app` directory allows you to split your page into smaller components, allowing them to be "sprinkled in" to the page after the data is finished loading, while your static components can be server rendered and displayed instantly before any client javascript is loaded (see [Next.js Docs: Thinking in Server Components](https://beta.nextjs.org/docs/getting-started#thinking-in-server-components)
Client components can then be rendered once the client-side javascript is loaded by the browser.

An example of a server component can be found at [`app/page.tsx`](/app/page.tsx), and an example of a client component can be found at [`app/components/InfiniteLoader/InifiniteLoader.tsx/`](app/components/InfiniteLoader/InifiniteLoader.tsx)

## Tests

Unit tests and snapshot tests have been added for all components and pages using jest.
Tests can be run using the command `npm run test` or `yarn test`.

## Data fetching

On initial page load, the first 16 stories are fetched server-side and rendered on the server to improve initial page load time and SEO.

The fetching of these stories do not block the page from rendering however, as a [loading.tsx page](/app/loading.tsx) is displayed during the short time in which the server is fetching these stories.

The loading.tsx component contains a skeleton list of story items, however this component is replaced by the real [page.tsx](/app/page.tsx) component once the data is loaded (see).

As the user scrolls down the page, an infinite loader is used to progressively fetch more stories client-side.

## Styling and Animations

### Styling

Rather than using CSS-in-js solutions, I opted to go for SCSS modules. This is supported by the Next.js framework and automatically scopes classnames by module, which solves the problem of having to use unique classnames across the whole app.

### Animations

Various animations were added to the page using SCSS, such as a header animation, and loading animation. The CSS and animation for the spinner was taken from [cssloaders.github.io](https://cssloaders.github.io/).

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To view the loading animations for longer time (e.g. to simulate a slower connection), you can slow down your network connection using dev tools.

## Running the project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run a production-optimized version, build the project and run with:

```
npm run build
npm start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
