import React from "react";
import { Link } from "react-router-dom";


class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <main>
                    <div className="loginBox">
                        <h1>Instagram</h1>
                        <div className="loginInfo">
                            <input
                                className="userId"
                                type="text"
                                placeholder=" 전화번호, 사용자 이름 또는 이메일"
                            />
                            <input
                                className="userPw"
                                type="password"
                                placeholder=" 비밀번호"
                            />
                            <button className="loginBtn">
                                <Link to="/Main">로그인</Link>
                            </button>
                            <div className="or">
                                <div className="line"></div>
                                <div className="lineText">또는</div>
                                <div className="line"></div>
                            </div>
                            <div className="facebookLogin">
                                <img
                                    src="../img/facebook_logo.JPG"
                                    alt="facebook logo"
                                />
                                <span>Facebook으로 로그인</span>
                            </div>
                            <div>
                                <button className="forgotPw">
                                    비밀번호를 잊으셨나요?
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <ul>
                        <li>소개</li>
                        <li>블로그</li>
                        <li>채용 정보</li>
                        <li>도움말</li>
                        <li>API</li>
                        <li>개인정보처리방침</li>
                        <li>약관</li>
                        <li>인기 계정</li>
                        <li>해시태그</li>
                        <li>위치</li>
                    </ul>
                    <ul>
                        <li>뷰티</li>
                        <li>댄스 및 공연</li>
                        <li>피트니스</li>
                        <li>식음료</li>
                        <li>집 및 정원</li>
                        <li>음악</li>
                        <li>시각 예술</li>
                    </ul>
                    <div className="copyright">
                        <span>한국어∨</span>
                        <span>© 2020 Westagram from Facebook</span>
                    </div>
                </footer>
            </div>
        
        );
    }
}

export default Login;
