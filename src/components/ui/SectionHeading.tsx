'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionHeadingProps extends HTMLMotionProps<'div'> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean; // use for dark-background sections
}

export function SectionHeading({ title, subtitle, align = 'center', light = false, className, ...props }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'flex flex-col gap-3 mb-4 w-full',
        align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left',
        className
      )}
      {...props}
    >
      <h2
        className="text-3xl md:text-5xl font-extrabold tracking-tight"
        style={{ color: light ? '#ffffff' : '#304653' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg max-w-2xl font-medium"
          style={{ color: light ? 'rgba(255,255,255,0.85)' : '#304653', opacity: light ? 1 : 0.7 }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
