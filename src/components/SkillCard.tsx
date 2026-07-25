import { motion, useMotionValue, useTransform } from "framer-motion";

interface Props {
  name: string;
  icon: any;
  color: string;
}

export default function SkillCard({
  name,
  icon: Icon,
  color,
}: Props) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  function mouseMove(e: any) {

    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);

    y.set(e.clientY - rect.top - rect.height / 2);

  }

  function mouseLeave() {

    x.set(0);

    y.set(0);

  }

  return (

    <motion.div

      onMouseMove={mouseMove}

      onMouseLeave={mouseLeave}

      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}

      whileHover={{
        scale: 1.06,
      }}

      className="group relative h-44 rounded-3xl"

    >

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />

      <div
        className="relative flex h-full flex-col items-center justify-center rounded-3xl border border-white/40 bg-white backdrop-blur-xl shadow-xl"
        style={{
          transform: "translateZ(60px)",
        }}
      >

        <motion.div

          whileHover={{
            y: -8,
            rotate: 8,
          }}

          transition={{
            type: "spring",
          }}

        >

          <Icon
            size={65}
            style={{
              color,
            }}
          />

        </motion.div>

        <h3 className="mt-6 text-lg font-bold">

          {name}

        </h3>

      </div>

    </motion.div>

  );
}