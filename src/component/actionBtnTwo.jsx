
const ActionBtnTwo = ({onClickTwo, actionTwo}) => {
    return(
        <button 
            onClick={onClickTwo} 
            className='action-btn'>
            {actionTwo}
        </button>
    )
    }
    
    export default ActionBtnTwo;