export default function Card({ className, children }) {
  return (
    <>
      <div className={`card bg-base-100 shadow-sm ${className}`} >
        {children}
      </div>
    </>
  );
}