import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
  FiHouse,
  FiCodesandbox,
  FiHome,
  FiHeart,
  FiGift,
  FiShoppingCart,
  FiDribbble,
  FiDroplet,
  FiSlack,
  FiBookOpen,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { IconName } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const StaggeredDropDown2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="droplunch"
      data-aos="fade-right"
    >
      <button onClick={() => setOpen((pv) => !pv)} className="btn1lunch">
        <span>Brands</span>
        <motion.span
          variants={iconVariants}
          className="hbtn1"
          style={{ position: "absolute" }}
        >
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{
          originY: "top",
          translateX: "-50%",
          display: `${open === false ? "none" : "block"}`,
        }}
        className="ullunch"
      >
        <Link>
          {" "}
          <Option setOpen={setOpen} Icon={FiDribbble} text="Sports" />{" "}
        </Link>
        <Option setOpen={setOpen} Icon={FiDroplet} text="No water" />
        <Option setOpen={setOpen} Icon={FiSlack} text="Confertabel" />
        <Option setOpen={setOpen} Icon={FiBookOpen} text="Classik" />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown2;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
