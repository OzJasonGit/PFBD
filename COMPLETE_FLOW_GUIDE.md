# Complete User Flow Guide - Plastic Free By Design

## 🚀 Quick Start

**Your dev server is running on:** `http://localhost:3003`

## ✅ Complete Working Pages

### 1. **Home Page** 
- URL: `http://localhost:3003/plastic_free_by_design`
- Features: Landing page with hero section

### 2. **Products Page** 
- URL: `http://localhost:3003/products`
- Features: 
  - Product grid display
  - Fetches from MongoDB
  - Dynamic imports for performance
  - Shows "No Products" message if empty

### 3. **Product Detail Page**
- URL: `http://localhost:3003/products/[slug]`
- Features:
  - Product images gallery
  - License type selector (Educational/Commercial)
  - Add to cart button
  - Stripe checkout button
  - PayPal checkout
  - Related products section
  - White theme design

### 4. **Shopping Cart** 
- URL: `http://localhost:3003/cart`
- Features:
  - View cart items
  - Update quantities
  - Remove items
  - Select items for checkout
  - localStorage persistence
  - Stripe checkout
  - PayPal checkout

### 5. **Checkout Success**
- URL: `http://localhost:3003/success`
- Features: Order confirmation page

### 6. **Blog & Newsletter**
- Blog Home: `http://localhost:3003/bloghome`
- Blog Post: `http://localhost:3003/blog/[slug]`
- Newsletter: `http://localhost:3003/newsletter`
- Welcome: `http://localhost:3003/welcome_page`

### 7. **Authentication**
- Sign In: `http://localhost:3003/signin`
- Sign Up: `http://localhost:3003/signup`
- Features:
  - Email/password authentication
  - Google OAuth
  - JWT tokens
  - HTTP-only cookies

### 8. **Admin Dashboard** 
- URL: `http://localhost:3003/admin`
- Protected route (requires authentication)
- Sub-pages:
  - `/admin/orders` - Order management
  - `/admin/products` - Product management
  - `/admin/users` - User management
  - `/admin/social_media` - LinkedIn integration

## 🛒 Complete Purchase Flow

### Flow 1: Direct Checkout from Product Page
```
1. Browse Products → /products
2. Click Product → /products/[slug]
3. Select License Type (Educational/Commercial)
4. Option A: Click "Checkout" → Stripe
5. Option B: Click PayPal button → PayPal
6. Complete Payment
7. Redirect to → /success
```

### Flow 2: Shopping Cart Checkout
```
1. Browse Products → /products
2. Click Product → /products/[slug]
3. Click "Add to Cart"
4. Go to Cart → /cart (heart ♥ or cart 🛒 icon)
5. Review items, adjust quantities
6. Select items to checkout
7. Click "Checkout" → Stripe or PayPal
8. Complete Payment
9. Redirect to → /success
```

## 🔌 API Endpoints

### Authentication
- `POST /api/signin` - User login
- `POST /api/signup` - User registration
- `POST /api/google_login` - Google OAuth

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin)
- `PUT /api/products` - Update product (admin)
- `DELETE /api/products?id=[id]` - Delete product (admin)

### Cart & Favourites
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add to cart
- `DELETE /api/cart` - Remove from cart
- `GET /api/favourites` - Get favourites

### Payment
- `POST /api/payment_route` - Create Stripe session
- `POST /api/paypal/create_order` - Create PayPal order

### Blog
- `GET /api` - Get main stories
- `GET /api/bloghome_route` - Get blog posts
- `GET /api/blog/[slug]` - Get single blog post

### Admin
- `GET /api/admin_route` - Admin data
- `GET /api/orders` - Get orders
- `PATCH /api/orders` - Update order status
- `GET /api/user_route` - Get users
- `DELETE /api/user_route/[id]` - Delete user
- `GET /api/categories` - Get categories
- `POST /api/categories` - Create category

## 🎨 Navigation

### Main Header
- **Home** → `/plastic_free_by_design`
- **Shop** → `/products`
- **Newsletter** → `/newsletter`
- **Blog** → `/bloghome`
- **More** (dropdown):
  - Welcome → `/welcome_page`
  - Stories → `/bloghome`

