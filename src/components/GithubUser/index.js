import { useEffect, useState } from "react";

import { Container, Left, Right, Socials } from './styles';

export const GithubUser = ({bgColor, textColor}) => {
    const [gitUser, setGitUser] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/users/evertonDenis")
        .then(res =>  res.json())
        .then(data => setGitUser(data))
    }, []);

    return (
        <Container bgColor={bgColor} textColor={textColor} >
            <Left>
                <img src={gitUser.avatar_url} alt="perfil do usuário" />
                <h3>{gitUser.name}</h3>
                <span>{gitUser.location}</span>
            </Left>
            <Right>
                <h4>Bio:</h4>
                <span>{gitUser.bio}</span>
                <Socials>
                    <div>
                        <h4>Seguindo</h4>
                        <span>{gitUser.following}</span>
                    </div>
                    <div>
                        <h4>Seguidores</h4>
                        <span>{gitUser.followers}</span>
                    </div>
                </Socials>
                <a href={gitUser.html_url}  >Visitar Github</a>
            </Right>
        </Container>
    )
}