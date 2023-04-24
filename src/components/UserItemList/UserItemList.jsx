import { fetchAllUsers } from "service/API";
import { useEffect, useState } from "react";
import { UserItem } from "components/UserItem/UserItem";
import { List } from "./UserItemList.styled";

export const UserList = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
            fetchAllUsers().then(data => {
                window.localStorage.setItem('dataStorage', JSON.stringify(data));
                setUserData(data);
            }).catch(error => console.log(error));

    }, []);

    return (
        <List>
            {userData &&
                userData.map(({user, id, followers, tweets, avatar}) => {
                    return (
                        <UserItem key={id} user={user} id={id} followers={followers} tweets={tweets} avatar={avatar} />
                )
                })
            }
        </List>
    );
};
