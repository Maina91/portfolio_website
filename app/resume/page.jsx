import ResumeContent from '../components/ResumeContent';

export const metadata = {
  title: 'Maina Edwin | Full-Stack Developer',
  description: 'Full-stack developer specializing in modern web technologies',
};

export const viewport = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ]
};

export default function Resume() {
  return <ResumeContent />;
}