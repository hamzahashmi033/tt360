import clsx from "clsx"

export default function Button({children,className}:any){
  return(
    <button
      className={clsx(
        "px-5 py-2 rounded-md text-white text-sm font-medium",
        "bg-primaryGradient hover:opacity-90 transition",
        className
      )}
    >
      {children}
    </button>
  )
}