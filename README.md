# Tours App - Cypress E2E Tests

## About the Project

This project contains end-to-end tests built with Cypress for a React Tours application.

The goal is to validate user behavior and UI updates by mocking API responses and simulating real interactions.

---

## Why this project

This project demonstrates real-world QA automation skills, including:

- API mocking to ensure test stability
- End-to-end user behavior validation
- Handling dynamic UI state changes

---

## Technologies

- Cypress
- JavaScript
- React (frontend under test)

---

## Test Scenarios

### ✔️ Load Tours

- Intercepts API requests
- Validates that tours are rendered correctly

### ✔️ Remove Tour

- Simulates user clicking "not interested"
- Ensures the tour is removed from the UI

### ✔️ Refresh Tours

- Validates empty state
- Tests reload functionality via "refresh" button

---

## Key Concepts Applied

- API Mocking with `cy.intercept`
- DOM validation
- User interaction testing
- State management validation

---

## How to Run

```bash
npm install
npm start
npx cypress open
```
