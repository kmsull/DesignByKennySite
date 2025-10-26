# Sample Data Structures and Schemas

## Table of Contents
1. [TypeScript Type Definitions](#typescript-type-definitions)
2. [Portfolio Data Model](#portfolio-data-model)
3. [Request Form Schema](#request-form-schema)
4. [Sample Portfolio Data](#sample-portfolio-data)
5. [Email Templates](#email-templates)
6. [API Response Schemas](#api-response-schemas)
7. [Validation Schemas](#validation-schemas)

---

## TypeScript Type Definitions

### lib/types.ts

```typescript
/**
 * Portfolio Item
 * Represents a single 3D print in the portfolio
 */
export interface PortfolioItem {
  id: string
  title: string
  description: string
  images: string[]
  thumbnail: string
  material: MaterialType
  dimensions: Dimensions
  printTime?: string
  layerHeight?: string
  infill?: string
  category: CategoryType
  tags: string[]
  dateCreated: string
  featured: boolean
}

/**
 * Material Types
 */
export type MaterialType = 
  | 'PLA'
  | 'ABS'
  | 'PETG'
  | 'TPU'
  | 'Resin'
  | 'Nylon'
  | 'Other'

/**
 * Category Types
 */
export type CategoryType = 
  | 'Figurines'
  | 'Functional'
  | 'Decorative'
  | 'Prototypes'
  | 'Custom'
  | 'Other'

/**
 * Dimensions
 */
export interface Dimensions {
  length: number
  width: number
  height: number
  unit: 'mm' | 'cm' | 'in'
}

/**
 * Request Form Data
 * Data submitted through the custom print request form
 */
export interface RequestFormData {
  title: string
  description: string
  name: string
  email: string
  material?: MaterialType | 'No Preference'
  referenceImage?: File
  referenceImageUrl?: string
  notes?: string
  submittedAt?: string
}

/**
 * Form Validation Error
 */
export interface ValidationError {
  field: string
  message: string
}

/**
 * Form Validation Result
 */
export interface ValidationResult {
  valid: boolean
  errors: ValidationError[]
}

/**
 * API Response
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  errors?: ValidationError[]
}

/**
 * Gallery Filter State
 */
export interface GalleryFilter {
  category?: CategoryType | 'All'
  material?: MaterialType | 'All'
  searchQuery?: string
  sortBy?: 'date' | 'title' | 'featured'
  sortOrder?: 'asc' | 'desc'
}

/**
 * Email Template Data
 */
export interface EmailTemplateData {
  to: string
  subject: string
  html: string
  text?: string
  from?: string
  replyTo?: string
}

/**
 * Navigation Link
 */
export interface NavLink {
  label: string
  href: string
  icon?: React.ComponentType
  external?: boolean
}

/**
 * Modal State
 */
export interface ModalState {
  isOpen: boolean
  itemId?: string
  item?: PortfolioItem
}

/**
 * Form State
 */
export interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage?: string
  successMessage?: string
}

/**
 * Upload State
 */
export interface UploadState {
  isUploading: boolean
  progress: number
  file?: File
  preview?: string
  error?: string
}
```

---

## Portfolio Data Model

### Detailed Structure

```typescript
// lib/portfolio-schema.ts

/**
 * Complete Portfolio Item with all optional fields
 */
export interface DetailedPortfolioItem extends PortfolioItem {
  // Print Settings
  printSettings?: {
    temperature?: number
    bedTemperature?: number
    printSpeed?: number
    supportType?: 'None' | 'Tree' | 'Linear' | 'Grid'
    infillPattern?: string
  }
  
  // Metadata
  metadata?: {
    fileType?: '3MF' | 'STL' | 'OBJ' | 'GCODE'
    fileSize?: string
    complexity?: 'Low' | 'Medium' | 'High'
    estimatedCost?: number
    currency?: 'USD' | 'EUR' | 'GBP'
  }
  
  // SEO
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    slug?: string
  }
  
  // Social
  social?: {
    likes?: number
    views?: number
    shares?: number
  }
}

/**
 * Portfolio Collection
 */
export interface PortfolioCollection {
  items: PortfolioItem[]
  total: number
  featured: PortfolioItem[]
  categories: CategoryType[]
  materials: MaterialType[]
}
```

### Database Schema (Future Reference)

```sql
-- PostgreSQL Schema for future database implementation

CREATE TABLE portfolio_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  thumbnail VARCHAR(500) NOT NULL,
  material VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Dimensions
  length DECIMAL(10, 2),
  width DECIMAL(10, 2),
  height DECIMAL(10, 2),
  dimension_unit VARCHAR(10) DEFAULT 'mm',
  
  -- Print Settings
  print_time VARCHAR(50),
  layer_height VARCHAR(20),
  infill VARCHAR(20),
  
  -- SEO
  slug VARCHAR(200) UNIQUE,
  meta_title VARCHAR(200),
  meta_description TEXT,
  
  -- Stats
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0
)

CREATE TABLE portfolio_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  portfolio_item_id UUID REFERENCES portfolio_items(id) ON DELETE CASCADE,
  url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(200),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE portfolio_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  portfolio_item_id UUID REFERENCES portfolio_items(id) ON DELETE CASCADE,
  tag VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE print_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL,
  material VARCHAR(50),
  notes TEXT,
  reference_image_url VARCHAR(500),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
)
```

---

## Request Form Schema

### Zod Validation Schema

```typescript
// lib/validation-schemas.ts
import { z } from 'zod'

/**
 * Request Form Schema using Zod
 * Provides runtime validation and type safety
 */
export const requestFormSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters')
    .trim(),
  
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(1000, 'Description must be less than 1000 characters')
    .trim(),
  
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .trim(),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  
  material: z
    .enum(['PLA', 'ABS', 'PETG', 'TPU', 'Resin', 'No Preference'])
    .optional(),
  
  notes: z
    .string()
    .max(500, 'Notes must be less than 500 characters')
    .optional(),
  
  referenceImageUrl: z
    .string()
    .url('Invalid image URL')
    .optional(),
})

// Infer TypeScript type from schema
export type RequestFormInput = z.infer<typeof requestFormSchema>

/**
 * Portfolio Filter Schema
 */
export const portfolioFilterSchema = z.object({
  category: z
    .enum(['All', 'Figurines', 'Functional', 'Decorative', 'Prototypes', 'Custom'])
    .optional()
    .default('All'),
  
  material: z
    .enum(['All', 'PLA', 'ABS', 'PETG', 'TPU', 'Resin'])
    .optional()
    .default('All'),
  
  searchQuery: z
    .string()
    .max(100)
    .optional(),
  
  sortBy: z
    .enum(['date', 'title', 'featured'])
    .optional()
    .default('date'),
  
  sortOrder: z
    .enum(['asc', 'desc'])
    .optional()
    .default('desc'),
})

export type PortfolioFilterInput = z.infer<typeof portfolioFilterSchema>

/**
 * File Upload Schema
 */
export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: 'File size must be less than 10MB',
    })
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf'].includes(file.type),
      {
        message: 'File must be JPEG, PNG, GIF, WebP, or PDF',
      }
    ),
})
```

### JSON Schema (for API documentation)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "RequestFormData",
  "type": "object",
  "required": ["title", "description", "name", "email"],
  "properties": {
    "title": {
      "type": "string",
      "minLength": 3,
      "maxLength": 100,
      "description": "Title of the custom print request"
    },
    "description": {
      "type": "string",
      "minLength": 20,
      "maxLength": 1000,
      "description": "Detailed description of the print request"
    },
    "name": {
      "type": "string",
      "minLength": 2,
      "maxLength": 50,
      "description": "Name of the person making the request"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email address for communication"
    },
    "material": {
      "type": "string",
      "enum": ["PLA", "ABS", "PETG", "TPU", "Resin", "No Preference"],
      "description": "Preferred material for printing"
    },
    "notes": {
      "type": "string",
      "maxLength": 500,
      "description": "Additional notes or requirements"
    },
    "referenceImageUrl": {
      "type": "string",
      "format": "uri",
      "description": "URL of reference image (after upload)"
    }
  }
}
```

---

## Sample Portfolio Data

### lib/data.ts

```typescript
import { PortfolioItem } from './types'

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Dragon Figurine',
    description: 'Detailed dragon sculpture with intricate scales and wing structure. Features include articulated jaw and removable wings. Printed in multiple pieces and assembled with precision.',
    images: [
      '/images/portfolio/dragon-01.jpg',
      '/images/portfolio/dragon-02.jpg',
      '/images/portfolio/dragon-03.jpg',
    ],
    thumbnail: '/images/portfolio/dragon-thumb.jpg',
    material: 'PLA',
    dimensions: {
      length: 150,
      width: 100,
      height: 120,
      unit: 'mm',
    },
    printTime: '8 hours',
    layerHeight: '0.2mm',
    infill: '15%',
    category: 'Figurines',
    tags: ['dragon', 'fantasy', 'sculpture', 'detailed'],
    dateCreated: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Custom Phone Stand',
    description: 'Ergonomic phone stand with adjustable angle. Features cable management slot and anti-slip rubber feet. Compatible with all phone sizes up to 6.7 inches.',
    images: [
      '/images/portfolio/phone-stand-01.jpg',
      '/images/portfolio/phone-stand-02.jpg',
    ],
    thumbnail: '/images/portfolio/phone-stand-thumb.jpg',
    material: 'PETG',
    dimensions: {
      length: 80,
      width: 70,
      height: 100,
      unit: 'mm',
    },
    printTime: '4 hours',
    layerHeight: '0.2mm',
    infill: '20%',
    category: 'Functional',
    tags: ['phone', 'stand', 'functional', 'desk-accessory'],
    dateCreated: '2024-01-20',
    featured: true,
  },
  {
    id: '3',
    title: 'Geometric Wall Art',
    description: 'Modern geometric wall decoration with layered hexagonal pattern. Creates stunning shadow effects when lit from the side. Modular design allows for custom arrangements.',
    images: [
      '/images/portfolio/wall-art-01.jpg',
      '/images/portfolio/wall-art-02.jpg',
      '/images/portfolio/wall-art-03.jpg',
    ],
    thumbnail: '/images/portfolio/wall-art-thumb.jpg',
    material: 'PLA',
    dimensions: {
      length: 200,
      width: 200,
      height: 30,
      unit: 'mm',
    },
    printTime: '6 hours',
    layerHeight: '0.3mm',
    infill: '10%',
    category: 'Decorative',
    tags: ['wall-art', 'geometric', 'modern', 'modular'],
    dateCreated: '2024-02-01',
    featured: false,
  },
  {
    id: '4',
    title: 'Mechanical Gear Keychain',
    description: 'Functional spinning gears keychain. All gears rotate smoothly with satisfying clicking mechanism. Durable design for everyday use.',
    images: [
      '/images/portfolio/keychain-01.jpg',
      '/images/portfolio/keychain-02.jpg',
    ],
    thumbnail: '/images/portfolio/keychain-thumb.jpg',
    material: 'ABS',
    dimensions: {
      length: 50,
      width: 40,
      height: 8,
      unit: 'mm',
    },
    printTime: '2 hours',
    layerHeight: '0.15mm',
    infill: '25%',
    category: 'Functional',
    tags: ['keychain', 'mechanical', 'gears', 'fidget'],
    dateCreated: '2024-02-05',
    featured: false,
  },
  {
    id: '5',
    title: 'Miniature Chess Set',
    description: 'Complete chess set with custom-designed pieces. Each piece features unique geometric styling. Includes storage box with magnetic closure.',
    images: [
      '/images/portfolio/chess-01.jpg',
      '/images/portfolio/chess-02.jpg',
      '/images/portfolio/chess-03.jpg',
    ],
    thumbnail: '/images/portfolio/chess-thumb.jpg',
    material: 'Resin',
    dimensions: {
      length: 120,
      width: 120,
      height: 60,
      unit: 'mm',
    },
    printTime: '12 hours',
    layerHeight: '0.05mm',
    infill: '50%',
    category: 'Custom',
    tags: ['chess', 'game', 'miniature', 'set'],
    dateCreated: '2024-02-10',
    featured: true,
  },
  {
    id: '6',
    title: 'Desk Organizer',
    description: 'Multi-compartment desk organizer with slots for pens, phone, cards, and small items. Modular design allows stacking for additional storage.',
    images: [
      '/images/portfolio/organizer-01.jpg',
      '/images/portfolio/organizer-02.jpg',
    ],
    thumbnail: '/images/portfolio/organizer-thumb.jpg',
    material: 'PETG',
    dimensions: {
      length: 180,
      width: 100,
      height: 60,
      unit: 'mm',
    },
    printTime: '5 hours',
    layerHeight: '0.2mm',
    infill: '15%',
    category: 'Functional',
    tags: ['organizer', 'desk', 'storage', 'modular'],
    dateCreated: '2024-02-15',
    featured: false,
  },
  {
    id: '7',
    title: 'Plant Pot with Drainage',
    description: 'Self-watering plant pot with built-in drainage system. Features geometric pattern and water level indicator. Perfect for succulents and small plants.',
    images: [
      '/images/portfolio/plant-pot-01.jpg',
      '/images/portfolio/plant-pot-02.jpg',
    ],
    thumbnail: '/images/portfolio/plant-pot-thumb.jpg',
    material: 'PLA',
    dimensions: {
      length: 100,
      width: 100,
      height: 80,
      unit: 'mm',
    },
    printTime: '4 hours',
    layerHeight: '0.2mm',
    infill: '15%',
    category: 'Decorative',
    tags: ['plant-pot', 'planter', 'succulent', 'drainage'],
    dateCreated: '2024-02-20',
    featured: false,
  },
  {
    id: '8',
    title: 'Cable Management Clips',
    description: 'Set of 10 cable clips for desk organization. Adhesive backing for easy mounting. Holds cables from 2mm to 8mm diameter.',
    images: [
      '/images/portfolio/cable-clips-01.jpg',
      '/images/portfolio/cable-clips-02.jpg',
    ],
    thumbnail: '/images/portfolio/cable-clips-thumb.jpg',
    material: 'TPU',
    dimensions: {
      length: 30,
      width: 20,
      height: 15,
      unit: 'mm',
    },
    printTime: '3 hours',
    layerHeight: '0.2mm',
    infill: '30%',
    category: 'Functional',
    tags: ['cable-management', 'clips', 'organization', 'desk'],
    dateCreated: '2024-02-25',
    featured: false,
  },
]

/**
 * Get featured portfolio items
 */
export const getFeaturedItems = (): PortfolioItem[] => {
  return portfolioItems.filter(item => item.featured)
}

/**
 * Get portfolio items by category
 */
export const getItemsByCategory = (category: CategoryType): PortfolioItem[] => {
  return portfolioItems.filter(item => item.category === category)
}

/**
 * Get portfolio item by ID
 */
export const getItemById = (id: string): PortfolioItem | undefined => {
  return portfolioItems.find(item => item.id === id)
}

/**
 * Search portfolio items
 */
export const searchItems = (query: string): PortfolioItem[] => {
  const lowerQuery = query.toLowerCase()
  return portfolioItems.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}
```

---

## Email Templates

### Admin Notification Email

```typescript
// lib/email-templates/admin-notification.ts

export function getAdminNotificationHtml(data: RequestFormData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Print Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px 20px;
    }
    .field {
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e5e5e5;
    }
    .field:last-child {
      border-bottom: none;
    }
    .label {
      display: block;
      font-weight: 600;
      color: #667eea;
      margin-bottom: 5px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .value {
      color: #333;
      font-size: 16px;
    }
    .description {
      white-space: pre-wrap;
      background: #f9f9f9;
      padding: 15px;
      border-radius: 4px;
      border-left: 3px solid #667eea;
    }
    .footer {
      background: #f9f9f9;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background: #667eea;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎨 New Print Request</h1>
    </div>
    
    <div class="content">
      <div class="field">
        <span class="label">Print Title</span>
        <div class="value">${data.title}</div>
      </div>
      
      <div class="field">
        <span class="label">Description</span>
        <div class="value description">${data.description}</div>
      </div>
      
      <div class="field">
        <span class="label">Customer Name</span>
        <div class="value">${data.name}</div>
      </div>
      
      <div class="field">
        <span class="label">Email Address</span>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      
      ${data.material ? `
      <div class="field">
        <span class="label">Preferred Material</span>
        <div class="value">${data.material}</div>
      </div>
      ` : ''}
      
      ${data.notes ? `
      <div class="field">
        <span class="label">Additional Notes</span>
        <div class="value description">${data.notes}</div>
      </div>
      ` : ''}
      
      ${data.referenceImageUrl ? `
      <div class="field">
        <span class="label">Reference Image</span>
        <div class="value"><a href="${data.referenceImageUrl}">View Image</a></div>
      </div>
      ` : ''}
      
      <div class="field">
        <span class="label">Submitted</span>
        <div class="value">${new Date().toLocaleString()}</div>
      </div>
      
      <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.title)}" class="button">
        Reply to Customer
      </a>
    </div>
    
    <div class="footer">
      Design by Kenny - Print Request System
    </div>
  </div>
</body>
</html>
  `
}

export function getAdminNotificationText(data: RequestFormData): string {
  return `
New Print Request Received

Print Title: ${data.title}

Description:
${data.description}

Customer Information:
Name: ${data.name}
Email: ${data.email}

${data.material ? `Preferred Material: ${data.material}` : ''}

${data.notes ? `Additional Notes:\n${data.notes}` : ''}

${data.referenceImageUrl ? `Reference Image: ${data.referenceImageUrl}` : ''}

Submitted: ${new Date().toLocaleString()}

---
Reply to this customer at: ${data.email}
  `.trim()
}
```

### User Confirmation Email

```typescript
// lib/email-templates/user-confirmation.ts

export function getUserConfirmationHtml(data: RequestFormData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Request Confirmation</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      padding: 40px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 28px;
    }
    .checkmark {
      font-size: 48px;
      margin-bottom: 10px;
    }
    .content {
      padding: 30px 20px;
    }
    .content p {
      margin: 15px 0;
    }
    .highlight {
      background: #f0f4ff;
      padding: 15px;
      border-radius: 6px;
      border-left: 4px solid #667eea;
      margin: 20px 0;
    }
    .steps {
      list-style: none;
      padding: 0;
      margin: 20px 0;
    }
    .steps li {
      padding: 10px 0 10px 30px;
      position: relative;
    }
    .steps li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
    }
    .button {
      display: inline-block;
      padding: 14px 28px;
      background: #667eea;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
      font-weight: 600;
    }
    .footer {
      background: #f9f9f9;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .footer a {
      color: #667eea;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="checkmark">✓</div>
      <h1>Request Received!</h1>
      <p>Thank you for your custom print request</p>
    </div>
    
    <div class="content">
      <p>Hi ${data.name},</p>
      
      <p>We've successfully received your request for:</p>
      
      <div class="highlight">
        <strong>${data.title}</strong>
      </div>
      
      <p>Here's what happens next:</p>
      
      <ol class="steps">
        <li>We'll carefully review your specifications and requirements</li>
        <li>Within 24-48 hours, we'll contact you with a detailed quote</li>
        <li>Once you approve, we'll begin creating your custom print</li>
        <li>You'll receive updates throughout the printing process</li>
      </ol>
      
      <p>If you have any questions or need to provide additional information, simply reply to this email.</p>
      
      <p style="text-align: center;">
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}" class="button">
          View Our Portfolio
        </a>
      </p>
      
      <p>We're excited to bring your vision to life!</p>
      
      <p>Best regards,<br>
      <strong>The Design by Kenny Team</strong></p>
    </div>
    
    <div class="footer">
      <p>Design by Kenny | 3D Printing Services</p>
      <p>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}">Visit Website</a> |
        <a href="mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}">Contact Us</a>
      </p>
    </div>
  </div>
</body>
</html>
  `
}

export function getUserConfirmationText(data: RequestFormData): string {
  return `
✓ Request Received!

Hi ${data.name},

Thank you for your custom print request!

Your Request: ${data.title}

What happens next:
1. We'll review your specifications within 24-48 hours
2. You'll receive a detailed quote at ${data.email}
3. Once approved, we'll begin printing
4. You'll get updates throughout the process

Have questions? Simply reply to this email.

Best regards,
The Design by Kenny Team

---
Visit our portfolio: ${process.env.NEXT_PUBLIC_SITE_URL}
  `.trim()
}
```

---

_Continue with API Response Schemas and Validation Schemas in next section..._
