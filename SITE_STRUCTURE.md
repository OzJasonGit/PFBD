# Plastic Free By Design - Site Structure

## Active Pages (plasticfreebydesign.com)

### Main Pages
1. **Home** - `/plastic_free_by_design`
   - Main landing page
   - Dynamic import for performance

2. **Products** - `/products`
   - Product catalog
   - Dynamic import for better loading
   - MongoDB connected
   - Shows message if no products available

3. **Newsletter** - `/newsletter`
   - Newsletter page
   - Uses SWR caching for fast loads

4. **Welcome** - `/welcome_page`
   - Welcome page
   - Uses SWR caching

5. **Stories/Blog** - `/bloghome`
   - Blog home page
   - Uses SWR caching with dedicated hook

6. **Blog Post** - `/blog/[slug]`
   - Individual blog post pages
   - Uses SWR caching with dedicated hook
   - Dynamic import for performance
   
7. **Cart/Favourites** - `/cart`
   - Shopping cart & favourites
   - Dynamic import
   - Both heart (favourites) and cart icons link here

### Authentication Pages
7. **Sign Up** - `/signup`
   - User registration
   - Google OAuth integration
   - Dynamic import

8. **Sign In** - `/signin`
   - User login
   - Google OAuth integration
   - Dynamic import

### Admin Pages
9. **Admin Dashboard** - `/admin`
   - Main admin page
   - Protected by middleware (requires role: 1)
   - Dynamic import

10. **Admin Orders** - `/admin/orders`
    - Order management
    - Pagination & search
    - Real-time updates

11. **Admin Products** - `/admin/products`
    - Product management
    - Category management

12. **Admin Users** - `/admin/users`
    - User management

13. **Admin Social Media** - `/admin/social_media`
    - LinkedIn integration

## Navigation Structure

### Header Navigation (ShadCN_Header)
- **Home** → `/plastic_free_by_design`
- **Shop** (dropdown)
  - All Products → `/products`
- **Newsletter** → `/newsletter`
- **Blog** → `/bloghome`
- **More** (dropdown)
  - Welcome → `/welcome_page`
  - Stories → `/bloghome`

### Mobile Menu (Drawer)
- Home → `/plastic_free_by_design`
- Products → `/products`
- Newsletter → `/newsletter`
- Stories → `/bloghome`
- Welcome → `/welcome_page`

### Header Icons
- 💗 **Heart** (Favourites) → `/cart`
- 🛒 **Cart** → `/cart`
- 🍔 **Hamburger** → Opens drawer menu

## API Routes

### Active APIs
- `/api` - Main stories API
- `/api/bloghome_route` - Blog home data
- `/api/blog/[slug]` - Individual blog post
- `/api/admin_route` - Admin data
- `/api/products` - Products CRUD (returns { data: products, success: true })
- `/api/categories` - Categories CRUD
- `/api/signin` - User authentication
- `/api/signup` - User registration
- `/api/google_login` - Google OAuth
- `/api/header_route` - User session
- `/api/user_route` - User management
- `/api/orders` - Order management
- `/api/email_route` - Newsletter subscription
- `/api/cart` - Cart operations
- `/api/favourites` - Favourites operations

## Performance Optimizations

### Data Caching (SWR)
- Newsletter, Welcome, Blog Home, and Blog Post pages use SWR
- Data cached for 60 seconds
- No refetching on navigation
- Custom hooks:
  - `/app/hooks/useStories.js` - For stories/newsletter
  - `/app/hooks/useBlog.js` - For individual blog posts

### Code Splitting
All heavy pages use dynamic imports:
- Products page
- Cart/Favourites page
- Admin pages
- Auth pages (signin/signup)
- Plastic Free By Design landing

### Loading States
- Instant loading UI with `loading.js`
- SkeletonLoader for all async pages
- Smooth transitions

## Database Collections

### MongoDB Collections
1. **stories** - Blog posts/stories
2. **users** - User accounts
3. **products** - Product catalog
4. **categories** - Product categories
5. **orders** - Order history
6. **cart** - Shopping cart items
7. **favourites** - User favourites

## Protected Routes

### Middleware Protection
- `/admin/*` - Requires authentication & role: 1
- Redirects to `/signin` if not authenticated
- Redirects to `/` if insufficient permissions

## File Structure

```
app/
├── (Marketing)/
│   ├── plastic_free_by_design/  # Main landing
│   ├── products/                # Product catalog
│   ├── cart/                    # Cart & favourites
│   ├── newsletter/              # Newsletter
│   ├── welcome_page/            # Welcome
│   ├── bloghome/                # Blog
│   ├── signin/                  # Login
│   ├── signup/                  # Register
│   └── admin/                   # Admin dashboard
│       ├── orders/
│       ├── products/
│       ├── users/
│       └── social_media/
├── api/                         # API routes
├── hooks/                       # Custom hooks (SWR)
└── utils/                       # Utilities (MongoDB, etc.)

Modules/
├── Plastic_Free_By_Design/      # Main landing module
├── Product_test/                # Products module
├── Cart/                        # Cart module
├── Newsletter/                  # Newsletter module
├── Welcome_Page/                # Welcome module
├── Bloghome/                    # Blog module
└── Admin/                       # Admin modules

components/
├── Sign_Up/                     # Signup component
├── Sign_In/                     # Signin component
├── Cart/                        # Cart component
├── Favourites/                  # Favourites component
├── Product_Management/          # Product admin
├── Users/                       # User admin
├── Menu/                        # Navigation menu
├── Menu_PFBD/                   # PFBD menu variant
├── Header/                      # Main header
├── Header_PFBD/                 # PFBD header variant
├── Footer/                      # Footer
├── Loader/                      # Loading skeletons
└── ui/                          # UI components
```

## Environment Variables Required

```env
# MongoDB
MONGODB_URI=

# Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID=

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=

# LinkedIn
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_REDIRECT_URI=
LINKEDIN_STATE=
LINKEDIN_SCOPE=

# Stripe (if using)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

## Key Features

1. **Fast Page Transitions** - SWR caching + dynamic imports
2. **Shopping Cart** - Full cart & favourites functionality
3. **Product Catalog** - MongoDB-powered product system
4. **Admin Dashboard** - Full CRUD for products, orders, users
5. **Authentication** - Email/password + Google OAuth
6. **Blog System** - Stories/blog with caching
7. **Newsletter** - Email subscription system
8. **Responsive Design** - Mobile drawer menu + desktop nav
9. **Performance Optimized** - Code splitting, caching, lazy loading

## Notes

- All pages use the same Menu/Header components
- Cart page handles both shopping cart and favourites
- Heart icon and Cart icon both link to `/cart`
- MongoDB connection with retry logic
- Protected admin routes with middleware
- SWR provides instant page loads after first visit

