# Creative agency website

## Description

The project is initialized with CNA (https://nextjs.org/docs/pages/api-reference/create-next-app) on typescript and tailwind template.

- It uses Mongo DB as database and Google Cloud storage for image storage.
- At the moment the auth providers available are Github and Gitlab.

## Getting Started

### Dependencies

- Not mandatory but is reccomended the use of yarn >= 1.22 and node >= 20.10

### Installing

1. Clone the repo - `clone https://github.com/adrianurs/next-agency.git`
2. Install client packages - `npm install` or `yarn`
3. Install mock-server packages - `cd mock-server && npm install` or `cd mock-server && yarn`
4. Include the next .env file in the project root changing the keys with your own

   ```sh
   MONGO_URL=FILL_ME
   NEXT_PUBLIC_API_URL=FILL_ME
   AUTH_SECRET=FILL_ME

    # Auth providers
   GITHUB_CLIENT_ID=FILL_ME
   GITHUB_SECRET=FILL_ME
   GITLAB_CLIENT_ID=FILL_ME
   GITLAB_SECRET=FILL_ME

    # Google cloud storage
   GCS_CLIENT_EMAIL=FILL_ME
   GCS_PROJECT_ID=FILL_ME
   GCS_PRIVATE_KEY=FILL_ME
   ```

### Executing program

Start the development server with - `npm run dev` or `yarn dev`

## Authors

[@adrianurs](https://linkedin.com/in/adrianurs)
