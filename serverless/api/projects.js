export default function handler(req, res) {
  res.status(200).json([
    {
      title: "25학년도 1학기 정기 세미나",
      images: [
        { src: "/1st_Seminar.png", desc: "정기 세미나 포스터" },
        { src: "/seminar1.png", desc: "웹 시나리오 아키텍처" },
        { src: "/seminar2.png", desc: "리버싱 시나리오 아키텍처" },
        { src: "/seminar3.png", desc: "시스템 시나리오 아키텍처" }
      ],
      desc: "Hacklipse를 소개하고 활동 내용을 공유하는 세미나를 개최함\n각 파트별로 시나리오를 준비하여 학습하는 내용을 청중들에게 소개함"
    },
    {
    title: "자동 보안 취약점 분석 AI 연구 프로젝트",
      images: [
        { src: "/aiproj.png", desc: "연구과제 아키텍처" }
      ],
      desc: "2025년 인공지능 빅데이터 센터 연구과제\n보안취약점을 AI가 자동으로 분석하고 리포트하는 AI 기반 자동 취약점 탐지 프레임워크 개발"
    },
  ]);
} 