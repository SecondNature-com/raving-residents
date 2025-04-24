import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Breadcrumb } from '../../common/breadcrumb';
import Image from 'next/image';
import { getBrandingFromCookie } from '@/lib/session';
import { ThemeProvider } from '@/components/theme-provider';

/**
 * DeclineInsuranceView Component
 *
 * Displays the view for declining standard insurance policy and bringing your own.
 */
export async function DeclineInsuranceView() {
	const branding = await getBrandingFromCookie();

	return (
		<ThemeProvider
			primaryBrandingColor={branding?.primaryBrandColor}
			secondaryBrandingColor={branding?.secondaryBrandColor}
		>
			<div className="flex flex-col items-center min-h-screen bg-[#F7F7FA]">
				{/* Header */}
				<header className="border-b border-primary py-4 px-6 w-full">
					<div className="max-w-7xl mx-auto flex items-center">
						<Link href="/" className="flex items-center text mr-4">
							<span className="text-lg">‹</span>
							<span className="ml-1">Back</span>
						</Link>
						<Image
							src={branding?.logoSrc || ''}
							alt={branding?.name || ''}
							width={180}
							height={40}
							className="h-10 w-auto"
							priority
						/>
					</div>
				</header>

				{/* Main Content */}
				<main className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
					{/* Breadcrumb */}
					<div className="w-full max-w-7xl mb-6">
						<Breadcrumb
							items={[
								{ label: 'Resident Services', href: '/' },
								{
									label: 'Insurance',
									href: '/services/insurance',
								},
								{
									label: 'Decline Standard Policy',
									href: '/services/insurance/decline',
									current: true,
								},
							]}
						/>
					</div>

					{/* Decline Insurance Card */}
					<div className="w-full max-w-[327px] md:max-w-[480px] lg:max-w-[520px] p-8 relative bg-white shadow-[0px_30px_40px_rgba(9,9,73,0.08)] overflow-hidden rounded-[24px] border border-[#E8E8F1] flex flex-col gap-8 transition-all duration-300">
						{/* Close Button */}
						<Link
							href="/services/insurance"
							className="absolute right-5 top-5"
						>
							<X className="w-6 h-6 text-[#090949] hover:text-[#396E1F] transition-colors" />
						</Link>

						{/* Content Section */}
						<div className="flex flex-col gap-4">
							<h2 className="text-[#090949] text-2xl md:text-3xl font-semibold">
								You're about to decline the standard policy
							</h2>
							<p className="text-[#5C5C75] text-base md:text-lg">
								If you decline to enroll in the standard policy,
								you'll need to buy your own that meets the lease
								requirements:
							</p>

							{/* Requirements List */}
							<div className="px-3 flex flex-col gap-3 md:px-5 md:gap-4">
								<div className="text-[#5C5C75] text-sm md:text-base">
									1){' '}
									<span className="font-semibold">
										$100,000
									</span>{' '}
									in property damage and liability coverage
									<br />
									2) From an{' '}
									<span className="font-semibold">
										A-rated carrier
									</span>
									<br />
									3) All adults listed as named insured or
									also have their own policies. If the home
									has an animal,{' '}
									<span className="font-semibold">
										$25k
									</span>{' '}
									bite coverage or more is required.
									<br />
									4) Add{' '}
									<span className="font-semibold">
										[PMC Name]
									</span>{' '}
									as additionally insured with the following
									address:
								</div>

								<div className="text-center text-[#5C5C75] text-sm md:text-base font-semibold">
									[PMC Name]
									<br />
									PO Box 660121,
									<br />
									Dallas, TX 75266
								</div>
							</div>

							<p className="text-[#5C5C75] text-base md:text-lg">
								A team member will review it and update your
								charges appropriately. We'll send you a reminder
								to update the policy on the portal by move-in
								date. The standard policy is $15.95/mo while the
								national average price for renters insurance is
								$18/mo.
							</p>
						</div>

						{/* Action Button */}
						<div className="flex flex-col items-end">
							<button className="w-full h-14 px-6 bg-[#396E1F] hover:bg-[#2c5518] rounded-xl flex justify-center items-center text-white text-base font-semibold transition-colors">
								Yes, I want to decline
							</button>
						</div>
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}

export default DeclineInsuranceView;
