export default (str, len=16) => {
  if (str.length <= len) return str;

  let truncated = str.slice(0, len - 3);

  return truncated + "...";
}
