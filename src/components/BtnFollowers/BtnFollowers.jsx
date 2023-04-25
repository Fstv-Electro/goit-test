import { Btn } from "./BtnFollowers.styled"

export const BtnFollowers = ({ isFollow, handleClick }) => {
    return (
        <Btn
            type="button"
            onClick={handleClick}
            style={{ backgroundColor: isFollow ? "#5CD3A8" : "#EBD8FF" }}
        >
            {isFollow ? 'following' : 'follow'}
        </Btn>
    );
};