import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import { useEffect } from "react";

// Declare Chatbase types
declare global {
	interface Window {
		chatbase: {
			q: any[];
			(command: string, ...args: any[]): void;
		} & ((command: string, ...args: any[]) => void);
	}
}

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	// Define the route where you don't want the footer
	const hideFooterRoutes = ["/core"]; // Add more routes if needed

	// Add new Chatbase bot script
	useEffect(() => {
		(function(){
			// Only initialize if not already present
			if(!window.chatbase || typeof window.chatbase !== 'function' || !(window.chatbase as any).q) {
				type ChatbaseFn = ((...args: any[]) => void) & { q: any[] };
				const chatbaseFn: ChatbaseFn = ((...args: any[]) => {
					chatbaseFn.q.push(args);
				}) as ChatbaseFn;
				chatbaseFn.q = [];
				window.chatbase = new Proxy(chatbaseFn, {
					get(target: ChatbaseFn, prop: string) {
						if(prop === "q") return target.q;
						return (...args: any[]) => (target as any)(prop, ...args);
					}
				});
			}
			const onLoad = function() {
				const script = document.createElement("script");
				script.src = "https://www.chatbase.co/embed.min.js";
				script.id = "DZvIjl08-RemO-M_-kWxx";
				script.setAttribute("data-domain", "www.chatbase.co");
				document.body.appendChild(script);
			};
			if(document.readyState === "complete") { onLoad(); } else { window.addEventListener("load", onLoad); }
		})();
	}, []);

	return (
		<>
			<Preloader />
			<CustomCursor />
			<Navbar />
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			{/* Render footer only if the current route is not in the hideFooterRoutes array */}
			{!hideFooterRoutes.includes(router.route) && <Footer />}
		</>
	);
}