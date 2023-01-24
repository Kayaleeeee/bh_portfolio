enum ViewportBoundary {
  mobile = 768,
  desktop = 1024,
}

export const Device = {
  mobile: `(max-width : ${ViewportBoundary.desktop - 1}px)`,
  desktop: `(min-width : ${ViewportBoundary.desktop}px)`,
};

export const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export const getHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

export const isMoreWideWidthThanHeight = () => {
  return getWidth() > getHeight();
};
