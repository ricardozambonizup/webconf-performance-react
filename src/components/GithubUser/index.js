import { memo, useEffect, useState } from 'react';

import { Container, Left, Right, Socials, ButtonContainer } from './styles';

export const GithubUser = memo(({bgColor, textColor, getGithubProfile}) => {
    const [gitUser, setGitUser] = useState({});
    const [userQuery, setUserQuery] = useState('evertonDenis');

    const Zuppers = [ 
        'LG95', 
        'joaobranquinhozup', 
        'ricardojsilva', 
        'arthurribeirozup', 
        'rafamsilva', 
        'evertonDenis', 
        'ricmaloy',
        'bleil',
    ];

    function handleRandomZupper() {
        const random = Math.floor(Math.random() * 8);
        setUserQuery(Zuppers[random]);
    }

    useEffect(() => {
        getGithubProfile(userQuery)
        .then(res =>  res.json())
        .then(data => setGitUser(data))
    }, [getGithubProfile, userQuery]);

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
            <ButtonContainer 
                onClick={handleRandomZupper}
                style={{backgroundColor: bgColor}}
            >
                <span>❓</span>
            </ButtonContainer>
        </Container>
    )
});