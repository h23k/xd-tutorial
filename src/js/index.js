import main from './main';
import index from '../scss/index.scss';

main();

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    console.log("2 sec");
    window.location.href = './home.html';
  }, 2000);
});
