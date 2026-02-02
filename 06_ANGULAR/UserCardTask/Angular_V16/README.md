# Angular 16 User Profile Card 

## What This App Does

Fetches user data from an API and displays interactive profile cards. Users can edit names and toggle status between Active/Inactive.

---

##  Architecture Flow

```
API (dummyjson.com) 
  → Service fetches & transforms data 
  → Parent Component receives Observable 
  → Creates multiple Child Components 
  → Each Child displays one user card
```

---

## How Each Feature is Implemented

### 1. Data Binding

| Type | How It's Used | Where |
|------|---------------|-------|
| **Interpolation** `{{ }}` | Display age and status | `Age: {{ user.age }}` |
| **Property Binding** `[property]` | Bind avatar image | `[src]="user.Image_Url"` |
| **Two-Way Binding** `[(ngModel)]` | Editable name input | `[(ngModel)]="user.name"` |
| **Event Binding** `(event)` | Toggle button click | `(click)="ChangeStatus()"` |
| **Class Binding** `[class.name]` | Dynamic border colors | `[class.active-card]="user.status === 'Active'"` |

**Result**: Card updates automatically when data changes. Green border for active, red for inactive.

---

### 2. Component Communication

#### Parent → Child (`@Input`)
```
Parent passes user object → Child receives via @Input() → Child displays user data
```
**Implementation**: `[user]="user"` in parent template, `@Input() user!: UserInfo` in child

#### Child → Parent (`@Output`)
```
User clicks toggle → Child emits event → Parent receives user ID
```
**Implementation**: `this.ToggleEvent.emit(userId)` in child, `(ToggleEvent)="Toggle($event)"` in parent

---

### 3. Lifecycle Hooks

| Hook | When | Used For |
|------|------|----------|
| `ngOnInit` | Component starts | Fetch data from service |
| `ngOnChanges` | Input changes | Log previous vs current user data |
| `ngAfterViewInit` | View ready | Access input field and buttons via ViewChild |
| `ngAfterContentInit` | Content ready | Access projected `<h2>` heading |

**Result**: Console logs show execution order and accessed DOM elements.

---

### 4. View Queries

#### `@ViewChild` - Single Element
```typescript
@ViewChild('inputField') inputfield!: ElementRef<HTMLInputElement>;
```
**Purpose**: Direct access to name input field for manipulation/validation

#### `@ViewChildren` - Multiple Elements
```typescript
@ViewChildren(MatButton) matbutton!: QueryList<MatButton>;
```
**Purpose**: Access all buttons in card, loop through them in `ngAfterViewInit`

**Result**: Console logs show input element and all button contents.

---

### 5. Content Projection

#### `<ng-content>` Slot
```html
<!-- Child template -->
<ng-content></ng-content>
```
**Purpose**: Parent can inject custom content (like `<h2>`) into child card

#### `@ContentChild` Query
```typescript
@ContentChild('h2') h2context!: ElementRef<HTMLHeadingElement>;
```
**Purpose**: Child can access and read parent's projected content

**Result**: User name appears as custom heading, logged in console.

---

### 6. Service & Observable Pattern

#### Service Layer
```typescript
GetUserData(): Observable<UserInfo[]>
```
**What it does**: 
- Fetches data from API using `fetch()`
- Converts Promise → Observable with `from()`
- Transforms data with `map()` operator
- Combines firstName + lastName, adds random status

#### Component Usage
```html
<app-user-card *ngFor="let user of userInfo|async" [user]="user">
```
**How**: `async` pipe auto-subscribes to Observable, no manual subscription needed

---

### 7. Angular Material

**Components Used**:
- `<mat-card>` → Card container with header/content/actions
- `<input matInput>` → Material-styled text input
- `<button mat-raised-button>` → Material-styled elevated buttons

**Configuration**: Import Material modules in `AppModule`

---

### 8. Bonus Feature

```html
[disabled]="user.name.length === 0 ? true : false"
```
**Logic**: Button disabled when name is empty, prevents toggling invalid state

---


## Visual Changes

**Active User**:
- Green border (`active-card` class)
- Green status badge
- Blue "Deactivate" button

**Inactive User**:
- Red border (`inactive-card` class)
- Red status badge  
- Red "Activate" button

**Empty Name**:
- Toggle button becomes disabled (grayed out)

---

##  Module Configuration (Angular 16 Specific)

- `AppComponent`,`UserCardComponent` → Declared in `AppModule`
- `FormsModule` imported for `[(ngModel)]`
- Material modules imported for UI components

---

## Console Output

```
ngOnInit Observable<UserInfo[]>
ngOnChanges in child component:: undefined Current user: {id: 1...}
inputfield:: <input class="name-input"...>
Button Element::Deactivate
Button Element::click  
Button Element::hello
h2 context:: Emily Johnson
Toggle event received in parent component for userId: 1
```

---