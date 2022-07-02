# Mock Database Exercise for ABS

Assume you have DB with a Table named `account`. Example of the Table below. The object of this test is to create a GET method endpoint that returns all data in the `account` Table.


Expectations:
1.) Must use NodeJs to complete the exercise
2.) For the purpose of this exercise, the mock DB is postgresql.
3.) You can use anything else that you feel will help you complete the exercise. An example of what I mean would be using express.
4.) Create an endpoint that is a GET method
5.) The response from the endpoint should be all the info from the mock DB Table.
6.) Mock up the entries for the `account` Table. Can be anything you want for the entries.
7.) Please provide all the files used to complete the exercise in a zip file.


DB Table:
account (
  id serial PRIMARY KEY,
  acct_id integer NOT NULL,
  first_name VARCHAR ( 50 ),
  last_name VARCHAR ( 50 ),
  age VARCHAR ( 2 ),
  race VARCHAR ( 100 ),
  gender VARCHAR ( 20 ),
  phone VARCHAR ( 11 ),
  zip VARCHAR ( 5 )
);

### Implementation

- implemented using Node.js and Postgresql using Postgres app on Mac OS X for easy local server deployment
- sets up connection to client, create database and table and insert mock data
- uses get method defined to query server and return data from accounts table