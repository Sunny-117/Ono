export function userInfoTpl (info) {
  return `
    <h1>姓名：<span class="__username">${ info.username || '未录入' }</span></h1>
    <h2>年龄：<span class="__age">${ info.age || '未录入' }</span></h2>
    <h3>邮箱：<span class="__email">${ info.email || '未录入' }</span></h3>
    <h4>电话：<span class="__tel">${ info.tel || '未录入' }</span></h4>
  `;
}