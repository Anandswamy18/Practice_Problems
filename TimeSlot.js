function getTimeSlots(appointments) {
    const dayStart = 0;
    const dayEnd = 24;

    appointments.sort((a, b) => a[0] - b[0]);

    const availableSlots = [];
    let currentStart = dayStart;

    for (const [start, end] of appointments) {
        if (currentStart < start) {
            availableSlots.push([currentStart, start]);
        }
        currentStart = Math.max(currentStart, end);
    }

    if (currentStart < dayEnd) {
        availableSlots.push([currentStart, dayEnd]);
    }

    return availableSlots;
}

const appointments = [[10, 12], [14, 15], [16, 20]];
const availableSlots = getTimeSlots(appointments);
console.log(availableSlots);
