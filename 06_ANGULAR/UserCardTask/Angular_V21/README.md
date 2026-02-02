# Angular 21 User Profile Card 

## What This App Does

Fetches user data from an API and displays interactive profile cards. Users can edit names and toggle status between Active/Inactive.

---

##  Architecture Flow

```
API (dummyjson.com) 
  → Service fetches & transforms data 
  → Stores in Signal<UserInfo[]>
  → Parent Component reads Signal
  → Creates multiple Child Components 
  → Each Child receives Signal input
  → Each Child manages local Signal state
```

---

## How Each Feature is Implemented

### 1. Data Binding

| Type | How It's Used | Where |
|------|---------------|-------|
| **Interpolation** `{{ }}` | Display age and status | `Age: {{ user()?.age }}` |
| **Property Binding** `[property]` | Bind avatar image | `[src]="user()?.Image_Url"` |
| **Two-Way Binding** `[(ngModel)]` | **Modified for Signals** | Manual `[ngModel]` + `(ngModelChange)` |
| **Event Binding** `(event)` | Toggle button click | `(click)="ChangeStatus()"` |
| **Class Binding** `[class.name]` | Dynamic border colors | `[class.active-card]="user()?.status === 'Active'"` |

**Result**: Card updates automatically when Signal changes. Green border for active, red for inactive.

### 2. Component Communication

#### Parent → Child (Signal Input)
```
Parent passes user object → Child receives via input() Signal → Child creates local Signal
```

### 3. Lifecycle Hooks

| Hook | When | Used For |
|------|------|----------|
| `constructor` | Component created | Log initial state (user Signal is null) |
| `ngOnInit` | Component starts | Log user Signal, fetch data in parent |
| `ngOnChanges` | Input changes | Sync input Signal to local Signal |
| `ngAfterViewInit` | View ready | Access input field and buttons via ViewChild |

**Result**: Console logs show execution order and Signal state.

---

### 4. View Queries

#### `@ViewChild` - Single Element
```typescript
@ViewChild("inputField") inputfield!: ElementRef<HTMLInputElement>;
```
**Purpose**: Direct access to name input field for manipulation/validation

**Usage in template**:
```html
<input #inputField matInput [ngModel]="user()?.name" />
```

#### `@ViewChildren` - Multiple Elements
```typescript
@ViewChildren(MatButton) matbutton!: QueryList<MatButton[]>;
```
**Purpose**: Access all Material buttons in the card

**Usage**: Logged in `ngAfterViewInit` as array: `this.matbutton.toArray()`

**Result**: Console shows input element ID and array of buttons

---

### 5. Service & Signal Pattern

#### Service Layer (Signal-Based)
```typescript
export class UserCardService {
  users = signal<UserInfo[]>([]);  //  Signal instead of Observable
  
  getUsers(): void {
    this.http.get<any>(API_URL).subscribe({
      next: (res) => {
        const transformed = res.users.map(...);
        this.users.set(transformed);  //  Update Signal
      }
    });
  }
}
```

**What it does**: 
- Creates a Signal to hold user array
- Fetches data from API using HttpClient
- Transforms data and updates Signal with `.set()`
- Combines firstName + lastName, adds random status


---

### 6. Angular Material

**Components Used**:
- `<mat-card>` → Card container with header/content/actions
- `<input matInput>` → Material-styled text input
- `<button mat-raised-button>` → Material-styled elevated buttons

**Configuration**: Import Material modules directly in standalone component

---

### 7. Bonus Feature

```html
[disabled]="user.name.length === 0 ? true : false"
```
**Logic**: Button disabled when name is empty, prevents toggling invalid state

---

### Manual Two-Way Binding with Signals

**Old Way (v16/v18)**:
```html
<input [(ngModel)]="user.name" />
```

**New Way (v21 with Signals)**:
```html
<input 
  [ngModel]="user()?.name"
  (ngModelChange)="UserNameChange($event)" />
```

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

## Migration Notes (v18 → v21)

### To Convert Observable to Signal:

**Before (v18)**:
```typescript
userInfo$: Observable<UserInfo[]>;
ngOnInit() {
  this.userInfo$ = this.service.GetUserData();
}
```

**After (v21)**:
```typescript
users = this.service.users;  // Direct Signal reference
ngOnInit() {
  this.service.getUsers();  // Service updates Signal
}
```

### To Convert @Input/@Output to input()/output():

**Before (v18)**:
```typescript
@Input() user!: UserInfo;
@Output() ToggleEvent = new EventEmitter<string>();
```

**After (v21)**:
```typescript
userSignal = input<UserInfo | null>(null);
ToggleEvent = output<number | undefined>();
```

### To Convert *ngFor to @for:

**Before (v18)**:
```html
<div *ngFor="let user of userInfo$ | async">
```

**After (v21)**:
```html
@for (user of users(); track user.id) {
  <div>
}
```
