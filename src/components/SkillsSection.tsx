import { motion } from "framer-motion";
import { skills } from "../data/siteData";
import SkillCard from "./SkillCard";

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#f8fbff] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-start">
          <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em]">
            Technical Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            My Tech Stack 
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              viewport={{ once: true }}
            >
              <SkillCard {...skill} />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}