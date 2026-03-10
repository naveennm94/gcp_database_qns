import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'GCP Database Engineer Exam',
  description:
    'Google Cloud Professional Database Engineer Certification Practice Exam',
};

export default function ExamLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
