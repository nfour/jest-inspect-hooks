module.exports = () => {
  if (process._debugEnd) {
    // Stopping here so that you can inspect variables your debug console before it exits
    debugger;
  }
}
