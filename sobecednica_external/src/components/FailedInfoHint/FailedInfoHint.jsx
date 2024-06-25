import './FailedInfoHint.css'
import CloseIcon from '@mui/icons-material/Close';

export function FailedInfoHint(props) {
    return (
        <div className={"failed-hint-background"}>
            <div className={"failed-content"}>
                <div className={"failed-text"}>{props.value}
                </div>
                <div className={"close-container"} onClick={props.clickOnCloseIcon}>
                    <CloseIcon className={"close-icon"}>
                    </CloseIcon></div>
            </div>
        </div>
    )
}