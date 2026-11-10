/* Separate shop configuration. Public browser-safe values only; never use a service-role key. */
const RESTAURANT_CONFIG = {
  publicMenuUrl: "", // Blank uses this deployment for table QR links.
  restaurantName: "Yummy Momo",
  tagline: "Yummy in your tummy",
  currency: "₹",
  // Use this shop's OWN Supabase project, not another restaurant's project.
  supabaseUrl: "https://yifevpecdoyhjfncwana.supabase.co",
  supabaseAnonKey: "sb_publishable_rY4M7sUrrMp7YOIxH3FAOQ_YDZEyT6R",
  // Optional: this shop's Google review link. Blank disables the review prompt.
  googleReviewUrl: "",
  // Cloudflare R2 image storage (dish photos, category banners, logos, bill logo).
  // One Cloudflare R2 bucket can be shared by every restaurant deployed from this
  // same codebase — restaurantSlug just keeps each restaurant's images in their
  // own folder inside that bucket, so names never clash between restaurants.
  // Lowercase letters, numbers and hyphens only. Must be unique per restaurant.
  restaurantSlug: "yummy-momo",
  // Public base URL that serves the R2 bucket (no trailing slash), e.g.
  // "https://images.yourdomain.com" (custom domain, recommended) or the
  // bucket's own "https://pub-xxxxxxxx.r2.dev" URL. Leave blank to keep using
  // Supabase Storage for images (old behaviour).
  imagesBaseUrl: "https://pub-40a3fb2c6def40fca0a48be5e089f7a6.r2.dev",
  categories: ["All", "Steamed Momos", "Fried Momos", "Kurkure Momos", "Tandoori Momos", "Chutney & Dips", "Drinks", "Desserts"],
  menuItems: []
};
