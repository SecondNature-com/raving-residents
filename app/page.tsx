import Image from "next/image"
import { InfoCardsCarousel } from "@/components/info-cards-carousel"
import { ResidentServices } from "@/components/resident-services"
import { getUserData } from "@/lib/data"

export default async function Dashboard() {
  // Fetch user data server-side
  const userData = await getUserData()

  const infoCards = [
    {
      id: 1,
      title: "Feel at home from day 1",
      description: "Let's get you set up before your move-in.",
      actionText: "Set up utilities",
      actionLink: "#",
      imageSrc: "/images/home-setup.svg",
      imageAlt: "Home setup illustration",
    },
    {
      id: 2,
      title: "Ready for flu season?",
      description: "We've got allergen-grade filters to help you get through the season.",
      actionText: "See filters",
      actionLink: "#",
      imageSrc: "/images/flu-season.svg",
      imageAlt: "Flu season illustration",
    },
    {
      id: 3,
      title: "You just got credit for paying your rent on time",
      description: "We report on-time rent payments every 3 months to help boost your credit.",
      actionText: "See report",
      actionLink: "#",
      imageSrc: "/images/credit-report.svg",
      imageAlt: "Credit report illustration",
    },
  ]

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
        <div className="text-center text-sm text-[#64748B] mt-12">Powered by Second Nature</div>
      </main>
    </div>
  )
}
