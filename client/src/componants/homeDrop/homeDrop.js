import {
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "./homeDrop.css"

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="custom-container">
      <motion.div
        animate={open ? "open" : "closed"}
        className="custom-relative"
      >
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="custom-button"
        >
          <span className="custom-text">Get Started</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ transformOrigin: "top", translateX: "-50%" }}
          className="custom-dropdown"
        >
          <Link to="/service-request">
            <Option setOpen={setOpen} text="Service Registration" />
          </Link>
          <Link to="/event">
            <Option setOpen={setOpen} text="Event Registration" />
          </Link>
          <Link to="/report-request">
            <Option setOpen={setOpen} text="Report" />
          </Link>
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="custom-dropdown-item"
    >
      <motion.span variants={actionIconVariants}></motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
};

const iconVariants = {
  open: { rotate: 180, duration: 0.3 },
  closed: { rotate: 0, duration: 0.3 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
      duration: 0.3,
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0, duration: 0.3 },
  closed: { scale: 0, y: -7, duration: 0.3 },
};
