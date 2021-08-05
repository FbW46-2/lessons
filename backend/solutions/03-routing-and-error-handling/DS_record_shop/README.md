# Routing and Error Handling

1. Create three more endpoints (routes) for the record data model

   - `records/:id` -> a `GET` that will return a record based on the `id`
   - `records/:id` -> a `PUT` that will update a record based on the `id`
   - `records/:id` -> a `DELETE` that will delete a record based on the `id`

2. Create endpoints for the `users` and `orders` models. A user should contain a first name, a last name, an email, a password. An order should contain a record id and a quantity property. We will later on enrich all models with more properties.

      Users Model
      - `users` -> `GET` all users
      - `users/:id` -> `GET` a user
      - `users` -> `POST` a user
      - `users/:id` -> `PUT` a user
      - `users/:id` -> `DELETE` a user

      Orders Model
      - `orders` -> `GET` all orders
      - `orders/:id` -> `GET` an order
      - `orders` -> `POST` an order
      - `orders/:id` -> `PUT` an order
      - `orders/:id` -> `DELETE` an order 

3. Once we make sure all the above work as they should and that our database is being updated correctly, write a middleware function that will handle errors during the requests. Remember that by default a package called `http-errors` is already imported in our app.
