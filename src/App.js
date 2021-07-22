import { useCallback, useMemo, useState } from "react";
import { GithubUser } from "./components/GithubUser";
import { Header } from "./components/Header";
import { LikeBtn } from "./components/LikeBtn";
import { LikeCounter } from "./components/LikesCounter";

import { Container } from './homeStyles';
import { CalcLikes } from "./service/CalcLikes";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [likes, setLikes] = useState(0);

  const getGithubProfile = useCallback(
    (zupper) => fetch(`https://api.github.com/users/${zupper}`)
  , []);

  const likesCounter = useMemo(() => CalcLikes(likes), [likes]);

  const theme = useMemo(() => ({ 
    color: isDark ? "#fff" : "#333",
    navbar: isDark ? "#333" : "#f7f7f7",
    backgroundColor: isDark ? "#222" : "#e5e7eb",
  }), [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <Header theme={theme.navbar} toggleTheme={toggleTheme} />
      <Container style={{backgroundColor: theme.backgroundColor }} >
        <LikeCounter color={theme.color} likes={likesCounter} />
        <LikeBtn color={theme.navbar}  totalLikes={likes} setLikes={setLikes} />
        <GithubUser bgColor={theme.navbar} textColor={theme.color} getGithubProfile={getGithubProfile} />
      </Container> 
    </>
  );
}

export default App;
