
const ActionBtn = (props) => {
return(
    <button 
        onClick={props.onClick} 
        className='action-btn'>
        {props.action}
    </button>
)
}

export default ActionBtn;