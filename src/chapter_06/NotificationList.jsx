import React from 'react';
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
    {
        id: 4,
        message: "이제 곧 미팅이 종료됩니다.",
    },
    {
        id: 5,
        message: "퇴근 시간입니다.",
    },
    {
        id: 6,
        message: "오늘 하루도 근무 고생하셨습니다.",
    },
];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                })
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        // react v18 에선 StrictMode로 index.js가 감싸져있음
        // 이 모드는 개발 모드에서 react component를 한번 mount -> unmount 까지 시키며 문제가 없는지 확인 하는 것
        // 따라서 unmount 시 clearInterval을 하는 함수가 없으면 처음 단계에서 componentDidMount가 2번 호출되어 2개가 나오게 됨
        if (timer) {
            clearInterval(timer);
        }
    }


    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification
                        key={notification.id}
                        id={notification.id}
                        message={notification.message}/>;
                })}
            </div>
        );
    }
}

export default NotificationList;