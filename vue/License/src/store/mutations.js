export default {
  setHeaderTitle(state, routerName) {
    switch (routerName) {
      case "index":
        state.headerTitle = "驾照题库";
        break;
      case "test":
        state.headerTitle = "开始做题";
        break;
      case "result":
        state.headerTitle = "答题结果";
        break;
      default:
        state.headerTitle = "驾照题库";
        break;
    }
  },
  setSubjectId(state, id) {
    state.subjectId = id;
  },
  setModelType(state, type) {
    state.modelType = type;
  },
  setErrorCode(state, code) {
    state.errorCode = code;
  },
  setData(state, data) {
    state.data = data;
  },
  setCurrentQuestion(state) {
    state.currentQuestion = state.data[state.questionPosition];
  },
  setQuestionPosition(state, index) {
    state.questionPosition = index;
  },
  setMyAnswers (state, payload) {
    state.myAnswers.push(payload);
  }
};