// true => chay, còn
const MON_CHAY = true;
const CON_MON = true;

export let renderFoodList = (list) => {
  let contentHTML = "";
  list
    .reverse()
    .forEach(({ ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh }) => {
      let trString = `<tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${
                              loai == MON_CHAY
                                ? "<span class=text-success>CHAY</span>"
                                : "<span class=text-danger>MẶN</span>"
                            }</td>
                            <td>${gia}</td>
                            <td>${khuyenMai}</td>
                            <td>0</td>
                            <td>${tinhTrang == CON_MON ? "CÒN" : "HẾT"}</td>
                            <td>
                            <button class='btn-danger btn' onclick="deleteFood(${ma})">Xóa</button>
                            <button class='btn-primary btn' onclick="editFood(${ma})">Sửa</button>
                            </td>
        </tr>`;
      contentHTML += trString;
    });
  document.querySelector("#tbodyFood").innerHTML = contentHTML;
};
// export let layThongTinTuForm = () => {};
export let showDataForm = (data) => {
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh } = data;
  document.querySelector("#foodID").value = ma;
  document.querySelector("#tenMon").value = ten;
  document.querySelector("#loai").value = loai;
  document.querySelector("#giaMon").value = gia;
  document.querySelector("#khuyenMai").value = khuyenMai;
  document.querySelector("#tinhTrang").value = tinhTrang;
  document.querySelector("#hinhMon").value = hinhAnh;
  document.querySelector("#moTa").value = moTa;
};
export let onSuccess = (message) => {
  Swal.fire(message, "", "success");
};
