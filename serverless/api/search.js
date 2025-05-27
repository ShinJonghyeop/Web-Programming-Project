import main from './main.js';
import members from './members.js';
import projects from './projects.js';
import history from './history.js';
import external from './external.js';
import studyWeb from './studyWeb.js';
import studyReversing from './studyReversing.js';
import studyPwnable from './studyPwnable.js';

// 각 api 핸들러에서 데이터 추출
function getAllData() {
  // main
  const mainData = { text: '동아리 소개', content: requireData(main).desc, url: '/' };
  // members
  const m = requireData(members).leader;
  const memberList = [];
  function walk(node) {
    memberList.push(`${node.title ? node.title + ' ' : ''}${node.name} (${node.major} ${node.grade})`);
    if (node.children) node.children.forEach(walk);
  }
  walk(m);
  const membersData = memberList.map(text => ({ text, content: text, url: '/members' }));
  // projects
  const projectsArr = requireData(projects);
  const projectsData = projectsArr.flatMap(p => [
    { text: p.title, content: p.title + ' ' + (p.desc || ''), url: '/projects' },
    ...(p.images?.map(img => ({ text: img.desc || '', content: img.desc || '', url: '/projects' })) || [])
  ]);
  // history
  const historyArr = requireData(history);
  const historyData = historyArr.flatMap(h => [
    { text: h.title, content: h.title, url: '/history' },
    ...(h.members ? h.members.map(mem => ({ text: mem, content: mem, url: '/history' })) : []),
  ]);
  // external
  const externalArr = requireData(external);
  const externalData = externalArr.map(text => ({ text, content: text, url: '/external' }));
  // study
  const webArr = requireData(studyWeb);
  const webData = webArr.map(item => ({ text: item.title, content: item.title + ' ' + (item.desc || ''), url: '/studies/web' }));
  const revArr = requireData(studyReversing);
  const revData = revArr.map(item => ({ text: item.title, content: item.title + ' ' + (item.desc || ''), url: '/studies/reversing' }));
  const pwnArr = requireData(studyPwnable);
  const pwnData = pwnArr.map(item => ({ text: item.title, content: item.title + ' ' + (item.desc || ''), url: '/studies/pwnable' }));
  return [mainData, ...membersData, ...projectsData, ...historyData, ...externalData, ...webData, ...revData, ...pwnData];
}

function requireData(handler) {
  let result;
  handler({ method: 'GET' }, { status: () => ({ json: v => { result = v; } }) });
  return result;
}

export default function handler(req, res) {
  const q = (req.query.q || '').trim();
  if (q.length < 2) return res.status(200).json([]);
  const all = getAllData();
  const lowerQ = q.toLowerCase();
  const results = all.filter(item => item.content && item.content.toLowerCase().includes(lowerQ));
  // 중복 url+text 제거
  const uniq = [];
  const seen = new Set();
  for (const r of results) {
    const key = r.url + '|' + r.text;
    if (!seen.has(key) && r.text) { uniq.push({ text: r.text, url: r.url }); seen.add(key); }
  }
  res.status(200).json(uniq.length ? uniq : [{ text: '검색결과가 없습니다.', url: null }]);
} 