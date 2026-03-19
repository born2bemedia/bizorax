"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { useFormsPopup } from "@/features/forms";

import { fadeInUp } from "@/shared/lib/helpers/animations";
import { Button } from "@/shared/ui/kit/button/Button";

import styles from "./EmptyCta.module.scss";

export const EmptyCta = () => {
  const { openPropertyConsultation } = useFormsPopup();
  return (
    <section className={styles.empty_cta}>
      <div className={"container"}>
        <div className={styles.empty_cta__content}>
          <div className={styles.empty_cta__col}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Unsure where to start?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <b>
                Get a professional case revision at no cost. Schedule a free introductory call to discuss your property goals. We will recommend the exact expert or audit required for your situation.
              </b>
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.empty_cta__button}
            >
              <Button variant="white" type="button" onClick={openPropertyConsultation}>
                Book free call
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.empty_cta__image}
          >
            <Image
              src="/images/lease-advisory/need.png"
              alt="Lease Advisory Need"
              width={531}
              height={531}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
