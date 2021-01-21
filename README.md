# wp2020-final-project

## Members
### 王友廷
* All-end
 * Environment setup
* Front-end
 * Email Editor( Summernote )
 * Email Preview
* Back-end
 * Send email
 
### 王維芯
* Front-end
 * 
* Demo video editing
### 徐有齊
* Back-end
 * Schema
 * Resolvers
* Front-end
 * Excel Editor

## To start the service...
```bash
git pull
yarn run local-install
yarn run dev
```
:warning: **Do not mix with npm!!**

## Dependencies
### Client
* "@apollo/client": "^3.3.7",
* "@babel/core": "^7.12.10",
* "@babel/preset-env": "^7.12.10",
* "@babel/preset-react": "^7.12.10",
* "@material-ui/core": "^4.11.2",
* "@material-ui/lab": "^4.0.0-alpha.57",
* "@popperjs/core": "^2.6.0",
* "axios": "^0.21.0",
* "babel-loader": "^8.2.2",
* "bootstrap": "^4.6.0",
* "css-loader": "^5.0.1",
* "dotenv": "^8.2.0",
* "exceljs": "^4.2.0",
  * Generate `.xlsx` files and parsing them
  * This is not the excel editor, the excel editor is created by "react-datasheet"
* "file-loader": "^6.2.0",
  * To load `.xlsx` file from local
* "file-saver": "^2.0.5",
  * To save `.xlsx` file from frontend
* "history": "^5.0.0",
* "html-react-parser": "^1.2.1",
  * To parse html string to react nodes
  * This module enable us to save templates, since the emails we send are not pure text
* "html-webpack-plugin": "^4.5.0",
  * Webpack dependencies
* "install": "^0.13.0",
* "jquery": "^3.5.1",
* "path": "^0.12.7",
* "popper.js": "^1.16.1",
* "react": "^17.0.1",
* "react-bootstrap": "^1.4.3",
  * To make frontend prettier
* "react-color": "^2.19.3",
* "react-custom-scrollbars": "^4.2.1",
  * Provide nice-looking scroll bars to frontend
* "react-data-grid": "^7.0.0-canary.34",
* "react-datasheet": "^1.4.8",
  * Excel editor for React
* "react-dom": "^17.0.1",
* "react-email-editor": "^1.2.0",
* "react-hot-loader": "^4.13.0",
* "react-router-dom": "^5.2.0",
  * Enable routing
* "react-script": "^2.0.5",
* "react-summernote": "^2.0.2",
  * Text editor, but we slightly modified to create <input> inside it
* "style-loader": "^2.0.0",
* "uuidv4": "^6.2.6",
  * Generate IDs
* "webpack": "^5.10.1",
* "webpack-cli": "^4.2.0",
* "webpack-dev-server": "^3.11.0"
### Server
  ```
  "concurrently": "^5.3.0",
  "cors": "^2.8.5",
  "dotenv": "^8.2.0",
  "express": "^4.17.1",
  "nodemon": "^2.0.6",
  "path": "^0.12.7"  
  ```
## Schema
### User
* username
* userId
* emailAddress
* emailPassword
### Template
* templatetId
* userId
* content
### Draft
* draftId
* userId
* templateId
* xlsxContent
### Sent
* sentId
* draftContent
