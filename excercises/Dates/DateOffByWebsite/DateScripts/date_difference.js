const HOURS_PER_DAY = 24;
const MINUTES_IN_AN_HOUR =  60;
const SECONDS_IN_A_MINUTE = 60;
const MILLISECONDS_IN_A_SECOND =1000;

const MILLISECONDS_PER_DAY = HOURS_PER_DAY * MINUTES_IN_AN_HOUR * SECONDS_IN_A_MINUTE* MILLISECONDS_IN_A_SECOND;
console.log(MILLISECONDS_PER_DAY)

function datetimeDeltaInMilliseconds(dt1, dt2){
    return Math.abs(dt1.getTime() - dt2.getTime());
}

function milliscecondsIntoDays(ms){
    return ms / MILLISECONDS_PER_DAY;
}

function getDayDiffMessageFromDayCount(dayCount){
    const rounded = dayCount.toFixed(1);
    return `${rounded} days.`
}

///TEST 
// const startDate = "July 11, 2022";
// const endDate = "November 11, 2022";
// const dt1 = new Date(startDate);
// const dt2 = new Date(endDate);
// console.log(dt1, dt2)

//FOUR Steps - detailed, easier to read, variable names (add clarity), no need to grok(understand) whole thing
function getDayDiffMessge(dt1, dt2){
    const msDelta = datetimeDeltaMilliseconds(dt1, dt2);
    const days = milliscecondsIntoDays(msDelta);
    const text = getDayDiffMessageFromDayCount(days);
    return text;
}


//all in one?
// console.log(getDayDiffMessage(milliscecondsIntoDays(datetimeDeltaMilliseconds(dt1, dt2))));