const annualReport = {
  year: 2025,
  generatedAt: "2026-04-20 16:52",
  company: "华域协同",
  employee: {
    name: "陈予安",
    department: "平台运营中心",
    role: "产品运营",
    employeeId: "HY-20481",
    city: "上海",
  },
  summary: {
    loginCount: 428,
    activeDays: 246,
    firstUse: "2025-01-02 08:12",
    latestUse: "2025-11-27 23:48",
    earliestUse: "2025-03-03 06:58",
    peakMonth: "10 月",
    peakHour: "10:00 - 11:00",
    moduleCoverage: 11,
    reportWindow: "2025.01.01 - 2025.12.31",
    savedHours: 61,
    deptPercentile: 91,
    companyPercentile: 84,
  },
  monthlyLogins: [22, 28, 37, 31, 35, 32, 29, 33, 48, 51, 45, 37],
  hourlyHeat: [
    { label: "08 时", value: 39 },
    { label: "10 时", value: 72 },
    { label: "14 时", value: 58 },
    { label: "17 时", value: 46 },
  ],
  badges: ["高频协同者", "稳步推进者", "夜间守护者", "始终在线的人"],
  modules: [
    {
      key: "attendance",
      token: "勤",
      name: "员工考勤",
      hero: "231 天有效打卡",
      summary: "全年迟到 4 次、早退 2 次，最早 07:32 打卡，最晚 21:17 补签。",
      metrics: [
        ["有效打卡天数", "231 天"],
        ["迟到 / 早退", "4 / 2 次"],
        ["最早打卡", "07:32"],
        ["最晚补签", "21:17"],
      ],
      records: ["2025-03-03 07:32 完成全年最早打卡。", "2025-09 月保持 22 个工作日全勤。"],
    },
    {
      key: "file_notice",
      token: "文",
      name: "文件通知",
      hero: "阅读 96 份文件通知",
      summary: "接收 104 份通知，最近一次阅读发生在 2025-12-20 17:21。",
      metrics: [
        ["阅读数量", "96 份"],
        ["接收数量", "104 份"],
        ["阅读完成率", "92.3%"],
        ["阅读高峰月", "11 月"],
      ],
      records: ["2025-12-20 17:21 阅读《年度安全巡检制度更新》通知。", "11 月累计阅读 14 份制度类通知。"],
    },
    {
      key: "news_notice",
      token: "新",
      name: "新闻公告",
      hero: "浏览 134 条新闻公告",
      summary: "偏好阅读制度与组织公告，单篇平均停留 68 秒。",
      metrics: [
        ["阅读数量", "134 条"],
        ["平均停留", "68 秒"],
        ["偏好栏目", "制度与公告"],
        ["阅读高峰", "周三 09:00"],
      ],
      records: ["2025-07-18 阅读《年度组织架构调整公告》。", "全年阅读最多的是制度公告板块。"],
    },
    {
      key: "meeting",
      token: "会",
      name: "会议",
      hero: "参与 48 次会议",
      summary: "其中发起 9 次，累计参会 73.5 小时，最长单次会议 132 分钟。",
      metrics: [
        ["参会次数", "48 次"],
        ["发起次数", "9 次"],
        ["累计时长", "73.5 小时"],
        ["最长会议", "132 分钟"],
      ],
      records: ["2025-10-22 发起《协作平台改版评审会》。", "2025-12-28 19:30 参加年度收口会议。"],
    },
    {
      key: "internal_mail",
      token: "信",
      name: "站内信",
      hero: "发送 312 封，接收 487 封",
      summary: "已读率 97%，全年与 86 位同事产生过站内信互动。",
      metrics: [
        ["发送数量", "312 封"],
        ["接收数量", "487 封"],
        ["已读率", "97%"],
        ["互动对象", "86 人"],
      ],
      records: ["2025-11-05 17:42 发送全年第 300 封站内信。", "17:00 - 18:00 是最常用站内信时段。"],
    },
    {
      key: "oa_process",
      token: "流",
      name: "OA流程",
      hero: "发起 42 个流程，审批 188 个流程",
      summary: "流程通过率 96.4%，平均处理时长 6.4 小时。",
      metrics: [
        ["发起流程", "42 个"],
        ["审批流程", "188 个"],
        ["通过率", "96.4%"],
        ["平均处理", "6.4 小时"],
      ],
      records: ["2025-08-12 单日审批 11 个流程，为全年峰值。", "采购与权限申请是最高频的流程类型。"],
    },
    {
      key: "todo",
      token: "办",
      name: "待办",
      hero: "接收 516 条待办，完成 503 条",
      summary: "准时完成率 94.8%，逾期 13 条，多集中在 Q4 集中上线期。",
      metrics: [
        ["接收数量", "516 条"],
        ["完成数量", "503 条"],
        ["准时率", "94.8%"],
        ["逾期数量", "13 条"],
      ],
      records: ["2025-10 月完成待处理事项 61 条，为全年最高。", "Q4 集中上线阶段是最忙碌的一段时间。"],
    },
    {
      key: "message",
      token: "讯",
      name: "消息",
      hero: "接收 1,284 条消息",
      summary: "点击 1,167 条，消息点击率 90.9%，2 分钟内响应占比 73%。",
      metrics: [
        ["接收数量", "1,284 条"],
        ["点击数量", "1,167 条"],
        ["点击率", "90.9%"],
        ["2 分钟响应", "73%"],
      ],
      records: ["2025-06-21 单日接收提醒 29 条。", "工作提醒与任务通知是这一年的主要陪伴。"],
    },
    {
      key: "survey",
      token: "调",
      name: "调查问卷",
      hero: "参与 14 次问卷，发起 2 次问卷",
      summary: "全年问卷完成率 100%，发起的两次问卷均完成全员回收。",
      metrics: [
        ["参与次数", "14 次"],
        ["发起次数", "2 次"],
        ["完成率", "100%"],
        ["回收率", "96%"],
      ],
      records: ["2025-04-16 发起《年度协作体验满意度调查》。", "2025-09-09 完成流程体验回访问卷。"],
    },
    {
      key: "task",
      token: "任",
      name: "任务管理",
      hero: "创建 39 个任务，完成 121 个任务",
      summary: "其中 57 个为协作任务，准时完成率 93.2%。",
      metrics: [
        ["创建任务", "39 个"],
        ["完成任务", "121 个"],
        ["协作任务", "57 个"],
        ["准时率", "93.2%"],
      ],
      records: ["2025-09 月处理任务 19 个，为全年最高。", "P1 问题排查类任务贡献最大。"],
    },
    {
      key: "schedule",
      token: "程",
      name: "日程",
      hero: "创建 164 条日程，参与 221 条日程",
      summary: "最忙月份是 9 月，第 38 周累计 11 场安排。",
      metrics: [
        ["创建日程", "164 条"],
        ["参与日程", "221 条"],
        ["最忙月份", "9 月"],
        ["最忙周", "第 38 周 11 场"],
      ],
      records: ["2025-09-18 单日安排 4 场会议与复盘。", "全年日程高峰集中在项目发布节点。"],
    },
  ],
};

