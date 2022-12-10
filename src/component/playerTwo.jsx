import ActionBtnTwo from "./actionBtnTwo";

const PlayerTwo = ({HandleRockTwo, HandlePaperTwo, HandleScissorTwo}) => {

    return(
    <div id='action-cont'>
        <ActionBtnTwo
        onClickTwo = {HandleRockTwo}
        actionTwo = '✊'
        />

        <ActionBtnTwo
        onClickTwo = {HandlePaperTwo}
        actionTwo = '🖐️'
        />

        <ActionBtnTwo
        onClickTwo = {HandleScissorTwo}
        actionTwo = '✌️'
        />
    </div>
    )
}

export default PlayerTwo;