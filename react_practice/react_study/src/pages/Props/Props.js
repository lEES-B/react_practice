import React from "react";
import Child from "./Child/Child";

import "./Props.scss";

class Props extends React.Component {
    constructor() {
        super();
        this.state = {
            childTitleColor: "red",
            isH3Hidden: true,
        };
    }

    // 자식컴포넌트(Child)의 버튼을 클릭하면 h3이 보였다안보였다 하도록 연동
    // state의 isH3Hidden의 불린값을 통해 setState함수로 값을 변경할 수 있게 해주기
    handleH3State = () => {
        this.setState({
            isH3Hidden: !this.state.isH3Hidden,
        });
    };
    // 부모 컴포넌트의 데이터(state에 정의한 내용)를 자식 컴포넌트(<Child/>)에 적용할 때
    render() {
        return (
            <div className="Props">
                <h1> Parent Component </h1>
                <Child
                    titleColor={this.state.childTitleColor}
                    subTitleState={this.state.isH3Hidden}
                    changeH3State={this.handleH3State}
                />
            </div>
        );
    }
}

export default Props;
