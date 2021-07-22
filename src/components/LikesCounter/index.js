import { Counter } from './styles';

export const LikeCounter = ({color, likes}) => {
    return (
        <Counter color={color} >{likes}</Counter>
    )
}