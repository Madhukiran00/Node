## MongoDB
### MongoDB is an open-source, non-relational (NoSQL) database that stores data in flexible, JSON-like documents instead of tables with rows and columns

## ORM VS ODM

An ORM essentially translates object-oriented code into SQL queries and vice versa, abstracting away the need to write raw SQL. It allows developers to interact with database data as if it were a collection of objects, simplifying data manipulation and retrieval.

Similar to ORMs, ODMs provide an object-oriented interface for interacting with document databases. They handle the conversion between application objects and database documents, allowing developers to work with data in a more natural, object-oriented way

## SQL VS NoSQL 

SQL Databases: Generally, SQL databases perform well for complex queries, structured data, and systems requiring data consistency and integrity. However, as the volume of data grows, they may struggle with scalability and may require significant infrastructure upgrades.

NoSQL Databases: NoSQL databases excel in scenarios that demand high performance and scalability. Because of their horizontal scalability (accommodating more servers), they handle large amounts of data and high-velocity workloads better. For instance, MongoDB or Cassandra is a common choice when dealing with big data or applications with high traffic.

## .ENV  

The .env file serves as a centralized location to store configuration settings for your project. This can include API keys, database connection strings, environment-specific configurations, and more. Storing these settings in a separate file makes it easier to manage and update them without modifying the code.

