export default function handler(req, res) {
  res.status(200).json({
    logo: "/logo.png",
    desc: "Hacklipse는 인천대학교 전산원 소속 사이버보안연구실입니다.\nRed Team으로서 Offensive Security와 관련된 다양한 활동을 진행하고 있습니다.\n실전 해킹대회(CTF), 프로젝트, 스터디, 외부활동 등 다양한 경험을 쌓고 있습니다."
  });
} 