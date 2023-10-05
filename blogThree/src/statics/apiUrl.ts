let staticUrl = "https://jsonplaceholder.typicode.com/";

export const addDirectoryToStaticUrl = (directoryName: string): string => {
  return staticUrl.concat(directoryName);
};
export const addDirectoryAndStringToStaticUrl = (
  directoryName: string,
  extraString: string
): string => {
  return staticUrl.concat(directoryName).concat(`/${extraString}`);
};

export const uniqueStringByTime = () => {
  return new Date().getTime();
};