const state = {
  slideIndex: 0,
  touchStartX: 0,
};

const slides = [
  {
    title: "封面",
    render: renderCoverSlide,
  },
  {
    title: "年度总览",
    render: renderOverviewSlide,
  },
  {
    title: "活跃轨迹",
    render: renderActivitySlide,
  },
  {
    title: "协同沟通",
    render: renderCollabSlide,
  },
  {
    title: "效率产出",
    render: renderEfficiencySlide,
  },
  {
    title: "年度片段",
    render: renderModulesSlide,
  },
  {
    title: "成长荣誉",
    render: renderAchievementSlide,
  },
  {
    title: "温暖收尾",
    render: renderClosingSlide,
  },
];

const entryScreen = document.getElementById("entryScreen");
const reportScreen = document.getElementById("reportScreen");
const enterReportBtn = document.getElementById("enterReportBtn");
const backToEntryBtn = document.getElementById("backToEntryBtn");
const openShareBtn = document.getElementById("openShareBtn");
const moduleOverviewBtn = document.getElementById("moduleOverviewBtn");
const progressDots = document.getElementById("progressDots");
const progressLabel = document.getElementById("progressLabel");
const slideTitle = document.getElementById("slideTitle");
const storyCard = document.getElementById("storyCard");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const employeeName = document.getElementById("employeeName");
const entryFacts = document.getElementById("entryFacts");
const entrySummary = document.getElementById("entrySummary");
const moduleSheet = document.getElementById("moduleSheet");
const moduleSheetTitle = document.getElementById("moduleSheetTitle");
const moduleSheetBody = document.getElementById("moduleSheetBody");
const shareSheet = document.getElementById("shareSheet");
const posterPreview = document.getElementById("posterPreview");
const sheetOverlay = document.getElementById("sheetOverlay");
const toast = document.getElementById("toast");

