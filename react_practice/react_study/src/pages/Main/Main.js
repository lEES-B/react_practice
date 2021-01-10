import React, { Component } from "react";
import CommentList from "./mainComponent/CommentList/CommentLists/CommentList";

import "./Main.scss";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            // commentData라는 이름의 배열을 state 값으로 넣어줌
            // 이 데이터는 백엔드가 갖고 있음. UI구현을 위해 임시적으로 써줌
            commentData: [
                {
                    id: 1,
                    username: "username1",
                    content: "첫 번째 comment",
                    isLiked: false,
                },
                {
                    id: 2,
                    username: "username2",
                    content: "두 번째 comment",
                    isLiked: false,
                },
                {
                    id: 3,
                    username: "username3",
                    content: "세 번째 comment",
                    isLiked: false,
                },
                {
                    id: 4,
                    username: "username4",
                    content: "네 번째 comment",
                    isLiked: false,
                },
            ],
        };
    }

    render() {
        return (
            <div className="Main">
                <h1>Main Page</h1>
                <ul>
                    {/* 2) 컴포넌트 분리 후 */}
                    {this.state.commentData.map((e) => {
                        return (
                            <CommentList
                                key={e.id}
                                username={e.username}
                                content={e.content}
                                isLiked={e.isLiked}
                            />
                        );
                    })}

                    {/* 1) 컴포넌트 분리 전 >>> 배열을 map으로 구성하여 state키 적용하여 값 불러옴 / arr.map((e) => {콜백함수}) 
                    >>> map 함수 쓸때는 꼭 고유값구분을 위해 key를 써준다!!!!! */}
                    {/* {this.state.commentData.map( e => {
                        return (
                            <li key={e.id}>
                                <span> {e.username} </span>
                                <span> {e.content} </span>
                                <span> {e.isLiked ? "좋아요" : "싫어요"} </span>
                            </li>
                        );
                    })} */}
                </ul>
                <div>
                    <input placeholder="입력" />
                    <button> Click </button>
                </div>
            </div>
        );
    }
}

export default Main;
