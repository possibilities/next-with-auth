# Next.js example with auth

[![CircleCI](https://circleci.com/gh/possibilities/next.js-with-auth.svg?style=svg)](https://circleci.com/gh/possibilities/next.js-with-auth)

### Usage

First run the auth service in a terminal tab/window/panel

```
cd /tmp
git clone https://github.com/possibilities/micro-auth.git
cd micro-auth
npm install
AUTHENTICATION_SECRET_KEY=password123 API_PORT=5555 npm run dev
```

Then run the example app using the same secret and provide localhost as the api url

```
cd /tmp
git clone https://github.com/possibilities/next.js-with-auth.git
cd next.js-with-auth
npm install
AUTHENTICATION_SECRET_KEY=password123 AUTHENTICATION_API_URL=http://localhost:5555 npm run dev
```
