# Angular Authentication Token Application (V18)

This is an Angular 18 application demonstrating authentication and authorization features including login, user profile management, route guards, and HTTP interceptors. This version uses Angular's standalone components architecture and implements class-based HTTP interceptors with dependency injection.

## Key Differences from Angular V16

- **Standalone Components**: Uses Angular's standalone component architecture instead of NgModules
- **Class-based HTTP Interceptor**: Implements interceptor as a DI class (`HttpInterceptor`) instead of functional approach
- **Application Config**: Uses `app.config.ts` for configuration instead of modules
- **Modern Angular Features**: Leverages Angular 18's latest features and improvements

## Key Features

- **Authentication**: User login and token-based authentication
- **Route Guards**: Protects routes based on authentication status
- **HTTP Interceptors**: Class-based interceptor with dependency injection for automatic token attachment
- **User Profile**: Display and manage user profile information
- **Navigation**: Responsive navigation bar with authentication state

## Key Implementation Details

### Class-based HTTP Interceptor (DI Class)

This version uses Angular's traditional class-based interceptor approach (`HttpInterceptor`) with dependency injection. The interceptor is implemented as a class that:

- Uses constructor injection for the AuthService
- Automatically attaches JWT tokens to HTTP requests
- Handles public URLs and platform-specific logic (SSR support)

```typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthServiceService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Interceptor logic here
  }
}
```

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root standalone component
│   ├── app.component.html        # Main app template
│   ├── app.component.css         # App styling
│   ├── app.config.ts             # Application configuration (providers, routes)
│   ├── app.routes.ts             # Route configuration
│   ├── components/
│   │   ├── home/                 # Home standalone component
│   │   ├── login/                # Login standalone component
│   │   ├── navbar/               # Navigation bar standalone component
│   │   └── user-profile/         # User profile standalone component
│   ├── guards/
│   │   ├── auth.guard.ts         # Route guard for authenticated users
│   │   └── login.guard.ts        # Route guard for login page
│   ├── Interceptors/
│   │   └── auth.interceptor.ts   # Class-based HTTP interceptor
│   ├── Interfaces/
│   │   └── user.ts               # User data structure
│   └── services/
│       └── auth-service.service.ts # Authentication service
├── assets/                       # Static assets
└── styles.css                    # Global styles
```

## Technologies Used

- **Angular 18**: Framework with standalone components
- **Angular Material**: UI component library
- **TypeScript**: Programming language
- **RxJS**: Reactive programming for HTTP calls
- **Class-based HTTP Interceptors**: Traditional DI approach

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI 18

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

### Class-based HTTP Interceptor

- Automatically attaches Bearer tokens to requests
- Skips token attachment for public URLs
- Includes platform detection for SSR compatibility
- Uses dependency injection through constructor

## Interfaces

### User

```typescript
interface User {
  // User data structure
}
```

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
