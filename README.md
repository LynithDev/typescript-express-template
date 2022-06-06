# typescript-express-template
## Setup
1. Clone this repository
2. `npm i` or `yarn` (preferred)
3. Edit .env
4. Edit package.json
5. `npm run dev` or `yarn dev` (preferred)

## Making a route
Routes are based off the files path (if the route is in `${__dirname}/routes/test/random` it would become `/test/random`)
1. Decide whether you want an array or object
2. Copy code
```ts
export default {
  run: (req, res) => {
    // code
  },
} as Route;
```
Or
```ts
export default [
  {
    method: 'get',
    run: (req, res) => {
      // code
    },
  },
  {
    method: 'post',
    run: (req, res) => {
      // code
    },
  },
]
```
