const spinner= [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|  ',
  '\r//   ',
  '\r-   ',
  '\r-\\  ',
  '\r|   '
]
let timer = 0
for(let i = 0; i < spinner.length; i++) {
  timer += 50
  setTimeout(() => {
    process.stdout.write(spinner[i])
  }, timer)
}

// Does not work 
// setTimeout(() => {
//   process.stdout.write('\r|   ')(() => {
//     process.stdout.write('\r/   ')(() => {
//       process.stdout.write('\r-   ')(() => {
//         process.stdout.write('\r\\   ')(() => {
//           process.stdout.write('\r|  ')(() => {
//             process.stdout.write('\r//   ')(() => {
//               process.stdout.write('\r-   ')(() => {
//                 process.stdout.write('\r-\\  ')(() => {
//                   process.stdout.write('\r|   ')(() => {

//                   }, 1700)
//                 }, 1500)
//               }, 1300)

//             }, 1100)
//           }, 900)

//         }, 700)
//       }, 500)
//     }, 300)
//   }, 100);

// })