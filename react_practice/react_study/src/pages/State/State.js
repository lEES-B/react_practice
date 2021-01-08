import React from "react";
import "./State.scss";

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            textColor: "skyblue",
            trueFalseColor: false,
            isHidden: false,
        };
    }

    // state 객체의 textColor 변경 >>> state 바꾸는 함수 >>> setState 함수
    handleTextColor = () => {
        // console.log("handleTextColor 함수 실행");
        this.setState({
            textColor: "orange",
        });
    };

    // state 객체의 trueFalseColor 변경 >>> state 바꾸는 함수 >>> setState 함수
    handleToggleClick = () => {
        // console.log("handleToggleClick 함수 실행");

        // 1) 첫 번째 방법
        // if (this.state.trueFalseColor === true) {
        //     this.setState({
        //         trueFalseColor: false,
        //     });
        // };
        // if (this.state.trueFalseColor === false) {
        //     this.setState({
        //         trueFalseColor: true,
        //     });
        // }

        // 2) 두 번째 방법(리팩토링) >>> Boolean 데이터의 활용(true/false를 써주는 대신 if안에는 값자체가 true, false는 느낌표!)
        // if (this.state.trueFalseColor) {
        //     this.setState({
        //         trueFalseColor: false,
        //     });
        // };
        // if (!this.state.trueFalseColor) {
        //     this.setState({
        //         trueFalseColor: true,
        //     });
        // }

        // 3) 세 번째 방법(리팩토링) >>> Boolean 데이터의 활용
        this.setState({
            trueFalseColor: !this.state.trueFalseColor,
        });
        // state에서 trueFalseColor의 기본값을 false로 설정했으니, 위의 함수에서는 this.setState의 trueFalseColor를 반대로 바꾸어주겠다고 적용
    };

    handleHiddenState = () => {
        this.setState({
            isHidden: !this.state.isHidden,
        });
    };

    render() {
        return (
            <div className="State">
                <h1>State Practice</h1>

                {/* state 데이터를 반영하는 요소 */}
                <p style={{ color: this.state.textColor }}> 이 문장의 색을 바꿔봅시다</p>

                {/* state 데이터를 변경하는 요소 >>> click되면 state 상태 변경 */}
                <button onClick={this.handleTextColor}>click</button>

                <br />

                {/* // 삼항연산자(toggle기능) >>> inline 스타일(bad) */}
                <p style={{ color: this.state.trueFalseColor ? "red" : "green" }}>True or False</p>
                <button onClick={this.handleToggleClick}>Change color 첫번째 버튼</button>

                {/* // 삼항연산자(toggle기능) >>> className을 동적으로 변경 */}
                <p className={this.state.trueFalseColor ? "active" : "inactive"}>True or False</p>
                <button onClick={this.handleToggleClick}>Change color 두번째 버튼</button>

                {/* state 상태에 따라서(true/false) 다른 요소 나타내기 */}
                {this.state.isHidden ? (
                    <p>지금은 state 값이 true 입니다.</p>
                ) : (
                    <p>지금은 state 값이 false 입니다.</p>
                )}
                <button onClick={this.handleHiddenState}> 세 번째 버튼 </button>

                {/* 장바구니가 비었을때와 채워져있을 때의 상태를 토글로 보여주려면 */}
                {/* {this.state.isCartEmpty ? <EmptyCart /> : <FilledCart />} */}
            </div>
        );
    }
}

export default State;
