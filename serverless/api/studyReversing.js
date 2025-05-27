export default function handler(req, res) {
  res.status(200).json([
    { title: "Malware Analysis", desc: "실제 악성코드 샘플 분석 및 동적/정적 분석 실습을 통해 악성코드 분석 능력을 향상시킵니다.", img: "/study_rev_malware.png" },
    { title: "리버싱 핵심 원리", desc: "<리버싱 핵심 원리> 도서를 통해 리버싱의 기초를 배우고 스택 프레임 등을 배웁니다.", img: "/study_rev_principle.png" },
    { title: "CTF", desc: "리버싱 CTF 기출 문제를 분석하며, 실전 CTF 참여하여 다양한 프로그램을 분석하는 방법을 익힙니다.", img: "/study_rev_ctf.png" }
  ]);
} 