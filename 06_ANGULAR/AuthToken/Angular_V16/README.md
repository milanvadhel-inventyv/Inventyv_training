# Angular Authentication Token Application (V16)

This is an Angular 16 application demonstrating authentication and authorization features including login, user profile management, route guards, and HTTP interceptors. This version uses Angular's module-based architecture and implements functional HTTP interceptors.

## Key Features

- **Authentication**: User login and token-based authentication
- **Route Guards**: Protects routes based on authentication status
- **HTTP Interceptors**: Functional interceptor for automatic token attachment (not DI class-based)
- **User Profile**: Display and manage user profile information
- **Navigation**: Responsive navigation bar with authentication state

## Key Implementation Details

### Functional HTTP Interceptor (Not DI Class)
This version uses Angular's functional interceptor approach (`HttpInterceptorFn`) instead of class-based interceptors. The interceptor is implemented as a function that:
- Injects the AuthService using `inject()` within the function
- Automatically attaches JWT tokens to HTTP requests
- Handles public URLs that don't require authentication

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authservice = inject(AuthService);
  // Interceptor logic here
};
```

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component
│   ├── app.component.html        # Main app template
│   ├── app.component.css         # App styling
│   ├── app.module.ts             # App module with NgModules
│   ├── app-routing.module.ts     # Route configuration
│   ├── components/
│   │   ├── home/                 # Home component
│   │   ├── login/                # Login component
│   │   ├── nav-bar/              # Navigation bar
│   │   └── user-profile/         # User profile component
│   ├── Guards/
│   │   ├── auth.guard.ts         # Route guard for authenticated users
│   │   └── login.guard.ts        # Route guard for login page
│   ├── Interceptors/
│   │   └── auth.interceptor.ts   # Functional HTTP interceptor
│   ├── Interfaces/
│   │   └── user.ts               # User data structure
│   └── services/
│       └── auth.service.ts       # Authentication service
├── assets/                       # Static assets
└── styles.css                    # Global styles
```

## Technologies Used

- **Angular 16**: Framework with module-based architecture
- **Angular Material**: UI component library
- **TypeScript**: Programming language
- **RxJS**: Reactive programming for HTTP calls
- **Functional HTTP Interceptors**: Modern interceptor approach

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI 16

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Development Server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Key Components

### Authentication Service
- Manages JWT token storage and retrieval
- Handles login/logout functionality
- Provides authentication state

### Route Guards
- **AuthGuard**: Protects authenticated routes
- **LoginGuard**: Redirects authenticated users away from login page

### Functional HTTP Interceptor
- Automatically attaches Bearer tokens to requests
- Skips token attachment for public URLs
- Uses dependency injection within the function scope

## Interfaces

### User
```typescript
interface User {
  // User data structure
}
```

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
