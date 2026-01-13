interface RateLimitEntry {
   count: number;
   resetTime: number;
}

class RateLimiter {
   private requests: Map<string, RateLimitEntry>;
   private readonly maxRequests: number;
   private readonly windowMs: number;

   constructor(maxRequests = 3, windowMs = 15 * 60 * 1000) {
      // Default: 3 requests per 15 minutes
      this.requests = new Map();
      this.maxRequests = maxRequests;
      this.windowMs = windowMs;

      // Clean up old entries every 5 minutes
      setInterval(() => this.cleanup(), 5 * 60 * 1000);
   }

   check(identifier: string): {
      allowed: boolean;
      remaining: number;
      resetTime: number;
   } {
      const now = Date.now();
      const entry = this.requests.get(identifier);

      if (!entry || now > entry.resetTime) {
         // First request or window expired
         const resetTime = now + this.windowMs;
         this.requests.set(identifier, { count: 1, resetTime });
         return { allowed: true, remaining: this.maxRequests - 1, resetTime };
      }

      if (entry.count >= this.maxRequests) {
         // Rate limit exceeded
         return { allowed: false, remaining: 0, resetTime: entry.resetTime };
      }

      // Increment count
      entry.count++;
      this.requests.set(identifier, entry);
      return {
         allowed: true,
         remaining: this.maxRequests - entry.count,
         resetTime: entry.resetTime,
      };
   }

   private cleanup() {
      const now = Date.now();
      for (const [key, entry] of this.requests.entries()) {
         if (now > entry.resetTime) {
            this.requests.delete(key);
         }
      }
   }
}

// Singleton instance
const rateLimiter = new RateLimiter();

export function checkRateLimit(identifier: string): {
   allowed: boolean;
   remaining: number;
   resetTime: number;
} {
   return rateLimiter.check(identifier);
}
