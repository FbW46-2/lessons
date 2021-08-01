## Task 03 - Routing and error handling
As we saw in the first task, there are requests like `GET` and `POST` that define what is the functionality of each endpoint. We will now introduce `PUT` and `DELETE`.
  
  - `PUT` will update an already existing resource
  - `DELETE` will delete an already existing resource

After we introduce the above requests for our record store we need to do some error handling. What happens when something goes wrong during a request? We need to let the user know what went wrong in a consistent way. We can achieve that by writing middleware functions that will take care of error responses.


**Story**: Our client, the record store, would like to be able to update and delete records from their store. Except the records data model, our client would like to have two more data models. One for the users and one for the orders.


**TODO**:

1. Please create three more endpoints (routes) for the record data model

   - `records/:id` -> a `GET` that will return a record based on the `id`
   - `records/:id` -> a `PUT` that will update a record based on the `id`
   - `records/:id` -> a `DELETE` that will delete a record based on the `id`

2. Please create endpoints for the `users` and `orders` models. A user should contain a first name, a last name, an email, a password. An order should contain a record id and a quantity property. We will later on enrich all models with more properties.

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

3. Once we make sure all the above work as they should and that our database is being updated correctly, please write a middleware function that will handle errors during the requests. Remember that by default a package called `http-errors` is already imported in our app.
