const BASE_URL = "https://64c62b53c853c26efadb289a.mockapi.io/cyberapi";

let getList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};
let deleteFood = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};
let addFood = (food) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: food,
  });
};
let getDetail = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};
let foodServ = {
  getList,
  deleteFood,
  addFood,
  getDetail,
};

export default foodServ;
