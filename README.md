## Project Overview

- This is a react demo for https://goldeneggs.info/
- Development: React, TypeScript, Express
- Deployment: Heroku
- Currently there are three pages available:
  [Homepage](https://golden-eggs-demo.herokuapp.com/#/)
  [Client Feedback](https://golden-eggs-demo.herokuapp.com/#/aboutus)
  [Contacts](https://golden-eggs-demo.herokuapp.com/#/contact-us)

## npm scripts

- `npm run start` to run the project
- `npm run build` to get a webpack bundle at /dist
- `npm run lint-and-fix` to format scripts

## Deployment

According to [this tutorial](https://www.educative.io/edpresso/how-to-deploy-react-app-to-heroku),
this application is served by Node.js, and here is the [source code](https://github.com/Jocelyn59435/golden-eggs-react-demo-backend)
For Heroku I use HashRouter rather than BrowserRouter to fix client-side routing.
With AWS S3 bucket, BrowserRouter is fine, and here is the [link](http://golden-eggs-react-demo.s3-website-us-east-1.amazonaws.com)
