# Pet Care application using MongoDB and Next.js 

This example shows how to create an application using Next.js and MongoDB.

## Demo 

**Pets**: we will put the link here after we deploy it

Pets is an application that allows users to add their pets' information (e.g., name, owner's name, diet, age, dislikes, likes, and photo). They can also delete it or edit it anytime.

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/with-mongodb-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npm init next-app --example with-mongodb with-mongodb-app
# or
yarn create next-app --example with-mongodb with-mongodb-app
```

### Step 1. Connect MongoDB to the application

Please see the [steps](./link-steps.md) on how to connect MongoDB to your application

### Step 2. Set up schema models for the application

Based on the types of data needed for your application, you will modify the type definitions in [Pet.js](./models/Pet) as well as the seed data in [Pet-sampleSeed.json](./seed/Pet-sampleSeed)

### Step 3. Import sample seed data to your MongoDB

Please see the [steps](./data_import.md) on importing sample seed data into your MongoDB

### Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [ZEIT Now](https://zeit.co/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
© 2020 GitHub, Inc.