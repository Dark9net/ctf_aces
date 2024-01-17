document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector('body');
  body.style.backgroundColor = '#fff';

  const hiddenParagraph = document.createElement('p');
  hiddenParagraph.textContent = 'ACES{tHe_neXt_R00ms_aRe_MoRe_tOuGh_noW}';
  hiddenParagraph.style.color = '#fff';

  body.insertBefore(hiddenParagraph, body.firstChild);
});
