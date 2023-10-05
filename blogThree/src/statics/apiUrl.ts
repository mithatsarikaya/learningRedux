let staticUrl = "https://jsonplaceholder.typicode.com/";

export const addDirectoryToStaticUrl = (directoryName: string): string => {
  return staticUrl.concat(directoryName);
};