function init() {
  renderEntry();
  renderSharePreview();
  renderProgress();
  renderSlide();
  bindEvents();
}

function renderEntry() {
  employeeName.textContent = annualReport.employee.name;

  const facts = [
    ["所属部门", annualReport.employee.department],
    ["岗位角色", annualReport.employee.role],
    ["回顾时间", annualReport.summary.reportWindow],
    ["生成时间", annualReport.generatedAt],
  ];

  entryFacts.innerHTML = facts
    .map(
      ([label, value]) => `
        <div class="fact-item">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `
    )
    .join("");

  entrySummary.innerHTML = `
    <strong>${annualReport.year} 年，这里收下了你一整年的认真与奔赴。</strong>
    <div class="summary-grid">
      <div class="summary-block">
        <span>相伴次数</span>
        <strong>${annualReport.summary.loginCount}</strong>
      </div>
      <div class="summary-block">
        <span>投入天数</span>
        <strong>${annualReport.summary.activeDays}</strong>
      </div>
      <div class="summary-block">
        <span>最晚仍在忙碌</span>
        <strong>23:48</strong>
      </div>
    </div>
  `;
}

function renderProgress() {
  progressDots.innerHTML = slides
    .map(
      (_, index) => `
        <button
          class="progress-dot ${index === state.slideIndex ? "is-active" : ""}"
          type="button"
          data-index="${index}"
          aria-label="切换到第 ${index + 1} 页"
        ></button>
      `
    )
    .join("");

  progressLabel.textContent = `${state.slideIndex + 1} / ${slides.length}`;
}

function renderSlide() {
  const currentSlide = slides[state.slideIndex];
  slideTitle.textContent = currentSlide.title;
  storyCard.innerHTML = currentSlide.render();
  prevBtn.disabled = state.slideIndex === 0;
  nextBtn.textContent = state.slideIndex === slides.length - 1 ? "重新查看" : "下一页";
  renderProgress();
}

function renderCoverSlide() {
  return `
    <section class="story-page">
      <div class="story-header">
        <div>
          <p class="eyebrow">2025 Annual Review</p>
          <h3 class="story-title">${annualReport.employee.name} 的这一年，辛苦了</h3>
          <p class="story-subtitle">
            从清晨到深夜，从日常推进到关键节点，这份回顾记录了你在 ${annualReport.summary.reportWindow} 里的每一次投入。
          </p>
        </div>
        <span class="status-pill">谢谢你</span>
      </div>

      <div class="hero-stat">
        <span>这一年的注脚</span>
        <strong>${annualReport.summary.loginCount}</strong>
        <p>次相伴，${annualReport.summary.activeDays} 天投入在线。你把许多普通的工作日，过成了值得被看见的一年。</p>
      </div>

      <div class="tag-row">
        <span class="metric-chip">员工 ID ${annualReport.employee.employeeId}</span>
        <span class="metric-chip">${annualReport.employee.department}</span>
        <span class="metric-chip">${annualReport.employee.city}</span>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <span>这一年最早开始的一天</span>
          <strong>${annualReport.summary.earliestUse}</strong>
          <em>那是一个很早出发的清晨，也拉开了忙碌一年的序幕。</em>
        </div>
        <div class="timeline-item">
          <span>这一年最晚结束的一天</span>
          <strong>${annualReport.summary.latestUse}</strong>
          <em>23:48，你仍在把手头的事认真收好。</em>
        </div>
      </div>
    </section>
  `;
}

