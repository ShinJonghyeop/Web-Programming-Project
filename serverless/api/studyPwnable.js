export default function handler(req, res) {
  res.status(200).json([
    { title: "CTF", desc: "실제 CTF에 참여 및 기출 문제를 통해 리눅스 및 윈도우 시스템의 취약점을 분석하고 바이너리 익스플로잇 등 기술을 활용하여 학습합니다. ", img: "/study_pwn_ctf.png" },
    { title: "Dreamhack", desc: "Dreamhack 학습 플랫폼을 이용하여 시스템 해킹의 기초를 배우고 기본 운영체제와 여러 시스템 해킹 기법을 학습합니다.", img: "/study_pwn_dreamhack.png", url: "https://dreamhack.io" }
  ]);
} 