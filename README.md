Brief Instruction

- A Budget Calculator application is built with Svelte - Cybernetically enhanced web apps (## https://svelte.dev)

Why Svelte?

- Major advantages: Svelte will be compiled to efficient vanilla JS after built. By compiling Svelte to vanilla JavaScript improves the code readability, enables re-use and it produces a much faster web app

Features

- Navbar with application's name and button to add items.
- Form to get user input and add to the list.
- Display list items with button add, edit and remove item.

Our App Component Tree

R - Navbar
O - Expense Form <- Title
O - Totals <- Title
T - Expense <- Title, Single Expense

Folder Structure Understanding

All components gather at App.svelte component (root component target the body HTML) => main.js => rollup:input => rollup:output public/bundle.js