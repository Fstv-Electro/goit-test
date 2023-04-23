import { fetchAllUsers } from "service/API"
import { useState } from "react";
import {
    Container,
    TopContainer,
    BottomContainer,
    AvatarContainer,
    Avatar,
    LogoHead,
    Border,
    InfoText
} from "./UserItem.styled";
import { BtnFollowers } from "components/BtnFollowers/BtnFollowers";
import Logo from '../../image/Logo.svg';

export const UserItem = () => {
    const [user, setUser] = useState('');
    const [userTweets, setUserTweets] = useState(0);
    const [userAvatar, setUserAvatar] = useState('');
    const [userFollowers, setUserFollowers] = useState(0);
    const [isFollow, setIsFollow] = useState(false);

    fetchAllUsers().then(res => {
        setUser(res[0].user);
        setUserTweets(res[0].tweets);
        setUserAvatar(res[0].avatar);
        setUserFollowers(res[0].followers);

    });
    console.log(user);
    console.log(userTweets);
    console.log(userAvatar);
    console.log(userFollowers);
    

    function handleClick() {
        setIsFollow(!isFollow);
    };


    return (
        <Container>
            <TopContainer>
                <LogoHead src={Logo} />
            </TopContainer>
            <Border>
                <AvatarContainer>
                    <Avatar avatar={userAvatar} />
                </AvatarContainer>
            </Border>
            <BottomContainer>
                <InfoText style={{marginBottom: 16, marginTop: 62}}>{userTweets} tweets</InfoText>
                <InfoText style={{marginBottom: 26, marginTop: 0}}>{userFollowers} followers</InfoText>
                <BtnFollowers handleClick={handleClick} isFollow={isFollow} />
            </BottomContainer>
        </Container>
    );
};
