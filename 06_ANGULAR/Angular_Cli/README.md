# Angular Web CLI Simulator

An interactive web-based terminal simulator that demonstrates how Angular CLI commands work. 

## Overview

This Angular application simulates a command-line interface where users can execute Angular CLI commands and see realistic output responses. The simulator provides immediate feedback, helping developers understand what each command does before using them in real projects.

### Key Features

- **Interactive Terminal Interface**: A browser-based terminal that mimics the actual Angular CLI experience
- **Real-time Command Execution**: Type commands and see animated output responses
- **Command Validation**: Recognizes valid Angular CLI commands and their aliases
- **Educational Feedback**: Each command includes explanations of what it does
- **Animated Output**: Progressive display of command results for a realistic terminal feel
- **Command History**: Maintains a history of executed commands within the session
- **Clear Functionality**: Reset the terminal with `clear` or `cls` commands

## How It Works

### Architecture

The application is built with Angular standalone components and uses the following structure:

- **Component**: `App` - Main application component handling the terminal interface
- **Interface**: `CliInterface` - Type definition for CLI command structure
- **Change Detection**: Manual change detection for smooth output animation

### Command Processing Flow

1. **User Input**: User types a command in the terminal input field
2. **Command Parsing**: The input is converted to lowercase and matched against available commands
3. **Command Lookup**: The system searches for the command in the static command database
4. **Output Generation**: If found, the command's output is retrieved and prepared for display
5. **Animated Display**: Output lines are displayed progressively with a 500ms delay between lines
6. **History Update**: The command and its results are added to the terminal history

### Supported Commands

The simulator currently supports the following Angular CLI commands:

#### Project Management
- `ng new my-app` - Creates a new Angular workspace
- `ng version` / `ng v` - Displays version information
- `ng help` / `ng h` - Shows all available commands

#### Development
- `ng serve` / `ng s` - Starts the development server
- `ng serve --open` - Starts dev server and opens browser
- `ng build` - Builds the application for production

#### Code Generation
- `ng generate component home` / `ng g c home` - Generates a new component
- `ng generate service auth` / `ng g s auth` - Generates a new service

#### Testing & Analytics
- `ng test` - Runs unit tests
- `ng analytics` - Shows analytics configuration

#### Navigation
- `cd home` - Simulates directory navigation

#### Terminal Control
- `clear` / `cls` - Clears the terminal history

