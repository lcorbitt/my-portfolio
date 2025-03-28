"use client"

import CountUp from "react-countup"

const stats = [
  {
    
    num: 7,
    text: "Years of experience"
  },
  {
    num: 10,
    text: "Projects"
  },
  {
    num: 30,
    text: "Technologies used"
  },
  {
    num: 1000,
    text: "Code commits"
  }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
              <div className="flex items-center">
                <CountUp end={item.num} duration={2} className="text-4xl xl:text-6xl font-extrabold" />
                <span className="text-4xl xl:text-6xl font-extrabold">+</span>
              </div>
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats