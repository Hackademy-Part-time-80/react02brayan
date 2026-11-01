export default function Card({ className, children }) {
  return (
    <>
      <div className={`border-2 border-mist-400 flex flex-col gap-0.5 max-w-125 rounded-sm  ${className}`} >
        {children}
      </div>
    </>
  );
}