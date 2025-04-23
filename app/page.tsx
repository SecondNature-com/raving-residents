import Image from 'next/image';
import { InfoCardsCarousel } from '@/components/info-cards-carousel';
import { ResidentServices } from '@/components/resident-services';
import { getUserData, getInfoCards, getBranding } from '@/lib/resident-service';
import { ThemeProvider } from '../components/theme-provider';
// Use SVGs as static images from public/icons/
const atHomeIconUrl = '/icons/at-home.svg';
const airFilterIconUrl = '/icons/air-filter.svg';
const creditBuildingIconUrl = '/icons/credit-building.svg';

import { getUserIdFromSession } from '@/lib/session';
import { UserIdHandler } from './components/user-id-handler';
import { BrandingHandler } from './components/branding-handler';

// Note: Next.js 15 bug — the error about needing to await searchParams is a false positive for server components. See https://nextjs.org/docs/messages/sync-dynamic-apis
interface PageProps {
	searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Dashboard({ searchParams }: PageProps) {
	// Await searchParams for Next.js 15 compatibility
	const params = await searchParams;
	// Get userId from query params or session
	const queryUserId = (await searchParams).userId as string | undefined;
	let userId = queryUserId || (await getUserIdFromSession());

	// Validate UUID format
	if (
		!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
			userId
		)
	) {
		throw new Error('Invalid UUID format in URL parameter');
	}

	const [userData, infoCards] = await Promise.all([
		getUserData(userId),
		getInfoCards(),
	]);

	const branding = await getBranding(userData.companyId);
	// Branding cookie will be set client-side via BrandingHandler

	return (
		<ThemeProvider
			primaryBrandingColor={branding.primaryBrandColor}
			secondaryBrandingColor={branding.secondaryBrandColor}
		>
			<div className="min-h-screen bg-white font-sans">
				{/* UserIdHandler will handle setting the cookie on the client side */}
				<UserIdHandler queryUserId={queryUserId} />
				<BrandingHandler branding={branding} />

				{/* Header with logo */}
				<header className="border-b border-primary py-4 px-6">
					<div className="max-w-7xl mx-auto">
						<Image
							src={branding.logoSrc}
							alt={branding.name}
							width={180}
							height={40}
							className="h-10 w-auto"
						/>
					</div>
				</header>

				<main className="max-w-7xl mx-auto px-6 pb-12">
					{/* Cityscape illustration */}
					<div className="mt-6 mb-8">
						<Image
							src="/images/cityscape.svg"
							alt="Cityscape illustration"
							width={1000}
							height={150}
							className="w-full h-auto"
						/>
					</div>

					{/* Welcome message */}
					<h1 className="text-[32px] leading-[40px] font-bold text mb-8">
						Welcome back,
						<br />
						{userData.firstName}!
					</h1>

					{/* Information cards carousel */}
					<div className="mb-12">
						<InfoCardsCarousel cards={infoCards} />
					</div>

					{/* Resident services section */}
					<ResidentServices services={userData.availableServices} />

					{/* Footer */}
					<div className="text-center text-sm text-[#64748B] mt-12">
						Powered by Second Nature
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}
