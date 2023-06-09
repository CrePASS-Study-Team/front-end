const pixelToRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

const colors = {
  black: '#000000',
  grey: '#999999',
  green: '#3cb46e',
  blue: '#000080',
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,

  bottomImage: `
    position : absolute;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;
