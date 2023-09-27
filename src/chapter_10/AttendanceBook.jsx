import React from 'react';

const students = [
    {
        id: 1,
        name: "Soyoung",
    },
 {
        id: 2,
        name: "Hana",
    },
 {
        id: 3,
        name: "Jay",
    },
 {
        id: 4,
        name: "Jake",
    },
 {
        id: 5,
        name: "Martin",
    },

];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                //key 값은 다양한 형태로 사용 가능
                /*return <li key={student.id}>{student.name}</li>;*/ // id값을 그대로 사용
                /*return <li key={`student-id-${student.id}`}>{student.name}</li>;*/ // id값과 문자열을 함께 사용
                return <li key={index}>{student.name}</li>; // index
            })}
        </ul>
    );
}

export default AttendanceBook;