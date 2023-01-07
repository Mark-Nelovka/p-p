function toggleBackdrop(e) {
  const { id } = e.target;
  if (e.key === "Escape" || id === "close") {
    return false;
  }
}

export default toggleBackdrop;
