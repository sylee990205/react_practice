import React, {useEffect, useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // 컴포넌트가 마운트 된 이후
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행
        // 의존성 배열에 빈 배열을 넣으면 마운트와 언마운트 시 단 한번만 실행
        // 의존성 배열 생략 시 컴포넌트 업데이트 시 마다 실행
        document.title = `You clicked ${count} times`;

        // useEffect 내의 return문을 사용하면
        /*return () => {

        }*/
        // 위와 같은 형태로 사용되고
        // 컴포넌트가 마운트 해제되기 전에 실행됨
    }, [count]);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default Counter;