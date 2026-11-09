import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "GoDigiWeb | Turn Every Lead Into a Booked Appointment", description: "GoHighLevel CRM, lead follow-up, and AI automation systems for healthcare clinics and local service businesses.", metadataBase: new URL("https://godigiweb.com") };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }