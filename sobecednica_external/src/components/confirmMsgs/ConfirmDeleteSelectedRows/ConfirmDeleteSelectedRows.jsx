import './ConfirmDeleteSelectedRows.scss'
import swal from "sweetalert";
import {ARE_YOU_SURE_MSG, DATA_MAY_BE_LOST_FOREVER_MSG} from "../../../constants/userMsgs/confirmDeleteMsgs";

export async function ConfirmDeleteSelectedRows(table, deleteSelectedRow) {
    await swal({
        title: ARE_YOU_SURE_MSG,
        text: DATA_MAY_BE_LOST_FOREVER_MSG,
        icon: "warning",
        dangerMode: true,
        confirmButtonAriaLabel: 'Удалить',
        buttons: ["Отмена", "Удалить"],
    })
        .then((willDelete) => {
            if (willDelete) {
                // eslint-disable-next-line
                table.getSelectedRowModel().flatRows.map((row) => {
                    deleteSelectedRow(row.original.record_id)
                });

            }
        });
}