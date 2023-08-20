export let layThongTin = () => {
  let ma = document.querySelector("#foodID").value;
  let ten = document.querySelector("#tenMon").value;
  let loai = document.querySelector("#loai").value;
  let gia = document.querySelector("#giaMon").value;
  let khuyenMai = document.querySelector("#khuyenMai").value;
  let tinhTrang = document.querySelector("#tinhTrang").value;
  let hinhMon = document.querySelector("#hinhMon").value;
  let moTa = document.querySelector("#moTa").value;
  return {
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa,
  };
};
export let showThongTin = (data) => {
  let { id, name, type, price, discount, status, image, desc } = data;
  document.querySelector("#imgMonAn").src = image;
  document.querySelector("#spMa").innerText = id;
  document.querySelector("#spTenMon").innerText = name;
  document.querySelector("#spLoaiMon").innerText = type;
  document.querySelector("#spGia").innerText = price;
  document.querySelector("#spKM").innerText = discount;
  document.querySelector("#spGiaKM").innerHTML = data.tinhGiaKM();
  document.querySelector("#spTT").innerText = status;
  document.querySelector("#pMoTa").innerText = desc;
};
