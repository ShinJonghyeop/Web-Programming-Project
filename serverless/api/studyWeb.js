export default function handler(req, res) {
  res.status(200).json([
    { title: "CTF", desc: "웹 해킹 CTF 기출 문제를 직접 도커 컨테이너를 통해서 실습하며, 실전 CTF 참여하여 다양한 웹 기반 해킹 기법을 이용하는 방법을 익힙니다.", img: "/study_web_ctf.png" },
    { title: "Dreamhack", desc: "Dreamhack 학습 플랫폼을 이용하여 웹 해킹의 기초를 배우고 기본 웹 구조와 여러 웹 해킹 기법을 학습합니다.", img: "/study_web_dreamhack.png", url: "https://dreamhack.io" },
    { title: "Bug Bounty", desc: "실제 서비스를 대상으로 취약점을 분석하고 리포트한 경험을 공유합니다.", img: "/study_web_bug.png", url: "https://findthegap.co.kr/" }
  ]);
} 