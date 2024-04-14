# Rate-Limit-Express


# Express Rate Limiting Example

This project demonstrates the use of the `express-rate-limit` middleware to implement rate limiting in an Express.js application. It limits the number of requests a client can make to the API within a specified time frame.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
npm install express
npm install express-rate-limit
```

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repo:
   ```bash
   git clone git@github.com:suhailroushan13/Rate-Limit-Express.git
   cd Rate-Limit-Express
   ```
2. Install NPM packages:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

## Usage

Visit \`http://localhost:5000` on your browser to see the welcome message. Try accessing \`http://localhost:5000/rate` and click the link more than 5 times in a minute to see the rate limiting in action.

## Routes

- \`/\` - Home route with a link to the rate-limited route.
- \`/rate\` - A rate-limited route that can be accessed 5 times per minute per IP.
- \`/shutdown\` - Shuts down the server.

## Built With

- **Express** - The web framework used
- **express-rate-limit** - Middleware for rate-limiting requests

## Author

- **Suhail Roushan** - [suhailroushan13](https://github.com/suhailroushan13)
