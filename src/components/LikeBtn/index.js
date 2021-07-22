import { ButtonContainer } from "./styles";

export const LikeBtn = ({color, totalLikes, setLikes}) => {
    function handleAddLike() {
        setLikes(totalLikes + 1)
    }
    return (
        <ButtonContainer 
            color={color} 
            onClick={handleAddLike}
        >
            <span>👍</span>
        </ButtonContainer>
    )
}