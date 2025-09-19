# Trello Cypress Web Test

This project contains end-to-end tests for a Trello-like application using **Cypress**.

## Technologies

- **Testing:** Cypress
- **Language:** JavaScript
- **Test Runner:** Cypress CLI

## Project Structure

- `cypress/` - End-to-end tests and custom commands
  - `e2e/` - Test specifications for mapped flows
  - `support/` - Custom Cypress commands and setup

## Mapped Test Flows

Cypress tests cover the following user journeys:

- **Board:** Create, favorite, delete, and display boards
- **List:** Add and delete lists
- **Card:** Add, delete, complete, and update card descriptions
- **Login:** Successful login, invalid credentials, error handling
- **Signup:** Successful signup, invalid email, empty fields

Custom Cypress commands are available for login, signup, board/list/card creation, and element selection by `data-cy`.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Matheeusb/trello-cypress-web-test.git
   ```
2. Install dependencies and start the application:
   ```sh
   cd trello/
   npm install
   npm start
   ```

### Running Cypress Tests

From the project root:

```sh
npm run cy:open
```
or
```sh
npm run test
```