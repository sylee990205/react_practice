import React from 'react';
import Comment from "./Comment";

const comments = [
    {
        name: "이소영",
        comment: "안녕하세요, 이소영입니다",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "박주희",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
    {
        name: "이하나",
        comment: "리액트 새롭네요.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;