# RentX: Requirements

## Users should be able to register a new car

### Functional Requirements

- It must not be possible to register a car with an existing license plate.
- The car must be registered, by default, with availability.
- The user responsible for registration must be an administrator user.

## Users should be able to list all available cars

### Functional Requirements

- It should be possible to list all available cars by category name.
- It should be possible to list all available cars by brand name.
- It should be possible to list all available cars by car name.
- The user does not need to be logged into the system.

## Users should be able to register a specification for a car

### Functional Requirements

- It must not be possible to register a specification for an - unregistered car.
- It must not be possible to register an existing specification for the same car.
- The user responsible for the registration must be an administrator user.

## Users should be able to register an image for a car

### Functional Requirements

- The user must be able to register more than one image for the - same car.
- The user responsible for the registration must be an administrator user.

### Non-functional Requirements

- Use multer to upload files

## Users should be able to register a car rental

### Functional Requirements

- The rental must have a minimum duration of 24 hours.
- It should not be possible to register a new rental if it already exists for the same user
- It should not be possible to register a new rental if it already exists for the same car
- The user must be logged in to the application
- When renting, the status of the car must be changed to unavailable

## Users should be able to return a car

### Functional Requirements

- If the car is returned within less than 24 hours, it must be - charged in full daily.
- When returning, the car must be released for - another rental.
- When returning, the user must be released - for another rental.
- When returning, the total rent must be calculated.
- If the return time is longer than the scheduled delivery time, a fine will be charged - proportional to the days of delay.
- If there is a fine, it must be added to the total rent.
- The user must be logged in to the application

## Users should be able to list all rentals for the user

### Functional Requirements

- The user must be logged in to the application

## Users should be able to recover password

### Functional Requirements

- It must be possible for the user to recover the password by entering the email
- The user should receive an email with the step-by-step password recovery
- User must be able to enter a new password
- The user needs to enter a new password
- The link sent for recovery must expire in 3 hours
