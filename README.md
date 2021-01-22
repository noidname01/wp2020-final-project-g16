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
   * Layout Control
   * Frontend Design
* Demo video
### 徐有齊
* Back-end
   * Schema
   * Resolvers
* Front-end
   * Excel Editor
   * graphql.js
   * 實作和後端的連接
  
## Deploy
https://wp2020-final-project-g16.herokuapp.com/

### 帳密
* name: demo-g16
* password: demo-g16

## 簡介
 有時候我們需要同時寄電子郵件給很多人。當遇到每封信內容都差不多，只有些許地方不同的情況時，寄信會變得非常棘手，因此我們架設了EEMAIL網站，提供**自訂變數**的電子郵件編輯器，並可**自動產生或讀取excel檔案**讓使用者輕鬆設定每一個收件者要收到的變數內容。此外我們也提供**儲存模板**的服務，當使用者下次要使用類似的信件內容，只需要再次設定或上傳excel檔即可。
 
## 使用說明

您需要提供自己的**電子郵件**和**電子郵件信箱密碼**，並且可能需要**調低電子郵件的安全設定**(e.g. 若使用gmail，您要先由此連結設定信箱：https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4POySDtiISNkTu8R0YVjXXGzgTxAQbLaBzALNiachw114x9CGCXViDQoIHfEeG554xgRoAJJGpN76Y7ZdfQaudZ3PrRHw)
才能使用。
 
當帳號創建完畢並登入後，您會看到畫面左側的menu
1. New (創建新郵件)
  * Editor
    * 您可以在這個畫面編輯您的郵件，右上角的按鈕可以選顏色和插入變數，變數可以是中文/注音/英文字母/數字，但不可以是其他符號。
    * 變數顏色只是為了標示清楚，並沒有實際的作用。
    * 點選右上角的`Save as template`可將郵件存為模板以供下次使用(儲存模板時`Name`不可留白，`Description`可留白)
    * **離開此頁面或儲存時變數不可為空字串**
  * Excel
    * 目前僅提供**最多10個**收件者(僅是為了避免用作惡意用途而設的限制)
    * 第一行必為電子郵件地址，若該行為空字串則該行不會被預覽或寄出
    * `Download Excel` 可自動生成並下載符合格式的`.xlsx`檔案
    * `Upload Excel` 可上傳編輯好的`.xlsx`檔案 
    * **可以自己編輯excel上傳，但第一列的內容必須和網站顯示的一模一樣(顏色不拘)**
  * Preview
    * 可預覽每封信件內容
  * Send
    * 點擊按鈕後即會寄出郵件，並顯示是否成功
    * 點擊後在`SENT`頁面會有紀錄
2. Template (模板)
  * 可以刪除模板
  * 點選`Import`會直接進入 `New->Editor`頁面
3. Sent (寄件紀錄)
4. Settings (設定)
  * 可以更改使用者名稱、密碼、電子郵件、電子郵件密碼
  * **可調整亮/暗模式**
  
## File Structures
```
├── client/
│    ├── dist/
│    └── src/
│        ├── components/
│        ├── config/
│        ├── container/
│        ├── css/
│        ├── images/
│        ├── routes/
│        ├ index.html
│        ├ index.js
│        └ graphql.js
├── server/
│    ├── config/
│    ├── mailer/
│    ├── models/
│    ├── resolvers/
│    └── schema/        
├ index.js
├ packages.json
├ yarn.lock
├ .gitignore
└ .prettierrc
```

## Dependencies
### Client (前端)
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
* **"exceljs": "^4.2.0",**
  * Generate `.xlsx` files and parsing them
  * This is not the excel editor, the excel editor is created by "react-datasheet"
* **"file-loader": "^6.2.0",**
  * To load `.xlsx` file from local
* **"file-saver": "^2.0.5",**
  * To save `.xlsx` file from frontend
* "history": "^5.0.0",
* **"html-react-parser": "^1.2.1",**
  * To parse html string to react nodes
  * This module enable us to save templates, since the emails we send are not pure text
* **"html-webpack-plugin": "^4.5.0",**
  * Webpack dependencies
* "install": "^0.13.0",
* "jquery": "^3.5.1",
* "path": "^0.12.7",
* "popper.js": "^1.16.1",
* "react": "^17.0.1",
* **"react-bootstrap": "^1.4.3",**
  * To make frontend prettier
* "react-color": "^2.19.3",
* **"react-custom-scrollbars": "^4.2.1",**
  * Provide nice-looking scroll bars to frontend
* "react-data-grid": "^7.0.0-canary.34",
* **"react-datasheet": "^1.4.8",**
  * Excel editor for React
* "react-dom": "^17.0.1",
* "react-email-editor": "^1.2.0",
* "react-hot-loader": "^4.13.0",
* "react-router-dom": "^5.2.0",
  * Enable routing
* "react-script": "^2.0.5",
* **"react-summernote": "^2.0.2",**
  * Text editor, but we slightly modified to create <input> inside it
* "style-loader": "^2.0.0",
* **"uuidv4": "^6.2.6",**
  * Generate IDs
* "webpack": "^5.10.1",
* "webpack-cli": "^4.2.0",
* "webpack-dev-server": "^3.11.0"
### Server (後端)
* "@babel/polyfill": "^7.12.1",
* **"apollo-server-express": "^2.19.2",**
  * Express
* "bcryptjs": "^2.4.3",
* "body-parser": "^1.19.0",
* **"concurrently": "^5.3.0",**
  * 同時跑前後端
* "connect-flash": "^0.1.1",
* "cors": "^2.8.5",
* "dotenv": "^8.2.0",
* "dotenv-defaults": "^2.0.1",
* "express": "^4.17.1",
* "express-session": "^1.17.1",
* "gsap": "^3.6.0",
* **"mongoose": "^5.11.4",**
  * 資料庫
* **"nodemailer": "^6.4.17",**
  * 寄信用套件
* "nodemon": "^2.0.6",
* "passport": "^0.4.1",
* "passport-local": "^1.0.0",
* "path": "^0.12.7",
* "react-bootstrap": "^1.4.3"