function renderOverviewSlide() {
  const maxLogin = Math.max(...annualReport.monthlyLogins);
  const bars = annualReport.monthlyLogins
    .map(
      (value, index) => `
        <div class="bar-item">
          <div class="bar" style="height:${Math.round((value / maxLogin) * 108) + 20}px"></div>
          <label>${index + 1} 月</label>
        </div>
      `
    )
    .join("");

  return `
    <section class="story-page">
      <div>
        <p class="eyebrow">Annual Snapshot</p>
        <h3 class="story-title">这一年，你的投入稳定而踏实</h3>
      </div>

      <div class="stats-grid">
        <div class="metric-card">
          <span>相伴次数</span>
          <strong>${annualReport.summary.loginCount}</strong>
          <em>月均 35.7 次，10 月是你最忙碌也最专注的时段。</em>
        </div>
        <div class="metric-card">
          <span>投入天数</span>
          <strong>${annualReport.summary.activeDays}</strong>
          <em>许多工作日里，你都在稳定回应每一件需要被推进的事。</em>
        </div>
        <div class="metric-card">
          <span>最忙的时候</span>
          <strong>${annualReport.summary.peakMonth}</strong>
          <em>也是事情最密集、最需要耐心的一段时间。</em>
        </div>
        <div class="metric-card">
          <span>最专注的时段</span>
          <strong>${annualReport.summary.peakHour}</strong>
          <em>很多关键推进，都是在这个时间段悄悄完成的。</em>
        </div>
      </div>

      <div class="chart-panel">
        <p class="panel-title">2025 年月度投入节奏</p>
        <div class="bar-chart">${bars}</div>
      </div>
    </section>
  `;
}

function renderActivitySlide() {
  const heatCells = annualReport.hourlyHeat
    .map(
      (item) => `
        <div class="heat-cell">
          ${item.value}
          <small>${item.label}</small>
        </div>
      `
    )
    .join("");

  const attendance = annualReport.modules.find((item) => item.key === "attendance");

  return `
    <section class="story-page">
      <div>
        <p class="eyebrow">Rhythm</p>
        <h3 class="story-title">你的这一年，常常比别人更早开始，也更晚结束</h3>
        <p class="story-subtitle">从 2025 年 3 月 3 日 06:58 的清晨，到 2025 年 11 月 27 日 23:48 的深夜，你把许多关键时刻稳稳接住了。</p>
      </div>

      <div class="dual-grid">
        <div class="highlight-card">
          <span>最晚仍在忙碌</span>
          <strong>23:48</strong>
          <em>发生在 2025-11-27，那天的工作直到深夜才真正告一段落。</em>
        </div>
        <div class="highlight-card">
          <span>最早开始的一次</span>
          <strong>06:58</strong>
          <em>发生在 2025-03-03，天刚亮，你已经在路上。</em>
        </div>
      </div>

      <div class="heat-panel">
        <p class="panel-title">你最常投入的时段</p>
        <div class="heat-grid">${heatCells}</div>
      </div>

      <div class="mini-card">
        <span>${attendance.name}</span>
        <strong>${attendance.hero}</strong>
        <em>${attendance.summary}</em>
      </div>
    </section>
  `;
}

