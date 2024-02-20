/**
 * This program counts logs in a truck
 * By :Marshall Demars
 * Version 1.0
 * Since: 2024-02-20
 */

 import { createPrompt } from 'bun-promptx'

 const maxweight = 1100
 const weightperlog = 20

 const numlogs = createPrompt('Choose the length of the logs that you would like to move with a truck (in meters)? (0.25, 0.5 ,1):  ')

 let lengthoflogs = parseFloat(numlogs.value)
 let logamount = maxweight / (weightperlog * lengthoflogs)

 console.log(`The truck can carry ${logamount} logs if they are ${lengthoflogs}m long.`)

 console.log('\nDone')
