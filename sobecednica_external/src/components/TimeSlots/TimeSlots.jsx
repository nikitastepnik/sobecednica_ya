import React from 'react'

import './TimeSlots.css'

function convertTimeSlots(user_time_slots) {
    const daysOfWeekLocalizationMap = {
        'monday': 'Понедельник',
        'tuesday': 'Вторник',
        'wednesday': 'Среда',
        'thursday': 'Четверг',
        'friday': 'Пятница'
    }
    let result = [];
    for (const day of Object.keys(daysOfWeekLocalizationMap)) {
        if (user_time_slots[day]) {
            result.push(
                <div className={"time-slots-day-container"}>
                    {daysOfWeekLocalizationMap[day]}
                    {user_time_slots[day].map(slot => <div className={"time-slot-day-container"}>{slot}</div>)}
                </div>
            );
        } else {
            result.push(
                <div className={"time-slots-day-container"}>
                    {daysOfWeekLocalizationMap[day]}
                </div>
            );
        }
    }
    return (
        <div className={"time-slots-container-inner"}>
            {result}
        </div>
    );
}


function TimeSlots({user_time_slots}) {
    const timeSlots = convertTimeSlots(user_time_slots);
    return (
        <div className={"time-slots-container-outer"}>
            <div className={"time-slots-header"}>
                Выбранные слоты для проведения собеседований
            </div>
            {timeSlots}
            <div className={"change-time-slots-hint"}>
                Для изменения расписания слотов, заполните
                <a className={"link-to-change-slots-form"}
                   href="https://forms.yandex.ru/cloud/66539c49c417f3c643c92665/?page=1"> форму</a>
            </div>
        </div>

    );
}


export default TimeSlots;