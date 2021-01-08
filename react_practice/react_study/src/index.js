import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
// 화면에 보여지는 것은 Routes (SPA) 하나 뿐이니깐 Routes만 import해준다

// 필요한 파일 연동
import "./pages/Login/Login.scss";

ReactDOM.render(<Routes />, document.getElementById("root"));