function renderCollabSlide() {
  const internalMail = annualReport.modules.find((item) => item.key === "internal_mail");
  const message = annualReport.modules.find((item) => item.key === "message");
  const fileNotice = annualReport.modules.find((item) => item.key === "file_notice");
  const news = annualReport.modules.find((item) => item.key === "news_notice");
  const survey = annualReport.modules.find((item) => item.key === "survey");

  return `
    <section class="story-page">
      <div>
        <p class="eyebrow">Collaboration</p>
        <h3 class="story-title">这一年，你连接了很多人，也回应了很多期待</h3>
        <p class="story-subtitle">312 次主动发出，487 次被看见和被需要。许多事情，都是在你的回应里慢慢推进的。</p>
      </div>

      <div class="paired-grid">
        <div class="mini-card">
          <span>${internalMail.name}</span>
          <strong>${internalMail.hero}</strong>
          <em>${internalMail.summary}</em>
        </div>
        <div class="mini-card">
          <span>${message.name}</span>
          <strong>${message.hero}</strong>
          <em>${message.summary}</em>
        </div>
      </div>

      <div class="paired-grid">
        <div class="mini-card">
          <span>${fileNotice.name}</span>
          <strong>${fileNotice.hero}</strong>
          <em>${fileNotice.summary}</em>
        </div>
        <div class="mini-card">
          <span>${news.name}</span>
          <strong>${news.hero}</strong>
          <em>${news.summary}</em>
        </div>
      </div>

      <div class="action-card">
        <span>${survey.name}</span>
        <strong>${survey.hero}</strong>
        <em>${survey.summary}</em>
      </div>
    </section>
  `;
}

function renderEfficiencySlide() {
  const meeting = annualReport.modules.find((item) => item.key === "meeting");
  const oa = annualReport.modules.find((item) => item.key === "oa_process");
  const todo = annualReport.modules.find((item) => item.key === "todo");
  const task = annualReport.modules.find((item) => item.key === "task");
  const schedule = annualReport.modules.find((item) => item.key === "schedule");

  return `
    <section class="story-page">
      <div>
        <p class="eyebrow">Efficiency</p>
        <h3 class="story-title">这一年，你把许多复杂的事，慢慢做成了</h3>
      </div>

      <div class="hero-stat">
        <span>被节省下来的时间</span>
        <strong>${annualReport.summary.savedHours} h</strong>
        <p>回头看，这一年因为你的稳定推进，至少为团队多争取了 ${annualReport.summary.savedHours} 小时的从容。</p>
      </div>

      <div class="stats-grid">
        <div class="mini-card">
          <span>${oa.name}</span>
          <strong>${oa.hero}</strong>
          <em>${oa.summary}</em>
        </div>
        <div class="mini-card">
          <span>${todo.name}</span>
          <strong>${todo.hero}</strong>
          <em>${todo.summary}</em>
        </div>
        <div class="mini-card">
          <span>${task.name}</span>
          <strong>${task.hero}</strong>
          <em>${task.summary}</em>
        </div>
        <div class="mini-card">
          <span>${meeting.name}</span>
          <strong>${meeting.hero}</strong>
          <em>${meeting.summary}</em>
        </div>
      </div>

      <div class="action-card">
        <span>${schedule.name}</span>
        <strong>${schedule.hero}</strong>
        <em>${schedule.summary}</em>
      </div>
    </section>
  `;
}

