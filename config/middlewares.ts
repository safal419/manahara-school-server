const middlewares = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'https://res.cloudinary.com', 
          ],
          'media-src': ["'self'", 'https://res.cloudinary.com'],
          'script-src': ["'self'"],
          'style-src': ["'self'", "'unsafe-inline'"],
          
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
     origin: [
        'https://manaharaschool.edu.np',
        'https://www.manaharaschool.edu.np',
        'http://localhost:3000',
        
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default middlewares;
