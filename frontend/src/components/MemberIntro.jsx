import React from "react";

function MemberNode({ node }) {
  return (
    <div style={{ textAlign: 'center', margin: 8 }}>
      <div style={{
        display: 'inline-block',
        background: node.title ? '#2563eb' : '#f3f4f6',
        color: node.title ? '#fff' : '#222',
        borderRadius: 8,
        padding: '8px 20px',
        fontWeight: node.title ? 700 : 400,
        fontSize: node.title ? 18 : 16,
        boxShadow: node.title ? '0 2px 8px rgba(37,99,235,0.08)' : 'none',
        border: node.title ? 'none' : '1px solid #e5e7eb',
        minWidth: 180
      }}>
        {node.title && <span style={{ marginRight: 8 }}>{node.title}</span>}
        {node.name} <span style={{ color: node.title ? '#e0e7ff' : '#888', fontSize: 14 }}>({node.major} {node.grade})</span>
      </div>
    </div>
  );
}

function MemberPyramid({ leader }) {
  if (!leader) return null;
  const partLeads = leader.children || [];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
      {/* 팀장 */}
      <MemberNode node={leader} />
      {/* 세 파트장 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 48, margin: '32px 0 0 0', width: '100%' }}>
        {partLeads.map((part, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MemberNode node={part} />
            {/* 파트원 */}
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {part.children && part.children.map((member, i) => (
                <MemberNode node={member} key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MemberIntro() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/members")
      .then(res => { if (!res.ok) throw new Error("서버 오류"); return res.json(); })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <section>로딩중...</section>;
  if (error) return <section>에러: {error.message}</section>;
  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>멤버 소개</h2>
      <MemberPyramid leader={data.leader} />
    </section>
  );
} 