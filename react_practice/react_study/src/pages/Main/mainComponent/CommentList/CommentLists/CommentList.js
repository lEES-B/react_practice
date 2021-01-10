import React, { Component } from "react";
import "./CommentList.scss";

class CommentList extends Component {
    render() {
        return (
            <li className="commentList">
                <span> {this.props.username} </span>
                <span> {this.props.content} </span>
                <span> {this.props.isLiked ? "like" : "dislike"} </span>
            </li>
        );
    }
}

// commentList 컴포넌트 생성 >>> 부모 컴포넌트(Main.js)에 import연결 + return 내 해당 컴포넌트 적용
// props라는 메소드를 통해 부모 컴포넌트로부터 username, content, isLiked 키로 연결 >>> 부모에서는 e.username등 메소드 함수를 사용하여 state값 연결)
// state안에는 commentData로 실제 데이터(백엔드가 줘야할 값들 임시로 써놓음)가 있기때문에 해당 키와 값의 연결고리를 연결해줌
// key는 map이 쓰여진 부분(부모 컴포넌트)에만 써주면 된다
export default CommentList;
