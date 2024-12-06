"use client";

import { Card } from '@/components/ui/card';
import PropTypes from 'prop-types';

export function SkillCard({ icon: Icon, title, description }) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur">
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};