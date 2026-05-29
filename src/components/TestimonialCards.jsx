import React from 'react'

function TestimonialCard({testimonial}) {
  return (
      <div
    className="rounded-lg mx-4 p-4 w-80 lg:p-8 lg:w-100 shrink-0 bg-white/5 backdrop-blur-sm border border-white/20"
    style={{ transform: 'translateZ(0)' }}
  >
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold line-clamp-2">{testimonial.comments}</h2>
        <img src="/Home/Testimonials/quote.png" alt="" className="w-7 h-5" />
      </div>
      <p className="text-sm text-slate-500 line-clamp-2">{testimonial.quote}</p>
      <div className="pt-2 flex gap-2">
        <img className="size-11 rounded-full" src={testimonial.image} alt={testimonial.name} height={50} width={50} />
        <div className="flex flex-col">
          <p>{testimonial.name}</p>
          <span className="text-xs text-slate-500">{testimonial.handle}</span>
        </div>
      </div>
    </div>
  </div>

  )
}

export default TestimonialCard
