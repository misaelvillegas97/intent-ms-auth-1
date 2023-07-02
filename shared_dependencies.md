Shared Dependencies:

1. NestJS: The main framework used for creating the application. All files will use various parts of this framework.

2. Passport.JS: Used for managing sessions. It will be used in the auth and users microservices, and its configuration will be in the passport.config.ts file.

3. JWT: Used for creating, validating, and returning tokens. It will be used in the auth microservice, and its configuration will be in the jwt.config.ts file.

4. TypeORM: Used for database interactions. It will be used in all microservices that interact with the database (auth, users, roles), and its configuration will be in the typeorm.config.ts file.

5. OAuth: Used for authentication with Microsoft and Google. It will be used in the auth microservice, and its configuration will be in the google.config.ts and microsoft.config.ts files.

6. Transport.TCP: Used for supporting calls. It will be used in the main.ts file and its configuration will be in the microservices.config.ts file.

7. User and Role Entities: These are data schemas that will be used in the respective microservices and their DTOs.

8. User and Role DTOs: These are data transfer objects that will be used in the respective microservices.

9. Strategies: These are specific authentication strategies for JWT, local, Google, and Microsoft. They will be used in the auth microservice.

10. Guards: These are used for protecting routes. They will be used in the auth and roles microservices.

11. Interceptors: These are used for transforming the data returned from a route. They will be used in the auth and roles microservices.

12. Decorators: These are used for adding metadata to classes, methods, and properties. They will be used in the auth and roles microservices.

13. Constants: These are constant values that will be used in the auth, roles, and jwt microservices.

14. Utils: These are utility functions that will be used in the auth, roles, and jwt microservices.

15. Middleware: These are functions that have access to the request and response objects. They will be used in the auth and roles microservices.

16. Serializers and Deserializers: These are used for transforming the user object. They will be used in the auth and roles microservices.

17. Configurations: These are configuration files for various parts of the application like TypeORM, Passport, JWT, roles, microservices, Google, and Microsoft.