export type TeachingModel = {
  id: string;
  title: string;
  model: string;
  poster?: string;
  caption: string;
};

export const teachingModels: TeachingModel[] = [
  {
    id: "dfb-laser-structure",
    title: "DFB 激光器结构",
    model: "/models/dfb-laser.glb",
    poster: "/model-posters/dfb-laser.png",
    caption: "未来展示有源区、波导、分布反馈光栅和端面的位置关系。"
  },
  {
    id: "cpo-package-stack",
    title: "CPO 封装位置关系",
    model: "/models/cpo-package.glb",
    poster: "/model-posters/cpo-package.png",
    caption: "未来展示 ASIC、EIC、PIC、interposer、substrate 和 fiber array 的相对位置。"
  }
];
