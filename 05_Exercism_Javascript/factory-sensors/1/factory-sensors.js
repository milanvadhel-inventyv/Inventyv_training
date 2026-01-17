// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  console.log(humidityPercentage)
  if(humidityPercentage>70)
  {
    throw new Error('humidity is too high');
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if(temperature===null)
  {
    throw new ArgumentError("Argument Error thrown")
  }
  else if(temperature>500)
  {
    throw new OverheatingError(temperature)
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
 try{
   actions.check();
 }
catch(e)
 {
   if(e instanceof ArgumentError)
     actions.alertDeadSensor();
   else if(e instanceof OverheatingError)
   {
         if(e.temperature>600)
          actions.shutdown();
         else{
           actions.alertOverheating()
         }

   }
   else{
         throw e

   }
 }

  
  
}
