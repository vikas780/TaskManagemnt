This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Extra Functionality
#Implemented the search functionality

## Sort Task based on priority
Data Structure Used
<br>Array: The main structure used here is an array of tasks. This is a common way to store a list of items in programming.<br>
The first part of the sorting function is a.completed - b.completed.
It means:
If a.completed is false (0) and b.completed is true (1), the result will be negative (because 0 - 1 = -1), meaning a comes before b.<br>
Object: The object { high: 1, medium: 2, low: 3 } is used to map priority strings to numbers. This helps in making comparisons easier and clearer. <br>
If two tasks have the same completed status (both are either true or false), the second part kicks in:<br>
{ high: 1, medium: 2, low: 3 }[a.priority] - { high: 1, medium: 2, low: 3 }[b.priority]
