# Angular 18 User Profile Card

---

## Angular Assignment - User Profile Card

## Question

- You are building a User Profile Card using Angular + @angular/material.

## Requirements

- Create an Angular component called UserCardComponent that demonstrates ALL of the following:
  1. Data Binding
     - Interpolation -> Display user name and age
     - One-way binding (Property Binding) -> Bind avatar image URL
     - Two-way binding -> Edit user name using [(ngModel)]
     - Event Binding -> Button click to toggle user status
     - Class Binding -> Change card border color based on active/inactive status

  2. Component Communication
     - Use @Input() to receive user data from parent
     - Use @Output() to emit an event when user status changes

  3. Lifecycle Hooks
     - Use at least:
       - ngOnInit
       - ngOnChanges
       - ngAfterViewInit

  4. View Queries
     - Use:
       - @ViewChild() -> Access a single input field
       - @ViewChildren() -> Access multiple Material buttons

  5. Angular Material
     - Use:
       - MatCard
       - MatInput
       - MatButton

  6. File Structure Discipline
     - Logic -> .ts
     - Styling -> .css
     - Template -> .html

## Expected Output

- A Material Card showing user details
- Editable user name
- Status toggle button
- Visual change when status updates
- Console logs proving lifecycle hooks & view queries work

### Bonus (Optional)

- Disable the toggle button if the username is empty.

> [!NOTE]
> This assignment should be done in 3 versions of angular:
>
> - Angular 21 - With Signals
> - Angular 18 - Without Signals
> - Angular 16 - with app.module.ts configuration.

---
### ``Configuaration``
---

`Above Functionality Implemented same as Previous Angualr_V16 but below is some Changes are made:`

> Here configuaration in App.module.ts Not required because component is stanalone...`

> Ng-Content i remove Here its just added previouslay for learning purpose...

> Rest all things same here
