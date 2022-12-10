import ActionBtn from "./actionBtn";

const PlayerOne = ({HandleRock, HandlePaper, HandleScissor}) => {

    return(
    <div id='action-cont'>
        <ActionBtn
        onClick = {HandleRock}
        action = '✊'
        />

        <ActionBtn
        onClick = {HandlePaper}
        action = '🖐️'
        />

        <ActionBtn
        onClick = {HandleScissor}
        action = '✌️'
        />
    </div>
    )
}

export default PlayerOne;