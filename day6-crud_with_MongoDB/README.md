
CRUD Operations : https://mongoosejs.com/docs/queries.html

select, sort, limit, skip, lean : https://stackoverflow.com/questions/24160037/skip-and-limit-in-aggregation-framework

select:- Specifies which fields or columns to return in the result set. It is used to restrict the amount of data transferred and processed

sort:-Arranges the result set in a specific order (ascending or descending) based on one or more fields.

Limit:- Restricts the maximum number of documents or rows returned by the query. This is crucial for performance optimization, especially with large datasets.

skip:- Skips a specified number of qualifying rows or documents before starting to return the results. It is commonly used for pagination in combination with limit.

Lean: This term is specific to Mongoose (a MongoDB object modeling tool). When the lean option is set to true, Mongoose returns plain JavaScript objects (POJOs) instead of full Mongoose Documents.

Mongoose_Validations:- https://mongoosejs.com/docs/schematypes.html#string-validators

Enum:- Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.

Minlength:- Number, creates a validator that checks if the value length is not less than the given number

Maxlenght:- Number, creates a validator that checks if the value length is not greater than the given number

Required:-This constraint dictates that a specific field or property must contain a value and cannot be empty or null. If a value is not provided, validation will fail.

Unique:- This constraint ensures that the value of a particular field or property is distinct across all records or instances within a given scope (e.g., a database collection or table). No two records can have the same value for a field marked as unique.

Http Status codes:- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#informational_responses

Information response(100 to 199)
SuccessFul Response(200 to 299)
Redirection Message (300 to 399)
client error Response ( 400 to 499)
server error response (500 to 599 )