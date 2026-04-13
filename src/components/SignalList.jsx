import { motion } from "framer-motion";

export default function SignalList({ items }) {
  return (
    <div className="signal-list">
      {items.map((item, index) => (
        <motion.div
          className="signal-item"
          key={item.label}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
        >
          <h3>{item.label}</h3>
          <p>{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
