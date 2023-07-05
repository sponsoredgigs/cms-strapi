# 📄 SponsoredGigs Content Management System (CMS)

Welcome to SponsoredGigs CMS! This is an integral part of the SponsoredGigs ecosystem, designed specifically to manage jobs, posts, and the admin panel user data with ease.

Built on the robust Strapi framework, this CMS offers a feature-rich platform for content management, complete with a RESTful API for interacting with different data collections, a GraphQL API for advanced querying, and even a webhook setup for seamless content updates.

For more technical details of Strapi, check out the [official documentation](https://docs.strapi.io).

## 💡 How to Use
### Interacting with the REST API
Below are the key RESTful operations you can perform on the `jobs`, `posts`, and `users` endpoints:

| Endpoint | Operation | Description |
| :--- | :--- | :--- |
| `/api/:jobs` | GET | Fetch a list of jobs |
| `/api/:jobs` | POST | Create a new job entry |
| `/api/:jobs/:documentId` | GET | Retrieve a specific job entry |
| `/api/:jobs/:documentId` | PUT | Update a specific job entry |
| `/api/:jobs/:documentId` | DELETE | Delete a specific job entry |
| `/api/:posts` | GET | Retrieve a list of posts |
| `/api/:posts` | POST | Create a new post entry |
| `/api/:posts/:documentId` | GET | Fetch a specific post entry |
| `/api/:post/:documentId` | PUT | Update a specific post entry |
| `/api/:post/:documentId` | DELETE | Delete a specific post entry |
| `/api/:users` | GET | Retrieve a list of Strapi users |
| `/api/:users` | POST | Create a new Strapi user entry |
| `/api/:users/:documentId` | GET | Fetch a specific Strapi user entry |
| `/api/:user/:documentId` | PUT | Update a specific Strapi user entry |
| `/api/:user/:documentId` | DELETE | Delete a specific Strapi user entry |

### Querying the GraphQL API
Our CMS also provides a GraphQL API. To learn more about this, run the development build on your local machine and navigate to `/graphql`.

### Webhook
The CMS will trigger a new static site generation for [SponsoredGigs.com](https://www.sponsoredgigs.com) whenever there's any content update.

## 📋 Collection Schemas
Below are the schemas for the `Job`, `Post`, and `User` collections:

### 📂 Job
| Field | Required | Description |
| :--- | :---: | :--- |
| `title` | Yes | Job title |
| `level` | Yes | Job level: Internship, Entry Level, Associate, Mid-Senior Level, Director, Executive, Other |
| `industry` | Yes | Job industry: Information Technology, Healthcare and Medical Services, Education and Training, etc. |
| `url` | Yes | Job application URL |
| `description` | No | Job description |
| `company` | Yes | Hiring company |
| `companyUrl` | Yes | Hiring company's profile URL |
| `location` | Yes | Job location |
| `salary` | No | Job salary |

### 📄 Post
| Field | Required | Description |
| :--- | :---: | :--- |
| `title` | Yes | Post title |
| `content` | Yes | Post content |
| `media` | No | Post illustration |
| `slug` | Yes | URL path to the post |
| `minutesToRead` | Yes | Estimated read time (in minutes) |
| `author` | Yes | Post author (linked to `User` entity) |

### 👥 User
| Field | Required | Description |
| :--- | :---: | :--- |
| `username` | Yes | User's full name |
| `email` | Yes | User's email |
| `avatar` | No | User's profile picture |
| `role` | Yes | User role: Public, Authenticated |


## 🛠️ Getting Started with Development
Here is how to start the CMS on your local machine with auto-reload enabled, then build and serve the CMS:

```sh
# Start a development server with auto-reload
npm run develop
# or
yarn develop

# Build and serve CMS (auto-reload disabled)
npm run build && npm run start
# or
yarn build && yarn start
```

Schema migration and plugins installation can only be done on the development server.

### Plugins installed
- [GraphQL](https://market.strapi.io/plugins/@strapi-plugin-graphql) - GraphQL API
- [Cloudinary](https://market.strapi.io/providers/@strapi-provider-upload-cloudinary) - Media storage
- [CKEditor](https://market.strapi.io/plugins/@ckeditor-strapi-plugin-ckeditor) - Rich text editor
- [Sendmail](https://www.npmjs.com/package/@strapi/provider-email-sendmail) - Email notifications for account registration and password reset
- [Users & Permissions](https://www.npmjs.com/package/@strapi/plugin-users-permissions) - User authentication and authorization
- [i18n](https://market.strapi.io/plugins/@strapi-plugin-i18n) - Internationalization

## 🚀 Continuous Integration and Delivery (CI/CD)
Each push to the `main` branch triggers the [publish workflow](.github/workflows/publish-ghcr.yaml), which builds and pushes a Docker image to a private registry. The CMS server then picks up this new build and updates itself with the latest image version.