### Header Icons
- 💗 **Heart** → `/cart` (favourites)
- 🛒 **Cart** → `/cart` (shopping cart)
- 🍔 **Menu** → Opens drawer

### Mobile Drawer Menu
- Home
- Products
- Newsletter
- Stories
- Welcome

## 🔒 Protected Routes

Routes requiring authentication:
- `/admin/*` - Requires role: 1 (admin)
- Middleware checks JWT token
- Redirects to `/signin` if not authenticated

## 💳 Payment Methods Supported

### 1. Stripe
- Credit/Debit Cards
- Configured via environment variables
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

### 2. PayPal
- PayPal account or credit card
- Configured via environment variables
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`

### 3. Apple Pay (via Stripe)
- Works on Safari/iOS devices
- Automatically available if Stripe is configured

## 📊 Data Flow

### Product Data
```
MongoDB → /api/products → SWR Cache → Product Pages
```

### Cart Data
```
localStorage ↔ CartContext ↔ Cart Components
```

### User Session
```
JWT Cookie → Middleware → Protected Routes
```

## 🚀 Performance Features

### Caching (SWR)
- Blog posts cached 60 seconds
- Newsletter data cached 60 seconds
- Products fetched on-demand
- No refetching on navigation

### Code Splitting
- All heavy pages use `dynamic()` import
- Reduces initial bundle size
- Faster page loads

### Image Optimization
- Next.js Image component
- WebP/AVIF formats
- Lazy loading
- Blur placeholders

## 🔧 Environment Variables Required

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret

# Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 🐛 Troubleshooting

### Issue: 404 Errors on API Routes
**Solution:** Make sure you're accessing `http://localhost:3003` (correct port)

### Issue: Products Not Showing
**Solution:** 
1. Check MongoDB connection
2. Add products via `/admin/products`
3. Verify API returns `{ data: products }`

### Issue: Cart Not Persisting
**Solution:** 
1. Clear browser localStorage
2. Check browser console for errors
3. Ensure CartContext is properly wrapped

### Issue: Payment Not Working
**Solution:**
1. Verify Stripe/PayPal keys in `.env`
2. Check `/api/payment_route` is accessible
3. Ensure user is authenticated

### Issue: Login 404 Error
**Solution:** Server is on port 3003, access: `http://localhost:3003/signin`

## 📱 Mobile Responsive

All pages are fully responsive:
- Hamburger menu on mobile
- Drawer navigation
- Touch-friendly buttons
- Optimized images
- Responsive grids

## 🎯 Key Features

✅ **E-commerce Ready**
- Product catalog
- Shopping cart
- Multiple payment methods
- Order management

✅ **Content Management**
- Blog system
- Newsletter
- Admin dashboard
- Image management

✅ **User Management**
- Authentication
- User roles
- Protected routes
- Session management

✅ **Performance Optimized**
- SWR caching
- Code splitting
- Image optimization
- Fast page transitions

## 📝 Testing Checklist

### E-commerce Flow
- [ ] Browse products
- [ ] View product details
- [ ] Add to cart
- [ ] Update quantities
- [ ] Remove from cart
- [ ] Checkout with Stripe
- [ ] Checkout with PayPal
- [ ] View success page

### Authentication
- [ ] Sign up new user
- [ ] Sign in existing user
- [ ] Google OAuth login
- [ ] Protected route access
- [ ] Admin dashboard access

### Content
- [ ] View blog posts
- [ ] Read individual post
- [ ] Subscribe to newsletter
- [ ] Navigate all pages

## 🚀 Production Deployment

Before deploying:
1. ✅ Set all environment variables
2. ✅ Test all payment flows
3. ✅ Verify MongoDB connection
4. ✅ Test admin functions
5. ✅ Check mobile responsiveness
6. ✅ Run `npm run build`
7. ✅ Test production build locally

## 📞 Support

For issues:
1. Check browser console for errors
2. Verify correct port (3003)
3. Check MongoDB connection
4. Verify environment variables
5. Clear browser cache
6. Restart dev server

---

**Your site is ready!** Access it at: `http://localhost:3003` 🎉

