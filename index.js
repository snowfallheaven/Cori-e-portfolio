//
//template_cjbh0v4
//BY49gfgBv2-n9-DfZ public ID
//service_pykyn99
//* <script type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@5/dist/email.min.js">
// </script>
// <script type="text/javascript">
//    (function(){
//       emailjs.init({
//         publicKey: "BY49gfgBv2-n9-DfZ",
//       });
//    })();
// </script> */

function contact(event) {
  event.preventDefault();
//   emailjs
//     .sendForm(
//       'service_pykyn99',
//       'template_cjbh0v4',
//       event.target,
//       'BY49gfgBv2-n9-DfZ'
//     ).then(() => {
//       console.log('this worked1')
//     })
// }
const loading = document.querySelector('modal__overlay--loading')
const success = document.querySelector('modal__overlay--success')
loading.classList += " modal__overlay--visible"
setTimeout(() => {
  loading.classList.remove += ("modal__overlay--visible")
  success.classList += " modal__overlay--visible"
  console.log('it worked1')
}, 1000)
}