export default function Backdrop({ children, ...arqs }) {
  return (
    <div onClick={arqs.toggleShowBackdrop} id={"close"} className="backdrop">
      {children}
    </div>
  );
}
