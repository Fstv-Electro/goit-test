import { useState, useEffect } from "react";
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

export const UserItem = ({user, tweets, avatar, id, followers }) => {
    const [isFollow, setIsFollow] = useState(JSON.parse(localStorage.getItem(id)) || false);

    useEffect(() => {
        localStorage.setItem(id, isFollow);
    }, [id, isFollow]);

    
    function handleFollow() {
        setIsFollow(!isFollow);
    };

    return (
        <Container>
            <TopContainer>
                <LogoHead src={Logo} />
            </TopContainer>
            <Border>
                <AvatarContainer>
                    <Avatar avatar={avatar} />
                </AvatarContainer>
            </Border>
            <BottomContainer>
                <InfoText style={{marginBottom: 16, marginTop: 62}}>{tweets} tweets</InfoText>
                <InfoText style={{marginBottom: 26, marginTop: 0}}>{isFollow ? followers + 1 : followers} followers</InfoText>
                    <BtnFollowers handleClick={handleFollow} isFollow={isFollow} />
            </BottomContainer>
        </Container>
    );
};
