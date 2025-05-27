import React from "react";
export default function ExternalActivity() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/external")
      .then(res => { if (!res.ok) throw new Error("서버 오류"); return res.json(); })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <section>로딩중...</section>;
  if (error) return <section>에러: {error.message}</section>;
  return (
    <section>
      <h2>대외활동</h2>
      <ul>
        {data?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
  );
} 