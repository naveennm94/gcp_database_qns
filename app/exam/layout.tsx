import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GCP Database Engineer Exam | Practice Test',
  description: 'Google Cloud Professional Database Engineer Certification Practice Exam',
};

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
