import type { Metadata } from 'next';
import {Header,Footer,Reveal} from '@/components/site';
import './globals.css';
export const metadata:Metadata={title:{default:'Cogriss — Digital products from idea to scale',template:'%s | Cogriss'},description:'Cogriss connects product design, web and mobile development, AI, cloud and QA to build digital products from idea to scale.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#content" className="skip-link">Skip to content</a><Header/><div id="content">{children}</div><Footer/><Reveal/></body></html>}
