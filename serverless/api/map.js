export default function handler(req, res) {
  res.status(200).json({
    name: "Hacklipse",
    lat: 37.376527,
    lng: 126.635574,
    address: "인천광역시 연수구 아카데미로 119",
    desc: "인천대학교 제 4 호관 정보전산원 103호"
  });
} 