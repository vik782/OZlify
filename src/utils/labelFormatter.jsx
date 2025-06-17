/* Helper function to make label loook more presentable */
export default function formatLabel(key) {
  return key
    .replace(/[_:]/g, " ") // turns _ and : to space
    .replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1)); // capitalize first letter
}
