function solution(id_list, report, k) {
  const reportedUser = {};
  const count = {}; // 신고 메일 받을 횟수

  for (const r of report) {
    const [userId, reportedId] = r.split(' ');
    if (reportedUser[reportedId] === undefined) {
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId);
  }

  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      for (uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  return id_list.map((id) => count[id] || 0);
}
