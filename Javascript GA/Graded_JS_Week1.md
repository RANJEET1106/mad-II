# Write the definitions of the functions given below with the help of given information.
```js
/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * calculateCompoundInterest calculates and returns the compound interest
 * (floor value) for a fixed deposit. Formula used is,
 *   Compound Interest=P[(1+I/100)^N - 1]
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * extraAmountPercentage calculates and returns the extra amount percentage borrower will have to pay in case of
 * compound interest (floor value) in comparison to the simple interest for a fixed deposit.

 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - Daily interest rate.
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} percentage
*/
```

# Solution :

```js
function days(starting,ending)
{
    const startingDate=new Date(starting)
    const endingDate=new Date(ending)
    let time=endingDate.getTime()-startingDate.getTime();
    let day=Math.round(time/(1000*3600*24));
    return day;
}

function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
    let day=days(startingDate,endingDate)
    let interest=principal*dailyInterest*day/100;
    if(isNaN(interest)) return -1;
  
  
  return Math.floor(interest);
  
  }

function calculateCompoundInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {

    let day=days(startingDate,endingDate);
    let interest=principal*(Math.pow((1+dailyInterest/100),day)-1);
    if(isNaN(interest)) return -1;
    return Math.floor(interest);
  

}

function extraAmountPercentage(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {

    let si=calculateSimpleInterest(
        principal,dailyInterest,startingDate,endingDate
        )
    let ci=calculateCompoundInterest(
        principal,dailyInterest,startingDate,endingDate
    )
    let percentage=(ci-si)*100/si;
    if(percentage==0) return -1;
return Math.floor(percentage);

}
```