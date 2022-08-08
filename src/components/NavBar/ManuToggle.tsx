import { motion } from "framer-motion";

interface MenuProps {
  toggle: () => void;
  className?: string;
  isOpen: boolean;
}

interface PathProps {
  animate?: string;
  initial?: boolean;
  variants?: any;
  transition?: { duration: number };
  d?: string;
  stroke?: string;
}

const Path = (props: PathProps) => (
  <motion.path fill="transparent" strokeLinecap="round" strokeWidth="3" {...props} />
);

const transition = { duration: 0.33 };

export function MenuToggle({ toggle, isOpen, className }: MenuProps) {
  return (
    <button className={className} onClick={toggle}>
      <svg width="36" height="36" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {
              d: "M 2 2.5 L 20 2.5",
              stroke: "hsl(0, 0%, 100%)",
            },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 100%)" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 100%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 100%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 100%)" },
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
}