function renderModulesSlide() {
  return `
    <section class="story-page">
      <div>
        <p class="eyebrow">Moments</p>
        <h3 class="story-title">这一年里的不同片段，都值得被好好记住</h3>
        <p class="story-subtitle">点开任意卡片，可以看到这一类日常里你留下的年度痕迹。</p>
      </div>

      <div class="coverage-banner">
        <span>年度回顾已整理完成</span>
        <strong>${annualReport.summary.moduleCoverage} 段记忆</strong>
        <p>从日常打卡到沟通协作，从会议安排到事项推进，这一年的点滴都被认真收纳了起来。</p>
      </div>

      <div class="module-grid">
        ${annualReport.modules
          .map(
            (module) => `
              <button class="module-button" type="button" data-module-key="${module.key}">
                <span class="token">${module.token}</span>
                <strong>${module.name}</strong>
                <span>${module.hero}</span>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAchievementSlide() {
  const badgeMarkup = annualReport.badges
    .map((badge) => `<span class="insight-badge">${badge}</span>`)
    .join("");

  return `
    <section class="story-page">
      <div>
        <p class="eyebrow">Achievement</p>
        <h3 class="story-title">如果要为这一年写下几个关键词，它们大概会是这样</h3>
      </div>

      <div class="ranking-panel">
        <span>这一年的状态</span>
        <div class="ranking-score">
          <div class="tiny-stat">
            <span>部门同频度</span>
            <strong>${annualReport.summary.deptPercentile}%</strong>
          </div>
          <div class="tiny-stat">
            <span>全员同频度</span>
            <strong>${annualReport.summary.companyPercentile}%</strong>
          </div>
        </div>
        <p>你在团队中的持续投入和稳定回应，让这一年的节奏始终在线，也让很多事情更顺畅地发生。</p>
      </div>

      <div class="badge-panel">
        <span>送给你的关键词</span>
        <div class="badge-row">${badgeMarkup}</div>
        <p>这些词语并不只是标签，它们更像同事们在这一年里，对你默默形成的印象。</p>
      </div>

      <div class="timeline-list">
        <div class="timeline-item">
          <span>最长连续投入</span>
          <strong>27 天</strong>
          <em>发生在 2025 年 9 月至 10 月，那是一段节奏很快却也很值得的时间。</em>
        </div>
        <div class="timeline-item">
          <span>最被需要的月份</span>
          <strong>${annualReport.summary.peakMonth}</strong>
          <em>很多事情在那个月一起涌来，而你都一一接住了。</em>
        </div>
      </div>
    </section>
  `;
}

function renderClosingSlide() {
  return `
    <section class="story-page">
      <div>
        <p class="eyebrow">Share</p>
        <h3 class="story-title">这一年，你的每一份认真都值得被温柔记住</h3>
        <p class="story-subtitle">愿这份回顾，不只是数字的排列，也是一句迟到但真诚的感谢。</p>
      </div>

      <div class="share-banner">
        <span>送给这一年的一句话</span>
        <strong>428 次相伴，312 次主动发出，516 次认真回应。</strong>
        <p>如果愿意，这份回顾也可以分享给同事或留给自己，作为 2025 年最温柔的一次回望。</p>
      </div>

      <div class="quick-facts">
        <span class="rank-chip">最晚仍在忙碌 23:48</span>
        <span class="rank-chip">团队同频度 91%</span>
        <span class="rank-chip">认真回应 188 次</span>
      </div>

      <div class="action-card">
        <h4>这一页的意义</h4>
        <span>它不只是回顾，更是一种被看见。</span>
        <strong>谢谢你，让这一年有了很多被完成的瞬间</strong>
        <em>后续也可以继续接入真实数据，让每位同事都拥有属于自己的年度回望。</em>
      </div>
    </section>
  `;
}

function renderSharePreview() {
  posterPreview.innerHTML = `
    <p class="eyebrow">Poster Preview</p>
    <h4>${annualReport.year} 年度回顾海报</h4>
    <p>${annualReport.employee.name} · ${annualReport.employee.department}<br />${annualReport.summary.reportWindow}</p>
    <div class="poster-highlights">
      <div class="tiny-stat">
        <span>相伴</span>
        <strong>${annualReport.summary.loginCount} 次</strong>
      </div>
      <div class="tiny-stat">
        <span>主动发出</span>
        <strong>312 / 487</strong>
      </div>
      <div class="tiny-stat">
        <span>认真回应</span>
        <strong>503 条</strong>
      </div>
      <div class="tiny-stat">
        <span>持续推进</span>
        <strong>188 个</strong>
      </div>
    </div>
  `;
}

function bindEvents() {
  enterReportBtn.addEventListener("click", () => {
    entryScreen.classList.add("hidden");
    reportScreen.classList.remove("hidden");
  });

  backToEntryBtn.addEventListener("click", () => {
    closeSheets();
    reportScreen.classList.add("hidden");
    entryScreen.classList.remove("hidden");
  });

  openShareBtn.addEventListener("click", () => {
    openSheet(shareSheet);
  });

  moduleOverviewBtn.addEventListener("click", () => {
    openModuleSheet();
  });

  prevBtn.addEventListener("click", () => {
    if (state.slideIndex > 0) {
      state.slideIndex -= 1;
      renderSlide();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (state.slideIndex < slides.length - 1) {
      state.slideIndex += 1;
    } else {
      state.slideIndex = 0;
    }

    renderSlide();
  });

  progressDots.addEventListener("click", (event) => {
    const button = event.target.closest(".progress-dot");

    if (!button) {
      return;
    }

    state.slideIndex = Number(button.dataset.index);
    renderSlide();
  });

  storyCard.addEventListener("click", (event) => {
    const moduleButton = event.target.closest("[data-module-key]");

    if (!moduleButton) {
      return;
    }

    openModuleSheet(moduleButton.dataset.moduleKey);
  });

  storyCard.addEventListener("touchstart", (event) => {
    state.touchStartX = event.changedTouches[0].clientX;
  });

  storyCard.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - state.touchStartX;

    if (Math.abs(deltaX) < 50) {
      return;
    }

    if (deltaX < 0 && state.slideIndex < slides.length - 1) {
      state.slideIndex += 1;
      renderSlide();
    }

    if (deltaX > 0 && state.slideIndex > 0) {
      state.slideIndex -= 1;
      renderSlide();
    }
  });

  sheetOverlay.addEventListener("click", closeSheets);

  document.querySelectorAll("[data-close-sheet]").forEach((button) => {
    button.addEventListener("click", closeSheets);
  });

  shareSheet.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-share-action]");

    if (!actionButton) {
      return;
    }

    const actionMap = {
      wechat: "已模拟分享给同事，可继续接入真实分享能力。",
      poster: "已生成回顾长图预览，可继续接入导出图片能力。",
      download: "已模拟下载 PDF，可继续接入服务端导出。",
    };

    showToast(actionMap[actionButton.dataset.shareAction]);
  });
}

