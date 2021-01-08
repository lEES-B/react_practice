// (1) 필요한 패키지(고정) - 노드모듈에서 확인 가능
import React from "react";
import ReactDOM from "react-dom";

// (2) 필요한 컴포넌트
import Routes from "./Routes";

// (3) 연동되는 css 파일
import "./styles/reset.scss";
import "./pages/Login/Login.scss";
import "./pages/Main/Main.scss";

ReactDOM.render(<Routes />, document.getElementById("root"));

// 화면에 보여줄 컴포넌트(Routes(default페이지), =SPA), 컴포넌트가 있는 위치(root가 있는 곳)
// 이 페이지는 index.html 페이지와 Routes.js 파일을 연결해주는 역할

//component - 재사용 가능한 UI 단위(class형-직관적 / function형 - 많이 사용)
