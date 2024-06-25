import './SuccessInfoHint.scss'
import CloseIcon from '@mui/icons-material/Close';

export function SuccessInfoHint(props) {
    return (
        <div className={"success-hint-background"}>
            <div className={"success-content"}>
                <div className={"success-text"}>{props.value}
                </div>
                <div className={"close-container"} onClick={props.clickOnCloseIcon}>
                    <CloseIcon className={"close-icon"}>
                    </CloseIcon></div>
            </div>
        </div>
    )
}