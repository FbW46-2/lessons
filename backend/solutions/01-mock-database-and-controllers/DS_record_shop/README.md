# Record Store - Part 1

Your clients are record store owners who want to display their record collection on the main page of their store. For each record, they want to display title, artist, year, and price. They also want to be able to add new records to their collection. Your task is to create a REST API for the store using express-generator.

1. Using what you have learned about Express routing, create endpoints for ‘/’, ‘/users’, and ‘/records’, putting the routers in the “routes” directory. For now, just make sure that the routes work by having them respond to requests with strings.
2. Set up a mock database for the record store using lowdb, putting the db.json file in the data directory.
3. Create a request listener “getRecords” for GET requests to the ‘/records’ route and a request listener “addRecord” for POST requests to the ‘/records’ route. The getRecords function should send the complete records array to the client, the addRecord function should add a record to the records array.

# BONUS-1:

the addRecord function should give each record it adds an ID property whose value is the date the record is added. Define these functions in recordsController.js, in the controllers directory.

# BONUS-2:

in the “public” directory, create an index.html file and have the request handler for get-requests to the ‘/’-route render it. (Hint: make sure app.js knows that your static files are in the “public” directory. Check the Express docs on how to serve static files).
