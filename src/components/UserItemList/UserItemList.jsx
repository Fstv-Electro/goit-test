import { fetchAllUsers } from "service/API";
import { useEffect, useState } from "react";
import { UserItem } from "components/UserItem/UserItem";
import { LoadMore } from "components/LoadMore/LoadMore";
import { List } from "./UserItemList.styled";

export const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [userNumber, setUserNumber] = useState(Number(6));

    useEffect(() => {
            fetchAllUsers().then(data => {
                window.localStorage.setItem('dataStorage', JSON.stringify(data));
                setUserData(data);
            }).catch(error => console.log(error));

    }, []);

    function onLoadMore() {
        setUserNumber(prevState => prevState + 3);
    };

    return (
        <List>
            {userData &&
                userData.slice(0, userNumber).map(({user, id, followers, tweets, avatar}) => {
                    return (
                        <UserItem key={id} user={user} id={id} followers={followers} tweets={tweets} avatar={avatar} />
                )
                })
            }
            {userData.length > userNumber && <LoadMore onClick={onLoadMore}/>}
        </List>
    );
};
