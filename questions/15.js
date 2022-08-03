//15.Simple clock angle  
/*Problem
You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.
Answer
If the input is 15 then your program should return 90 because a 90-degree angle is formed by the minute hand and the 12 o'clock mark on the clock. We'll solve this challenge by first calculating what angle is created by each minute passing on a clock. Once we calculate this number, we multiply it by the input to determine the final angle.
A method to solve such problems is to consider the rate of change of the angle in degrees per minute. The hour hand of a normal 12-hour analogue clock turns 360° in 12 hours (720 minutes) or 0.5° per minute. The minute hand rotates through 360° in 60 minutes or 6° per minute. */

function simpleClockAngle(num) {

    // we got 6 because 360/60 = 6
    // 360 represents the full number of a degrees in a circle and
    // 60 is the number of minutes on a clock, so dividing these two numbers
    // gives us the number of degrees for one minute
    return 6 * num;
  
}
  
simpleClockAngle(15);
console.log(simpleClockAngle(15))

module.exports=simpleClockAngle
