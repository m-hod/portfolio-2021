export type Project = {
  id: number;
  title: string;
  type: 'web' | 'mobile';
  icon: string;
  url: string;
  images: {
    web?: DevicefulImage;
    mobile?: DevicefulImage;
  };
};

export type DevicefulImage = {
  url: string;
  height: number;
};

export type DevicefulType = 'laptop' | 'phone';
