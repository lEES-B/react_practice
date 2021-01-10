import React from "react";

import "./Child.scss";

class Child extends React.Component {
    render() {
        //console.log("this.props : ", this.props);  ->   this.props : {titleColor: "red", subTitleState:true} 콘솔 출력됨

        // 구조 분해 할당
        const { titleColor, subTitleState, changeH3State } = this.props;
        return (
            <div className="child">
                {/* 2) 'block'과 'none'을 scss의 클래스로 빼주어서 연동하기 */}
                <h1 style={{ color: titleColor }}> Child title </h1>
                <h3 className={subTitleState ? "showSubTitle" : "hideSubTitle"}>
                    Child sub title - defalut 값이 true이면 보이고 false이면 안보인다
                </h3>

                {/* 1) 인라인 스타일로 props 속성값 주기
                <h1 style={{ color: this.props.titleColor }}> Child title </h1>
                <h3 style={{ display: this.props.subTitleState ? "block" : "none" }}>
                    Child sub title - defalut 값이 true이면 보이고 false이면 안보인다
                </h3> */}

                {/* 3) 부모의 state를 바꿔주는 요소 */}
                <button onClick={changeH3State}>h3 컨트롤 버튼</button>
            </div>
        );
    }
}

export default Child;
