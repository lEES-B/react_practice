import React from "react";

class Main extends React.Component {
    render() {
        return (
            <>
                <div class="commentWrite">
                    <input
                        class="write"
                        type="text"
                        placeholder="댓글 달기..."
                    />
                    <button class="post">게시</button>
                </div>
            </>
        );
    }
}

export default Main;
