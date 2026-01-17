// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  
  let date;
  if(now===undefined)
    date=new Date();
  else{
    date=new Date(now)
  }
  let d=date.getDate();
  date.setDate(d+days);
  return date
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let date=new Date(timestamp)
  const res={
    year:date.getFullYear(),
    date:date.getDate(),
    month:date.getMonth(),
    hour:date.getHours(),
    minute:date.getMinutes()
  };
  console.log(res)
    return res;

}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
   let date=new Date(timestamp)

  let arr=Object.entries(options)
  for (let i in  arr)
    {
      switch(arr[i][0])
        {
          case "year":date.setFullYear(arr[i][1]);
            break;
          case "month":date.setMonth(arr[i][1]);
              break;
          case "date":date.setDate(arr[i][1])
            break;
          case "minute":date.setMinutes(arr[i][1])
            break;
          case "hour":date.setHours(arr[i][1])
            break;
        }
    }
    const res={
    year:date.getFullYear(),
    date:date.getDate(),
    month:date.getMonth(),
    hour:date.getHours(),
    minute:date.getMinutes()
  };
  return res;
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  let dA=new Date(timestampA);
  let dB=new Date(timestampB);
  let dAtime=Math.round(dA.getTime());
  let dBtime=Math.round(dB.getTime());
  console.log(dAtime,dBtime)
  console.log(typeof dAtime)
  return Math.round(((dAtime>=dBtime)?dAtime-dBtime:dBtime-dAtime)/1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  let a=new Date(appointmentTimestamp);
  let b=new Date(currentTimestamp)
let at=a.getTime();
  let ct=b.getTime();
  if(at>ct)
  {
    return true;
  }
  return false;
}
