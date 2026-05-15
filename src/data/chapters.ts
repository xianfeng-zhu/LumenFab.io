export type Chapter = {
  id: string;
  title: string;
  purpose: string;
  path: string;
};

export const chapters: Chapter[] = [
  {
    id: "00",
    title: "00. Start Here",
    purpose: "给读者一张完整技术栈地图，说明网站如何阅读。",
    path: "/learn/what-this-site-explains/"
  },
  {
    id: "01",
    title: "01. Why Optical Interconnects",
    purpose: "解释 AI 数据中心为什么需要光互连，以及铜互连的高速边界。",
    path: "/learn/why-ai-clusters-stress-interconnects/"
  },
  {
    id: "02",
    title: "02. Optical Link Overview",
    purpose: "先看完整 Tx/Rx 链路，再拆器件和模块。",
    path: "/learn/electrical-signal-to-optical-signal/"
  },
  {
    id: "03",
    title: "03. Semiconductor And Optics Basics",
    purpose: "补足后续所需的半导体、光学和波导基础。",
    path: "/learn/valence-band-conduction-band-and-bandgap/"
  },
  {
    id: "04",
    title: "04. Laser Physics",
    purpose: "先理解激光器需要什么，再讨论材料平台分工。",
    path: "/learn/spontaneous-vs-stimulated-emission/"
  },
  {
    id: "05",
    title: "05. Material Platforms",
    purpose: "解释 InP、GaAs、Si、SOI、SiN、TFLN 各自适合什么。",
    path: "/learn/"
  },
  {
    id: "06",
    title: "06. Raw Materials To Wafers",
    purpose: "说明原料、晶体、衬底和 epi-ready wafer 的区别。",
    path: "/learn/"
  },
  {
    id: "07",
    title: "07. Epitaxy And Active Regions",
    purpose: "解释外延、有源区、QW、MQW、QD 和缺陷影响。",
    path: "/learn/"
  },
  {
    id: "08",
    title: "08. Device Layer",
    purpose: "把 VCSEL、DFB、EML、PD、Driver、TIA 放回器件层。",
    path: "/learn/"
  },
  {
    id: "09",
    title: "09. Modulation And PIC",
    purpose: "解释调制、波导、复用、PIC 和平台路线。",
    path: "/learn/"
  },
  {
    id: "10",
    title: "10. Packaging And Test",
    purpose: "把耦合、对准、热、测试、可靠性和良率作为核心难点。",
    path: "/learn/why-photonic-packaging-is-hard/"
  },
  {
    id: "11",
    title: "11. Optical Modules",
    purpose: "解释器件、PIC、电子、封装、固件如何变成可部署模块。",
    path: "/learn/"
  },
  {
    id: "12",
    title: "12. System Architectures",
    purpose: "解释 pluggable、LPO、NPO、CPO、OCS 与 AI 系统边界。",
    path: "/learn/"
  },
  {
    id: "13",
    title: "13. Industry Map",
    purpose: "最后把技术层映射到供应链、公司和产业角色。",
    path: "/learn/"
  }
];
