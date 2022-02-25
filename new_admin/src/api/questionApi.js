import axios from '../utils/axios';

export const questionListApi = inspectionIdx => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/admin/questions/inspections/${inspectionIdx}`)
      .then(response => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const updateQuestionsApi = questions => {
  return new Promise((resolve, reject) => {
    axios
      .put(`/api/admin/questions`, questions)
      .then(response => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
