export function parseContentRecords(sumInfoRecords) {
    if (!sumInfoRecords) {
        return []
    }
    let aggregatedPayloadRecords = []
    sumInfoRecords.forEach(function (elem) {
            aggregatedPayloadRecords.push(
                Object.assign(
                    {}, elem.data, {"record_id": elem.record_id}, {"updated_at": elem.updated_at}
                )
            )
        }
    )

    return aggregatedPayloadRecords
}