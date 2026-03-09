import './globals.css';

export const metadata = {
  title: 'Aurelim - Digital Marketing & Video Editing',
  description: 'Professional portfolio showcasing digital marketing, video editing, and AI video generation services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}