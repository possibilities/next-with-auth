# Next.js example with auth

### Usage

First run the auth service in a terminal tab/window/panel

```
cd /tmp
git clone https://github.com/possibilities/micro-auth.git
cd micro-auth
npm install
AUTHENTICATION_SECRET_KEY=password123 npm start
```

Then run the example app using the same secret and provide localhost has the api url

```
cd /tmp
git clone https://github.com/possibilities/next.js-with-auth.git
cd next.js-with-auth
npm install
AUTHENTICATION_SECRET_KEY=password123 AUTHENTICATION_API_URL=http://localhost:4000 npm run dev
```
