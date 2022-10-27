function computeTotalScore (myAnswers) {
  const singleScore = 100 / myAnswers.length;
  let total = 0;

  myAnswers.map(item => {
    if (item.myAnswer === item.rightAnswer) {
      total += singleScore;
    }
  });

  return Math.floor(total);
}

function formatWrongAnswersData (data, myAnswers) {
  let wrongData = myAnswers.filter((item) => {
    if (item.myAnswer !== item.rightAnswer) {
      data.map((it) => {
        if (item.id === it.id) {
          item.imgUrl = it.url;
          item.explains = it.explains;
          item.rightItem = it['item' + item.rightAnswer];
          item.question = it.question
        }
      });
      return true;
    }
    return false;
  });

  return wrongData;
}

export { computeTotalScore, formatWrongAnswersData };