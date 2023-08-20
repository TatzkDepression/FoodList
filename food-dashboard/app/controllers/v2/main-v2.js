import { renderFoodList, showDataForm } from "./controller-v2.js";
import foodServ from "../../services/services.js";
import { layThongTin } from "../v1/controller-v1.js";
//render food list
let fetchFoodList = () => {
  foodServ
    .getList()
    .then((res) => {
      console.log(res);
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchFoodList();
// tách services
let deleteFood = (id) => {
  foodServ
    .deleteFood(id)
    .then((res) => {
      console.log(res);
      //   alert("ok");
      onSuccess("Xóa thành công");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.deleteFood = deleteFood;

window.addFood = () => {
  let data = layThongTin();
  foodServ
    .addFood(data)
    .then((res) => {
      //   console.log(res);
      $("#exampleModal").modal("hide");
      onSuccess("Thêm thành công");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.editFood = (id) => {
  $("#exampleModal").modal("show");
  foodServ
    .getDetail(id)
    .then((res) => {
      console.log(res);
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
