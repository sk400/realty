export const getCardUrl = (url) => {
  try {
    const segments = url?.split(".");

    segments[2] += "-w480_h360";

    let first = segments[0];
    let second = segments[1];
    let third = segments[2];
    let fourth = segments[3];

    let newUrl = first + "." + second + "." + third + "." + fourth;

    return newUrl;
  } catch (error) {
    console.log(error);
  }
};
