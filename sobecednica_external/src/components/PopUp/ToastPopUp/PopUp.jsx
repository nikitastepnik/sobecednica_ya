import Swal from "sweetalert2";
import './PopUp.scss'

export function PopUpWrapper(iconType, infoMsg) {
    return Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
    }).fire({
            icon: iconType,
            titleText: infoMsg,
        }
    ).then(

    ).catch(

    )
}
