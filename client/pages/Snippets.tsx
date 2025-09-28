import { Copy, ExternalLink, Star } from "lucide-react";
import { useState } from "react";

const Snippets = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const snippets = [
    {
      id: "1",
      title: "React Custom Hook for API Calls",
      description: "A versatile custom hook for handling API requests with loading states, error handling, and caching.",
      category: "React",
      language: "TypeScript",
      code: `import { useState, useEffect } from 'react';

interface UseApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

export function useApi<T>(url: string, options?: UseApiOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: options?.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          body: options?.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options?.method]);

  return { data, loading, error };
}`,
      stars: 24,
      tags: ["React", "TypeScript", "API", "Custom Hook"]
    },
    {
      id: "2",
      title: "Debounced Search Component",
      description: "An optimized search component with debouncing to prevent excessive API calls.",
      category: "React",
      language: "TypeScript",
      code: `import React, { useState, useEffect, useCallback } from 'react';

interface DebounceSearchProps {
  onSearch: (query: string) => void;
  delay?: number;
  placeholder?: string;
}

export const DebounceSearch: React.FC<DebounceSearchProps> = ({
  onSearch,
  delay = 300,
  placeholder = "Search..."
}) => {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      onSearch(searchQuery);
    }, delay),
    [onSearch, delay]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
    />
  );
};

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}`,
      stars: 18,
      tags: ["React", "TypeScript", "Performance", "Debouncing"]
    },
    {
      id: "3",
      title: "Node.js Rate Limiter Middleware",
      description: "Express middleware for implementing rate limiting with Redis backing store.",
      category: "Node.js",
      language: "JavaScript",
      code: `const redis = require('redis');
const client = redis.createClient();

const rateLimit = (options = {}) => {
  const {
    windowMs = 15 * 60 * 1000, // 15 minutes
    max = 100, // limit each IP to 100 requests per windowMs
    message = 'Too many requests, please try again later.',
    standardHeaders = true,
    legacyHeaders = false,
  } = options;

  return async (req, res, next) => {
    const key = \`rate_limit:\${req.ip}\`;
    
    try {
      const current = await client.incr(key);
      
      if (current === 1) {
        await client.expire(key, Math.ceil(windowMs / 1000));
      }
      
      const ttl = await client.ttl(key);
      
      if (standardHeaders) {
        res.set({
          'RateLimit-Limit': max,
          'RateLimit-Remaining': Math.max(0, max - current),
          'RateLimit-Reset': new Date(Date.now() + ttl * 1000).toISOString(),
        });
      }
      
      if (current > max) {
        return res.status(429).json({ error: message });
      }
      
      next();
    } catch (error) {
      console.error('Rate limiting error:', error);
      next(); // Fail open
    }
  };
};

module.exports = rateLimit;`,
      stars: 31,
      tags: ["Node.js", "Express", "Redis", "Rate Limiting"]
    },
    {
      id: "4",
      title: "CSS Grid Auto-fit Layout",
      description: "Responsive grid layout that automatically adjusts column count based on available space.",
      category: "CSS",
      language: "CSS",
      code: `.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.responsive-grid-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.responsive-grid-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* For smaller items */
.responsive-grid-small {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

/* For larger items */
.responsive-grid-large {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}`,
      stars: 15,
      tags: ["CSS", "Grid", "Responsive", "Layout"]
    },
    {
      id: "5",
      title: "Python Async Context Manager",
      description: "A reusable async context manager for handling database connections and transactions.",
      category: "Python",
      language: "Python",
      code: `import asyncio
import asyncpg
from contextlib import asynccontextmanager
from typing import AsyncIterator

class DatabaseManager:
    def __init__(self, connection_string: str):
        self.connection_string = connection_string
        self.pool = None
    
    async def initialize_pool(self):
        """Initialize the connection pool"""
        self.pool = await asyncpg.create_pool(self.connection_string)
    
    @asynccontextmanager
    async def get_connection(self) -> AsyncIterator[asyncpg.Connection]:
        """Get a connection from the pool"""
        if not self.pool:
            await self.initialize_pool()
        
        async with self.pool.acquire() as connection:
            yield connection
    
    @asynccontextmanager
    async def transaction(self) -> AsyncIterator[asyncpg.Connection]:
        """Get a connection with transaction support"""
        async with self.get_connection() as connection:
            async with connection.transaction():
                yield connection

# Usage example
async def main():
    db = DatabaseManager("postgresql://user:pass@localhost/db")
    
    # Simple query
    async with db.get_connection() as conn:
        result = await conn.fetch("SELECT * FROM users")
    
    # Transaction
    async with db.transaction() as conn:
        await conn.execute("INSERT INTO users (name) VALUES ($1)", "John")
        await conn.execute("UPDATE accounts SET balance = balance - 100 WHERE user_id = $1", 1)

if __name__ == "__main__":
    asyncio.run(main())`,
      stars: 27,
      tags: ["Python", "Async", "Database", "Context Manager"]
    }
  ];

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-light">
      {/* Hero Section */}
      <section className="bg-portfolio-dark text-portfolio-text-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-6">
              Code Snippets
            </h1>
            <p className="text-xl text-portfolio-text-light/80 max-w-3xl mx-auto">
              A curated collection of useful code snippets, utilities, and solutions 
              I've developed over the years. Feel free to use them in your projects!
            </p>
          </div>
        </div>
      </section>

      {/* Snippets Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {snippets.map((snippet) => (
              <div key={snippet.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-portfolio-dark/10">
                {/* Header */}
                <div className="p-6 border-b border-portfolio-dark/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-portfolio-dark mb-2">
                        {snippet.title}
                      </h3>
                      <p className="text-portfolio-dark/70 text-sm leading-relaxed">
                        {snippet.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-portfolio-dark/60">{snippet.stars}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {snippet.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-portfolio-light border border-portfolio-dark/20 text-portfolio-dark text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="px-3 py-1 bg-portfolio-dark text-portfolio-text-light text-xs rounded-full">
                      {snippet.language}
                    </span>
                  </div>
                </div>
                
                {/* Code Block */}
                <div className="relative">
                  <pre className="bg-portfolio-dark text-portfolio-text-light p-6 overflow-x-auto text-sm leading-relaxed">
                    <code>{snippet.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(snippet.code, snippet.id)}
                    className="absolute top-4 right-4 p-2 bg-portfolio-text-light/10 hover:bg-portfolio-text-light/20 rounded-lg transition-colors duration-200"
                  >
                    {copiedId === snippet.id ? (
                      <span className="text-green-400 text-xs">Copied!</span>
                    ) : (
                      <Copy className="h-4 w-4 text-portfolio-text-light" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-portfolio-dark text-portfolio-text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-portfolio-text-light/80 mb-8 max-w-2xl mx-auto">
            Check out my GitHub for more code examples, open-source contributions, and complete projects.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-portfolio-text-light text-portfolio-dark font-medium rounded-lg hover:bg-portfolio-text-light/90 transition-colors duration-200"
          >
            <ExternalLink className="mr-3 h-5 w-5" />
            Visit My GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Snippets;
