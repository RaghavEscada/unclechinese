import React from 'react';
import Timeline from '../../components/Timeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journey Timeline - NUKE',
  description: 'Explore your journey to success through our comprehensive timeline of phases and milestones.',
};

export default function TimelinePage() {
  return <Timeline />;
} 