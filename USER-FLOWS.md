# User Flows and Wireframes

## Table of Contents
1. [User Flow Diagrams](#user-flow-diagrams)
2. [Mobile Wireframes](#mobile-wireframes)
3. [Desktop Wireframes](#desktop-wireframes)
4. [Interaction Patterns](#interaction-patterns)
5. [Navigation Flows](#navigation-flows)
6. [Form Workflows](#form-workflows)

---

## User Flow Diagrams

### Primary User Flow: Browse to Request

```
┌─────────────────┐
│   QR Code Scan  │
│   or Direct URL │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Landing Page   │
│  (Portfolio)    │
└────────┬────────┘
         │
         ├──────────────────┬─────────────────┐
         ▼                  ▼                 ▼
┌─────────────────┐  ┌──────────────┐  ┌──────────────┐
│  Browse Gallery │  │ View Details │  │ Click Request│
│  Scroll & Filter│  │   (Modal)    │  │    Button    │
└────────┬────────┘  └──────┬───────┘  └──────┬───────┘
         │                  │                  │
         │                  ▼                  │
         │           ┌──────────────┐          │
         │           │Request Similar│         │
         │           │    Button    │          │
         │           └──────┬───────┘          │
         │                  │                  │
         └──────────────────┴──────────────────┘
                            │
                            ▼
                  ┌──────────────────┐
                  │  Request Form    │
                  │      Page        │
                  └────────┬─────────┘
                           │
                           ├─────────────────┬─────────────────┐
                           ▼                 ▼                 ▼
                  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
                  │  Fill Fields │  │Upload Image  │  │  Add Notes   │
                  │  (Required)  │  │  (Optional)  │  │  (Optional)  │
                  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
                         │                 │                 │
                         └─────────────────┴─────────────────┘
                                           │
                                           ▼
                                 ┌──────────────────┐
                                 │Client Validation │
                                 └────────┬─────────┘
                                          │
                                ┌─────────┴─────────┐
                                ▼                   ▼
                        ┌──────────────┐    ┌──────────────┐
                        │  Show Errors │    │    Submit    │
                        │   Fix Issues │    │     Form     │
                        └──────────────┘    └──────┬───────┘
                                                   │
                                                   ▼
                                          ┌─────────────────┐
                                          │Server Validation│
                                          │   Send Emails   │
                                          └────────┬────────┘
                                                   │
                                         ┌─────────┴──────────┐
                                         ▼                    ▼
                                ┌──────────────┐     ┌──────────────┐
                                │   Success    │     │    Error     │
                                │Confirmation  │     │ Try Again    │
                                └──────┬───────┘     └──────────────┘
                                       │
                        ┌──────────────┴──────────────┐
                        ▼                             ▼
                ┌──────────────┐              ┌──────────────┐
                │View Portfolio│              │New Request   │
                └──────────────┘              └──────────────┘
```

### Secondary Flow: Direct Request

```
┌─────────────────┐
│   Landing Page  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Click "Request"│
│  in Navigation  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Request Form   │
│      Page       │
└────────┬────────┘
         │
         ▼
    (Same as above)
```

### Gallery Filtering Flow

```
┌─────────────────┐
│  Portfolio Page │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  View All Items │
└────────┬────────┘
         │
         ├──────────────────┬─────────────────┐
         ▼                  ▼                 ▼
┌─────────────────┐  ┌──────────────┐  ┌──────────────┐
│Select Category  │  │Select Material│  │Search Query  │
│    Filter       │  │    Filter    │  │   (Text)     │
└────────┬────────┘  └──────┬───────┘  └──────┬───────┘
         │                  │                  │
         └──────────────────┴──────────────────┘
                            │
                            ▼
                  ┌──────────────────┐
                  │  Update Gallery  │
                  │  Show Filtered   │
                  │     Results      │
                  └────────┬─────────┘
                           │
                 ┌─────────┴─────────┐
                 ▼                   ▼
        ┌──────────────┐    ┌──────────────┐
        │Clear Filters │    │View Item     │
        └──────────────┘    │  Details     │
                            └──────────────┘
```

---

## Mobile Wireframes

### Mobile Homepage (Portfolio Gallery)

```
┌─────────────────────────────┐
│ ☰  Design by Kenny      🔍  │  <- Sticky Header
├─────────────────────────────┤
│                             │
│   Welcome to My Portfolio   │  <- Hero Section
│   [Browse Gallery ↓]        │
│                             │
├─────────────────────────────┤
│  [All] Figurines Functional │  <- Category Filters
│  Decorative Prototypes      │     (Horizontal Scroll)
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │   Portfolio Image 1   │  │  <- Portfolio Card
│  │                       │  │
│  ├───────────────────────┤  │
│  │ Dragon Figurine       │  │
│  │ PLA • 15×10cm        │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │   Portfolio Image 2   │  │
│  │                       │  │
│  ├───────────────────────┤  │
│  │ Phone Stand           │  │
│  │ PETG • 8×7cm         │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │   Portfolio Image 3   │  │
│  │                       │  │
│  ├───────────────────────┤  │
│  │ Wall Art              │  │
│  │ PLA • 20×20cm        │  │
│  └───────────────────────┘  │
│                             │
│          (Scroll)           │
│                             │
├─────────────────────────────┤
│  [+ Request Custom Print]   │  <- Sticky CTA
└─────────────────────────────┘

Dimensions: 375×667 (iPhone SE)
Grid: 1 column
Spacing: 16px padding, 16px gap
```

### Mobile Request Form

```
┌─────────────────────────────┐
│ ←  Request a Custom Print   │  <- Header with back
├─────────────────────────────┤
│                             │
│  Print Title *              │
│  ┌─────────────────────────┐│
│  │ Custom phone holder    │││
│  └─────────────────────────┘│
│                             │
│  Description *              │
│  ┌─────────────────────────┐│
│  │ I need a phone holder  │││
│  │ that can attach to my  │││
│  │ car dashboard...       │││
│  │                        │││
│  └─────────────────────────┘│
│                             │
│  Your Name *                │
│  ┌─────────────────────────┐│
│  │ John Smith             │││
│  └─────────────────────────┘│
│                             │
│  Your Email *               │
│  ┌─────────────────────────┐│
│  │ john@example.com       │││
│  └─────────────────────────┘│
│                             │
│  Preferred Material         │
│  ┌─────────────────────────┐│
│  │ PETG              ▼    │││
│  └─────────────────────────┘│
│                             │
│  Reference Image            │
│  ┌─────────────────────────┐│
│  │    📷 Choose File       │││
│  │  or Drag & Drop Here    │││
│  └─────────────────────────┘│
│                             │
│  Additional Notes           │
│  ┌─────────────────────────┐│
│  │ Needs to be black      │││
│  │ to match interior      │││
│  └─────────────────────────┘│
│                             │
│  ┌─────────────────────────┐│
│  │   Submit Request  →    │││  <- Primary Button
│  └─────────────────────────┘│
│                             │
└─────────────────────────────┘

Dimensions: 375×667
Input Height: 48px
Button Height: 52px
Spacing: 20px between fields
```

### Mobile Portfolio Detail Modal

```
┌─────────────────────────────┐
│             ✕               │  <- Close Button
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │    Main Image         │  │  <- Image Carousel
│  │                       │  │
│  │    ◀  1/3  ▶         │  │
│  └───────────────────────┘  │
│                             │
│  Dragon Figurine            │  <- Title
│  ★★★★★ Featured            │
│                             │
│  ┌─ Specifications ──────┐  │
│  │ Material: PLA         │  │
│  │ Dimensions: 15×10×12cm││  │
│  │ Print Time: 8 hours   │  │
│  │ Layer Height: 0.2mm   │  │
│  └───────────────────────┘  │
│                             │
│  Description:               │
│  Detailed dragon sculpture  │
│  with intricate scales and  │
│  wing structure. Features   │
│  articulated jaw...         │
│                             │
│  Tags:                      │
│  [dragon] [fantasy]         │
│  [sculpture] [detailed]     │
│                             │
│  ┌─────────────────────────┐│
│  │  Request Similar  →    │││
│  └─────────────────────────┘│
│                             │
└─────────────────────────────┘

Modal: Full screen on mobile
Close: Swipe down or tap X
Transitions: Slide up animation
```

---

## Desktop Wireframes

### Desktop Homepage (Portfolio Gallery)

```
┌────────────────────────────────────────────────────────────────┐
│  Design by Kenny        Portfolio  |  Request           🔍    │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                  Welcome to My 3D Print Portfolio              │
│                Bringing your ideas to life, one layer at a time│
│                                                                │
│                     [Browse Gallery ↓]  [Request Print →]      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│  Filters: [All ▼] [Material: All ▼] [Sort: Latest ▼]   🔍    │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │          │  │          │  │          │  │          │      │
│  │  Image   │  │  Image   │  │  Image   │  │  Image   │      │
│  │    1     │  │    2     │  │    3     │  │    4     │      │
│  │          │  │          │  │          │  │          │      │
│  ├──────────┤  ├──────────┤  ├──────────┤  ├──────────┤      │
│  │ Dragon   │  │  Phone   │  │   Wall   │  │  Gear    │      │
│  │Figurine  │  │  Stand   │  │   Art    │  │ Keychain │      │
│  │PLA•15cm  │  │PETG•8cm  │  │PLA•20cm  │  │ABS•5cm   │      │
│  │[Details] │  │[Details] │  │[Details] │  │[Details] │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │          │  │          │  │          │  │          │      │
│  │  Image   │  │  Image   │  │  Image   │  │  Image   │      │
│  │    5     │  │    6     │  │    7     │  │    8     │      │
│  │          │  │          │  │          │  │          │      │
│  ├──────────┤  ├──────────┤  ├──────────┤  ├──────────┤      │
│  │  Chess   │  │   Desk   │  │  Plant   │  │  Cable   │      │
│  │   Set    │  │Organizer │  │   Pot    │  │  Clips   │      │
│  │Resin•12cm│  │PETG•18cm │  │PLA•10cm  │  │TPU•3cm   │      │
│  │[Details] │  │[Details] │  │[Details] │  │[Details] │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│              © 2024 Design by Kenny | Contact | Terms          │
└────────────────────────────────────────────────────────────────┘

Dimensions: 1440×900
Grid: 4 columns
Container: Max-width 1200px, centered
Card Size: ~270px wide
Gap: 24px
```

### Desktop Request Form

```
┌────────────────────────────────────────────────────────────────┐
│  Design by Kenny        Portfolio  |  Request                  │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│                     Request a Custom 3D Print                  │
│            Fill out the form below and we'll get back to you   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ┌─────────────────────────┐  ┌──────────────────────────┐    │
│  │ Print Title *           │  │ Your Name *              │    │
│  │ ┌─────────────────────┐ │  │ ┌──────────────────────┐ │    │
│  │ │                     │ │  │ │                      │ │    │
│  │ └─────────────────────┘ │  │ └──────────────────────┘ │    │
│  │                         │  │                          │    │
│  │ Description *           │  │ Your Email *             │    │
│  │ ┌─────────────────────┐ │  │ ┌──────────────────────┐ │    │
│  │ │                     │ │  │ │                      │ │    │
│  │ │                     │ │  │ └──────────────────────┘ │    │
│  │ │                     │ │  │                          │    │
│  │ │                     │ │  │ Preferred Material       │    │
│  │ │                     │ │  │ ┌──────────────────────┐ │    │
│  │ └─────────────────────┘ │  │ │ PETG            ▼   │ │    │
│  │                         │  │ └──────────────────────┘ │    │
│  │ Reference Image         │  │                          │    │
│  │ ┌─────────────────────┐ │  │                          │    │
│  │ │  📷 Drag & Drop     │ │  │                          │    │
│  │ │  or Click to Upload │ │  │                          │    │
│  │ └─────────────────────┘ │  │                          │    │
│  │                         │  │                          │    │
│  │ Additional Notes        │  │                          │    │
│  │ ┌─────────────────────┐ │  │                          │    │
│  │ │                     │ │  │                          │    │
│  │ │                     │ │  │                          │    │
│  │ └─────────────────────┘ │  │                          │    │
│  └─────────────────────────┘  └──────────────────────────┘    │
│                                                                │
│                    ┌──────────────────────────┐                │
│                    │   Submit Request  →     │                │
│                    └──────────────────────────┘                │
│                                                                │
└────────────────────────────────────────────────────────────────┘

Layout: Two-column form
Left Column: Description, Images, Notes
Right Column: Personal info, Material
Container: Max-width 1000px
Field Height: 48px
Button: Centered, 200px wide
```

### Desktop Portfolio Detail Modal

```
┌────────────────────────────────────────────────────────────────┐
│                                                            ✕   │
│  ┌─────────────────────┐  Dragon Figurine                     │
│  │                     │  ★★★★★ Featured                      │
│  │                     │  ─────────────────────────────────    │
│  │   Main Image        │                                       │
│  │   (Large View)      │  Specifications:                      │
│  │                     │  • Material: PLA                      │
│  │                     │  • Dimensions: 15×10×12 cm            │
│  │                     │  • Print Time: 8 hours                │
│  │                     │  • Layer Height: 0.2mm                │
│  │                     │  • Infill: 15%                        │
│  ├─────────────────────┤  ─────────────────────────────────    │
│  │ [◀]  ●  ○  ○  [▶]  │                                       │
│  └─────────────────────┘  Description:                         │
│                           Detailed dragon sculpture with       │
│  ┌───┐ ┌───┐ ┌───┐       intricate scales and wing structure. │
│  │Th1│ │Th2│ │Th3│       Features include articulated jaw and │
│  └───┘ └───┘ └───┘       removable wings. Printed in multiple │
│                           pieces and assembled with precision. │
│                           Perfect for fantasy enthusiasts and  │
│                           collectors.                          │
│                           ─────────────────────────────────    │
│                                                                │
│                           Tags:                                │
│                           [dragon] [fantasy] [sculpture]       │
│                           [detailed] [figurine]                │
│                           ─────────────────────────────────    │
│                                                                │
│                           ┌────────────────┐ ┌──────────────┐ │
│                           │Request Similar │ │    Close     │ │
│                           └────────────────┘ └──────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘

Modal Size: 900×600px
Image Section: 400px wide
Details Section: 500px wide
Overlay: Dark background
```

---

## Interaction Patterns

### Hover States

**Portfolio Card Hover (Desktop):**
```
Normal State:
┌──────────┐
│          │
│  Image   │  <- No shadow
│          │
├──────────┤
│  Title   │
└──────────┘

Hover State:
┌──────────┐ ↑ 4px lift
│          │
│  Image   │  <- Image zoom 1.05x
│  (zoom)  │  <- Box shadow
├──────────┤
│  Title   │
│[Details→]│  <- Button appears
└──────────┘
```

**Button Hover:**
```
Normal:                 Hover:
┌──────────────┐       ┌──────────────┐
│ Submit  →    │  ->   │ Submit  →    │  <- Darker bg
└──────────────┘       └──────────────┘  <- Slight scale
```

### Touch Interactions

**Tap Feedback:**
```
Before Tap:          During Tap:         After Tap:
┌──────────┐        ┌──────────┐        ┌──────────┐
│  Button  │   ->   │  Button  │   ->   │  Button  │
└──────────┘        └──────────┘        └──────────┘
Normal color        Darker/pressed      Back to normal
```

**Swipe Gestures:**
- **Gallery**: Swipe left/right to navigate images (mobile)
- **Modal**: Swipe down to close (mobile)
- **Filters**: Swipe horizontally to scroll categories

### Loading States

**Skeleton Screen (Gallery):**
```
┌──────────┐  ┌──────────┐
│▓▓▓▓▓▓▓▓▓▓│  │▓▓▓▓▓▓▓▓▓▓│  <- Pulsing gray boxes
│▓▓▓▓▓▓▓▓▓▓│  │▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓│  │▓▓▓▓▓▓▓▓▓▓│
├──────────┤  ├──────────┤
│▓▓▓▓▓     │  │▓▓▓▓▓     │
│▓▓▓       │  │▓▓▓       │
└──────────┘  └──────────┘
```

**Form Submission:**
```
Before Submit:          Submitting:           Success:
┌──────────────┐       ┌──────────────┐      ┌──────────────┐
│ Submit  →    │  ->   │   ⟳ Sending  │ ->   │  ✓ Success   │
└──────────────┘       └──────────────┘      └──────────────┘
```

### Error States

**Form Field Error:**
```
┌────────────────────────┐
│ Email Address *        │
│ ┌────────────────────┐ │
│ │ invalid-email@     │ │  <- Red border
│ └────────────────────┘ │
│ ⚠️ Invalid email format │  <- Error message
└────────────────────────┘
```

**Form Submission Error:**
```
┌────────────────────────────────┐
│  ✗ Submission Failed           │
│                                │
│  We couldn't submit your       │
│  request. Please check:        │
│                                │
│  • Email field is required     │
│  • Description too short       │
│                                │
│  [Try Again]                   │
└────────────────────────────────┘
```

---

## Navigation Flows

### Mobile Navigation

**Closed State:**
```
┌─────────────────────────────┐
│ ☰  Design by Kenny          │
└─────────────────────────────┘
```

**Open State:**
```
┌─────────────────────────────┐
│ ✕  Design by Kenny          │  <- Overlay covers page
├─────────────────────────────┤
│                             │
│  Home                    →  │
│                             │
│  Portfolio               →  │
│                             │
│  Request Print           →  │
│                             │
│  About                   →  │
│                             │
│  Contact                 →  │
│                             │
└─────────────────────────────┘
Animation: Slide in from left
Backdrop: Dark overlay 50% opacity
```

### Desktop Navigation

```
┌────────────────────────────────────────────────────────┐
│  Design by Kenny     Portfolio  |  Request  |  Contact│
└────────────────────────────────────────────────────────┘
Sticky: Yes (on scroll)
Hover: Underline effect on links
Active: Bold + underline on current page
```

---

## Form Workflows

### File Upload Flow

```
Initial State:
┌─────────────────────────┐
│  📷 Choose File          │
│  or Drag & Drop Here    │
└─────────────────────────┘

Dragging Over:
┌─────────────────────────┐
│  📷 Drop file here       │  <- Blue border
└─────────────────────────┘  <- Highlight

Uploading:
┌─────────────────────────┐
│  ⟳ Uploading...          │
│  ████████░░░░  60%       │  <- Progress bar
└─────────────────────────┘

Success:
┌─────────────────────────┐
│  ✓ image.jpg             │  <- Green check
│  [Remove]                │  <- Remove button
└─────────────────────────┘

Error:
┌─────────────────────────┐
│  ✗ Upload failed         │  <- Red X
│  File too large (12MB)   │  <- Error message
│  [Try Again]             │
└─────────────────────────┘
```

### Form Validation Flow

```
1. On Field Blur:
   ┌────────────┐
   │ Validate   │
   └──┬─────────┘
      │
      ├─ Valid → Green checkmark
      └─ Invalid → Red error message

2. On Submit:
   ┌────────────┐
   │ All Fields │
   └──┬─────────┘
      │
      ├─ All Valid → Submit
      └─ Any Invalid → 
         ├─ Scroll to first error
         ├─ Show all errors
         └─ Focus first error field

3. Server Response:
   ┌────────────┐
   │  Response  │
   └──┬─────────┘
      │
      ├─ Success → Show confirmation
      └─ Error → Show error message
```

### Success Flow

```
After Successful Submission:
┌─────────────────────────────┐
│  ✓ Request Submitted!       │
│                             │
│  Thank you for your request.│
│  We'll be in touch soon!    │
│                             │
│  [View Portfolio]           │
│  [Submit Another Request]   │
└─────────────────────────────┘

Options:
1. Auto-redirect after 5 seconds
2. Clear form and allow new submission
3. Return to portfolio gallery
```

---

## Responsive Behavior

### Breakpoint Transitions

**Gallery Grid Changes:**
```
Mobile (< 768px):     Tablet (768-1023px):   Desktop (1024px+):
┌────┐               ┌────┐ ┌────┐          ┌───┐ ┌───┐ ┌───┐ ┌───┐
│ 1  │               │ 1  │ │ 2  │          │ 1 │ │ 2 │ │ 3 │ │ 4 │
├────┤               ├────┤ ├────┤          ├───┤ ├───┤ ├───┤ ├───┤
│ 2  │               │ 3  │ │ 4  │          │ 5 │ │ 6 │ │ 7 │ │ 8 │
├────┤               └────┘ └────┘          └───┘ └───┘ └───┘ └───┘
│ 3  │
└────┘
1 column              2 columns              4 columns
```

**Navigation Changes:**
```
Mobile:                Desktop:
☰ Menu                 Portfolio | Request | Contact
(Hamburger)            (Horizontal links)
```

**Form Layout Changes:**
```
Mobile:                Desktop:
┌─────────┐           ┌──────┐ ┌──────┐
│ Field 1 │           │Field1│ │Field3│
├─────────┤           ├──────┤ ├──────┤
│ Field 2 │           │Field2│ │Field4│
├─────────┤           └──────┘ └──────┘
│ Field 3 │
├─────────┤           Single column  Two columns
│ Field 4 │           (Stacked)      (Side-by-side)
└─────────┘
```

---

This completes the User Flows and Wireframes documentation, providing visual representations of all major user interactions and responsive behaviors.
