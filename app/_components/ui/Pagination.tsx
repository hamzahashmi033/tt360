"use client"
import { useState } from "react";

export default function Pagination() {

  const [page, setPage] = useState(1);
  const totalPages = 9;

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (

    <div className="flex justify-center items-center gap-3 p-6">

      <button onClick={handlePrev} disabled={page === 1}>
        <img src="/images/left.png" alt="prev" />
      </button>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={`w-[28px] h-[28px] lufga_medium flex items-center justify-center rounded-full ${n === page ? "bg-[#E1DED8]" : ""
            }`}
        >
          {n}
        </button>
      ))}

      <button onClick={handleNext} disabled={page === totalPages}>
        <img src="/images/right.png" alt="next" />
      </button>

    </div>

  )
}