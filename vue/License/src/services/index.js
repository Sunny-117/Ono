import { getData } from './request';

export default async (store) => {
  
  const { subjectId, modelType } = store.state;

  const data = await getData({
    subjectId,
    modelType,
  });

  if (data.error_code) {
    store.commit("setErrorCode", data.error_code);
    return;
  }

  const questionData = data.result.slice(0, 5);

  store.commit("setData", questionData);
  store.commit("setCurrentQuestion", questionData);
}