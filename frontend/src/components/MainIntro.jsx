import React from "react";
export default function MainIntro() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/main")
      .then(res => { if (!res.ok) throw new Error("서버 오류"); return res.json(); })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <section>로딩중...</section>;
  if (error) return <section>에러: {error.message}</section>;
  return (
    <section style={{ textAlign: "center", marginTop: 60 }}>
      <img src={data.logo} alt="Hacklipse Logo" style={{ width: 320, marginBottom: 24 }} />
      <p style={{ whiteSpace: 'pre-line', fontSize: "1.2rem", marginTop: 24 }}>
        {data.desc}
      </p>
    </section>
  );
} 