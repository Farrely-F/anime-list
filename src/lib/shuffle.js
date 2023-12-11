export const getRandomSlice = (array, sliceLength) => {
  const totalDataLength = array.length;
  const startIndex = Math.floor(
    Math.random() * (totalDataLength - sliceLength)
  );
  const endIndex = startIndex + sliceLength;
  return array.slice(startIndex, endIndex);
};