function openModuleSheet(targetKey) {
  if (!targetKey) {
    moduleSheetTitle.textContent = "这一年的更多细节";
    moduleSheetBody.innerHTML = `
      <div class="sheet-section">
        <h4>这一年的不同片段</h4>
        <p>从出勤、阅读、沟通到协作、安排与推进，这一年里的每一种认真，都被整理成了可回看的片段。</p>
        <div class="chip-grid">
          ${annualReport.modules
            .map((module) => `<span class="module-token">${module.name}</span>`)
            .join("")}
        </div>
      </div>
      <div class="sheet-section">
        <h4>回顾摘要</h4>
        <div class="sheet-metrics">
          <div class="sheet-metric"><span>年度片段</span><strong>${annualReport.summary.moduleCoverage} 类</strong></div>
          <div class="sheet-metric"><span>整理状态</span><strong>已完整收录</strong></div>
          <div class="sheet-metric"><span>准备时间</span><strong>${annualReport.generatedAt}</strong></div>
        </div>
      </div>
    `;
  } else {
    const module = annualReport.modules.find((item) => item.key === targetKey);

    if (!module) {
      return;
    }

    moduleSheetTitle.textContent = module.name;
    moduleSheetBody.innerHTML = `
      <div class="sheet-section">
        <h4>${module.hero}</h4>
        <p>${module.summary}</p>
      </div>
      <div class="sheet-section">
        <h4>年度指标</h4>
        <div class="sheet-metrics">
          ${module.metrics
            .map(
              ([label, value]) => `
                <div class="sheet-metric">
                  <span>${label}</span>
                  <strong>${value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="sheet-section">
        <h4>真实记录示例</h4>
        <ul class="sheet-list">
          ${module.records.map((record) => `<li>${record}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  openSheet(moduleSheet);
}

function openSheet(target) {
  closeSheets();
  sheetOverlay.classList.remove("hidden");
  target.classList.remove("hidden");
  target.setAttribute("aria-hidden", "false");
}

function closeSheets() {
  sheetOverlay.classList.add("hidden");
  [moduleSheet, shareSheet].forEach((sheet) => {
    sheet.classList.add("hidden");
    sheet.setAttribute("aria-hidden", "true");
  });
}

let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, 2200);
}

init();
