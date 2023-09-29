import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title={"Soyoung Lee"} backgroundColor={"pink"}>
            <p>안녕하세요, 소영입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            <p>신기하네요!</p>
        </Card>
    );
}

export default ProfileCard;