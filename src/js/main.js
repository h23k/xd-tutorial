import classes from '../main.css';

export default () => {
  console.log(classes.main);

  const hbs = document.querySelectorAll('.history-back') || [];
  // 戻る
  hbs.forEach(hb => {
    hb.addEventListener('click', () => {
      window.history.back();
    });
    hb.style.cursor = 'pointer';
  });

};
