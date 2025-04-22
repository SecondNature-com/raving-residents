import Image from 'next/image';
import { InfoCardsCarousel } from '@/components/info-cards-carousel';
import { ResidentServices } from '@/components/resident-services';
import { getUserData, getInfoCards } from '@/lib/data';

interface PageProps {
	searchParams: { [key: string]: string | string[] | undefined }
}

import { Service } from '@/lib/data';

export default async function Dashboard({ searchParams }: PageProps) {
	// Fetch user data and info cards server-side
	// Get userId from query parameter or use default
	const userId = (searchParams.userId as string) || "123e4567-e89b-42d3-a456-556642440000";

	// Validate UUID format
	if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(userId)) {
		throw new Error('Invalid UUID format in URL parameter')
	}

	const [userData, infoCards] = await Promise.all([
		getUserData(userId),
		getInfoCards(),
	]);

	return (
		<div className="min-h-screen bg-white font-sans">
			{/* Header with logo */}
			<header className="border-b border-[#E5E7EB] py-4 px-6">
				<div className="max-w-7xl mx-auto">
					<Image
						src="/images/invitation-homes-logo.svg"
						alt="Invitation Homes"
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
				<h1 className="text-[32px] leading-[40px] font-bold text-[#0F172A] mb-8">
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
	);
}
