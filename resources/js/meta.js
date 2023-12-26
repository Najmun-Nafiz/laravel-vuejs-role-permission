// meta.js
export const getMeta = async () => {
    const { url } = await import.meta;
    return url;
};
  