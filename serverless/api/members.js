export default function handler(req, res) {
  res.status(200).json({
    leader: {
      name: "최유정",
      title: "팀장",
      major: "컴퓨터공학부",
      grade: "4학년",
      children: [
        {
          name: "박광재",
          title: "리버싱 파트장",
          major: "컴퓨터공학부",
          grade: "4학년",
          children: [
            { name: "이유신", major: "컴퓨터공학부", grade: "4학년 (휴)" },
            { name: "정현서", major: "컴퓨터공학부", grade: "3학년" },
            { name: "이풍혁", major: "컴퓨터공학부", grade: "3학년" },
            { name: "최정현", major: "컴퓨터공학부", grade: "3학년" },
          ]
        },
        {
          name: "김도원",
          title: "시스템 파트장",
          major: "컴퓨터공학부",
          grade: "4학년",
          children: [
            { name: "김경진", major: "컴퓨터공학부", grade: "3학년" },
            { name: "김도은", major: "컴퓨터공학부", grade: "3학년" },
          ]
        },
        {
          name: "신종협",
          title: "웹 파트장",
          major: "컴퓨터공학부",
          grade: "3학년",
          children: [
            { name: "전은진", major: "컴퓨터공학부", grade: "3학년" },
            { name: "안지윤", major: "정보통신공학과", grade: "4학년" },
            { name: "이융현", major: "정보통신공학과", grade: "3학년" },
            { name: "이제빈", major: "컴퓨터공학부", grade: "3학년" },
            { name: "김예은", major: "컴퓨터공학부", grade: "3학년" },
            { name: "김아인", major: "컴퓨터공학부", grade: "3학년" },
            { name: "한태연", major: "정보통신공학과", grade: "3학년" },
          ]
        }
      ]
    }
  });
} 