// 필요한 패키지 import(아래에서 쓰기 위해 임포트 하는 것임)
import React from "react";
import {
    BrowserRouter as Router, //Router 라는 이름의 BrowserRouter를 import
    Switch,
    Route,
} from "react-router-dom";

// 필요한 component
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

// html 페이지가 하나밖에없어도(SPA) 아래 경로 지정에 따라서 여러개의 컴포넌트를 보여줄 수 있다
// Routes 컴포넌트(=최상위 컴포넌트) 하위에서 여러 다른 컴포넌트를 관리
class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/main" component={Main} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
