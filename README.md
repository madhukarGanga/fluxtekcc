# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

- Open terminal.
- `cd` to the project directory.
- run `num install`
- run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  In the project directory, you can run:

## Assignment-1. Create a application with different modules with routing

- 4 modules are created, `users`,`catalog`,`checkout` and `orders`, which are accessible at different routes.
- User can switch to different module use Top navigation

## Assignment-2. Create a common component with a input, select, checkbox and pass data for different components

- `src/modules/users/DynamicUserPref.tsx` is the component which renders different sections depends on props.
- It takes below three `boolean` props and display respective input field based on the value.

```javascript
  showInterests?: boolean;
  showExpectedSalary?: boolean;
  showAvailability?: boolean;
```

- To see it in action open `http://localhost:3000/users` and select different user from the list. For different user different fields are displayed.
- <span style="color:#0d9488;font-weight:bold">What field to be shown for which user is based on the data provided in `src/modules/users/userData.ts` file.</span>

## Assignment-3. Using Subject from Rxjs variable and do some data manipulation

A simple themeService is implemented using `RxJS` `Subject`.

- Theme is getting updated in `AppBar`.
- `src/modules/users/UsersPage.tsx` subscribed to the theme change.
- `backgroundColor` is getting changed based on the theme value.

To see it in action

- open `http://localhost:3000/users`
- Select any user from list.
- Change the theme from top-right corner

## Assignment-4. Create a routing params and access them in any component

- `id` routing params is being accessed in `src/modules/users/UserPref.tsx`
- based on the `id` corresponding user details displayed.
