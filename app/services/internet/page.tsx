'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeProvider } from '../../../components/theme-provider';
import { getBrandingFromCookieClient } from '@/lib/branding-cookie-client';
import type { Branding } from '@/lib/second-nature-types';

export default function InternetService() {
	const [branding, setBranding] = useState<Branding | null>(null);
	const [hasModem, setHasModem] = useState<boolean | null>(null);

	// Get branding from cookie on client
	useEffect(() => {
		setBranding(getBrandingFromCookieClient());
	}, []);

	if (!branding) {
		return <div>Branding info unavailable</div>;
	}

	return (
		<ThemeProvider
			primaryBrandingColor={branding.primaryBrandColor}
			secondaryBrandingColor={branding.secondaryBrandColor}
		>
			<div className="min-h-screen bg-white font-sans">
				{/* Header with logo and back button */}
				<header className="border-b border-primary py-4 px-6">
					<div className="max-w-7xl mx-auto flex items-center">
						<Link href="/" className="flex items-center text mr-4">
							<span className="text-lg">‹</span>
							<span className="ml-1">Back</span>
						</Link>
						<Image
							src={branding.logoSrc}
							alt={branding.name}
							width={180}
							height={40}
							className="h-10 w-auto"
						/>
					</div>
				</header>

				<main className="max-w-xl mx-auto px-6 py-8">
					<div className="flex flex-col items-center mb-6">
						{/* Service icon */}
						<div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mb-2">
							<div className="relative w-8 h-8">
								<Image
									src="/images/internet-icon.svg"
									alt="Internet"
									fill
									className="object-contain"
								/>
							</div>
						</div>
					</div>

					{/* Service label */}
					<span className="text-primary text-sm font-medium tracking-wider uppercase">
						Internet
					</span>

					{/* Service title */}
					<h1 className="service-title mb-4">
						Stay connected from day one
					</h1>

					{/* Service description */}
					<p className="service-description mb-8">
						Set up your internet today to avoid any interruptions
						once you move in.
					</p>

					{/* Question section */}
					<div className="space-y-4 w-full">
						<h2 className="text text-xl font-semibold">
							Did your home come equipped with a modem or router?
						</h2>

						<div className="space-y-3">
							<button
								onClick={() => setHasModem(true)}
								className={`w-full p-4 rounded-lg border text-left transition-colors ${
									hasModem === true
										? 'border-[#22C55E] bg-[#F0FDF4]'
										: 'border-[#E2E8F0] hover:bg-[#F8FAFC]'
								}`}
							>
								Yes
							</button>
							<button
								onClick={() => setHasModem(false)}
								className={`w-full p-4 rounded-lg border text-left transition-colors ${
									hasModem === false
										? 'border-[#22C55E] bg-[#F0FDF4]'
										: 'border-[#E2E8F0] hover:bg-[#F8FAFC]'
								}`}
							>
								No
							</button>
						</div>
					</div>
				</main>

				{/* Footer */}
				<footer className="fixed bottom-0 left-0 right-0 border-t border-primary bg-white py-4 px-6">
					<div className="max-w-xl mx-auto text-center text-sm text-[#64748B]">
						Powered by Second Nature
					</div>
				</footer>
			</div>
		</ThemeProvider>
	);
}
