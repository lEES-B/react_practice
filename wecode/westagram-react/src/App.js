import React from "react";
import "./App.scss";

//class형 compoent는 render() 메소드 가 필수 + return문 이하에 JSX를 써준다
export class App extends React.Component {
    render() {
        return (
            // 화면에 보여지는 내용(return 안에), JSX로 써주기!!!!!
            <div className="App">
                {" "}
                // class명은 className으로 해주기
                <h1>App 컴포넌트</h1>
                <input type="text" placeholder="댓글쓰기..." /> //self-closing
                해주기
                <button onClick={() => alert("hi")}>click</button>
            </div>
        );
    }
}

// 함수형 component
// function App() {
//   return (
//    <h1></h1>
//   );
// }

export default App;
